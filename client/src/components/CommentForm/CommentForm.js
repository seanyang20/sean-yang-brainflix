import React from "react";
import "./CommentForm.scss";
import CommentIcon from '../../assets/icons/add_comment.svg';
import Button from '../Button/Button';



export default function CommentForm ({handleSubmit, handleChange, value}) {     // implemented destructuring here 
    const buttonText = "COMMENT";
    const buttonType = "submit";
    const idComment = "addComment";
 
  
    // console.log(handleSubmit);
    // console.log(handleChange);
    // console.log(value);


    return (
        
        <div className="comments__divider">
            <figure className="comments__default-avatar"></figure>
            <form onSubmit={handleSubmit} name="commentInput" className="form" id="form" action="post">
                <div className="comments__label-textarea">
                    <label htmlFor="comment">Join the Conversation</label>
                    <textarea onChange={handleChange} 
                    value={value} type="commentpart" id="comment-box" name="commentInput" placeholder="Add a new comment"></textarea>
                </div>
                <Button icon={CommentIcon} text={buttonText} type={buttonType} id={idComment}/>
            </form>
        </div>
   
    );
}


