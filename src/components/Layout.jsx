import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { StateProvider, useStateContext } from "../StateContext";
import "../style/layout.css";
import Product from "./Product";
import Filter from "./Filter";

const Layout = ({ cat }) => {
  const { data, toggleClick, controlAmount } = useStateContext();
  const [filterLabel, setFilterLabel] = useState("all");
  const [list, setList] = useState(data);
  const filteredList = data.filter((product) => {
    return product.cat === filterLabel;
  });
  function handleClick(id) {
    toggleClick(id);
  }
  function handleControl(id, newAmount) {
    newAmount <= 0
      ? controlAmount(id, false, 0)
      : controlAmount(id, true, newAmount);
  }
  function handleFilter(label) {
    setFilterLabel(label);
  }
  useEffect(() => {
    console.log(filteredList);
    setList(filteredList);
  }, [filterLabel]);
  return (
    <>
      <div className="page-layout">
        <div className="product-layout">
          {list.map((product, index) =>
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
          <Filter prop={handleFilter} />
        </div>
      </div>
    </>
  );
};

export default Layout;
