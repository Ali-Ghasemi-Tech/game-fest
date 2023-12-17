import React from "react";

const GiftCardsCat = () => {
  return (
    <>
      <div className="category">
        <a className="sub-category">PC</a>
        <a>Steam</a>
        <a>Origins</a>
      </div>
      <div className="category">
        <a className="sub-category" href="">
          {" "}
          Console{" "}
        </a>
        <a href="">Play Station</a>
        <a href="">Xbox</a>
        <a href="">Nintendo</a>
      </div>
    </>
  );
};

export default GiftCardsCat;
