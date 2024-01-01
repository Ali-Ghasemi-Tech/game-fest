import React from "react";
import { Link } from "react-router-dom";

const AccessoriesCat = () => {
  return (
    <>
      <div className="category">
        <Link className="sub-category">PC</Link>
        <Link to="/accessories/pc/mouse">Mouse</Link>
        <Link to="/accessories/pc/keyboard">Keyboards</Link>
      </div>
      <div className="category">
        <Link className="sub-category">Console</Link>
        <Link to="/accessories/console/controller-cover">Controller cover</Link>
        <Link to="/accessories/console/console-stand">Console stand</Link>
      </div>
    </>
  );
};

export default AccessoriesCat;
