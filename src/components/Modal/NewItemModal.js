import React, { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import { blue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { db } from "../../App";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

function writeNewPost(item) {
  // Get a key for a new Post.
  const newPostKey = db.child("items").push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates["/items/" + newPostKey] = item;

  return db.update(updates);
}

const NewItemModal = () => {
  const { currentModal, setCurrentModal } = useContext(ModalContext);
  const [modalStyle] = React.useState(getModalStyle);

  const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: { blue },
      position: "absolute",
      border: "2px solid #000",
      width: 600,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }));

  const classes = useStyles();

  return (
    <body>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={currentModal}
        onClose={() => setCurrentModal(false)}
        BackdropComponent={Backdrop}
        className={classes.modal}
        data-background={false}
        BackdropProps={{
          timeout: 600,
          classes: {
            root: {
              background: "rbga(0,0, 0,0.2"
            }
          }
        }}
      >
        <div
          style={modalStyle}
          className={classes.paper}
          data-color="blue"
          data-backdrop="false"
        >
          <form
            noValidate
            autoComplete="off"
            onSubmit={e => console.log(e.target)}
          >
            <h1>List a New Item</h1>
            <TextField
              id="name"
              label="Full Name"
              style={{ margin: 8 }}
              placeholder="Full Name"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              required
              autoFocus
              //onInput = {}
            />

            <TextField
              id="type"
              label="Model of Item"
              style={{ margin: 8 }}
              placeholder="Model of Item"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              required
              autoFocus
              //onInput = {}
            />
            <TextField
              id="img"
              label="Image of Item"
              style={{ margin: 8 }}
              placeholder="Enter an image url"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              required
              autoFocus
              //onInput = {}
            />
            <TextField
              id="location"
              label="Your Location"
              style={{ margin: 8 }}
              placeholder="Enter a building or street address"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              required
              autoFocus
              //onInput = {}
            />
            <TextField
              id="user"
              label="Username"
              style={{ margin: 8 }}
              placeholder="Username"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              required
              autoFocus
              //onInput = {}
            />
            <TextField
              id="email"
              label="Email Address"
              style={{ margin: 8 }}
              placeholder="Email Address"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              required
              autoFocus
              //onInput = {}
            />

            <TextField
              id="avaliableTill"
              label="Item Avaliable Until"
              style={{ margin: 8 }}
              placeholder="Date"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              required
              autoFocus
              //onInput = {}
            />
            <TextField
              id="price"
              label="Price"
              style={{ margin: 8 }}
              placeholder="Price per day"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              required
              autoFocus
              //onInput = {}
            />
            <button color="blue" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </body>
  );
};

export default NewItemModal;
