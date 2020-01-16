import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";

const useStyles = makeStyles(() => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    paddingTop: "10px",
    marginTop: "calc(50% + 105px)",
    bottom: 0,
    height: 250
  }
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <BottomNavigation showLabels className={classes.root}>
      <p>itemShare. All rights reserved.</p>
    </BottomNavigation>
  );
}
