import React from "react";
import ReactDOM from "react-dom";
import App from "./MoviesiteComponent/App";
import "./MoviesiteComponent/index.css";
import { AppProvider } from "./MoviesiteComponent/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
