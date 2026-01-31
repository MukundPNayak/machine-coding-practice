import {
  validateEmail,
  validateName,
  validatePhoneNumber,
} from "../helpers/validatePersonalFields";
import { INPUT_TYPES } from "./multiStepForm.inputTypes";

export const PERSONAL_FIELD_IDS = {
  FIRST_NAME: "firstName",
  LAST_NAME: "lastName",
  EMAIL: "email",
  PHONE: "phone",
};

export const PROFESSIONAL_FIELD_IDS = {
  COMPANY: "company",
  POSITION: "position",
  YEARS_OF_EXP: "yearsOfExp",
  INDUSTRY: "industry",
};

export const BILLING_FIELDS_IDS = {
  CARD_NUMBER: "cardNumber",
  CARD_HOLDER_NAME: "cardHolderName",
  EXPIRY: "expiry",
  CVV: "cvv",
};

export const BILLING_FIELD_CONFIG = [
  {
    id: BILLING_FIELDS_IDS.CARD_NUMBER,
    type: INPUT_TYPES.TEXT,
    name: "Card Number",
  },
  {
    id: BILLING_FIELDS_IDS.CARD_HOLDER_NAME,
    type: INPUT_TYPES.TEXT,
    name: "Card Holder Name",
  },
  {
    id: BILLING_FIELDS_IDS.EXPIRY,
    type: INPUT_TYPES.DATE,
    name: "Expiry",
  },
  {
    id: BILLING_FIELDS_IDS.CVV,
    type: INPUT_TYPES.TEXT,
    name: "CVV",
  },
];

export const PERSONAL_FIELD_CONFIG = [
  {
    id: PERSONAL_FIELD_IDS.FIRST_NAME,
    type: INPUT_TYPES.TEXT,
    name: "First Name",
    isRequired: true,
    validator: validateName,
  },
  {
    id: PERSONAL_FIELD_IDS.LAST_NAME,
    type: INPUT_TYPES.TEXT,
    name: "Last Name",
    isRequired: true,
    validator: validateName,
  },
  {
    id: PERSONAL_FIELD_IDS.EMAIL,
    type: INPUT_TYPES.TEXT,
    name: "Email",
    isRequired: true,
    validator: validateEmail,
  },
  {
    id: PERSONAL_FIELD_IDS.PHONE,
    type: INPUT_TYPES.TEXT,
    name: "Phone Number",
    isRequired: true,
    validator: validatePhoneNumber,
  },
];

export const PROFESSIONAL_FIELD_CONFIG = [
  {
    id: PROFESSIONAL_FIELD_IDS.COMPANY,
    type: INPUT_TYPES.TEXT,
    name: "Company",
    isRequired: true,
  },
  {
    id: PROFESSIONAL_FIELD_IDS.POSITION,
    type: INPUT_TYPES.TEXT,
    name: "Position",
  },
  {
    id: PROFESSIONAL_FIELD_IDS.YEARS_OF_EXP,
    type: INPUT_TYPES.SELECT,
    name: "Years of exp",
    placeHolder: "Select Experience",
    options: ["0-1", "1-3", "3-5"],
  },
  {
    id: PROFESSIONAL_FIELD_IDS.INDUSTRY,
    type: INPUT_TYPES.TEXT,
    name: "Industry",
  },
];
