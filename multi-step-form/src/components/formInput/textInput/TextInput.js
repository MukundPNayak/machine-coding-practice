import React from "react";

import './textInput.css'

const TextInput = ({ id, value, name, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value, id);
  };

  return (
    <div className="input-container">
      <label htmlFor={id}>{name}</label>
      <input type="text" value={value} onChange={handleInputChange} id={id} />
    </div>
  );
};

export default TextInput;
