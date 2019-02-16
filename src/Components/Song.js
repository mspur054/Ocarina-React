import React from "react";

class Song extends React.Component {
  componentDidMount() {
    //set state to playing song
  }

  render() {
    return (
      <audio
        name={this.props.currentSong.name}
        src={
          "/Sound/Songs/" +
          this.props.currentSong.name.split(" ").join("_") +
          ".mp3"
        }
      />
    );
  }
}

export default Song;
