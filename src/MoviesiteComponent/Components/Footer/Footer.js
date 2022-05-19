import React from "react";
import "./Footer.css";
import data from "./data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="breakline"></div>
      <div className="footer-section">
        <h1>Questions? Contact us.</h1>
        <div className="footer-links-container">
          {data.map((item) => {
            return <li>{item}</li>;
          })}
        </div>
        <h4>Netflix Myanmar(burma)</h4>
      </div>
    </div>
  );
};

export default Footer;
