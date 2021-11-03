import React from "react";
import "./Comment.scss";
// from react-time-ago
import ReactTimeAgo from 'react-time-ago';

export default function Comment(props) {
  
    

    return (
      <div className="comment">
        <figure className="comment__avatar"></figure>
        <div className="comment__content">
          <div className="comment__content-top">
            <p className="comment__name">{props.data.name}</p>
            <p className="comment__date">
                <ReactTimeAgo date={props.data.timestamp} locale="en-US"/>
            </p>
          </div>
          <p className="comment__text">{props.data.comment}</p>
        </div>
      </div>
    );
  }
  