import React, { useContext } from "react";
import NewItemModal from "./NewItemModal";
import { ModalContext } from "../../Context/ModalContext";

const ModalManager = () => {
  const { setCurrentModal } = useContext(ModalContext);

  return (
    <div>
      <NewItemModal />
      <button onClick={() => setCurrentModal(true)}>Add Item</button>
    </div>
  );
};

export default ModalManager;
