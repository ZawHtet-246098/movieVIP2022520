import React from "react";
import "./RandomVideo.css";
import SingleOne from "../SingleDiv/SingleOne";
import data from "./randomvideodata";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

const RandomVideo = () => {
  return (
    <Swiper
      style={{ overflow: "hidden" }}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // for responsive
      breakpoints={{
        360: {
          width: 375,
          slidesPerView: 3,
        },
        // when window width is >= 768px
        680: {
          width: 680,
          height: 200,
          slidesPerView: 5,
        },
        850: {
          width: 850,
          slidesPerView: 7,
        },
        1100: {
          width: 1100,
          slidesPerView: 9,
        },
        1300: {
          width: 1300,
          slidesPerView: 10,
        },
      }}
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={10}
      navigation
      pagination={{
        type: "fraction",
      }}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {/* <br></br> */}
      <div id="ramdomvideo" className="randomvideopage swiper-container">
        <div className=" radomvideocontainer swiper-wrapper">
          {data.map((item, index) => {
            return (
              <SwiperSlide>
                <SingleOne key={index} {...item} />;
              </SwiperSlide>
            );
          })}
        </div>
      </div>
    </Swiper>
  );
};

export default RandomVideo;
