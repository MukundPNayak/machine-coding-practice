import React from "react";

import "./pill.css";

const Pill = (props) => {
  const { id, firstName, lastName, onRemove } = props;
  return (
    <span className="pill">
      {`${firstName} ${lastName}`}{" "}
      <button className="btn" onClick={() => onRemove(id)}>
        X
      </button>
    </span>
  );
};

export default Pill;
