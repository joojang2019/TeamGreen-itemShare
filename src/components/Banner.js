import React from "react";
import logo_item_share from "..//logo_item_share.png";
import { Button, Toolbar, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../styles/Banner.scss";

export default function Banner({ currentUser }) {
  return (
    <AppBar position="sticky" className='nav-bar'>
      <Toolbar>
        <Link to="/">
          <img src={logo_item_share} alt="" />
        </Link>
        <div>
          {Object.entries(currentUser).length === 0 ? (
            <Button variant="contained" color="primary"
              className="login-button">
              <Link className='login-link' to="/login">Login</Link></Button>
          ) : (
            <p>{currentUser.email}</p>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
