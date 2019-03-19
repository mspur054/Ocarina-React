import React from "react";

const Song = ({ currentSong }) => {
  return (
    <audio
      name={currentSong.name}
      src={"/Sound/Songs/" + currentSong.name.split(" ").join("_") + ".mp3"}
    />
  );
};

export default Song;
