import React, { useContext, Fragment } from "react";
import { UserContext } from "../contexts/UserContext";
import logo_item_share from "..//logo_item_share.png";
import { Button, Toolbar, AppBar } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "../styles/Login.scss";
import "firebase/auth";
import "../styles/Banner.scss";

const Banner = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("Successfully signed out.");
      })
      .catch(() => {
        alert("Couldn't log out. Try again.");
      });
  };

  return (
    <AppBar position="sticky" className="nav-bar">
      <Toolbar>
        <Link to="/">
          <img src={logo_item_share} alt="" />
        </Link>
        <div>
          {Object.entries(user).length === 0 ? (
            <Button
              variant="contained"
              color="primary"
              className="login-button"
            >
              <Link className="login-link" to="/login">
                Login
              </Link>
            </Button>
          {location.pathname === "/login" ? (
            <div></div>
          ) : (
            [
              Object.entries(currentUser).length === 0 ? (
                <Button
                  variant="contained"
                  color="primary"
                  className="login-button"
                >
                  <Link className="login-link" to="/login">
                    Login
                  </Link>
                </Button>
              ) : (
                <Fragment>
                  {/* <p>{currentUser.email}</p> */}
                  <Button
                    variant="contained"
                    color="primary"
                    className="login-button"
                    onClick={handleLogOut}
                  >
                    Logout
                  </Button>
                </Fragment>
              )
            ]
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Banner;
