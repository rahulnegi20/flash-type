import React from 'react';
import './RChallenge.css';

const TypingChallenge = ({   
    selectedParagraph,
    timeRemaining,
    timerStarted, 
}) => {
    
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">0:
                {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
                </p>
                <p className="timer-info">
                    {!timerStarted && "Start typing test now "}
                </p>
            </div>
            <div className="textarea-container">

                <div className="textarea-left">
                    <div className="textarea test-para">
                        {selectedParagraph}
                    </div>
                </div>

                <div className="textarea-left">
                    <textarea placeholder="Start typing here" className="textarea"></textarea>
                </div>

            </div>

        </div>
    );
};

export default TypingChallenge;