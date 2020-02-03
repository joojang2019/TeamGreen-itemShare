import React, { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import DatePicker from "./DatePicker";
import shortid from "shortid";
import "firebase/database";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Modal, TextField } from "@material-ui/core";
import { db, storageRef } from "../../App";
import { Link } from "react-router-dom";
import "../../styles/NewItemModal.scss";

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
  const { modalOpen, setModalOpen } = state;
  const { user } = useContext(UserContext);

  const emptyInputForm = {
    type: "",
    availableTill: new Date().toLocaleDateString(),
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
    const imageRef = storageRef.child(`images/${photo.name}`);
    const snapshot = await imageRef.put(photo);
    const downloadUrl = await snapshot.ref.getDownloadURL();
    const id = shortid.generate();
    const email = `${user.email}`;
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

  const onDateChange = date => {
    setFormField("availableTill", date.toLocaleDateString());
  };

  const onPhotoChange = e => {
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
          <h1>Post an Item</h1>
          {createTextField("name", "Name of Item (eg. Canon Powershot SX5) ")}
          {createTextField("type", "Type of Item (eg. camera, bike)")}
          <div className={classes.divcontainer}>
            {/*refactor for cleanliness*/}
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
            <label className="week-label">$/week</label>  
          </div>
          <DatePicker value={formData.availableTill} onChange={onDateChange} />
          <p>Add a photo of your item:</p>
          <input type="file" accept="image/*" onChange={onPhotoChange} />
          <Grid container justify="center">
            {user && Object.entries(user).length === 0 ? (
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
