import React from "react";
import './TestLetter.css'

const Testletter = ({ individualLetterInfo }) => {
   // const status = individualLetterInfo.status 
    const {status} = individualLetterInfo;


    const statusClassName = {
        correct : "test-letter-correct",
        incorrect : "test-letter-incorrect",
        notAttempted : "test-letter-not-attempted",
    }[individualLetterInfo.status];

    return (
        <span className={`test-letter ${statusClassName}`}>
            {individualLetterInfo.testLetter}
        </span>
    )
};

export default Testletter;