import React from "react";
import "./VideoDescription.scss";
import ViewsIcon from "../../assets/icons/views.svg";
import LikesIcon from "../../assets/icons/likes.svg";
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addLocale(en);


export default function VideoDescription(props) {
 



  return (
    
    <section className="videodescription">
      {props.data !== 'undefined' ? <> 
      <h1 className="videodescription__heading">{props.data.title}</h1>
      <div className="videodescription__subtext">
        <div className="videodescription__by-timestamp">
          <h2 className="videodescription__by">{`By ${props.data.channel}`}</h2>
          <p className="videodescription__timestamp">
            {props.data.timestamp &&
              <ReactTimeAgo date={props.data.timestamp} locale="en-US"/>
            }
          </p>
        </div>
        <div className="videodescription__icons-container">
          <div className="videodescription__icons-views">
            <img
              className="videodescription__icons"
              src={ViewsIcon}
              alt="Views icon"
            />
            <p className="videodescription__views">{props.data.views}</p>
          </div>
          <div className="videodescription__icons-likes">
            <img
              className="videodescription__icons"
              src={LikesIcon}
              alt="Likes icon"
              onClick={() => {props.handleLike(props.data.id)}}
            />
            <p className="videodescription__likes">{props.data.likes}</p>
          </div>
        </div>
      </div>
      <p className="videodescription__paragraph">{props.data.description}</p>
      </> : <p>Loading</p>}
    </section> 
  );
  // }
}