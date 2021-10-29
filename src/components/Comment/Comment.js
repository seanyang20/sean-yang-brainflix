import React from "react";
import "./Comment.scss";

export default function Comment(props) {
    console.log(props.data);
    return (
      <div className="comment">
        <figure className="comment__avatar"></figure>
        <div className="comment__content">
          <div className="comment__content-top">
            <p className="comment__name">{props.data.name}</p>
            <p className="comment__date">{props.data.timestamp}</p>
          </div>
          <p className="comment__text">{props.data.comment}</p>
        </div>
      </div>
    );
  }
  