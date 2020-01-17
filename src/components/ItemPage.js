import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },

  card: {
    marginTop: "5em"
    
  },

  media: {
    paddingTop: "25%",
    justifyContent: "center",
    width: "20em",
    height: "10em"

  },
  cardContent: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    marginTop: "2em"
  }
}));

export default function ItemPage({ items }) {
  const classes = useStyles();
  const { id } = useParams();
  if (items.length === 0) return null;

  //need update incase we change how we assign id
  const item = items[id];





  return (
    <Grid container justify="center">
      <Grid item xs = {12} sm = {12} md = {6} lg={6}>
        <Card className={classes.card}>
          <Grid container justify = "center">
            <CardMedia
              className={classes.media}
              image={item.img}
            />
          </Grid>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h1">
              {item.name}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
          Price: {item.price}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
          Available Till: {item.availableTill}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
          Contact Information: {item.email}
            </Typography>
          </CardContent>
      
        </Card>
      </Grid>
    </Grid>
  );    
}
