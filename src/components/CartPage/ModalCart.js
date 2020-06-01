import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const ModalCart = ({ validCart, auth }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button color='secondary' onClick={handleClickOpen}>
        <div className='main-link h6 mt-4'>
          <small>valider mon panier</small>
        </div>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Avez-vous sure de passer cette commande
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button
            onClick={() => {
              validCart();
              handleClose();
            }}
            color='secondary'
          >
            <Link to={auth}>Valider</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalCart;
