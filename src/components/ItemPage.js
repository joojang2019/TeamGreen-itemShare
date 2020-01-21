import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
    height: "6em"
  },

  typography: {
    color: "white"
  }
}));

export default function ItemPage({ items, currentUser }) {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const { state } = useLocation();
  const goBack = () =>
    state ? history.push(state.prevURL) : history.push("/");
  if (Object.keys(items).length === 0) return null;
  const item = items.find(([key]) => key === id)[1];

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Button onClick={goBack} color="default" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
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
            {Object.entries(currentUser).length === 0 ? (
              <Typography
                variant="body1"
                color="textPrimary"
                component="p"
                className={classes.typography}
              >
                You should login in to get more Info.
              </Typography>
            ) : (
              <Typography
                variant="body1"
                color="textPrimary"
                component="p"
                className={classes.typography}
              >
                Contact Information: {item.email}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
