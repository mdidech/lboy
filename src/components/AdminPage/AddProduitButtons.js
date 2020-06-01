import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    textAlign: "right",
  },
}));

export default function AddProduitButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to='/admin/ajoutproduit'>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}
