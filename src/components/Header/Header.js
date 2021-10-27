import React from "react";
import logo from '../../assets/images/logo/BrainFlix-logo.svg';


function Header() {
    return (
        <div className="header">
        <h1>Hello</h1>
        <img className="header__logo" src={logo} alt="BrainFlix Logo"/>
        </div>
    );
}

export default Header;