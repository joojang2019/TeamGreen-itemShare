import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    marginBottom: "12px"
  },
   image: {
      justifyContent: 'center !important'
   },

   img: {
      //  margin: "auto",
        display: "relative",
        maxWidth: "50%",
        minWidth: "50%",
        justifyContent: "center"
   }
}));
export default function Item({ item }) {
  const classes = useStyles();
  return (
    <Link to={`/${item.id}`}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container item xs={12} sm={12} md={12} lg={12}>
            <Grid>
             
              <ButtonBase className={classes.image} justify="center">
                <img className={classes.img} src={item.img} alt=""></img>
              </ButtonBase>
            </Grid>
            <Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                  <Typography gutterBottom variant="subtitle1">
                    {item.name}
                  </Typography>
                <Grid>
                </Grid>
                </Grid>
                <Grid>
                <Grid container item xs={12} sm={12} md={12} lg={12}>
                  <Typography variant="body2" color="textSecondary">
                    Available till: {item.availableTill}
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
              <Grid container item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="subtitle1">${item.price}/day</Typography>
              </Grid>
              </Grid>
            </Grid>
            </Grid>
        </Paper>
      </div>
    </Link>
  );
}
