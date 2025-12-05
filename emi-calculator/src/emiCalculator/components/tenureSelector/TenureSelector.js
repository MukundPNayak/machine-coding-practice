import React from "react";
import { TENURE_OPTIONS } from "./constants/tenureSelector.options";

import "./tenureSelector.css";

function TenureSelector(props) {
  const { onTenureChange, selectedTenure } = props;

  return (
    <div className="container">
      <label className="label">Tenure</label>
      <div>
        {TENURE_OPTIONS.map((value) => {
          const isSelected = value === selectedTenure;

          const selectedClassName = isSelected ? "selected" : "";

          return (
            <button
              className={`${selectedClassName} button`}
              key={value}
              onClick={() => onTenureChange(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TenureSelector;
