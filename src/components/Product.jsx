import React, { useEffect, useState } from "react";
import "../style/product.css";

const Product = ({ prop, click, controller }) => {
  console.log(prop.amount);

  function handleClick(e) {
    if (e.target.getAttribute("product-button") === `${prop.id}`) {
      click(prop.id);
    }
  }
  function updateAmount(e) {
    if (
      e.target.getAttribute("product-button") === `${prop.id + "-controller"}`
    ) {
      console.log(e.target.textContent);
      if (e.target.textContent === "-") {
        controller(prop.id, prop.amount - 1);
      } else if (e.target.textContent === "+") {
        controller(prop.id, prop.amount + 1);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("click", updateAmount);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("click", updateAmount);
    };
  }, [prop.amount]);

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
          <span>{prop.amount}</span>
          <button product-button={prop.id + "-controller"}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
