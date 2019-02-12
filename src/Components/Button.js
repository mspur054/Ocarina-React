import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  static propTypes = {
    sound: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = { play: false, busy: false };
    this.url = "/Sound/OOT_Fanfare_HeartContainer.wav";
    this.audio = new Audio(this.url);
    this.playSound = this.playSound.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  playSound() {
    // if (this.state.busy === false) {
    this.setState({ play: !this.state.play, busy: true });
    //console.log(this.state.play);
    this.state.play ? this.audio.play() : this.audio.pause();
    console.log(this.audio.ended);
    // }
  }

  keyPress(event) {
    let myKey = event.key;
    if (myKey === "w" && this.audio.ended === true) {
      console.log("YES");
      this.setState({ play: !this.state.play });
      console.log(this.state.play);
      this.state.play ? this.audio.play() : this.audio.pause();
    }
  }

  componentDidMount() {
    window.addEventListener("keyup", this.keyPress);
  }

  render() {
    return (
      <button onClick={this.playSound}>
        {this.state.play ? "Play" : "Pause"}
      </button>
    );
  }
}

export default Button;
