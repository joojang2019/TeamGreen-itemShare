import React from "react";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 10
  },
  image: {
    maxHeight: 500,
    maxWidth: 500
  }
}));

export default function ItemPage({ items }) {
  const classes = useStyles();
  const { id } = useParams();
  if (items.length === 0) return null;

  //need update incase we change how we assign id
  const item = items[id];

  return (
    <div className={classes.root}>
      <h1>{item.name}</h1>
      <img className={classes.image} alt="" src={item.img}></img>

      <p>${item.price}</p>
      <p>{item.availableTill}</p>
      <Link to="/">
        <button>Back to main page</button>
      </Link>
    </div>
  );
}
