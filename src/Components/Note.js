import React, { Component } from "react";
import PropTypes from "prop-types";

class Note extends Component {
  static propTypes = {
    note: PropTypes.string
  };
  render() {
    return (
      <div>
        <audio
          src={"/Sound/Notes/Ocarina_" + this.props.note + ".wav"}
          data-key={this.props.dataKey}
        />
        <button className={`button-${this.props.index}`} />
      </div>
    );
  }
}

export default Note;
