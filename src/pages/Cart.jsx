import React, { useContext, useEffect } from "react";
import { ReactComponent as Plus } from "../media/plus.svg";
import { ReactComponent as Minus } from "../media/minus.svg";
import "../style/cart.css";
import "../style/product.css";
import { useStateContext } from "../StateContext";

const Cart = () => {
  const { data, controlAmount } = useStateContext();
  console.log("cart");
  console.log(data);

  useEffect(() => {
    data.map((product) => console.log(typeof product));
  }, [data]);
  return (
    <div className="cart-page">
      {data.map((product, index) => (
        <div key={index} className={product.amount === 0 ? "hide " : "cart"}>
          <div className="cart-left">
            <img src={product.img} alt={product.name} />
            <div className="cart-info">
              <span>{product.name}</span>
              <span>
                <b>{product.price.toLocaleString()} T</b> (per gift card)
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
                onClick={() =>
                  controlAmount(
                    product.id,
                    product.isClicked,
                    product.amount - 1
                  )
                }
                id="minus"
                product-button={product.id + "-controller"}
              >
                <Minus className="controller-button" id="minus" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
