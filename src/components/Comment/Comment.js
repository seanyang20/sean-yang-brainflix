import React from "react";
import "./Comment.scss";
// from react-time-ago
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addLocale(en);

export default function Comment(props) {
  
    // console.log(props.data);

    return (
      <div>
        {props.data && props.data.map((comments, i) => {
            // console.log(comments);
            // console.log(i);
            // console.log(comments.timestamp);
          return (
            <div className="comment" key={i}>
            <figure className="comment__avatar"></figure>
            <div className="comment__content">
              <div className="comment__content-top">
                <p className="comment__name">{comments.name}</p>
                <p className="comment__date">
                    <ReactTimeAgo date={comments.timestamp} locale="en-US"/>
                </p>
              </div>
              <p className="comment__text">{comments.comment}</p>
            </div>
          </div>
          );
        })}
    
      </div>
    );
  }
  