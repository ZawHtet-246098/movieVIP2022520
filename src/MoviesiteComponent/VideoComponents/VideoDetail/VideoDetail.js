import React, { useEffect } from "react";
import "./VideoDetail.css";
import data from "../RandomVideoPage/randomvideodata";
import { useParams } from "react-router-dom";
import { getByTitle } from "@testing-library/react";
import Navbar from "../../Components/Navbar/Navbar";
import { BsBookmarksFill, BsFileEarmarkPlayFill } from "react-icons/bs";
import { FaCloudDownloadAlt } from "react-icons/fa";

const VideoDetail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = React.useState("");
  useEffect(() => {
    const zaw = () => {
      let { title, img, rating, year, type, desc, director, length, cast } =
        data[id - 1];
      let newDetail = {
        title,
        img,
        rating,
        year,
        type,
        desc,
        director,
        length,
        cast,
      };
      setDetailData(newDetail);
      // console.log(id);

      // console.log(data[id - 1]);
    };
    zaw();
  }, [id]);
  console.log(detailData);
  const { title, img, rating, year, type, desc, director, length, cast } =
    detailData;
  console.log(detailData.name);
  return (
    <div className="singlevideodetailpage">
      <Navbar />
      <div className="center-detail-box">
        <div className="detail-firstdiv">
          <img src={img} alt={title} />
        </div>
        <div>
          <h3 className="detailPageTitle">{title}</h3>
          <div className="dataAndType">
            <h6>{year}</h6>
            <h6>/{type}</h6>
          </div>
          <p className="mb-0 imdb">
            IMDB: <span style={{ color: "red" }}>{rating}</span>/10 - {length}
          </p>
          <p className="director">
            Director: <span className="">{director}</span>
          </p>
          <p>Cast: {cast}</p>
          <p>Desc: {desc}</p>
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

export default VideoDetail;
