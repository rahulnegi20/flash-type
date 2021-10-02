import React from 'react';
import logo from './../../assets/logo.png';
import gitImage from './../../assets/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png';
import './Nav.css';


const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
                <a target="blank"
                    className="git-profile-link"
                    href="https://github.com/rahulnegi20/flash-type"
                    rel="norefferer">
                        <img className="git-image" src={gitImage}/>
                    </a>
            </div>
        </div>
    );
};

export default Nav;