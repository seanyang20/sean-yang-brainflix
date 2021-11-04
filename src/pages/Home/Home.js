import React, { Component } from "react";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentSection from "../../components/CommentSection/CommentSection";
import Sidebar from "../../components/Sidebar/Sidebar";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import VideoDescription from "../../components/Video Description/VideoDescription";
import axios from "axios";

const apiURL = "https://project-2-api.herokuapp.com";
const apiKEY = "ad2060b7-137d-4ee7-af25-4099ca3a2f9f";

export default class Home extends Component {
    state = {
        videoData: [],
        shown: [],

   
      };


    componentDidMount() {
        console.log("Hellow");

     axios
    .get(`${apiURL}/videos?api_key=${apiKEY}`)
    .then((response) => {
        console.log(response);
        // const apiData = response.data;
        // console.log(apiData);
        // this.setState({videoData: apiData});
        // console.log(this.state.videoData);

        axios 
        .get(`${apiURL}/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKEY}`)
        .then((response) => {
            console.log(response.data);
            this.setState({shown: response.data});                      
        })
        .catch((error) => {
            console.log(error);
        })

   
        const filteredArray = response.data.filter((apiData) => {
            return apiData.id !== this.state.shown.id;
          });
          this.setState({ videoData: filteredArray }
          );

        // axios
        // .get(`${apiURL}/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKEY}`)
        // .then((response) => {
        //     console.log(response.data);
        //     const sideVids = response.data;
        //     this.setState({shown: sideVids});
        //     console.log(this.state.shown);
        // })
        // .catch((err)=>
        // console.log(err));
  })
  .catch((err)=>
        console.log(err));

    //   axios
    //     .get(`${apiURL}/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKEY}`)
    //     .then((response) => {
    //         // console.log(response.data);
           
    //         this.setState({shown: response.data});
    //         console.log(this.state.shown);
    //     })
    //     .catch((err)=>
    //     console.log(err));
    }

componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(this.props);

    if (this.props.match.params.id !== prevProps.match.params.id) {
        axios
        .get (`${apiURL}/videos/${this.props.match.params.id}?api_key=${apiKEY}`)
        .then((newVid) => {
            console.log(newVid);
            const currVideo = newVid.data;
            console.log(currVideo);
            this.setState({shown: currVideo});
          })
        .catch((err)=>
        console.log(err));
    }
}




render() {
    console.log(this.state.shown);
    return (
        <main className="Home">
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
                  <CommentForm />
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
        </main>
    );
  }
}
 
