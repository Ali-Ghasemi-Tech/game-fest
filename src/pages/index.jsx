import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import "../style/index.css";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="index-page">
        <ProductSlider category={"mouse"} />
        <div className="empty-cart">
          <Link to="/shop">
            <button className="add-button">Go To Shop</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
