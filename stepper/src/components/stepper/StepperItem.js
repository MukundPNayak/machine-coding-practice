import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

import "./stepper.css";

function StepperItem({ label, selected, isCompleted, step }) {
  let colorClassName = "";

  if (selected) {
    colorClassName += "selected";
  } else if (isCompleted) {
    colorClassName += "completed";
  }

  return (
    <div className="stepItem">
      <div className={`circle ${colorClassName}`}>
        {isCompleted ? <AiOutlineCheck /> : step + 1}
      </div>
      <span className="label">{label}</span>
    </div>
  );
}

export default StepperItem;
