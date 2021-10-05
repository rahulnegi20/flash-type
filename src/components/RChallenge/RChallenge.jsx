import React, {useState} from 'react';
import './RChallenge.css';
import TestLetter from '../TestLetter/TestLetter';

const TypingChallenge = ({   
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
}) => {  
    const [input, setInput] = useState("");
    const changeInput = (e) => {
        setInput(e.target.value)
        onInputChange(e.target.value)
    }
    // const check = this.state.timeRemaining;
    // console.log("Inside th RC" + check);

    
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:
                {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
                </p>
              

                <p className="timer-info">
                    {!timerStarted && "Start typing to start the test"}
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
                    
                    <input type="text" 
                        value = {input}
                        onChange = {(e) => changeInput(e)}
                        placeholder="Start typing here" className={`textarea ${input.trim() === "" ? "blink" : ""}`}

                    />
                </div>

            </div>

        </div>
    );
};

export default TypingChallenge;