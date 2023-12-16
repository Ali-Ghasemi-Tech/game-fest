import React, { useState, useEffect } from "react";
import "../style/navbar.css";
import { ReactComponent as Cart } from "../media/cart.svg";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div id="navbar" className="">
      <div id="nav-right">
        <span id="shop-title">Game Fest Shop</span>
        <div id="link-list">
          <Dropdown category={"giftCards"} />
          <Dropdown category={"accessories"} />
          <a href="">Contact us</a>
        </div>
      </div>
      <div id="nav-left">
        <a id="cart" href="">
          <Cart style={{ fill: "white", width: "auto", padding: "1vw" }} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
