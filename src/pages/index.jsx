import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <Navbar />
      <div className={"empty-cart"}>
        <Link to="/shop">
          <button className="add-button">Go To Shop</button>
        </Link>
      </div>
    </>
  );
};

export default index;
