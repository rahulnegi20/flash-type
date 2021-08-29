import React from "react";
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import "./App.css"; 
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSec";

const TotalTime = 60;

class App extends React.Component {
    state = {
        selectedParagraph: "Hello World!",
        timerStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        charachters: 0,
        wpm: 0,
    }

    render(){
       
        return (
            
            <div className="app">
                {/* Nav Section  */}
                <Nav />
                {/* Landing Page */}
                <Landing />
                {/* Challenging Section */}
                <ChallengeSection 
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    charachters={this.state.charachters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timeStarted}
                />
                {/* Footer */}
                <Footer />
            </div>
        )
    }
};

export default App;