import React, { createContext, useContext, useState } from "react";
import steamProducts from "./products-object/steamProducts"; // Adjust the path accordingly

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [data, setData] = useState(steamProducts);

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

  return (
    <StateContext.Provider value={{ data, toggleClick, controlAmount }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
