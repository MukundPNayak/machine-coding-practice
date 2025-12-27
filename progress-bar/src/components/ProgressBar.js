import React, { useEffect, useState } from "react";

import "./progressbar.css";

const ProgressBar = (props) => {
  const { percentage = 50 } = props;

  const value = Math.min(100, Math.max(0, percentage));

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let timer;

    if (displayValue < value) {
      timer = setTimeout(() => {
        setDisplayValue((prev) => prev + 1);
      }, 40);
    }

    return () => clearTimeout(timer);
  }, [displayValue, value]);

  return (
    <div
      className="parent"
      role="progressbar"
      aria-valuenow={displayValue}
      aria-valuemax={100}
      aria-valuemin={0}
    >
      <div className="filled" style={{ width: `${displayValue}%` }}></div>
      <span className="percentage">{displayValue}%</span>
    </div>
  );
};

export default ProgressBar;
