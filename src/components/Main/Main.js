import React from "react";
import "./Main.scss";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";

function Main() {
    return (
        <div className="main">
            <Content />
            <Sidebar />
        </div>
    );
}

export default Main;