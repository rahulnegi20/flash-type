import React from "react";
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import "./App.css"; 
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSec";

const TotalTime = 60;
const DataUrl = "http://metaphorpsum.com/paragraphs/2/4"

class App extends React.Component {
    state = {
        selectedParagraph: "Hello World!",
        timerStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        charachters: 0,
        wpm: 0,
        testInfo: []
    }

    componentDidMount() {
        // fetch(DataUrl)
        // .then(response => response.text())
        // .then(data => {
        //            //console.log("API RESPOSNE IS : ", data)
        //            this.setState({ selectedParagraph: data});
        // }); 

        const selectedParagraphArray = this.state.selectedParagraph.split("");
    //  console.log("splitted array - ", selectedParagraphArray);
        const testInfo = selectedParagraphArray.map(selectedLetter => {
            return {
                testLetter: selectedLetter, 
                status : "notAttempted",
            };
        });
        this.setState({testInfo: testInfo});    
    };

    startTimer = () => {
        this.setState({ timerStarted: true});
        console.log("timer");
        const timer = setInterval(() => {
            console.log("Interval Set " + this.setState.timeRemaining);
            if(this.state.timeRemaining > 0) {
                console.log("timeRemaining" );
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                }); 
            }
            else {
                clearInterval(timer);
            }
                
        }, 1000);
    };

    handleUserInput = (inputValue) => {
        console.log(inputValue);
        if (!this.state.timerStarted){

         this.startTimer();
        }
    };

    render(){
    //    fetch(DataUrl).then(response => response.text()).then(information => {
    //        console.log("API RESPOSNE IS : ", information)
    //    }); 

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
                    testInfo ={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                />
                {/* Footer */}
                <Footer />
            </div>
        )
    }
};

export default App;