import React from 'react';
import './ChallengeSec.css';
import TestContainer from '../TestContainer/TestContainer';


const ChallengeSection = ({
    selectedParagraph,
    words, 
    charachters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange

}) => {
    
    return(
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test now! 
            </h1>
            <TestContainer 
            timeRemaining={timeRemaining} timerStarted={timerStarted} selectedParagraph={selectedParagraph}
            words={words} charachters={charachters} wpm={wpm} testInfo={testInfo} onInputChange={onInputChange} />
        </div>
    );
};

export default ChallengeSection;