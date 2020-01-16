import React, { Fragment, useState } from "react";
import NewItemModal from "./NewItemModal";
import { Button } from "@material-ui/core";

const ModalManager = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Fragment>
      <NewItemModal state={{ modalOpen, setModalOpen }} />
      <Button
        id="add-item-button"
        style={{ position: "absolute", right: "10%" }}
        variant="contained"
        onClick={() => setModalOpen(true)}
      >
        Add Item
      </Button>
    </Fragment>
  );
};

export default ModalManager;
