import React, { Component } from "react";
import { render } from "sass";
import "./Hero.scss";
import CurrentVideo from "../CurrentVideo.js/CurrentVideo";
import VideoDescription from "../Video Description/VideoDescription";
import mainVideoData from '../../data/video-details.json';



export default class Hero extends Component {
    state = {
        mainVideo: mainVideoData,
    }

    
    render() {return(
        <div className="hero">
            <CurrentVideo data={this.state.mainVideo}/>
            <VideoDescription data={this.state.mainVideo}/>
        </div>
    )};
    
}


