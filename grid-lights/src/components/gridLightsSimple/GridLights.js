import React, { useEffect, useState } from "react";
import { CONFIG } from "./gridLights.constant";

import "./gridLights.css";

const GridLights = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  useEffect(() => {
    // check if all cells are green
    const areAllCellsFilled =
      order.length === CONFIG.flat().filter(Boolean).length;
    if (areAllCellsFilled) {
      deActivateCells();
    }
  }, [order]);

  const deActivateCells = () => {
    setIsDeactivating(true);

    const timer = setInterval(() => {
      setOrder((prev) => {
        const updatedOrders = [...prev];
        updatedOrders.pop();
        if (updatedOrders.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return updatedOrders;
      });
    }, 300);
  };

  const handleClick = (index) => {
    if (order.includes(index) || isDeactivating) return;
    setOrder((prev) => [...prev, index]);
  };

  return (
    <div
      className="grid-wrapper"
      style={{ gridTemplateColumns: `repeat(${CONFIG[0].length},80px)` }}
    >
      {CONFIG.flat().map((val, index) => {
        const filledClassName = order.includes(index) ? "filled" : "";

        return val === 1 ? (
          <div
            key={index}
            className={`${filledClassName} grid-cell`}
            onClick={() => handleClick(index)}
          ></div>
        ) : (
          <span></span>
        );
      })}
    </div>
  );
};

export default GridLights;
