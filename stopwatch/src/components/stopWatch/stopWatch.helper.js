export const getFormattedTime = (time) => {
  const seconds = Math.floor((time / 1000) % 60)
    .toString()
    .padStart(2, "0");

  const mins = Math.floor((time / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");

  const hours = Math.floor(time / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");

  return `${hours} : ${mins} : ${seconds}`;
};
