import React, { useEffect } from "react";
// import "./MainMovieDetail.css";
// import data from "../RandomVideoPage/randomvideodata";
import { useParams } from "react-router-dom";
import { getByTitle } from "@testing-library/react";
import Navbar from "../../../Components/Navbar/Navbar";
import { BsBookmarksFill, BsFileEarmarkPlayFill } from "react-icons/bs";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useGlobalContext } from "../../../context";

const ImgApi = "https://image.tmdb.org/t/p/w1280";

const MainMovieDetail = () => {
  const { movies } = useGlobalContext();
  const [mainMovieDetail, setMainMovieDetail] = React.useState("dioe");

  //   const { title, release_date, poster_path, vote_average } = movies[1];
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    let newState = movies.map((item, index) => {
      console.log(item.id);
      console.log(id);
      if (id == item.id) {
        console.log("ture");
        setMainMovieDetail(item);
      }
      //   if (id === item.id) {
      //     return "treu";
      //   }
      //   if (id !== item.id) {
      //     return "false";
      //   }
    });
    // setMainMovieDetail(newState);
  }, id);
  console.log(mainMovieDetail);
  const { title, release_date, poster_path, vote_average, overview } =
    mainMovieDetail;

  console.log(poster_path);

  return (
    <div className="singlevideodetailpage">
      <Navbar />
      <div className="center-detail-box">
        <div className="detail-firstdiv">
          <img src={ImgApi + poster_path} alt={title} />
        </div>
        <div>
          <h3 className="detailPageTitle">{title}</h3>

          <p className="mb-0 imdb">
            IMDB: <span style={{ color: "red" }}>{vote_average}</span>/10
          </p>
          <p>ReleaseDate: {release_date}</p>

          <p>Desc: {overview}</p>
          <button className="addtowatchlist">
            Add to the watch list{" "}
            <span>
              <BsBookmarksFill />
            </span>
          </button>
        </div>
        <button className="trailarbutton">
          <span>
            <BsFileEarmarkPlayFill />
          </span>
          Watch Trailer
        </button>

        <button className="downloadbutton">
          Download
          <span>
            <FaCloudDownloadAlt />
          </span>
        </button>
      </div>
    </div>
  );
};

export default MainMovieDetail;
