import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import "../styles/Search.scss";

const Search = ({ searchQuery }) => {
  const [currTerm, setCurrTerm] = useState(searchQuery ? searchQuery : "");
  const history = useHistory();
  const searchTerm = `/results?search_query=${currTerm}`;
  useEffect(() => {
    setCurrTerm(searchQuery ? searchQuery : "");
  }, [searchQuery]);

  const changeCurrTerm = e => {
    setCurrTerm(e.target.value);
  };

  // Case of enter
  const handleEnter = e => {
    if (e.keyCode === 13) history.push(searchTerm);
  };

  return (
    <div className="searchbar">
      <b>
        <p className="myText">
          itemShare. Northwestern&apos;s premier rental marketplace.
        </p>
      </b>
      <Grid container justify="center">
        <Paper className="root">
          <InputBase
            className="input"
            placeholder="Search for items"
            value={currTerm}
            onChange={changeCurrTerm}
            onKeyDown={handleEnter}
          />
          <Link to={searchTerm}>
            <IconButton
              className="iconButton"
              aria-label="search"
            ></IconButton>
            <SearchIcon />
          </Link>
        </Paper>
      </Grid>
    </div>
  );
};

export default Search;
