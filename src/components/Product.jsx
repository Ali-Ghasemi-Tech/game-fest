import React, { useEffect, useState } from "react";
import "../style/product.css";

const Product = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [productAmount, setProductAmount] = useState(0);
  const products = {
    img: "https://m.media-amazon.com/images/I/81JXr-AQJQL._AC_SY741_.jpg",
    name: "steam gift card 20$",
    price: 50000,
    id: "steam",
  };
  function handleClick(e) {
    if (e.target.getAttribute("product-button") === `${products.id}`) {
      setIsClicked(true);
      setProductAmount(productAmount + 1);
    }
  }
  function updateAmount(e) {
    console.log(e.target.textContent);
    if (e.target.textContent === "-") {
      setProductAmount(productAmount - 1);
    } else if (e.target.textContent === "+") {
      setProductAmount(productAmount + 1);
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
          product-button="steam"
          className={`${isClicked ? "hide" : "add-button"}`}
        >
          Add to cart
        </button>
        <div className={`${isClicked ? "product-amount-control" : "hide"}`}>
          <button>+</button>
          <span>{productAmount}</span>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
