import React, { useEffect } from "react";
import { useContext } from "react";
import { StateProvider, useStateContext } from "../StateContext";
import "../style/layout.css";
import Product from "../components/Product";
import Filter from "../components/Filter";

const Layout = ({ cat }) => {
  const { data, toggleClick, controlAmount } = useStateContext();
  function handleClick(id) {
    toggleClick(id);
  }
  function handleControl(id, newAmount) {
    newAmount <= 0
      ? controlAmount(id, false, 0)
      : controlAmount(id, true, newAmount);
  }

  return (
    <>
      <div className="page-layout">
        <div className="product-layout">
          {data.map((product, index) =>
            product.cat === cat ? (
              <Product
                key={index}
                prop={product}
                click={handleClick}
                controller={handleControl}
              />
            ) : null
          )}
        </div>
        <div className="filter-container">
          <Filter />
        </div>
      </div>
    </>
  );
};

export default Layout;
