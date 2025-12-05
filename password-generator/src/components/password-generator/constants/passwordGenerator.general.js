export const CHECKBOX_OPTIONS = {
  UPPER_CASE: "upperCase",
  LOWER_CASE: "lowerCase",
  NUMBER: "number",
  SYMBOL: "symbol",
};

export const CHECKBOX_CONFIG = [
  {
    id: CHECKBOX_OPTIONS.UPPER_CASE,
    label: "Include Uppercase Letters",
  },
  {
    id: CHECKBOX_OPTIONS.LOWER_CASE,
    label: "Include Lowercase Letters",
  },
  {
    id: CHECKBOX_OPTIONS.NUMBER,
    label: "Include Numbers",
  },
  {
    id: CHECKBOX_OPTIONS.SYMBOL,
    label: "Include Symbols",
  },
];

export const INITIAL_CHECKBOX_STATE = [
  CHECKBOX_OPTIONS.LOWER_CASE,
  CHECKBOX_OPTIONS.NUMBER,
];
