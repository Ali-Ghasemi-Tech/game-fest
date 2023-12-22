import React, { createContext, useContext, useEffect, useState } from "react";
import steamProducts from "./products-object/steamProducts"; // Adjust the path accordingly

const StateContext = createContext();

export const StateProvider = ({ children, productList }) => {
  const [data, setData] = useState([]);
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
  useEffect(() => {
    setData(productList);
  }, [productList]);

  return (
    <StateContext.Provider value={{ data, toggleClick, controlAmount }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
