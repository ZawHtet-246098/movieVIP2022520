import React, { useState } from "react";
import "./ForgetEmail.css";

const ForgetEmail = () => {
  const [showinfo, setShowinfo] = useState(true);
  const [close, setClose] = useState(false);

  const emailFunction = () => {
    setShowinfo(true);
  };
  const textFunction = () => {
    setShowinfo(false);
  };
  return (
    <div className="forget-email-page">
      <h1>Forgot Email/Password</h1>
      <p>How would you like to reset your password?</p>
      <div className="radio-container">
        <button className="email-radio-bottom" onClick={emailFunction}>
          <div className={`change-button ${showinfo && "active"}`}>
            <div></div>
          </div>
          <label htmlFor="email">Email</label>
        </button>
        <button className="textmessage-radio-bottom" onClick={textFunction}>
          <div className={`change-button ${!showinfo && "active"}`}>
            <div></div>
          </div>
          <label htmlFor="email">Text Message (SMS)</label>
        </button>
      </div>
      <p>
        {showinfo
          ? "We will send you an email with instructions on how to reset your password."
          : "We will text you a verification code to reset your password. Message and data rates may apply."}
      </p>
      <div className="form">
        <input
          type="text"
          name="email"
          placeholder={`${showinfo ? "name@example.com" : "+95"}`}
        />
        <button>{`${showinfo ? "Email Me" : "Send Me"}`}</button>
      </div>
      <a href="#">I don't remember my email or phone.</a>
      <div className="footer-text">
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <span>
          <a href="#">Learn more</a>
        </span>
      </div>
    </div>
  );
};

export default ForgetEmail;
