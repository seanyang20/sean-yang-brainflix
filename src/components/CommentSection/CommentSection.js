import React, { Component } from "react";
import "./CommentSection.scss";
import Comment from '../Comment/Comment';


export default function CommentSection (props){
    console.log(props.data);
    let comments = props.data.comments;
    console.log(comments);
    
   return (
        <section className="comments__container">
            {comments.map((comment) => {
                console.log(comment);
               return (<Comment data={comment}/>)
            })}
      
        </section>
        );
      
}
