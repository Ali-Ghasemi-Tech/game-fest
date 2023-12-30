import "../style/navbar.css";
import { ReactComponent as Cart } from "../media/cart.svg";
import Dropdown from "./Dropdown";
import GiftCardsCat from "../categorys/GiftCardsCat";
import AccessoriesCat from "../categorys/AccessoriesCat";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useStateContext } from "../StateContext";

const Navbar = () => {
  const { totalProduct } = useStateContext();
  const [cartNumber, setCartNumber] = useState(0);
  useEffect(() => {
    setCartNumber(totalProduct);
  }, [totalProduct]);
  return (
    <>
      <div id="navbar" className="">
        <div id="nav-right">
          <Link to="/home" id="shop-title">
            Game Fest Shop
          </Link>
          <div id="link-list">
            <Dropdown catElement={<GiftCardsCat />} category={"giftCards"} />
            <Dropdown
              catElement={<AccessoriesCat />}
              category={"accessories"}
            />
            <Link to="/contact">Contact us</Link>
          </div>
        </div>
        <div id="nav-left">
          <Link to="/cart" id="cart">
            <Cart
              className="cart-icon"
              style={{
                fill: "white",
                width: "auto",
                padding: "1vw",
                zIndex: "20",
              }}
            />
            <div className="cart-number">{cartNumber}</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
