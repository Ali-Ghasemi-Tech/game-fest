import "../style/navbar.css";
import { ReactComponent as Cart } from "../media/cart.svg";
import Dropdown from "./Dropdown";
import GiftCardsCat from "../categorys/GiftCardsCat";
import AccessoriesCat from "../categorys/AccessoriesCat";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="">
      <div id="nav-right">
        <Link to="/" id="shop-title">
          Game Fest Shop
        </Link>
        <div id="link-list">
          <Dropdown catElement={<GiftCardsCat />} category={"giftCards"} />
          <Dropdown catElement={<AccessoriesCat />} category={"accessories"} />
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
