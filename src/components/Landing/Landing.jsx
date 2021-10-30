import React from 'react';
import './Landing.css';
import flash from './../../assets/hero.png';
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-right">
                <img src={flash} alt="flash-hero" className="flash-image" />
            </div>
            <div data-aos="fade-left" className="landing-left">
                <h1 className="landing-header">
                    Can you type... 
                </h1>
                <div className="typewriter-container">
                    <Typewriter
                    options={{
                        strings: ['Fast?', 'Correct?', 'Quick?'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>
                <div className="start-Now-btn-div">
                    <button className="start-now-btn"><a href="#test-paragraph-div">Start Now</a></button>
                </div>
            </div>         
        </div>
    );
};

export default Landing;