import React, { useEffect, useState } from "react";
import "../style/product.css";

const Product = ({ products }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [productAmount, setProductAmount] = useState(0);
  function handleClick(e) {
    if (e.target.getAttribute("product-button") === `${products.id}`) {
      setIsClicked(true);
      setProductAmount(productAmount + 1);
    }
  }
  function updateAmount(e) {
    if (
      e.target.getAttribute("product-button") ===
      `${products.id + "-controller"}`
    ) {
      console.log(e.target.textContent);
      if (e.target.textContent === "-") {
        setProductAmount(productAmount - 1);
      } else if (e.target.textContent === "+") {
        setProductAmount(productAmount + 1);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("click", updateAmount);
    if (productAmount === 0) setIsClicked(false);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("click", updateAmount);
    };
  }, [productAmount]);

  return (
    <div className="product-container">
      <img src={products.img} alt="" />
      <span>{products.name}</span>
      <div>
        <span>{products.price.toLocaleString()} T</span>
      </div>
      <div>
        <button
          product-button={products.id}
          className={`${isClicked ? "hide" : "add-button"}`}
        >
          Add to cart
        </button>
        <div className={`${isClicked ? "product-amount-control" : "hide"}`}>
          <button product-button={products.id + "-controller"}>+</button>
          <span>{productAmount}</span>
          <button product-button={products.id + "-controller"}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
