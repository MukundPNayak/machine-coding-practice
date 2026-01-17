import React from "react";

import "./chips.css";

const Chip = (props) => {
  const { option, onRemoveOption } = props;

  const { label, id } = option;

  return (
    <div className="chip">
      {label}
      <button className="x-btn" onClick={() => onRemoveOption(id)}>
        X
      </button>
    </div>
  );
};

export default Chip;
