import React from "react";
import "./SingleOne.css";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

const SingleOne = ({ title, img, rating, year, id }) => {
  // let newtitleString = title.slice(0, 11) + "...";
  // console.log(newtitleString);
  return (
    <Link to={`/video/${id}`} className="wholerandommovie">
      <div className="randomeachdiv text-white">
        <div style={{ position: "relative" }}>
          <Link to={`/video/${id}`} className="imgborder">
            <img src={img} alt="title" />
          </Link>
          {/* <Link to={`/video/${id}`}>
            <button className="randomvideodetail">Details</button>
          </Link> */}
          <p>{title.length > 11 ? title.slice(0, 10) + "..." : title}</p>
          <p className="singleoneyearandrating">
            {year} /{" "}
            <span>
              <AiTwotoneStar />
              {rating}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleOne;
