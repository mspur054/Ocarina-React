import React from "react";
import PropTypes from "prop-types";

class NoteBtn extends React.Component {
  state = {
    played: false
  };
  static propTypes = {
    "data-key": PropTypes.number
  };

  render() {
    return (
      <button
        //value="1"
        data-key={this.props.dataKey}
        className={`noteBtn-${this.props.index} ${
          this.props.keyPosition > this.props.index ? "maxOpacity" : ""
        }`}
      />
    );
  }
}

export default NoteBtn;
