import React from "react";
import "./VideoDescription.scss";
import ViewsIcon from "../../assets/icons/views.svg";
import LikesIcon from '../../assets/icons/likes.svg';

export default function VideoDescription(props) {
    console.log(props.data.title);
    return (
        <section className="videodescription">
        <h1 className="videodescription__heading">{props.data.title}</h1>
        <div className="videodescription__subtext">
          <div className="videodescription__by-time">
            <h2 className="videodescription__by">{props.data.channel}</h2>
            <p className="videodescription__timestamp">{props.data.date}</p>
          </div>
          <div className="videodescription__views-likes">
            <img className="videodescription__icons" src={ViewsIcon} alt="Views icon" />
            <p className="videodescription__views">{props.data.views}</p>
            <img className="videodescription__icons" src={LikesIcon} alt="Likes icon" />
            <p className="videodescription__likes">{props.data.likes}</p>
          </div>
        </div>
        <p className="videodescription__paragraph">{props.data.description}</p>
      </section>
    );
  }