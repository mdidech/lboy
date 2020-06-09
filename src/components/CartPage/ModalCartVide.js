import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const ModalCart = () => {
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
        <div className='bg-warning'>
          <DialogTitle>Erreur</DialogTitle>
          <DialogContent>
            <DialogContentText>
              svp, ajouter quelques produits a votre panier
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className='bg-danger text-white'>
              d'accord
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default ModalCart;
