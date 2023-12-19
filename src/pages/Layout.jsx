import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import "../style/layout.css";
import Product from "../components/Product";
import Steam from "../products-object/steamProducts.js";

const Layout = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Steam);
  }, []);

  return (
    <>
      <Navbar />
      <div className="page-layout">
        <div className="product-layout">
          {products.map((product, index) => (
            <Product key={index} products={product} />
          ))}
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
