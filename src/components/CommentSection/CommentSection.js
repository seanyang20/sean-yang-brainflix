import React, { Component } from "react";
import "./CommentSection.scss";
import Comment from '../Comment/Comment';


export default function CommentSection (props){
    console.log(props.data);
    let comments = props.data.comments;
    console.log(comments);
    
   return (
        <section className="commentsection">
            {comments.map((comment) => {
                console.log(comment);
                <Comment data={comment}/>
            })}
      
        </section>
        );
      
}
