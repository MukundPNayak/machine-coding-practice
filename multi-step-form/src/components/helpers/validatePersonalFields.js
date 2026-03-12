export const validateName = (value) => {
  const regex = /^[A-Za-z ]+$/;
  if (!regex.test(value)) {
    console.log('name')
    return "Name can only contain Alphabets";
  }
  return "";
};

export const validateEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) {
    return "Please enter a valid email";
  }
  return "";
};

export const validatePhoneNumber = (value) => {
  const regex = /^[0-9]{10}$/;
  if (!regex.test(value)) {
    return "Phone number should contain digits and only 10 numbers";
  }
  return "";
};

export const validateRequiredField = (value, name) => {
  if (!value || value.trim().length === 0) {
    return `${name} Cannot be empty`;
  }

  return "";
};
