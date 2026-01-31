import React from "react";

import "./searchInput.css";

const SelectInput = ({ id, value, name, onChange, options, placeHolder }) => {
  const handleChange = (e) => {
    onChange(e.target.value, id);
  };

  return (
    <div className="select-container">
      <label>{name}</label>
      <select onChange={handleChange} value={value} placeHolder={placeHolder}>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
