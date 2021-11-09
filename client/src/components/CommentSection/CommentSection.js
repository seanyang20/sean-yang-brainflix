import React from "react";
import "./CommentSection.scss";
import Comment from "../Comment/Comment";

export default function CommentSection({data, handleDelete}) {
  // console.log(props.data.comments);
  // console.log(data);
  // console.log(handleDelete);
  return (
    <section className="comments__container">
    
      <Comment data={data.comments} handleDelete={handleDelete}/>
     
    </section>
  );
}
