import React from "react";
import { TAB_CONFIG } from "./constants/multiStepForm.tabs";

import "./stepper.css";
import { MdCheck } from "react-icons/md";

const Stepper = ({ currentTabIndex }) => {
  return (
    <div className="step-container">
      {TAB_CONFIG.map((tab, index) => {
        const { heading, id, icon } = tab;

        const isCurrent = index === currentTabIndex;

        const finished = index < currentTabIndex;

        const IconRenderer = finished ? MdCheck : icon;

        const selectedIconClass = isCurrent || finished ? "filled-icon" : "";
        const blackLineClass = finished ? "black-line" : "";

        return (
          <div className="step-children">
            <div className="step-item" key={id}>
              <div className={`icon ${selectedIconClass}`}>
                <IconRenderer className="icon-class" />
              </div>
              <div>{heading}</div>
            </div>
            {index < TAB_CONFIG.length - 1 && (
              <span className={`line ${blackLineClass}`}></span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
