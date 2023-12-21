import React, { useContext } from "react";
import { ReactComponent as Plus } from "../media/plus.svg";
import { ReactComponent as Minus } from "../media/minus.svg";
import steamProducts from "../products-object/steamProducts";
import "../style/cart.css";

const Cart = () => {
  const product = steamProducts[0];
  return (
    <div className="cart-page">
      <div key={product.id} className="cart">
        <div className="cart-left">
          <img src={product.img} alt={product.name} />
          <div className="cart-info">
            <span>{product.name}</span>
            <span>
              <b>{product.price.toLocaleString()} T</b> (per gift card)
            </span>
          </div>
        </div>
        {/* <div className="product-amount-control">
          <button
            onClick={() => handleAmountChange(product.id, product.amount + 1)}
            id="plus"
            product-button={product.id + "-controller"}
          >
            <Plus className="controller-button" id="plus" />
          </button>
          <span>{product.amount}</span>
          <button
            onClick={() => handleAmountChange(product.id, product.amount - 1)}
            id="minus"
            product-button={product.id + "-controller"}
          >
            <Minus className="controller-button" id="minus" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
