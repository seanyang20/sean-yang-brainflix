import React from "react";
import "./CommentForm.scss";
import CommentIcon from '../../assets/icons/add_comment.svg';
import Button from '../Button/Button';

export default function CommentForm() {
    const buttonText = "COMMENT";
    const buttonType = "submit";
    const idComment = "addComment";
    return (
        
        <div className="comments__divider">
            <figure className="comments__default-avatar"></figure>
            <form name="form" className="form" id="form" method="post">
                <div className="comments__label-textarea">
                    <label for="comment">Join the Conversation</label>
                    <textarea id="comment-box" name="comment-box" placeholder="Add a new comment"></textarea>
                </div>
                <Button icon={CommentIcon} text={buttonText} type={buttonType} id={idComment}/>
            </form>
        </div>
   
    );
}

