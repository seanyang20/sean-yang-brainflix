import React from "react";
import "./Header.scss";
import logo from '../../assets/logo/BrainFlix-logo.svg';
import searchIcon from '../../assets/icons/search.svg';
import uploadButton from "../../assets/icons/upload.svg";
import Button from '../Button/Button';



function Header() {
    const buttonText = "UPLOAD"

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="BrainFlix logo"/>
            <form className="header__form" action="/" method="GET">
                <button className="header__search--button" type="submit">
                    <img className="header__search--icon" src={searchIcon}/>
                </button>
                <input className="header__search" type="search" placeholder="Search"/>
                <div className="header__profile-avatar"></div>
            </form>
            <div className="header__container">
                <Button icon={uploadButton} text={buttonText}/>
                <div className="header__profile-avatar--tablet"></div>
            </div>
        </header>
    );
}

export default Header;