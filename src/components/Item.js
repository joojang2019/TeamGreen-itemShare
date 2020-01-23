import React from "react";
import { Link, useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
import "../styles/Item.scss";

export default function Item({ item }) {
  const { pathname, search } = useLocation();
  return (
    <Link
      to={{
        pathname: `/${item.id}`,
        state: { prevURL: `${pathname}${search}` }
      }}
    >
      <Grid container justify="center" className="page-container">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card className="product-card">
            <Grid container justify="center">
              <CardMedia className="product-media" image={item.img} />
            </Grid>
            <CardContent className="card-content">
              <Typography
                gutterBottom
                variant="h5"
                component="h1"
                className="typography"
              >
                {item.name}
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                component="p"
                className="typography"
              >
                Price: {item.price}
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                component="p"
                className="typography"
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
