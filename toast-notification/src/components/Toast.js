import React, { useEffect } from "react";

import "./toast.css";
import { TOAST_CONFIG } from "../constants/toastConfig";
import { TOAST_TYPES } from "../constants/toastTypes";
import useTimer from "../hooks/useTimer";

const Toast = ({ type = TOAST_TYPES.INFO, message, onClose, id }) => {
  const { className } = TOAST_CONFIG[type];

  const isError = type === TOAST_TYPES.ERROR;

  const { pauseTimer, resumeTimer } = useTimer({ onClose, id });

  return (
    <div
      className={`toast-container ${className}`}
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
    >
      <span>{message}</span>
      <button
        className="remove-btn"
        onClick={() => onClose(id)}
        aria-label="Close Toast"
      >
        X
      </button>
    </div>
  );
};

export default Toast;
