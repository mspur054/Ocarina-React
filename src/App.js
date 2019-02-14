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
    //console.log(event.keyCode);
    const notes = this.state.currentSong.notes;
    const keyCode = parseInt(event.keyCode);
    console.log(notes[this.state.keyPosition] + "  " + keyCode);
    //Check if keycode is in song, if so play sound
    return notes[this.state.keyPosition] === keyCode //notes.includes(keyCode) && notes[this.state.keyPosition] === keyCode
      ? this.playKey(keyCode)
      : null; //TODO: make play bad sound and reset key
  };

  updateKeyPosition(bool) {}

  playKey(key) {
    // Get current key position and increment it
    const keyPosition = this.state.keyPosition + 1;
    //Get audio element that correspond to key to play
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) return;
    //play audio
    audio.currentTime = 0;
    audio.play();
    //update state
    this.setState({ keyPosition });
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
