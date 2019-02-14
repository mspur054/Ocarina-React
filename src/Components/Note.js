import React, { Component } from "react";
import PropTypes from "prop-types";

class Note extends Component {
  static propTypes = {
    note: PropTypes.string
  };
  render() {
    return (
      <div>
        <p>{this.props.note}</p>
        <audio
          src={"/Sound/Notes/Ocarina_" + this.props.note + ".wav"}
          data-key={this.props.dataKey}
        />
      </div>
    );
  }
}

export default Note;
