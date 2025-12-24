import React from "react";
import { AiFillPushpin } from "react-icons/ai";

import "./notes.css";

const Note = ({ note, ...props }) => {
  const { text, id, top, left } = note;

  return (
    <div
      className="note"
      id={id}
      style={{ top: top || "20px", left: left || "40px" }}
      {...props}
    >
      <AiFillPushpin color="red" />
      {text}
    </div>
  );
};

export default Note;
