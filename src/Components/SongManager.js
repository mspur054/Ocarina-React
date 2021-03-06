import React, { Component } from "react";
import PropTypes from "prop-types";
import Note from "./Note";
import Song from "./Song";
import NoteBtn from "./NoteBtn";
import "../css/style.css";

class SongManager extends Component {
  static propTypes = {
    currentNote: PropTypes.object,
    keyPosition: PropTypes.number,
    songIndex: PropTypes.number
  };

  render() {
    if (!this.props.currentSong.notes) {
      return <p>No song</p>;
    }

    let songClass = "song-title";
    if (this.props.songIndex === 0) {
      songClass += " zelda";
    } else if ([1, 6].includes(this.props.songIndex)) {
      songClass += " saria";
    } else if ([2, 7].includes(this.props.songIndex)) {
      songClass += " epona";
    } else if (this.props.songIndex === 3) {
      songClass += " sun";
    } else if (this.props.songIndex === 4) {
      songClass += " time";
    }

    const { name, notes } = this.props.currentSong;
    return (
      <div>
        <div className="SongManager">
          <div className="musicTemplate">
            <hr />
            <hr />
            <hr />
            <hr />
            {notes.map((currentNote, index) => (
              <Note
                key={index}
                index={index}
                note={this.props.keys[currentNote].key}
                dataKey={currentNote}
              />
            ))}
          </div>
          <div className="noteContainer">
            {notes.map((currentNote, index) => (
              <NoteBtn
                key={index}
                index={index}
                dataKey={currentNote}
                //className={`noteBtn-${index}`}
                className="noteBtn"
                keyPosition={this.props.keyPosition}
              />
            ))}
          </div>
        </div>
        <span className="title">
          {this.props.keyPosition === notes.length ? "You Played " : "Play "}
        </span>
        <span className={songClass}>{name}!</span>
        <Song currentSong={this.props.currentSong} />
      </div>
    );
  }
}

export default SongManager;
