import React from 'react';
import './Footer.css';
import linkedin from "./../../assets/LinkedIn-Logos/LI-In-Bug.png";
import twitter from "./../../assets/Twitter-white.png";
import gitImage from './../../assets/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png';

const Footer = () => {
    return (
        <div className="footer-container">
            
           {/* <div className="footer-text">
           <p className="footer-para">
                        rahul negi
            </p>  
               </div>   */}
                <div className="socials-link">
                    <a href="https://in.linkedin.com/in/rahul-negi-57b70a145" target="blank">
                        <img className="linkedin-img" src={linkedin} /> 
                    </a>
                    <a href="https://twitter.com/rahulne34485595" target="blank">
                        <img className="twitter-img" src={twitter} />
                    </a>
                    <a href="https://github.com/rahulnegi20/flash-type" target="blank" rel="norefferer">
                        <img className="github-img" src={gitImage} />
                    </a>
                </div>
                <img/> 
        </div>
    );
};

export default Footer;