import React from "react";
import "../style/contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <span>please enter your name and your suggestion down below </span>
        <form action="">
          <input placeholder="enter your name here ..." type="text" id="name" />
          <textarea
            cols="30"
            rows="10"
            placeholder="your suggestion ..."
            type="text"
            id="suggestion"
          />
          <button id="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
