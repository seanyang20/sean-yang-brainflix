import React from "react";
import "./CommentSection.scss";
import Comment from '../Comment/Comment';


export default function CommentSection (props){
    
    let comments = props.data.comments;
    console.log(props.data);
    
   return (
        <section className="comments__container">
            {comments.map((comment) => {
                
               return (<Comment data={comment}/>)
            })}
      
        </section>
        );
      
}
