import React from "react";
import "./CommentSection.scss";
import Comment from "../Comment/Comment";

export default function CommentSection({data, handleDelete}) {
  // console.log(props.data.comments);
  console.log(data);
  console.log(handleDelete);
  return (
    <section className="comments__container">
      {/* {props.data && props.data.comments.map((com) => (
        //   console.log(com)
        <Comment data={com} />
      ))} */}
      <Comment data={data.comments} handleDelete={handleDelete}/>
     
    </section>
  );
}
