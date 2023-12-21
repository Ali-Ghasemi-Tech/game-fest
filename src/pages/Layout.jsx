import React, { useEffect } from "react";
import { useContext } from "react";
import { useStateContext } from "../StateContext";
import "../style/layout.css";
import Product from "../components/Product";

const Layout = () => {
  const { data, toggleClick, controlAmount } = useStateContext();
  function handleClick(id) {
    toggleClick(id);
  }
  function handleControl(id, newAmount) {
    newAmount === 0
      ? controlAmount(id, false, 0)
      : controlAmount(id, true, newAmount);
  }
  // useEffect(() => {
  //   console.log("render");
  // }, data);
  return (
    <>
      <div className="page-layout">
        <div className="product-layout">
          {data.map((product, index) => (
            <Product
              key={index}
              prop={product}
              click={handleClick}
              controller={handleControl}
            />
          ))}
        </div>
        <div className="filter-container"></div>
      </div>
    </>
  );
};

export default Layout;
