import DateInput from "../formInput/dateInput/DateInput";
import SelectInput from "../formInput/selectInput/SelectInput";
import TextInput from "../formInput/textInput/TextInput";

export const INPUT_TYPES = {
  TEXT: "text",
  DATE: "date",
  SELECT: "select",
};

export const TYPE_VS_RENDERER = {
  [INPUT_TYPES.TEXT]: TextInput,
  [INPUT_TYPES.SELECT]: SelectInput,
  [INPUT_TYPES.DATE]: DateInput,
};
