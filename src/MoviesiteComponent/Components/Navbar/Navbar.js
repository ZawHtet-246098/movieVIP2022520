import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { IoLanguage } from "react-icons/io5";
import { BsFillCaretDownFill } from "react-icons/bs";
import userEvent from "@testing-library/user-event";

const Navbar = () => {
  const { data, setOpenSwitch } = useGlobalContext();
  const refContainer = useRef(null);

  const handleChange = () => {
    if (refContainer.current.value === "Español") {
      setOpenSwitch(true);
      console.log("setSwitchforlanguagetre");
    }
    if (refContainer.current.value === "english") {
      setOpenSwitch(false);
      console.log("setswitchforlanguagefalse");
    }
    console.log(refContainer.current.value);
  };
  return (
    <nav className="navbar-container">
      <div className="nav-center">
        <div className="navbar-first-section">
          <img src={logo} alt="logo" className="logo-image" />
        </div>
        <div className="button">
          <div className="languagesdiv">
            <select
              name="languages"
              className="beforeicon"
              ref={refContainer}
              onChange={handleChange}
            >
              <option value="english">English</option>
              <option value="Español">日本語</option>
            </select>
          </div>
          <button type="button" className="signin-button">
            <Link to="/signin">{data.signin}</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
