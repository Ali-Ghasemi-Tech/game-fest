import React, { useState } from "react";
import ReactSlider from "react-slider";
import "../style/slider.css";

const Slider = () => {
  const min = 100;
  const max = 12000;
  const [values, setValues] = useState([min, max]);
  return (
    <>
      <h2>Price range</h2>
      <div className="slider-container">
        <div className="text-input-container">
          <div className="input-text">
            <input className="text" type="text" value={min} />
            <span className="text">T</span>
          </div>
          <div className="input-text">
            <input className="text" type="text" value={max} />
            <span className="text">T</span>
          </div>
        </div>
        <ReactSlider
          value={values}
          min={min}
          max={max}
          onChange={setValues}
          className="slider"
        />
      </div>
    </>
  );
};

export default Slider;
