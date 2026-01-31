import { MdPerson, MdWork, MdCreditCard } from "react-icons/md";

import {
  BILLING_FIELD_CONFIG,
  PERSONAL_FIELD_CONFIG,
  PROFESSIONAL_FIELD_CONFIG,
} from "./multiStepForm.fields";

export const TAB_IDS = {
  PERSONAL: "PERSONAL",
  PROFESSIONAL: "PROFESSIONAL",
  BILLING: "BILLING",
};

export const TAB_CONFIG = [
  {
    id: TAB_IDS.PERSONAL,
    heading: "Personal Info",
    fieldConfig: PERSONAL_FIELD_CONFIG,
    icon: MdPerson,
  },
  {
    id: TAB_IDS.PROFESSIONAL,
    heading: "Professional Info",
    fieldConfig: PROFESSIONAL_FIELD_CONFIG,
    icon: MdWork,
  },
  {
    id: TAB_IDS.BILLING,
    heading: "Billing Info",
    fieldConfig: BILLING_FIELD_CONFIG,
    icon: MdCreditCard,
  },
];
