import React from "react";
import PropTypes from "prop-types";

class Song extends React.Components {
  render() {
    return (
      <audio
        autoplay="true"
        src={"/Sound/" + this.props.name.split(" ").join("_") + ".wav"}
      />
    );
  }
}

export default Song;
