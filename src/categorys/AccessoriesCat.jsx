import React from "react";

const AccessoriesCat = () => {
  return (
    <>
      <div className="category">
        <a className="sub-category">PC</a>
        <a>Mouse</a>
        <a>Keyboards</a>
      </div>
      <div className="category">
        <a className="sub-category" href="">
          {" "}
          Console{" "}
        </a>
        <a href="">Controller cover</a>
        <a href="">Console stand</a>
      </div>
    </>
  );
};

export default AccessoriesCat;
