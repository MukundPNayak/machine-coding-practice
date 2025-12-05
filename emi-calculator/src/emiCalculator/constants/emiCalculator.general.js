import { TENURE_OPTIONS } from "../components/tenureSelector/constants/tenureSelector.options";
import { FIELD_IDS } from "./emiCalculator.fieldIds";

export const INITIAL_STATE = {
  [FIELD_IDS.TOTAL_COST]: 0,
  [FIELD_IDS.INTEREST_RATE]: 10,
  [FIELD_IDS.PROCESSING_FEE]: 1,
  [FIELD_IDS.TENURE]: TENURE_OPTIONS[0],
};
