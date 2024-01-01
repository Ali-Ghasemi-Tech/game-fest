import React, { useEffect, useState } from "react";
import "../style/contact.css";

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    document.getElementById("submit").addEventListener("click", () => {
      setIsSubmit(true);
      document.getElementById("name").value = "";
      document.getElementById("suggestion").value = "";
      setTimeout(() => {
        setIsSubmit(false);
      }, 1000);
    });
  }, []);
  return (
    <>
      <div className="contact-container">
        <span>please enter your name and your suggestion down below </span>
        <form id="contact-form">
          <input
            placeholder="enter your name here ..."
            type="text"
            id="name"
          ></input>
          <textarea
            cols="30"
            rows="10"
            placeholder="your suggestion ..."
            type="text"
            id="suggestion"
          ></textarea>
          <button id="submit">Submit</button>
        </form>
      </div>
      <div className={isSubmit ? "submit-massage" : "hide"}>
        <span>your massage has been submitted</span>
      </div>
    </>
  );
};

export default Contact;
