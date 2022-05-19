import React from "react";
import "./Home.css";
import { FiChevronsRight } from "react-icons/fi";
import { useGlobalContext } from "../../context";
const Home = () => {
  const { data } = useGlobalContext();
  return (
    <div className="home-section">
      <h1>{data.homeh1}</h1>
      <h3>{data.homeh3}</h3>
      <p>{data.homep}</p>
      <div className="form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Email address"
          required
        />
        <button type="submit" className="start-button">
          {data.homebutton}
          <span>
            <FiChevronsRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
