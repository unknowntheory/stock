import React from "react";
import "./shoeIndex.css";

const ShoeIndex = ({ brand, style, quantity, upc }) => {
  return (
    <div className="shoe-wrapper">
      <img
        src="https://airjordanreleasedate.com/wp-content/uploads/2018/02/Nike-SB-Dunk-Low-Yellow-Lobster.jpg"
        className="shoe-picture"
      />
      <div className="shoe-brand">{brand}</div>
      <div className="shoe-style">{style}</div>
      <div className="shoe-qty">Quantity: {quantity}</div>
      <div className="shoe-upc">UPC: {upc}</div>
    </div>
  );
};

export default ShoeIndex;
