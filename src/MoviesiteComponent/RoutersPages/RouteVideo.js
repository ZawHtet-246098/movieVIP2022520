import React from "react";
import VideoNavbar from "../VideoComponents/VideoNav/VideoNav";
import RandomVideo from "../VideoComponents/RandomVideoPage/RandomVideo";
import OpenSidebar from "../VideoComponents/VideoNav/OpenSidebar";
import MainMovie from "../VideoComponents/MainMovieSection/MainMovie";
import CustomPagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import { useGlobalContext } from "../context";
const RouteVideo = () => {
  const { movies, loading } = useGlobalContext();
  if (loading) {
    console.log("loadingl......");
    <Loader />;
  }
  return (
    <main className="video-page">
      <div>
        <VideoNavbar />
        <OpenSidebar />

        <h1 className="text-white h4">New releases (2022)</h1>
        <RandomVideo />

        <h1 className="text-white h4 mt-2">Random Videos</h1>
        <MainMovie />

        <CustomPagination />
      </div>
    </main>
  );
};

export default RouteVideo;
