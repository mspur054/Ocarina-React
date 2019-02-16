import React, { Component } from "react";
import Note from "./Note";
import Song from "./Song";

class SongManager extends Component {
  render() {
    if (!this.props.currentSong) {
      return <p>No song</p>;
    }

    const { name, notes } = this.props.currentSong;
    return (
      <div>
        <div className="SongManager">
          <i className="chevron left" />
          <div className="musicTemplate">
            <hr />
            <hr />
            <hr />
            <hr />
            {notes.map((currentNote, index) => (
              <Note
                key={index}
                note={this.props.keys[currentNote].key}
                dataKey={currentNote}
              />
            ))}
          </div>
          <i className="chevron right" />
        </div>
        <p>{name}</p>
        <Song currentSong={this.props.currentSong} />
      </div>
    );
  }
}

export default SongManager;
