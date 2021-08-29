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

}) => {
    
    return (
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-container">
                        <TypingChallengeContainer 
                            timeRemaining={timeRemaining} timerStarted={timerStarted}
                            words={words} charachters={charachters} wpm={wpm}
                            selectedParagraph={selectedParagraph}
                        />
                    </div>
                ) : (
                    <div className="try-again-cont">
                        <TryAgain words={words} charachters={charachters} wpm={wpm} />
                    </div>
                )
            }

        </div>
    );
};

export default TestContainer;