import React, { Component } from "react";
import SongTemplates from "./song-templates.js";
import SongManager from "./Components/SongManager";
import Keys from "./constants";
import "./css/style.css";

class App extends Component {
  state = {
    songIndex: 0,
    keyPosition: 0,
    currentSong: {}
  };

  componentDidMount() {
    document.addEventListener("keyup", this.listenToKeys, false);
    //copy currentSong from state
    console.log("MOuNTED");
    //set song
    let currentSong = SongTemplates["song1"];
    this.setState({ currentSong });
  }

  navigateSongs = val => {
    let songIndex = this.state.songIndex;
    //Reset keys
    let keyPosition = 0;
    if (val === "left") {
      //move to previous index
      songIndex === 0
        ? (songIndex = Object.keys(SongTemplates).length - 1)
        : songIndex--;
    } else if (val === "right") {
      //move to next index
      songIndex === 4 ? (songIndex = 0) : songIndex++;
    }
    const currentSong = SongTemplates[Object.keys(SongTemplates)[songIndex]];
    this.setState({ keyPosition, songIndex, currentSong });
  };

  listenToKeys = event => {
    const notes = this.state.currentSong.notes;
    const keyCode = parseInt(event.keyCode);
    //Check if keycode is in song, if so play sound, otherwise reset key position
    return notes[this.state.keyPosition] === keyCode
      ? this.playKey(keyCode)
      : this.resetKeyPosition();
  };

  resetKeyPosition() {
    //Resets keyPosition in state
    let keyPosition = this.state.keyPosition;
    keyPosition = 0;
    this.setState({ keyPosition });
  }

  watchKeySequence = keyPosition => {
    if (keyPosition === this.state.currentSong.notes.length) {
      //play success sound and delay
      const successSound = new Audio("/Sound/OOT_Song_correct.wav");
      this.playSound(successSound, 500);
      //play song
      const audio = document.querySelector(
        `audio[name="${this.state.currentSong.name}"]`
      );
      //TODO: separate this into its own function
      //TODO: Maybe make it such that if the song is already at the length then reset the song...
      this.playSound(audio, 1000);
      //Reset key position
      //keyPosition = 0;
    }
    return keyPosition;
  };

  playSound = (audio, delay) => {
    //Plays a given sound given an audio element, delay as needed
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
    //TODO: this doesn't need to be an assignment function anymore...
    keyPosition = this.watchKeySequence(keyPosition);
    //update state
    this.setState({ keyPosition });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Ocarina of Time</p>
        </header>
        <div>
          <button
            className="btn chevron left"
            value="left"
            onClick={() => this.navigateSongs("left")}
          />
          <button
            className="btn chevron right"
            value="right"
            onClick={() => this.navigateSongs("right")}
          />
          <SongManager
            keyPosition={this.state.keyPosition}
            keys={Keys}
            currentSong={this.state.currentSong}
            songIndex={this.state.songIndex}
          />
        </div>
      </div>
    );
  }
}

export default App;
