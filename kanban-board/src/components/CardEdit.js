import React, { useState } from "react";

import "./card.css";

const CardEdit = ({
  titleInitialValue="",
  descriptionInitialValue="",
  onSave,
  onCancel,
}) => {
  const [inputTitle, setInputTitle] = useState(titleInitialValue);
  const [inputDescrption, setInputDescriptions] = useState(descriptionInitialValue);

  return (
    <div className="card edit-container">
      <input
        type="text"
        onChange={(e) => setInputTitle(e.target.value)}
        placeholder="Enter Title Here"
        value={inputTitle}
      />
      <input
        type="text"
        placeholder="Enter Description Here"
        onChange={(e) => setInputDescriptions(e.target.value)}
        value={inputDescrption}
      />
      <div>
        <button
          className="save-btn"
          onClick={() => onSave({ inputTitle, inputDescrption })}
        >
          Save
        </button>
        <button className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CardEdit;
