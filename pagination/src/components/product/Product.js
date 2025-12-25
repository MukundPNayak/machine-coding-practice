import React from "react";

import "./product.css";

const Product = ({ title, price, rating, thumbnail }) => {
  return (
    <div className="product-item">
      <img className="product-image" src={thumbnail} alt={title} />
      <div>
        <span className="product-title">{title} - </span>
        <span className="product-price">${price}</span>
      </div>
      <span className="product-rating">{rating} stars</span>
    </div>
  );
};

export default Product;
