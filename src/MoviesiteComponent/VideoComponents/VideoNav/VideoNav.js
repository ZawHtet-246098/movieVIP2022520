import React, { useState } from "react";
import "./VideoNav.css";
import logo from "./logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

// const searchbar = document.getElementsByClassName("searchbarform");
// window.onscroll = () => {
//   searchbar.classList.add("active");
// };
// console.log(searchbar);

const VideoNavbar = () => {
  const {
    openSidebar,
    searchTerm,
    handleChange,
    handleSubmit,
    openSearchbar,
    setOpenSearchbar,
  } = useGlobalContext();
  console.log(openSearchbar);

  return (
    <div
      className={openSearchbar ? "maindivofvideonav" : "maindivofvideonav open"}
    >
      <div className="videonavbar">
        <div className="videologo">
          <img src={logo} alt="logo" className="logo-image" />
        </div>
        <ul>
          <li>
            <a>Movie</a>
          </li>
          <li>Series</li>
          <li>Vpn-plan</li>
        </ul>
        <div className="videoSearchbar">
          <form onSubmit={handleSubmit} className="searchbarform">
            <input
              type="text"
              name="text"
              className="serachtext"
              placeholder="search.."
              value={searchTerm}
              onChange={handleChange}
              autocomplete="off"
            />
          </form>
        </div>
        <div>
          {openSearchbar ? (
            <FaSearch
              className="search-icon"
              onClick={() => setOpenSearchbar(!openSearchbar)}
            />
          ) : (
            <FaTimes
              className="search-icon"
              onClick={() => setOpenSearchbar(!openSearchbar)}
            />
          )}

          <button className="sidebar-toggle" onClick={openSidebar}>
            <BiMenuAltRight />
          </button>
        </div>
      </div>
      <div
        className={
          openSearchbar ? "videoSearchbartwo" : "videoSearchbartwo open"
        }
      >
        <form
          onSubmit={handleSubmit}
          className={
            openSearchbar ? "searchbarformtwo" : "searchbarformtwo open"
          }
        >
          <input
            type="text"
            name="text"
            className="serachtext"
            placeholder="search.."
            value={searchTerm}
            onChange={handleChange}
            autocomplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default VideoNavbar;
