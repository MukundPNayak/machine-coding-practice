import React from "react";

import './dateInput.css'

const DateInput = ({ id, value, name, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value, id);
  };

  return (
    <div className="input-container">
      <label htmlFor={id}>{name}</label>
      <input type="date" value={value} onChange={handleInputChange} id={id} />
    </div>
  );
};

export default DateInput;