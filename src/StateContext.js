import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";
import React, { createContext, useContext, useEffect, useState } from "react";
const StateContext = createContext();

export const StateProvider = ({ children, productList }) => {
  const [data, setData] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(data);

  function toggleClick(id) {
    setData((prevData) =>
      prevData.map((product) =>
        product.id === id ? { ...product, isClicked: true, amount: 1 } : product
      )
    );
  }

  function controlAmount(id, checkIsClicked, newAmount) {
    setData((prevData) =>
      prevData.map((product) =>
        product.id === id
          ? { ...product, isClicked: checkIsClicked, amount: newAmount }
          : product
      )
    );
  }

  function controlTotalAmount() {
    let total = 0;
    const amounts = data.map((product) => product.amount);
    amounts.forEach((amount) => {
      total += amount;
    });
    setTotalProduct(total);
  }

  function controlTotalPrice() {
    let total = 0;
    const prices = data.map((product) => product.amount * product.price);
    prices.forEach((price) => {
      total += price;
    });
    setTotalPrice(total);
  }

  useEffect(() => {
    if (data.length === 0) {
      setData(productList);
    }
    controlTotalAmount();
    controlTotalPrice();
  }, [productList, data]);

  return (
    <StateContext.Provider
      value={{ data, toggleClick, controlAmount, totalProduct, totalPrice }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
