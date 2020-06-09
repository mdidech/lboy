import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/context";
const ModalCompleteProfile = () => {
  const { authUser } = useContext(ProductContext);
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
        <div className='main-link h6 mt-4'>Valider mon panier</div>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {authUser
            ? "compléter votre profile:adresse/telephone"
            : "se connecter"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {authUser
              ? "svp, complétez votre profile avec : telephone et/ou adresse ...etc"
              : "se connecter afin de continuer..."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to='/moncompte/1'>
            <Button onClick={handleClose} color='secondary'>
              d'accord
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalCompleteProfile;
