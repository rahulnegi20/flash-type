import React from 'react';
import './TestContainer.css';
import TryAgain from './../TryAgain/TryAgain'; 
import TypingChallengeContainer from '../TC-container/TC-container';


const TestContainer = ({
    selectedParagraph,
    words, 
    charachters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain,
    incorrectCount

}) => {
    
    return (
        <div className="testmaincont">
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div  className="typing-challenge-container">
                        <TypingChallengeContainer 
                            timeRemaining={timeRemaining} timerStarted={timerStarted}
                            words={words} charachters={charachters} wpm={wpm}
                            selectedParagraph={selectedParagraph} testInfo={testInfo} onInputChange ={onInputChange}
                        />
                    </div>
                ) : (
                    <div className="try-again-cont">
                        <TryAgain incorrectCount={incorrectCount} words={words} charachters={charachters} wpm={wpm} startAgain={startAgain} />
                    </div>
                )
            }

        </div>
        </div>
    );
};

export default TestContainer;
