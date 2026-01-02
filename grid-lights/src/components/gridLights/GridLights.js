import React, { useEffect, useState } from "react";
import { getInitialState } from "./gridLights.helper";

import "./gridLights.css";

const GridLights = () => {
  const [grids, setGrids] = useState(getInitialState(3));

  const [order, setOrder] = useState([]);

  const [isRestoring, setIsRestoring] = useState(false);

  useEffect(() => {
    let isComplete = true;

    for (let i = 0; i < grids.length; i++) {
      for (let j = 0; j < grids[i].length; j++) {
        if (grids[i][j] === null) continue;

        if (grids[i][j] === false) {
          isComplete = false;
          break;
        }
      }
      if (!isComplete) {
        break;
      }
    }

    if (isComplete) {
      setIsRestoring(true);
    }
  }, [grids]);

  useEffect(() => {
    if (!isRestoring) return;

    let index = order.length - 1;

    const interval = setInterval(() => {
      const [rowIndex, colIndex] = order[index];

      setGrids((prev) => {
        const newGrid = [...prev];
        newGrid[rowIndex] = [...newGrid[rowIndex]];
        newGrid[rowIndex][colIndex] = false;
        return newGrid;
      });

      index--;

      if (index < 0) {
        clearInterval(interval);
        setOrder([]);
        setIsRestoring(false);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [isRestoring]);

  const handleGridClick = (rowIndex, colIndex) => {
    if (grids[rowIndex][colIndex] === true || isRestoring) return;

    setGrids((prev) => {
      const oldGrid = [...prev];
      oldGrid[rowIndex] = [...oldGrid[rowIndex]];
      oldGrid[rowIndex][colIndex] = true;
      return oldGrid;
    });
    setOrder((prev) => [...prev, [rowIndex, colIndex]]);
  };

  return (
    <div>
      {grids.map((gridRow, rowIndex) => {
        return (
          <div key={rowIndex} className="grid-row">
            {gridRow.map((grid, columnIndex) => {
              return (
                <div
                  key={columnIndex}
                  onClick={() => handleGridClick(rowIndex, columnIndex)}
                  className={`grid-cell ${
                    grid === null ? "grid-cell--empty" : "grid-cell--active"
                  } ${grid === true && "grid-cell-clicked"}`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GridLights;
