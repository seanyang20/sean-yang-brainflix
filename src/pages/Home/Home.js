import React, { Component } from "react";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentSection from "../../components/CommentSection/CommentSection";
import Sidebar from "../../components/Sidebar/Sidebar";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import VideoDescription from "../../components/Video Description/VideoDescription";
import data from "../../data/video-details.json";
import data2 from "../../data/videos.json";
import axios from "axios";

const apiURL = "https://project-2-api.herokuapp.com";
const apiKEY = "ad2060b7-137d-4ee7-af25-4099ca3a2f9f";

export default class Home extends Component {
    state = {
        videoData: [],
        shown: data[0],
        nextVideoData: data2,
        videoInfo: [],
   
      };
      
    //   handleClick = (vid) => {
    //     let video = [...this.state.videoData];

    //     let i = video.findIndex((index) => {
         
    //       if (index.id === vid.id) {
    //         return index.id;
    //       }
    //     });        
    //     this.setState({ shown: video[i] });
    //   };

  componentDidMount() {
    
    axios
    .get(`${apiURL}/videos?api_key=${apiKEY}`)
    .then((response) => {
        console.log(response);
        const apiData = response.data;
        console.log(apiData);
        this.setState({videoData: apiData});
        console.log(this.state.videoData);
        axios
        .get(`${apiURL}/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKEY}`)
        .then((response) => {
            console.log(response.data);
            const sideVids = response.data;
            this.setState({shown: sideVids});
            console.log(this.state.shown);
        })
  })
}

componentDidUpdate(prevProps) {
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
          });
    }
}




render() {
  
    return (
        <main className="Home">
            <CurrentVideo data={this.state.shown} />
            <div className="main">
              <div className="content">
                <VideoDescription data={this.state.shown} />
                <article className="comments" id="comments">
                  <h1 className="comments__header">3 comments</h1>
                  <CommentForm />
                  <CommentSection data={this.state.shown} />
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
 
