import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Components/Button";
import Button from "./Components/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to my blog</p>
          <Button />
        </header>
      </div>
    );
  }
}

export default App;
