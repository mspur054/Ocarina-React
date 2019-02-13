import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";
import Song from "./Components/Song";
import SongManager from "./Component/SongManager";
import SongTemplates from "./song-templates.js";
import "./css/style.css";

class App extends Component {
  state = {
    keyPosition: 0,
    currentSong: null
  };

  /*  keys = [
    { keyCode: 65, key: "D" }, //A
    { keyCode: 37, key: "B" }, // arrow left
    { keyCode: 38, key: "D2" }, //arrow up
    { keyCode: 39, key: "A" }, //arrow right
    { keyCode: 40, key: "F" } //Arrow down
  ];*/

  keys = {
    65: { key: "D" }, //A
    37: { key: "B" }, // arrow left
    38: { key: "D2" }, //arrow up
    39: { key: "A" }, //arrow right
    40: { key: "F" } //Arrow down
  };

  test = () => {
    console.log(SongTemplates);
  };

  clickLeft() {
    //get previous song in array
    // let currentSong = SongTemplates[]
  }

  componentDidMount() {
    document.addEventListener("keyup", this.listenToKeys, false);
    //copy currentSong from state
    let currentSong = SongTemplates["song1"];
    this.setState(currentSong);
  }

  listenToKeys = event => {
    console.log(event);
    console.log(this.keys[event.keyCode].key);

    //let currentSong = [...this.state.currentSong]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to my blog</p>
          {/* <div className="songManager">
            <i class="chevron left" />
            <div className="musicTemplate">
              <hr />
              <hr />
              <hr />
              <hr />
            </div>
            <i class="chevron right" />
          </div> */}
          <SongManager />
          <Button onClick={this.test} />
          <Song name="Zelda's Lullaby" />
        </header>
      </div>
    );
  }
}

export default App;
