import React from "react";
import logo_item_share from "..//logo_item_share.png";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    paddingTop: "10px",
    height: "75px",
    marginBottom: "25px"
  }
}));

export default function Banner({ currentUser }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box boxShadow="2" height="75px">
        <Toolbar>
          <div style={{ marginTop: "-70px" }}>
            <Link to="/">
              <img src={logo_item_share} alt="" />
            </Link>
          </div>
          <Button
            style={{
              position: "absolute",
              right: "10%",
              marginTop: "-30px"
            }}
          >
            {Object.entries(currentUser).length === 0 ? (
              <Link to="/login">Login</Link>
            ) : (
              <p>{`Welcome ${currentUser.email}`}</p>
            )}
          </Button>
        </Toolbar>
      </Box>
    </div>
  );
}
