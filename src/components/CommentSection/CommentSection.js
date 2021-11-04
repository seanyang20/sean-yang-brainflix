import React from "react";
import "./CommentSection.scss";
import Comment from "../Comment/Comment";

export default function CommentSection(props) {
  console.log(props.data.comments);
  return (
    <section className="comments__container">
      {/* {props.data && props.data.comments.map((com) => (
        //   console.log(com)
        <Comment data={com} />
      ))} */}
      <Comment data={props.data.comments} />
     
    </section>
  );
}
