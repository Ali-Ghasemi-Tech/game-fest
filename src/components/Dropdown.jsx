import React, { useEffect, useState } from "react";

const Dropdown = ({ category }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  function handleButtonClick() {
    setIsDropdownActive((prev) => !prev);
  }

  function handleDocumentClick(e) {
    if (e.target.id !== category) {
      setIsDropdownActive(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [category]);

  return (
    <div
      data-dropdown
      className={`dropdown ${isDropdownActive ? "active" : ""}`}
    >
      <button
        onClick={handleButtonClick}
        id={category}
        className="dropdown-button"
      >
        {category === "giftCards" ? "Gift cards" : "Accessories"}
      </button>
      <div className="dropdown-menu">
        <div className="pc-gifts">
          <a className="pc-cat">PC</a>
          <a>Steam</a>
          <a>Origins</a>
        </div>
        <div className="console-gifts">
          <a className="console-cat" href="">
            Console
          </a>
          <a href="">Play Station</a>
          <a href="">Xbox</a>
          <a href="">Nintendo</a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
