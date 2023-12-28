import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import "../style/slider.css";

const Slider = ({ value }) => {
  const min = 20000;
  const max = 5000000;
  const [values, setValues] = useState([min, max]);

  function handleChange(newValue) {
    console.log(newValue);
    setValues(newValue);
  }

  useEffect(() => {
    document.getElementById("min").addEventListener("input", (e) => {
      setValues([e.target.value, values[1]]);
    });
    document.getElementById("max").addEventListener("input", (e) => {
      setValues([values[0], e.target.value]);
    });
    value(values);
    return (
      document.getElementById("min").removeEventListener("input", (e) => {
        setValues([e.target.value, values[1]]);
      }),
      document.getElementById("max").removeEventListener("input", (e) => {
        setValues([values[0], e.target.value]);
      })
    );
  }, [values]);

  return (
    <>
      <h2>Price range</h2>
      <div className="slider-container">
        <div className="text-input-container">
          <div className="input-text">
            <input id="min" className="text" type="text" value={values[0]} />
            <span className="text">T</span>
          </div>
          <div className="input-text">
            <input id="max" className="text" type="text" value={values[1]} />
            <span className="text">T</span>
          </div>
        </div>
        <ReactSlider
          step={10000}
          value={values}
          min={min}
          max={max}
          onChange={handleChange}
          className="slider"
        />
      </div>
    </>
  );
};

export default Slider;
