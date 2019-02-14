import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SongTemplates from "./song-templates.js";
import Song from "./Components/Song";
import SongManager from "./Components/SongManager";
import Keys from "./constants";
import "./css/style.css";

class App extends Component {
  state = {
    keyPosition: 0,
    currentSong: null
  };

  clickLeft() {
    //get previous song in array
    // let currentSong = SongTemplates[]
  }

  componentDidMount() {
    document.addEventListener("keyup", this.listenToKeys, false);
    //copy currentSong from state
    console.log("MOuNTED");
    let currentSong = SongTemplates["song1"];
    this.setState({ currentSong });
  }

  listenToKeys = event => {
    console.log(event.keyCode);
    const notes = this.state.currentSong.notes;
    //Check if keycode is in song, if so play sound
    return notes.includes(parseInt(event.keyCode))
      ? this.playKey(parseInt(event.keyCode))
      : null;
  };

  updateKeyPosition(bool) {}

  playKey(key) {
    console.log(key + "1");
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to my blog</p>
          <SongManager keys={Keys} currentSong={this.state.currentSong} />
          <Song name="Zelda's Lullaby" />
        </header>
      </div>
    );
  }
}

export default App;
