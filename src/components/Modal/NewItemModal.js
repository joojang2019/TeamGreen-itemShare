import React, { useState } from "react";
import shortid from "shortid";
import "firebase/database";
import { Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { db, storageRef } from "../../App";
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
  },
  button: {
    marginLeft: 75
  },

  divcontainer: {
    display: "flex"
  }
}));

const NewItemModal = ({ state }) => {
  const { modalOpen, setModalOpen, currentUser } = state;

  const emptyInputForm = {
    type: "",
    availableTill: "",
    price: "",
    img: ""
  };
  const [formData, setFormData] = useState(emptyInputForm);
  const [photo, setPhoto] = useState();

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

  const postNewItem = async e => {
    e.preventDefault();

    // Create a reference to 'mountains.jpg'
    const imageRef = storageRef.child(`images/${photo.name}`);
    const snapshot = await imageRef.put(photo);
    console.log(snapshot);
    const downloadUrl = await snapshot.ref.getDownloadURL();
    console.log(downloadUrl);

    const id = shortid.generate();
    const email = `${currentUser.email}@${currentUser.domain}`;
    db.child(`items/${id}`).update({
      ...formData,
      id,
      email,
      img: downloadUrl
    });
    setModalOpen(false);
    setFormData(emptyInputForm);
    alert(`Successfully Added!`);
  };

  const managePhoto = e => {
    setPhoto(e.target.files[0]);
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

          <div className={classes.divcontainer}>
            <div>
              <TextField
                placeholder="Price"
                width="80%"
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                onChange={e => setFormField("price", e.target.value)}
                value={formData["price"]}
                required
              />
            </div>

            <label>$/week</label>
          </div>
          {/* {createTextField("img", "Image Link")} */}
          <p>Add a photo of your item:</p>
          <input type="file" accept="image/*" onChange={managePhoto} />

          <Grid container justify="center">
            {currentUser && Object.entries(currentUser).length === 0 ? (
              <div>
                <p>You should login to add a new item.</p>
                <Link to="/login">
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            ) : (
              <Button type="submit" variant="contained" color="primary">
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
