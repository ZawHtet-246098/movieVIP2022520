import React from "react";
import { Pagination } from "@material-ui/lab";
import { useGlobalContext } from "../context";
// import { makeStyles } from "@mui/styles";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // position: "fixed",
    bottom: 0,
    zIndex: 200,
    backgroundColor: "gray",
    padding: "10px 0",
    // padding: "10px 80px",

    color: "white",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});

const CustomPagination = () => {
  const classes = useStyles();
  const { setPage, numofPages, page } = useGlobalContext();
  const handleChange = (pagenum) => {
    setPage(pagenum);
    window.scroll(0, 0);
    console.log(pagenum);
  };
  // console.log(page);

  // console.log(numofPages);
  return (
    <div className={classes.root}>
      <div className={classes.container} id="paginationPage">
        <Pagination
          count={numofPages}
          onChange={(e) => handleChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </div>
    </div>
  );
};

export default CustomPagination;
