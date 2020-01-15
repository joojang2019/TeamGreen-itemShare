import React, { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import { blue } from "@material-ui/core/colors";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}
  
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };

}



const NewItemModal = () => {
    const {currentModal, setCurrentModal} = useContext(ModalContext);
    const [modalStyle] = React.useState(getModalStyle);
    const useStyles = makeStyles(theme => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: blue,
          position: 'absolute',
          border: '2px solid #000',
          width: 600,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));
  
    const classes = useStyles(); 


    return <Modal 
            aria-labeledby = "simple-modal-title"
            aria-desrcibedby = "simple-modal-description"
            open={currentModal} 
            onClose={() => setCurrentModal(false)}
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            BackdropComponent = {Backdrop}
            className={classes.modal}
            BackdropProps={{
                timeout: 600,
                classes: {
                    root : {
                        background: 'rbga(0,0, 0,0.2'
                    }
                }
              }}
            transparent = {false}
            >
        <div style={modalStyle} className={classes.paper}>
            <form noValidate autoComplete="off">
                
                <TextField 
                    id="name"
                    label="Full Name"
                    style={{ margin: 8 }}
                    placeholder="Full Name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,}}
                    variant = "outlined"
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
                        shrink: true,}}
                    variant = "outlined"
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
                        shrink: true,}}
                    variant = "outlined"
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
                        shrink: true,}}
                    variant = "outlined"
                    required
                    autoFocus
                    //onInput = {}
                />

                <TextField 
                    id="avaliableTil"
                    label="Item Avaliable Until"
                    style={{ margin: 8 }}
                    placeholder="Date"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,}}
                    variant = "outlined"
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
                        shrink: true,}}
                    variant = "outlined"
                    required
                    autoFocus
                    //onInput = {}
                />
                <button
                    type = "submit">
                    Submit 
                </button>

            </form>
        </div>
    </Modal>
}

export default NewItemModal;

