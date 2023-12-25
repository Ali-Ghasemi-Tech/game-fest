import React from "react";
import "../style/filter.css";
import Slider from "./Slider";

const Filter = () => {
  return (
    <>
      {/*  */}
      <div className="filter-content">
        <h2>Category</h2>
        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">All</span>
        </label>
        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">steam</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">origin</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">Mouse</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">Keyboard</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">Controller cover</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">Console stand</span>
        </label>
      </div>
      {/*  */}
      <div className="filter-content">
        <h2>Section</h2>

        <label className="sidebar-label">
          <input type="radio" className="input" name="section" />
          <span className="checkbox"></span>
          <span className="text">All</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="section" />
          <span className="checkbox"></span>
          <span className="text">Gift cards</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="section" />
          <span className="checkbox"></span>
          <span className="text">Accessories</span>
        </label>
      </div>
      {/*  */}
      <div className="filter-content">
        <h2>Platform</h2>

        <label className="sidebar-label">
          <input type="radio" className="input" name="platform" />
          <span className="checkbox"></span>
          <span className="text">All</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="platform" />
          <span className="checkbox"></span>
          <span className="text">PC</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="platform" />
          <span className="checkbox"></span>
          <span className="text">Console</span>
        </label>
        <Slider />
      </div>
    </>
  );
};

export default Filter;
