import React from "react";
import "./NextVideo.scss";

export default function NextVideo(props) {
    console.log(props);
    return (
      <div className="sidebar__video">
          <div className="sidebar__video-container">
            <img className="sidebar__video-image" src={props.image} alt="NextVideo Image"/>
          </div>
        <div className="video__text">
          <p className="video__title">{props.title}</p>
          <p className="video__channel">{props.channel}</p>
        </div>
      </div>
    );
  }