import React, { Component } from "react";

class Note extends Component {
  render() {
    return (
      <audio
        src={"/Sound/Notes/Ocarina_" + this.props.key + ".wav"}
        data-key={this.props.dataKey}
      />
    );
  }
}

export default Note;
