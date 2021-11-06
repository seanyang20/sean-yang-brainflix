import React, { Component } from "react";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentSection from "../../components/CommentSection/CommentSection";
import Sidebar from "../../components/Sidebar/Sidebar";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import VideoDescription from "../../components/Video Description/VideoDescription";
import axios from "axios";

const apiURL = "https://project-2-api.herokuapp.com";
const apiKEY = "aee5cdb1-199b-4b72-9523-9239ce527109";

export default class Home extends Component {
    state = {
        videoData: [],
        shown: [],
        commentInput: '',
   
      };

    //   isFormValid = () => {
    //     console.log("hello");
    //     // Check if the fields are all filled
    //     if (
    //       !this.state.commentpart
    //     ) {
    //       return false;
    //     }
    //     return true;
    // };

      async getAPI (){
            await axios
            .get(`${apiURL}/videos?api_key=${apiKEY}`)
            .then((response) => {
                console.log(response);
                this.setState({ videoData: response.data });

                 axios
                .get(`${apiURL}/videos/${response.data[0].id}?api_key=${apiKEY}`)
                .then((response) => {
                    console.log(response);
                    this.setState({shown: response.data});
                })

        
          })
          .catch((err)=>
                console.log(err));
      }

      
    componentDidMount() {
        console.log("componentDidMount is working");

        this.getAPI();
 



    }

async componentDidUpdate (prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    console.log(this.props);

    if (this.props.match.params.id !== prevProps.match.params.id) {
        await axios
        .get (`${apiURL}/videos/${this.props.match.params.id}?api_key=${apiKEY}`)
        .then((newVid) => {
            console.log(newVid);
            const currVideo = newVid.data;
            console.log(currVideo);
            this.setState({shown: currVideo});

            // // for added comments
            // axios
            // .post (`${apiURL}/videos/${this.props.match.params.id}?api_key=${apiKEY}`, {
            //     "name": "test",
            //     "comment": "testing"
            //   })
            // .then((response) => {
            //     console.log(response);
                                  
            // })
            // .catch((error) => {
            //     console.log(error);
            // })

          })
        .catch((err)=>
        console.log(err));
    }
}
// TO DO: create a change handler for all inputs
handleChange = (event) => {
    console.log('handleChange!');
    console.log('handleChange!', event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };



handleSubmit = async (event) => {
    event.preventDefault();
    console.log('handleSubmit');

    let shownVidId = this.state.shown.id;
    console.log(shownVidId);
     // This is where we would make an axios request
    // to our backend to add the user to our database.
   await axios
    .post(`${apiURL}/videos/${shownVidId}/comments?api_key=${apiKEY}`,{
        name: "Sean" || null,
        comment: event.target.commentInput.value || null,
    })
    .then((response) => {
        console.log(response);
        // this.getAPI();
       return axios
        .get(`${apiURL}/videos/${shownVidId}?api_key=${apiKEY}`);
        // .then()
        // console.log(this.props.history.location.pathname);
        // console.log(this.shown);
        // if (this.shown.data.id === this.props.match.params.id){
        //     this.props.history.replace(`/videos/${shownVidId}`);
        // }
    })
    .then((response) => {
        console.log(response);
        this.setState({shown: response.data});
    })
    
    .catch((error) => {
        console.log(error);
    })
    // Get Textbox to reset upon submit 
    this.setState({
        [event.target.name]: '',
      });

  };

render() {
    console.log(this.state.shown);

    return (
        <main className="Home">
            {this.state.shown !== 'undefined' || this.state.shown !== [] ? <> 
            <CurrentVideo 
            data={this.state.shown} 
            />
            <div className="main">
              <div className="content">
                <VideoDescription 
                data={this.state.shown} 
                />
                <article className="comments" id="comments">
                  <h1 className="comments__header">3 comments</h1>
                  <CommentForm 
                   handleSubmit={this.handleSubmit}
                   handleChange={this.handleChange}
                   value={this.state.commentInput}
                   />
                  <CommentSection 
                  data={this.state.shown} 
                  />
                </article>
              </div>
              <Sidebar
                data={this.state.videoData}
                shown={this.state.shown}
              />
            </div>
            </> : <p>Loading </p>}
        </main>
)};
  }

 
