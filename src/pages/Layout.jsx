import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import "../style/layout.css";
import Product from "../components/Product";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="page-layout">
        <div className="product-layout">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
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
