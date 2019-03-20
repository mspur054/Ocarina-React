import React from "react";
import PropTypes from "prop-types";

const NoteBtn = ({ dataKey, index, keyPosition }) => {
  //TODO: convert to function component
  NoteBtn.propTypes = {
    "data-key": PropTypes.number
  };
  let className = `noteBtn${
    //if the key has been played make it solid
    keyPosition > index ? " maxOpacity" : ""
  }`;

  //Pass in keypad icon
  if (dataKey === 37) {
    className += " noteBtn-left";
  } else if (dataKey === 38) {
    className += " noteBtn-up";
  } else if (dataKey === 39) {
    className += " noteBtn-right";
  } else if (dataKey === 40) {
    className += " noteBtn-down";
  } else if (dataKey === 65) {
    className += " noteBtn-aKey";
  }
  return <button data-key={dataKey} className={className} />;
};

export default NoteBtn;
