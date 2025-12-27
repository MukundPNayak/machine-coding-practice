export const getProducts = (products, currentPage, pageSize) => {
  const start = pageSize * currentPage;
  const end = start + pageSize;

  console.log(start, end);

  return products.slice(start, end);
};
