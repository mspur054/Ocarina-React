import React, { Component } from "react";
import PropTypes from "prop-types";
import Note from "./Note";
import Song from "./Song";
import NoteBtn from "./NoteBtn";
import "../css/style.css";

class SongManager extends Component {
  static propTypes = {
    currentNote: PropTypes.object,
    keyPosition: PropTypes.number
  };

  render() {
    if (!this.props.currentSong.notes) {
      return <p>No song</p>;
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
                className={`noteBtn-${index}`}
                keyPosition={this.props.keyPosition}
              />
            ))}
          </div>
        </div>
        <p>
          {this.props.keyPosition === notes.length
            ? `You Played ${name}!`
            : `Play ${name}!`}
        </p>
        <Song currentSong={this.props.currentSong} />
      </div>
    );
  }
}

export default SongManager;
