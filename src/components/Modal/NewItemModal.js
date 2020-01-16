import React from "react";
import { Modal, TextField, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// REVISION NEEDED-- NOT TESTED YET
/* function writeNewPost(item) {
  // Get a key for a new Post.
  const newPostKey = db.child("items").push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates["/items/" + newPostKey] = item;

  return db.update(updates);
} */

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    width: 600,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const createTextField = (id, label) => (
  <TextField
    id={id}
    label={label}
    placeholder={label}
    fullWidth
    margin="normal"
    InputLabelProps={{
      shrink: true
    }}
    variant="outlined"
    required
  />
);

const NewItemModal = ({ state }) => {
  const { modalOpen, setModalOpen } = state;
  const classes = useStyles();
  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      className={classes.modal}
    >
      <div className={classes.paper} data-color="blue" data-backdrop="false">
        <form onSubmit={e => console.log(e.target)}>
          <h1>List a New Item</h1>
          {createTextField("user", "Username")}
          {createTextField("email", "Email Address")}
          {createTextField("location", "Your Location")}
          <Divider />
          {createTextField("name", "Name of Item")}
          {createTextField("type", "Type of Item")}
          {createTextField("availableTill", "Item Available Until")}
          {createTextField("price", "Price Per Day")}
          {createTextField("img", "Image Link")}
          <button color="blue" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default NewItemModal;
