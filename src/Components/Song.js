import React from "react";

class Song extends React.Component {
  componentDidMount() {
    //set state to playing song
  }

  render() {
    return (
      <audio
        //false
        src={"/Sound/Songs/" + this.props.name.split(" ").join("_") + ".mp3"}
      />
    );
  }
}

export default Song;
