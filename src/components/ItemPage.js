import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import "../styles/ItemPage.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function ItemPage({ allItems, currentUser }) {
  const { id } = useParams();
  const history = useHistory();
  const { state } = useLocation();

  const goBack = () =>
    state ? history.push(state.prevURL) : history.push("/");

  if (Object.keys(allItems).length === 0) return null;
  const item = allItems.find(([key]) => key === id)[1];

  return (
    <Grid container justify="center" className="page-container">
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Button
          onClick={goBack}
          variant="contained"
          startIcon={<ArrowBackIcon />}
          className="back-button"
        >
          Back
        </Button>
        <Card className="product-card">
          <Grid container justify="center">
            <CardMedia className="product-media" image={item.img} />
          </Grid>
          <CardContent className="card-content">
            <Grid container justify="center">
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  className="name-text"
                >
                  {item.name}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography
                  color="textPrimary"
                  //variant="h6"
                  //component="h6"
                  className="price-text"
                >
                  ${item.price} /day
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="body1" color="textPrimary" component="p">
                  Available Until: {item.availableTill}
                </Typography>
              </Grid>
              {Object.entries(currentUser).length === 0 ? (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography variant="body1" color="textPrimary" component="p">
                    You should log in to get more Info.
                  </Typography>
                </Grid>
              ) : (
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography variant="body1" color="textPrimary" component="p">
                    Contact Seller:
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </Typography>
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
