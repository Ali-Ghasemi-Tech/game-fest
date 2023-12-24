import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";
import React, { createContext, useContext, useEffect, useState } from "react";
const StateContext = createContext();

export const StateProvider = ({ children, productList }) => {
  const [data, setData] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

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

  function mergeArray() {
    setData(data.concat(productList));
  }

  useEffect(() => {
    if (data.length !== 0) {
      const isArrayCat = data.every((product) => {
        return productList[0].cat !== product.cat;
      });
      if (isArrayCat) mergeArray();
    } else {
      setData(productList);
    }
    controlTotalAmount();
  }, [productList, data]);

  return (
    <StateContext.Provider
      value={{ data, toggleClick, controlAmount, totalProduct }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
