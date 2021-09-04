import React from 'react';
import ChallengeDetailsCard from '../CD-container/CD-container';
import TypingChallenge  from '../RChallenge/RChallenge.jsx';
import './TC-container.css';

const TypingChallengeContainer = ({   
    selectedParagraph,
    words, 
    charachters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange

}) => {
        
    return (
        <div className="typing-challenge-container">
            {/* Detail Section */}
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />
                {/* Charachters Typed */}

                <ChallengeDetailsCard cardName="Charachters" cardValue={charachters} />
                {/* Speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>
            {/* real challenge */}
            <div className="typewriter-container">
                <TypingChallenge
                timeRemaining={timeRemaining} timerStarted={timerStarted}
                selectedParagraph={selectedParagraph} testInfo={testInfo} onInputChange={onInputChange} />
            </div>
        </div>
    );
};

export default TypingChallengeContainer;