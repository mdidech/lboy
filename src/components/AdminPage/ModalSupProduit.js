import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ProductContext } from "../../context/context";
import { FaTrash } from "react-icons/fa";
const Modal = ({ id }) => {
  const { removeProduit } = useContext(ProductContext);
  const [open, setOpen] = useState(false);
  const removeById = (id) => {
    removeProduit(id);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color='secondary' onClick={handleClickOpen}>
        <FaTrash className='cart-icon text-danger my-auto' />
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Avez-vous sure de supprimer ce produit
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color='primary'>
            Annuler
          </Button>
          <Button
            autoFocus
            onClick={() => {
              removeById(id);
              handleClose();
            }}
            color='primary'
          >
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
