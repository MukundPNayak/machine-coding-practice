import React from "react";
import Chip from "./Chip";

import "./chips.css";

const Chips = (props) => {
  const { selectedOptions, setSelectedOptions } = props;

  const handleRemoveOption = (id) => {
    const updatedOptions = selectedOptions.filter((option) => option.id !== id);
    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="chips-container">
      {selectedOptions.map((option) => {
        const { id } = option;
        return <Chip option={option} key={id} onRemoveOption={handleRemoveOption}/>;
      })}
    </div>
  );
};

export default Chips;
