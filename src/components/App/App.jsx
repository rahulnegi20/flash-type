import React from "react";
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import "./App.css"; 

class App extends React.Component {
    render(){
        return (
            <div className="app">
                {/* Nav Section  */}
                <Nav />
                {/* Landing Page */}
                <Landing />
                {/* Challenging Section */}
                {/* Footer */}
            </div>
        )
    }
};

export default App;