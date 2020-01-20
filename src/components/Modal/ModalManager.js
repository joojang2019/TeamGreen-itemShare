/* eslint-disable indent */
import React, { Fragment, useState } from "react";
import NewItemModal from "./NewItemModal";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  button: {
    marginRight: "1em"
  }
  
}));


const ModalManager = () => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Fragment>
      <NewItemModal state={{ modalOpen, setModalOpen }} />
      <Grid container
          justify="flex-end"
      >       
          <Button className = {classes.button}
            variant="contained"
            onClick={() => setModalOpen(true)}
          >
        Add Item
          </Button>
        </Grid>
    </Fragment>
  );
};

export default ModalManager;
