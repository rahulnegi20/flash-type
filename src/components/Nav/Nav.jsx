import React from 'react';
import logo from './../../assets/logo.png';
import './Nav.css';


const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-logo">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>
        </div>
    );
};

export default Nav;