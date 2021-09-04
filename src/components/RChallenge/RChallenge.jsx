import React from 'react';
import './RChallenge.css';
import TestLetter from '../TestLetter/TestLetter';

const TypingChallenge = ({   

    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
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
                        {/* {selectedParagraph} */}
                        {
                            testInfo.map((individualLetterInfo, index) => {
                                return <TestLetter 
                                            key={index}
                                            individualLetterInfo={individualLetterInfo} />;
                            })
                        }
                    </div>
                </div>

                <div className="textarea-right">
                    
                    <textarea 
                        onChange = {(e) => onInputChange(e.target.value)}
                        placeholder="Start typing here" className="textarea">

                    </textarea>
                </div>

            </div>

        </div>
    );
};

export default TypingChallenge;