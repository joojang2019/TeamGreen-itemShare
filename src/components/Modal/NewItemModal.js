import React, { useState } from "react";
import shortid from "shortid";
import "firebase/database";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { db } from "../../App";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    // width: 600,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  "@media only screen and (min-width: 1024px)": {
    paper: {
      width: 600
    }
  }
}));

const NewItemModal = ({ state }) => {
  const { modalOpen, setModalOpen, currentUser } = state;
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    availableTill: "",
    price: "",
    img: ""
  });

  const setFormField = (field, data) => {
    setFormData({ ...formData, [field]: data });
  };

  const createTextField = (field, label) => (
    <TextField
      placeholder={label}
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true
      }}
      variant="outlined"
      onChange={e => setFormField(field, e.target.value)}
      value={formData[field]}
      required
    />
  );

  const classes = useStyles();

  const postNewItem = e => {
    e.preventDefault();
    const id = shortid.generate();
    const email = `${currentUser.email}@${currentUser.domain}`;
    db.child(`items/${id}`).update({ ...formData, id, email });
    setModalOpen(false);
    alert(`Successfully Added!`);
  };

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      className={classes.modal}
    >
      <div className={classes.paper} data-color="blue" data-backdrop="false">
        <form onSubmit={postNewItem}>
          <h1>List a New Item</h1>
          {createTextField("name", "Name of Item (eg. Canon Powershot SX5) ")}
          {createTextField("type", "Type of Item (eg. camera, bike)")}
          {createTextField("availableTill", "Item Available Until")}
          {createTextField("price", "$/Day")}
          {createTextField("img", "Image Link")}

          <Grid container justify="center">
            {currentUser && Object.entries(currentUser).length === 0 ? (
              <div>
                <p>You should login to add new item</p>
                <Link to="/login">Login</Link>
              </div>
            ) : (
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            )}
          </Grid>
        </form>
      </div>
    </Modal>
  );
};

export default NewItemModal;
