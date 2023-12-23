import React, { createContext, useContext, useEffect, useState } from "react";
import steamProducts from "./products-object/steamProducts"; // Adjust the path accordingly

const StateContext = createContext();

export const StateProvider = ({ children, productList }) => {
  const [data, setData] = useState([]);

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
  console.log(data);
  function mergeArray() {
    setData(data.concat(productList));
  }

  useEffect(() => {
    if (data.length !== 0) {
      const isArrayCat = data.every((product) => {
        console.log(product.cat);
        return productList[0].cat !== product.cat;
      });
      if (isArrayCat) mergeArray();
    } else {
      setData(productList);
    }
  }, [productList]);

  return (
    <StateContext.Provider value={{ data, toggleClick, controlAmount }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
