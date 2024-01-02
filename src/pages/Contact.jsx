import React, { useEffect, useState } from "react";
import "../style/contact.css";
import Suggestion from "../components/Suggestion";

const Contact = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestion, setIsSuggestion] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    text: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    document.getElementById("submit").addEventListener("click", () => {
      if (formData.name != "" && formData.text != "") {
        setIsSuggestion(true);
        setIsSubmit(true);
        setSuggestions([...suggestions, formData]);
        setTimeout(() => {
          setIsSubmit(false);
        }, 1000);
        setFormData({ ...formData, text: "" });
      }
      return null;
    });
  }, [isSubmit, isSuggestion, suggestions, formData]);
  return (
    <>
      <div className="contact-page">
        <div className="form-container">
          <span>please enter your name and your suggestion down below </span>
          <form id="contact-form">
            <input
              name="name"
              placeholder="enter your name here ..."
              type="text"
              id="name"
              onChange={handleChange}
            />
            <textarea
              onChange={handleChange}
              name="text"
              cols="30"
              rows="10"
              placeholder="your suggestion ..."
              type="text"
              id="suggestion"
            />
            <button id="submit">Submit</button>
          </form>
        </div>
        <div className={isSuggestion ? "suggestion-field" : "hide"}>
          {suggestions.length != 0
            ? suggestions.map((suggestion) => (
                <Suggestion
                  name={suggestion.name}
                  suggestion={suggestion.text}
                />
              ))
            : null}
        </div>
        <div className={isSuggestion ? "hide" : "no-suggestion"}>
          <span>your suggestion history is empty</span>
        </div>
      </div>

      <div className={isSubmit ? "submit-massage" : "hide"}>
        <span>your massage has been submitted</span>
      </div>
    </>
  );
};

export default Contact;
