import React, { Component } from "react";
import PropTypes from "prop-types";
import Note from "./Note";
import Song from "./Song";
import "../css/style.css";

class SongManager extends Component {
  static propTypes = {
    currentNote: PropTypes.object
  };

  render() {
    if (!this.props.currentSong.notes) {
      return <p>No song</p>;
    }

    const { name, notes } = this.props.currentSong;
    return (
      <div>
        <div className="SongManager">
          {/* <i
            className="chevron left"
            onClick={() => this.props.getCurrentSong}
          /> */}
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
          {/* <i className="chevron right" /> */}
          <div className="noteContainer">
            {notes.array.forEach(element => {})}
            <button className={`button-${this.props.index}`} />{" "}
          </div>
        </div>
        <p>{name}</p>
        <Song currentSong={this.props.currentSong} />
      </div>
    );
  }
}

export default SongManager;
