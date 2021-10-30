import React from "react";
import "./CommentForm.scss";
import uploadButton from '../../assets/icons/upload.svg';

export default function CommentForm() {
    return (
   
        <div className="comments__divider">
            <figure className="comments__default-avatar"></figure>
            <form name="form" className="form" id="form" method="post">
                <div className="comments__label-textarea">
                    <label for="comment">Join the Conversation</label>
                    <textarea id="comment-box" name="comment-box" placeholder="Add a new comment"></textarea>
                </div>
                <button type="submit" className="header__button" id="addComment" value="Add Comment" src={uploadButton}>
                    <img className="header__button-icon" src={uploadButton}/>
                    <h2 className="header__button-text">COMMENT</h2>
                </button>
            </form>
        </div>
   
    );
}

