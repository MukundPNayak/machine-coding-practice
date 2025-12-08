export const handleBackSpaceClick = (e, index, inputRef) => {
  const value = e.target.value;

  if (value || index === 0) return;

  inputRef.current[index - 1].focus();
};

export const handleArrowRightClick = (e, index, inputRef, length) => {
  if (index === length - 1) return;

  inputRef.current[index + 1].focus();
};

export const handleArrowLeftClick = (e, index, inputRef) => {
  if (index === 0) return;

  inputRef.current[index - 1].focus();
};
