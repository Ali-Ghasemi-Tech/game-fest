import React, { useEffect } from "react";
import "../style/contact.css";

const Suggestion = ({ name, suggestion, date }) => {
  return (
    <>
      <div id="suggestion-container">
        <span id="suggestion-name">{name}</span>
        <span id="suggestion-text">{suggestion}</span>
        <span id="suggestion-date">{date}</span>
      </div>
    </>
  );
};

export default Suggestion;
