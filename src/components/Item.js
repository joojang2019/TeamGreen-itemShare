import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },

  card: {
    marginTop: "5em",
    padding: "0.5em"
  },
  media: {
    paddingTop: "25%",
    justifyContent: "center",
    width: "20em",
    height: "10em"
  },
  cardContent: {
    background: "#455a64",
    marginTop: "2em",
    height: "5em"
  },

  typography: {
    color: "white"
  }
}));
export default function Item({ item }) {
  const classes = useStyles();
  return (
    <Link to={`/${item.id}`}>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card className={classes.card}>
            <Grid container justify="center">
              <CardMedia className={classes.media} image={item.img} />
            </Grid>
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h1"
                className={classes.typography}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                component="p"
                className={classes.typography}
              >
                Price: {item.price}
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                component="p"
                className={classes.typography}
              >
                Available Till: {item.availableTill}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Link>
  );
}
