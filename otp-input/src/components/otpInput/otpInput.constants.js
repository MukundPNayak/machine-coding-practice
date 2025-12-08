import {
  handleArrowLeftClick,
  handleArrowRightClick,
  handleBackSpaceClick,
} from "./otpInput.onKeyhandlers";

export const KEYS = {
  BACKSPACE: "Backspace",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
};

export const KEY_VS_ACTION_MAPPER = {
  [KEYS.BACKSPACE]: handleBackSpaceClick,
  [KEYS.ARROW_LEFT]: handleArrowLeftClick,
  [KEYS.ARROW_RIGHT]: handleArrowRightClick,
};
