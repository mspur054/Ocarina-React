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
    let className = `noteBtn${
      //if the key has been played make it solid
      this.props.keyPosition > this.props.index ? " maxOpacity" : ""
    }`;

    //Pass in keypad icon
    if (this.props.dataKey === 37) {
      className += " noteBtn-left";
    } else if (this.props.dataKey === 38) {
      className += " noteBtn-up";
    } else if (this.props.dataKey === 39) {
      className += " noteBtn-right";
    } else if (this.props.dataKey === 40) {
      className += " noteBtn-down";
    } else if (this.props.dataKey === 65) {
      className += " noteBtn-aKey";
    }

    return <button data-key={this.props.dataKey} className={className} />;
  }
}

export default NoteBtn;
