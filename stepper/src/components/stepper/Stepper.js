import React, { useState } from "react";

import { FIELD_CONFIG, FIELD_IDS } from "./constants/stepper.field";
import StepperItem from "./StepperItem";

import "./stepper.css";

function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = FIELD_CONFIG.length;

  return (
    <div className="container">
      <div className="stepContainer">
        {FIELD_CONFIG.map((field, index) => {
          const { id, label } = field;
          const isLastIndex = index === totalSteps - 1;
          const selected = currentStep === index;

          const isCompleted = currentStep > index;

          const completedLineClass = isCompleted ? "completedLine" : "";

          return (
            <React.Fragment key={id}>
              <StepperItem
                label={label}
                id={id}
                selected={selected}
                isCompleted={isCompleted}
                step={index}
              />
              {!isLastIndex && <div className={`line ${completedLineClass}`} />}
            </React.Fragment>
          );
        })}
      </div>

      {currentStep < totalSteps && (
        <div className="ctaContainer">
          <span>{FIELD_CONFIG[currentStep]?.cta}</span>
          <button
            className="btn"
            onClick={() => {
              setCurrentStep((prev) => prev + 1);
            }}
          >
            {currentStep === totalSteps - 1 ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Stepper;
