import React, {useContext, Fragment} from 'react';
import NewItemModal from './NewItemModal';
import {ModalContext} from '../../Context/ModalContext';

const ModalManager = () => {
    const {currentModal, setCurrentModal} = useContext(ModalContext);

    return <div>
        <NewItemModal />
        <button onClick={() => setCurrentModal(true)}>Add Item</button>
    </div>
};

export default ModalManager; 