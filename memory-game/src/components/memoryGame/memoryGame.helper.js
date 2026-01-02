export const getGridValues = (size) => {
  const values = Array(size);

  for (let i = 0; i < Math.floor((size * size) / 2); i++) {
    values[i] = size + i;
  }

  const gridValues = [...values, ...values];

  for (let j = gridValues.length - 1; j > 0; j--) {
    const index = Math.floor(Math.random() * (j + 1));

    [gridValues[j], gridValues[index]] = [gridValues[index], gridValues[j]];
  }


  return gridValues;
};
