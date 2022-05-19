import React from "react";
import "./EnjoyTv.css";
import kid from "./kid.png";
import { useGlobalContext } from "../../context";

const EnjoyTv = () => {
  const { data } = useGlobalContext();
  console.log(data);
  return (
    <div className="enjoy-section">
      <div className="breakline"></div>

      <div className="first-enjoy-section">
        <div className="first-enjoy">
          <div className="text-box">
            <h1>{data.enjoyoneh1}</h1>
            <p>{data.enjoyonep}</p>
          </div>
        </div>
        <div className="second-enjoy">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
        </div>
      </div>
      <br />
      <div className="breakline"></div>
      <div className="second-enjoy-section">
        <div className="second-enjoy one">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
          <div className="card-animation-container">
            <div className="card-animation-image">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt=""
              />
            </div>
            <div className="card-animation-text">
              <div className="text">Downloading...</div>
            </div>
          </div>
        </div>
        <div className="first-enjoy two">
          <div className="text-box one">
            <h1>{data.enjoytwoh1}</h1>
            <p>{data.enjoytwop}</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="breakline"></div>
      <div className="third-enjoy-section">
        <div className="first-enjoy">
          <div className="text-box">
            <h1>{data.enjoythreeh1}</h1>
            <p>{data.enjoythreep}</p>
          </div>
        </div>
        <div className="second-enjoy">
          <img src={kid} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EnjoyTv;
