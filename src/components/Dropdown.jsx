import React, { useEffect, useState } from "react";

const Dropdown = ({ category, catElement }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  function handleButtonClick() {
    setIsDropdownActive((prev) => !prev);
  }

  function handleDocumentClick(e) {
    const dropdown = document.getElementById("dropdown");
    const dropdownMenu = document.getElementById(category + "menu");

    if (
      e.target.id === category ||
      e.target.closest(category + "-") === dropdown ||
      dropdownMenu.contains(e.target)
    ) {
      return;
    } else if (
      e.target.id !== category ||
      e.target.closest(category + "-") !== dropdown
    ) {
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
      id="dropdown"
      data-dropdown={category + "-"}
      className={`dropdown ${isDropdownActive ? "active" : ""}`}
    >
      <button
        onClick={handleButtonClick}
        id={category}
        className="dropdown-button"
      >
        {category === "giftCards" ? "Gift cards" : "Accessories"}
      </button>
      <div id={category + "menu"} className="dropdown-menu">
        {catElement}
      </div>
    </div>
  );
};

export default Dropdown;
