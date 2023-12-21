import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import "../style/layout.css";
import Product from "../components/Product";

const Layout = ({ productArray }) => {
  console.log(productArray);
  return (
    <>
      <div className="page-layout">
        <div className="product-layout">
          {productArray.map((product, index) => (
            <Product key={index} products={product} />
          ))}
        </div>
        <div className="filter-container"></div>
      </div>
    </>
  );
};

export default Layout;
