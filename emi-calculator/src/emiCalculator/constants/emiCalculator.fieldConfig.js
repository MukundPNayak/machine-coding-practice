import { handlePercentageFieldChange } from "../helpers/emiCalculator.onChange";
import { FIELD_IDS } from "./emiCalculator.fieldIds";

export const NUMBER_FIELD_CONFIG = [
  {
    id: FIELD_IDS.TOTAL_COST,
    label: "Total Cost of Asset",
  },
  {
    id: FIELD_IDS.INTEREST_RATE,
    label: "Interest Rate (In %)",
    onChange: handlePercentageFieldChange,
  },
  {
    id: FIELD_IDS.PROCESSING_FEE,
    label: "Processing Fee (In %)",
    onChange: handlePercentageFieldChange,
  },
];
