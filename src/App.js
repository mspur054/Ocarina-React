import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SongTemplates from "./song-templates.js";
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
    //set song
    let currentSong = SongTemplates["song1"];
    this.setState({ currentSong });
  }

  listenToKeys = event => {
    const notes = this.state.currentSong.notes;
    const keyCode = parseInt(event.keyCode);
    // console.log(notes[this.state.keyPosition] + "  " + keyCode);
    //Check if keycode is in song, if so play sound
    return notes[this.state.keyPosition] === keyCode //notes.includes(keyCode) && notes[this.state.keyPosition] === keyCode
      ? this.playKey(keyCode)
      : null; //TODO:make play bad sound and reset key
  };

  watchKeySequence = keyPosition => {
    console.log(
      this.state.keyPosition + " " + this.state.currentSong.notes.length
    );

    if (this.state.keyPosition === this.state.currentSong.notes.length - 1) {
      //play success sound and delay

      //play song
      const audio = document.querySelector(
        `audio[name="${this.state.currentSong.name}"]`
      );
      //TODO: separate this into its own function
      this.playSound(audio, 1000);
      //Reset key position
      keyPosition = 0;
    }
    return keyPosition;
  };

  playSound = (audio, delay) => {
    //Plays a given sound given an audio element
    if (!audio) return;
    setTimeout(function() {
      audio.currentTime = 0;
      audio.play();
    }, delay);
  };

  playKey(key) {
    // Get current key position and increment it
    let keyPosition = this.state.keyPosition + 1;
    //Get audio element that correspond to key to play
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) return;
    //play audio
    this.playSound(audio, 50);
    keyPosition = this.watchKeySequence(keyPosition);
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
        </header>
      </div>
    );
  }
}

export default App;
