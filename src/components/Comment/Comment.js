import React from "react";
import "./Comment.scss";

export default function Comment(props) {
    return (
      <div className="comment">
        <figure className="comment__avatar"></figure>
        <div className="comment__content">
          <div className="comment__content-top">
            <p className="comment__name">{props.name}</p>
            <p className="comment__date">{props.date}</p>
          </div>
          <p className="comment__text">{props.comment}</p>
        </div>
      </div>
    );
  }
  