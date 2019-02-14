import React, { Component } from "react";
import Note from "./Note";

class SongManager extends Component {
  render() {
    if (!this.props.currentSong) {
      return <p>No song</p>;
    }

    const { name, notes } = this.props.currentSong;
    return (
      <div>
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
        <p>{name}</p>
      </div>
    );
  }
}

export default SongManager;
