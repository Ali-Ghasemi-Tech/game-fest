import React, { createContext, useContext, useState } from "react";
import steamProducts from "./products-object/steamProducts"; // Adjust the path accordingly

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [data, setData] = useState(steamProducts);

  const toggleClick = (id) => {
    setData((prevData) =>
      prevData.map((product) =>
        product.id === id ? { ...product, isClicked: true, amount: 1 } : product
      )
    );
  };

  return (
    <StateContext.Provider value={{ data, toggleClick }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
