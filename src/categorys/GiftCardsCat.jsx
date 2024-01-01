import React from "react";
import { Link } from "react-router-dom";

const GiftCardsCat = () => {
  return (
    <>
      <div className="category">
        <Link className="sub-category">PC</Link>
        <Link to="/gift-cards/pc/steam">Steam</Link>
        <Link to="/gift-cards/pc/origin">Origin</Link>
      </div>
      <div className="category">
        <Link className="sub-category">Console</Link>
        <Link to="/gift-cards/console/playstation">Play Station</Link>
        <Link to="/gift-cards/console/xbox">Xbox</Link>
        <Link to="/gift-cards/console/nintendo">Nintendo</Link>
      </div>
    </>
  );
};

export default GiftCardsCat;
