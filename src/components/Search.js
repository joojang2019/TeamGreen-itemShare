import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignContent: "center",
    width: "80%",
    marginBottom: "25px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  mytext: {
    textAlign: "center",
    fontSize: "24px"
  },
  searchbar: {
    display: "block",
    textAlign: "center"
  }
}));

const Search = ({ searchQuery }) => {
  const classes = useStyles();
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
    <div className={classes.searchbar}>
      <b>
        <p className={classes.mytext}>
          itemShare. Northwestern&apos;s premier rental marketplace.
        </p>
      </b>
      <Grid container justify="center">
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search for items"
            value={currTerm}
            onChange={changeCurrTerm}
            onKeyDown={handleEnter}
          />
          <Link to={searchTerm}>
            <IconButton
              className={classes.iconButton}
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
