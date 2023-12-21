import React from "react";
import { useContext } from "react";
import { useStateContext } from "../StateContext";
import "../style/layout.css";
import Product from "../components/Product";

const Layout = () => {
  const { data, toggleClick } = useStateContext();
  function handleClick(id) {
    toggleClick(id);
  }
  return (
    <>
      <div className="page-layout">
        <div className="product-layout">
          {data.map((product, index) => (
            <Product key={index} prop={product} click={handleClick} />
          ))}
        </div>
        <div className="filter-container"></div>
      </div>
    </>
  );
};

export default Layout;
