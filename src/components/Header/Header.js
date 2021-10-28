import React from "react";
import "./Header.scss";
import logo from '../../assets/logo/BrainFlix-logo.svg';
import searchIcon from '../../assets/icons/search.svg';
import uploadButton from '../../assets/icons/upload.svg';



function Header() {
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
                <button className="header__button" src={uploadButton}>
                    <img className="header__button-icon" src={uploadButton}/>
                    <h2 className="header__button-text">UPLOAD</h2>
                </button>
                <div className="header__profile-avatar--tablet"></div>
            </div>
        </header>
    );
}

export default Header;