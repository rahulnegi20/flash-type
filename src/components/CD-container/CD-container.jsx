//Challenge Detail Container
import React from 'react';
import './CD-container.css';

const ChallengeDetailsCard = ({cardName, cardValue}) => {
    return(
         <div className="details-card-container">
             <div className="card-name">
                 {cardName}
             </div>
             <div className="card-value">
                 {cardValue}
             </div>
         </div>
    );
};

export default ChallengeDetailsCard;