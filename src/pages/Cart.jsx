import React, { useContext, useEffect } from "react";
import { ReactComponent as Plus } from "../media/plus.svg";
import { ReactComponent as Minus } from "../media/minus.svg";
import "../style/cart.css";
import "../style/product.css";
import { useStateContext } from "../StateContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { data, controlAmount, totalPrice, totalProduct } = useStateContext();

  return (
    <div className="cart-page">
      {data.map((product, index) => (
        <div key={index} className={product.amount === 0 ? "hide" : "cart"}>
          <div className="cart-left">
            <div className="cart-img-container">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="cart-info">
              <span className="cart-product-name">{product.name}</span>
              <span>
                <b>{product.price.toLocaleString()} T</b> (per 1 product)
              </span>
            </div>
          </div>
          <div className="cart-controller-container">
            <div className="product-amount-control">
              <button
                onClick={() =>
                  controlAmount(
                    product.id,
                    product.isClicked,
                    product.amount + 1
                  )
                }
                id="plus"
                product-button={product.id + "-controller"}
              >
                <Plus className="controller-button" id="plus" />
              </button>
              <span>{product.amount}</span>
              <button
                onClick={function () {
                  if (product.amount === 1) {
                    controlAmount(product.id, false, 0);
                  } else {
                    controlAmount(
                      product.id,
                      product.isClicked,
                      product.amount - 1
                    );
                  }
                }}
                id="minus"
                product-button={product.id + "-controller"}
              >
                <Minus className="controller-button" id="minus" />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className={totalProduct === 0 ? "empty-cart" : "hide"}>
        <span>you have no products in your cart </span>
        <Link to="/home">
          <button className="add-button">Shop</button>
        </Link>
      </div>
      <div className={totalPrice === 0 ? "hide" : "price-section"}>
        <span>Total Price:</span>
        <span>{totalPrice.toLocaleString()} T</span>
      </div>
      <div className={totalProduct === 0 ? "hide" : "price-section"}>
        <span>Number of products:</span>
        <span>{totalProduct}</span>
      </div>
    </div>
  );
};

export default Cart;
