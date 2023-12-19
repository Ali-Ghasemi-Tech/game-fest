import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import "../style/layout.css";
import Product from "../components/Product";
import Steam from "../products-object/steamProducts.js";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="page-layout">
        <div className="product-layout">
          <Product products={Steam[0]} />
          <Product products={Steam[1]} />
          <Product products={Steam[2]} />
          <Product products={Steam[3]} />
        </div>
        <div className="filter-container">
          <Home />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
