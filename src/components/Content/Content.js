import React from "react";
import "./Content.scss";
import CommentForm from "../CommentForm/CommentForm";
import CommentSection from '../CommentSection/CommentSection';

function Content() {
    return (
        <div className="content">
            <header className="content__header"></header>
            <CommentForm/>
            <CommentSection/>
        </div>
    );
}

export default Content;