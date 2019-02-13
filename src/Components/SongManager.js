import React, { Component } from "react";

class songManager extends Component {
  render() {
    return (
      <div>
        <i class="chevron left" />
        <div className="musicTemplate">
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
        <i class="chevron right" />
        <p>{this.props.currentSong.name}</p>
      </div>
    );
  }
}

export default songManager;
