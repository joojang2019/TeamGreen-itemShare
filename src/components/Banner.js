import React from 'react';
import logo_item_share from '..//logo_item_share.png'
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";

// const Banner = () => {
//     //var image = require('..//logo_item_share.png'); 
//     return(<img src={logo_item_share} alt= "itemShare"></img>);
// }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    paddingTop: "10px",
    height: "75px",
    marginBottom: "25px"
  }
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box boxShadow="2" height="75px">
        <Toolbar>
          <Typography variant="h4">itemShare</Typography>
        </Toolbar>
      </Box>
    </div>
  );
}
