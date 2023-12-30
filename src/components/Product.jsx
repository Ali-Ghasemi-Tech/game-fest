import React, { useEffect, useState } from "react";
import "../style/product.css";
import { ReactComponent as Plus } from "../media/plus.svg";
import { ReactComponent as Minus } from "../media/minus.svg";
import { useStateContext } from "../StateContext";

const Product = ({ prop, click, controller }) => {
  const { toggleClick } = useStateContext();
  function handleClick(e) {
    if (e.target.getAttribute("product-button") === prop.id) {
      click(prop.id);
      console.log(prop.id);
    }
  }
  function updateAmount(e) {
    if (
      e.target.getAttribute("product-button") === `${prop.id + "-controller"}`
    ) {
      if (e.target.id === "minus") {
        controller(prop.id, prop.amount - 1);
      } else if (e.target.id === "plus") {
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
  }, [prop.amount, toggleClick]);

  return (
    <div className="product-container">
      <div className="img-container">
        <img src={prop.img} alt="" />
      </div>
      <div className="description">
        <span className="product-name">{prop.name}</span>
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
            <button id="plus" product-button={prop.id + "-controller"}>
              <Plus
                product-button={prop.id + "-controller"}
                className="controller-button"
                id="plus"
              />
            </button>
            <span>{prop.amount}</span>
            <button id="minus" product-button={prop.id + "-controller"}>
              <Minus
                product-button={prop.id + "-controller"}
                className="controller-button"
                id="minus"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
