import React from "react";
import PropTypes from "prop-types";

const Note = ({ note, dataKey }) => {
  Note.propTypes = {
    note: PropTypes.string,
    dataKey: PropTypes.number
  };

  return (
    <div>
      <audio src={"/Sound/Notes/Ocarina_" + note + ".wav"} data-key={dataKey} />
    </div>
  );
};

export default Note;
