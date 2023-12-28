import React, { useEffect, useState } from "react";
import { StateProvider, useStateContext } from "../StateContext";
import "../style/layout.css";
import Product from "./Product";
import Filter from "./Filter";

const Layout = ({ cat }) => {
  const { data, toggleClick, controlAmount } = useStateContext();
  const [filterLabel, setFilterLabel] = useState("all");
  const [filterSection, setFilterSection] = useState("all");
  const [filterPlatform, setFilterPlatform] = useState("all");
  const [list, setList] = useState([]);
  const [priceFilter, setPriceFilter] = useState([20000, 5000000]);
  const filteredList = data.filter((product) => {
    if (
      filterLabel === "all" &&
      filterSection === "all" &&
      filterPlatform === "all"
    ) {
      return filterPrice(product.price, priceFilter[0], priceFilter[1]);
    } else if (
      product.cat === filterLabel &&
      filterPlatform === "all" &&
      filterSection === "all"
    ) {
      return filterPrice(product.price, priceFilter[0], priceFilter[1]);
    } else if (product.section === filterSection && filterPlatform === "all") {
      return filterPrice(product.price, priceFilter[0], priceFilter[1]);
    } else if (product.platform === filterPlatform && filterSection === "all") {
      return filterPrice(product.price, priceFilter[0], priceFilter[1]);
    } else if (
      product.section === filterSection &&
      product.platform === filterPlatform
    ) {
      return filterPrice(product.price, priceFilter[0], priceFilter[1]);
    }
  });
  function handleClick(id) {
    toggleClick(id);
  }
  function handleControl(id, newAmount) {
    newAmount <= 0
      ? controlAmount(id, false, 0)
      : controlAmount(id, true, newAmount);
  }
  function handleFilter(label, section, platform) {
    setFilterLabel(label);
    setFilterSection(section);
    setFilterPlatform(platform);
  }
  function sliderValue(newValue) {
    setPriceFilter(newValue);
  }
  function filterPrice(price, min, max) {
    return price >= min && price <= max;
  }
  useEffect(() => {
    setList(filteredList);
    console.log(filteredList);
  }, [filterPlatform, filterSection, filterLabel, data, cat, priceFilter]);
  return (
    <>
      <div className="page-layout">
        <div className="product-layout">
          {list.map((product) => {
            if (product.cat === cat) {
              return product.cat === cat ? (
                <Product
                  prop={product}
                  click={handleClick}
                  controller={handleControl}
                />
              ) : null;
            }
            if (cat === "all")
              return (
                <Product
                  prop={product}
                  click={handleClick}
                  controller={handleControl}
                />
              );
          })}
        </div>
        <div className="filter-container">
          <Filter sliderValue={sliderValue} prop={handleFilter} />
        </div>
      </div>
    </>
  );
};

export default Layout;
