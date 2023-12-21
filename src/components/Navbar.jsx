import "../style/navbar.css";
import { ReactComponent as Cart } from "../media/cart.svg";
import Dropdown from "./Dropdown";
import GiftCardsCat from "../categorys/GiftCardsCat";
import AccessoriesCat from "../categorys/AccessoriesCat";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
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
            <a href="">Contact us</a>
          </div>
        </div>
        <div id="nav-left">
          <Link to="/cart" id="cart">
            <Cart style={{ fill: "white", width: "auto", padding: "1vw" }} />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
