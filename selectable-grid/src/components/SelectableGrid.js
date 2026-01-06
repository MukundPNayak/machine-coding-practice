import React, { useState } from "react";

import "./selectableGrid.css";

const SelectableGrid = ({ rows = 10, cols = 10 }) => {
  const [selectedGrids, setSelectedGrids] = useState(new Set());

  const handleMouseDown = (index) => {
    const startRow = Math.floor(index / cols);
    const startCol = index % cols;

    const handleMouseMove = (e) => {


      const index = Number(e.target.dataset.index);
      if (Number.isNaN(index)) return;

      const selGrids = new Set();

      const row = Math.floor(index / cols);
      const col = index % cols;
      const minRow = Math.min(row, startRow);
      const maxRow = Math.max(row, startRow);
      const minCol = Math.min(col, startCol);
      const maxCol = Math.max(col, startCol);

      for (let i = minRow; i <= maxRow; i++) {
        for (let j = minCol; j <= maxCol; j++) {
          selGrids.add(i * cols + j);
        }
      }

      setSelectedGrids(selGrids);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="container"
      style={{ gridTemplateColumns: `repeat(${cols},40px)` }}
    >
      {Array(rows * cols)
        .fill("")
        .map((_, index) => {
          const isSelected = selectedGrids.has(index);

          const selectedClassName = isSelected ? "selectedGrid" : "";

          return (
            <div
              key={index}
              className={`${selectedClassName} grid`}
              onMouseDown={() => handleMouseDown(index)}
              data-index={index}
            >
              {index + 1}
            </div>
          );
        })}
    </div>
  );
};

export default SelectableGrid;
