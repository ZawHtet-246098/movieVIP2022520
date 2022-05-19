import React, { useRef } from "react";
import "./Movie.css";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";

const ImgApi = "https://image.tmdb.org/t/p/w1280";

const Movies = ({ title, release_date, poster_path, vote_average, id }) => {
  return (
    <div className="singlemainmovie">
      <div className="mainmovieimg">
        <Link to={`/video/mainmovie/${id}`}>
          <img src={ImgApi + poster_path} alt={title} />
        </Link>

        <div className="mainmovierating">
          <AiTwotoneStar />
          {vote_average}
        </div>
      </div>

      <div className="main-movie-info">
        {/* let newtitleString = title.slice(0, 11) + "..."; */}
        <h3>{title.length > 15 ? title.slice(0, 16) + "..." : title}</h3>
        <h5>{release_date}</h5>
      </div>

      <button className="addtowatchlistofmainmovie">
        Add to watch list{" "}
        <span>
          <BsBookmarksFill />
        </span>
      </button>
    </div>
  );
};

export default Movies;
