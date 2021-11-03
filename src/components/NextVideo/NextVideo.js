import React from "react";
import "./NextVideo.scss";
import { Link } from "react-router-dom";

export default function NextVideo(props) {
   console.log(props);
    return (
      <Link to={`/videos/${props.id}`}>
      <div className="sidebar__video">
         
            <img className="sidebar__video-image" src={props.image} alt="NextVideo"/>
     
        <div className="video__text">
          <p className="video__title">{props.title}</p>
          <p className="video__channel">{props.channel}</p>
        </div>
      </div>
      </Link>
    );
  }