export const getFormattedTime = (time) => {
  const hours = time.getHours();
  const mins = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const suffix = hours >= 12 ? "PM" : "AM";

  const formattedHours = ((hours % 12) || 12).toString().padStart(2, "0");

  return `${formattedHours} : ${mins}: ${seconds} ${suffix}`;
};
