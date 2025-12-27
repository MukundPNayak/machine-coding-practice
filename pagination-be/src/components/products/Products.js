import React, { useCallback, useEffect, useMemo, useState } from "react";
import Product from "../product/Product";

import "./products.css";
import Pagination from "../pagination/Pagination";
import { DEFAULT_PAGE_SIZE } from "./products.constant";

const Products = () => {
  const [products, setProducts] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const fetchProducts = useCallback(async () => {
    const skip = currentPage * pageSize;
    const response = await fetch(
      `https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`
    );
    const data = await response.json();
    setProducts(data);
  }, [pageSize, currentPage]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const totalPages = Math.ceil(products?.total / pageSize);

  const productsToDisplay = products?.products || [];

  return (
    <div className="container">
      <h2 className="header">Products</h2>
      <div className="products-container">
        {productsToDisplay.map((product) => {
          const { id, title, price, rating, thumbnail } = product;
          return (
            <Product
              key={id}
              title={title}
              price={price}
              rating={rating}
              thumbnail={thumbnail}
            />
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default Products;
