import { TOAST_TYPES } from "./toastTypes";

export const TOAST_BUTTON_CONFIG = {
  [TOAST_TYPES.INFO]: {
    label: "Add Info Toast",
    className: "info-toast-btn",
  },
  [TOAST_TYPES.ERROR]: {
    label: "Add Error Toast",
    className: "error-toast-btn",
  },
  [TOAST_TYPES.SUCCESS]: {
    label: "Add Success Toast",
    className: "success-toast-btn",
  },
};
