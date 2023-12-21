import React, { useEffect, useState } from "react";
import "../style/product.css";

const Product = ({ prop, click }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [productAmount, setProductAmount] = useState(0);

  function handleClick(e) {
    if (e.target.getAttribute("product-button") === `${prop.id}`) {
      click(prop.id);
      setIsClicked(true);
      setProductAmount(productAmount + 1);
    }
  }
  function updateAmount(e) {
    if (
      e.target.getAttribute("product-button") === `${prop.id + "-controller"}`
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
      <img src={prop.img} alt="" />
      <span>{prop.name}</span>
      <div>
        <span>{prop.price.toLocaleString()} T</span>
      </div>
      <div>
        <button
          product-button={prop.id}
          className={`${prop.isClicked ? "hide" : "add-button"}`}
        >
          Add to cart
        </button>
        <div
          className={`${prop.isClicked ? "product-amount-control" : "hide"}`}
        >
          <button product-button={prop.id + "-controller"}>+</button>
          <span>{productAmount}</span>
          <button product-button={prop.id + "-controller"}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
