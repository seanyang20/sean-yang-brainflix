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

  getAPI = async () => {
  let shownVidDetails = this.props.match.params.id
  ? this.props.match.params.id
  : this.state.videoData[0].id;
  
  console.log(this.props.match);
  console.log(this.state.videoData[0].id);
  await axios
  .get(`${apiURL}/videos/${shownVidDetails}?api_key=${apiKEY}`)
  .then((response) => {
      console.log(response);
      this.setState({ shown: response.data });
  })
  .catch((err)=>
  console.log(err));

  }

async componentDidMount() {
    console.log("componentDidMount is working");
  
    await axios
    .get(`http://localhost:8080/videos`)
    .then(({data}) => {
        console.log(data);
        this.setState({ videoData: data, },
          this.getAPI);
    })
    .catch((err)=>
    console.log(err));
}

async componentDidUpdate (prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    console.log(this.props);

    if (this.props.match.params.id !== prevProps.match.params.id) {
        this.getAPI();
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

handleDelete = async (event) => {
  console.log("This is for DELETE button functionality");

  let shownVidId = this.state.shown.id;
  console.log(shownVidId);
  console.log(event.id);      // comment id
  console.log(this.state.shown.comments);

  let commentID = event.id;

  await axios
    .delete(`${apiURL}/videos/${shownVidId}/comments/${commentID}/?api_key=${apiKEY}`)
    .then((response) => {
      console.log(response);      // returns the deleted comment 

      return axios
      .get(`${apiURL}/videos/${shownVidId}?api_key=${apiKEY}`);
  
  })
  .then((response) => {
      console.log(response);
      this.setState({shown: response.data});
  })
  
    .catch((error) => {
      console.log(error);
    })

};

render() {
    console.log(this.state.shown);
    console.log(this.state.videoData);

    return (
        <main className="Home">
            {this.state.shown.length !== 0 ? <> 
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
                  handleDelete={this.handleDelete}
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

 