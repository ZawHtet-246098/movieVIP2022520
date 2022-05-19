import React, { useContext, useEffect, useState } from "react";
import datas from "./datas";

const AppContext = React.createContext();

const FeatureApi =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=2";
const ImgApi = "https://image.tmdb.org/t/p/w1280";
const SearchApi =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [openSwitch, setOpenSwitch] = useState(false);
  const [isSidebarOpen, setIsSidebraOpen] = useState(false);
  const [openSearchbar, setOpenSearchbar] = useState(true);
  const [data, setdata] = useState("open");
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState();
  const [numofPages, setNumofPages] = useState(500);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hit the button");
    console.log(searchTerm);

    fetch(
      // `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1` +
      //   searchTerm
      SearchApi + searchTerm
      //   `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    setSearchTerm("");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  const openSidebar = () => {
    setIsSidebraOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebraOpen(false);
  };

  const fetchExactData = (one) => {
    if (openSwitch === false) {
      one.map((languages) => {
        setdata(languages.english);
        // console.log(data);
      });
    }
    if (openSwitch === true) {
      one.map((languages) => {
        setdata(languages.japanese);
        // console.log(data);
      });
    }
    // console.log(data);
  };
  useEffect(() => {
    fetchExactData(datas);
  }, [fetchExactData]);

  return (
    <AppContext.Provider
      value={{
        setOpenSwitch,
        data,
        openSwitch,
        setdata,
        fetchExactData,
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        searchTerm,
        handleChange,
        handleSubmit,
        movies,
        setMovies,
        openSearchbar,
        setOpenSearchbar,
        setPage,
        numofPages,
        page,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
