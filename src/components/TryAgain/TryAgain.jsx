import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, charachters, wpm, startAgain }) => {
  // get the site href
  const mainUrl = window.location.href;
  const sharedText = encodeURIComponent(
    `I achieved typing speed of ${wpm} words per minute. Find out your typing  speed at ${mainUrl}`
  );

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

      <div className="buttons-container">
        <button
          onClick={() => startAgain()}
          className="end-buttons start-again-btn"
        >
          Try again
        </button>
        <button
          onClick={() => {
            window.open(
              `https:www.facebook.com/sharer/sharer.php?u=${mainUrl}&quote=${sharedText}`,
              "pop",
              "width=800, height=600"
            );
          }}
          className="end-buttons share-btn"
        >
          Share on facebook
        </button>
        <button
          onClick={() => {
            window.open(
              `https:www.twitter.com/intent/tweet?text=${sharedText}`,
              "pop",
              "width=800, height=600"
            );
          }}
          className="end-buttons tweet-btn"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
