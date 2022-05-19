import React from "react";
import logo from "./logo.png";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import { social, links } from "./data";
import "./OpenSidebar.css";

const OpenSidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="sidebar-logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar-links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id} onClick={closeSidebar}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OpenSidebar;
