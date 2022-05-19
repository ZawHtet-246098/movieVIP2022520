import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterHome from "./RoutersPages/RouterHome";
import RouterSingin from "./RoutersPages/RouterSignin";
import RouteForget from "./RoutersPages/RouteForget";
import RouteVideo from "./RoutersPages/RouteVideo";
import VideoDetail from "./VideoComponents/VideoDetail/VideoDetail";
import MainMovieDetail from "./VideoComponents/MainMovieSection/MainMovieDetail/MainMovieDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouterHome />} />
        <Route path="/signin" element={<RouterSingin />} />
        <Route path="/forgetpassword" element={<RouteForget />} />
        <Route path="/video" element={<RouteVideo />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/video/mainmovie/:id" element={<MainMovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
