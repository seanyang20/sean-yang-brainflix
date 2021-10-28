import React from "react";
import "./Content.scss";
import CommentForm from "../CommentForm/CommentForm";

function Content() {
    return (
        <div className="content">
            <header className="content__header"></header>
            <CommentForm/>
        </div>
    );
}

export default Content;