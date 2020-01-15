import React, { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";
import Modal from '@material-ui/core/Modal';

const NewItemModal = () => {
    const {currentModal, setCurrentModal} = useContext(ModalContext);
    return <Modal open={currentModal} onClose={() => setCurrentModal(false)}>
        <div>Hello</div>
    </Modal>
}

export default NewItemModal;

/*
class NewItemForm extends React.Component {
    state = {
        name: '',
        type: '',
        location: '',
        img: '',
        user: '',
        avaliableTill: '',
        price: '',
    }

    render() { 
        return (
            <form>
                <input
                placeholder ="Name of Item"
                value = {this.state.name} 
                onChange={e=> this.setState({
                    name: e.target.value})}/> 

            </form>
        )
    }
}
export default NewItemForm;
*/ 