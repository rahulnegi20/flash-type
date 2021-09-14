import React from 'react';
import './TryAgain.css';


const TryAgain = ({words, charachters, wpm, startAgain}) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Charachters:</b> {charachters}
                </p>

                <p>
                    <b>Words:</b> {words}
                </p>

                <p>
                    <b>Speed:</b> {wpm} wpm
                </p>
            </div>

            <div>
                <button
                    onClick={()=> startAgain()}
                    className="end-buttons start-again-btn">Try again</button>
                <button 
                onClick={() => {
                    window.open("https:www.facebook.com/sharer/sharer.php?u=Woah I am speed", "facebook-share-dialog", "width=800, height=600")
                }}
                className="end-buttons share-btn">Share</button>
                 <button 
                  onClick={() => {
                    window.open("https:www.twitter.com/intent/tweet?text=woah.com", "Twitter")
                }}
                 className="end-buttons tweet-btn">tweet</button>
            </div>
            


        </div>
    );
};

export default TryAgain;