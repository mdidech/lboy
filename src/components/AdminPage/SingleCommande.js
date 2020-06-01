import React, { useState, useContext, useEffect } from "react";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import { ProductContext } from "../../context/context";
import Spinner from "../Spinner";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const SingleCommande = ({ commande }) => {
  const [image, setImage] = useState(null);
  const { storeProducts } = useContext(ProductContext);
  useEffect(
    () => {
      storeProducts.forEach((item) => {
        if (item.id === commande.id) {
          setImage(item.image);
        }
      });
    }, // eslint-disable-next-line
    [storeProducts]
  );
  return (
    <TableRow>
      <StyledTableCell align='left'>
        {image ? (
          <img src={image} alt='produit' width='40' className='img-fluid' />
        ) : (
          <Spinner small={true} />
        )}
      </StyledTableCell>
      <StyledTableCell align='left'>{commande.nom}</StyledTableCell>
      <StyledTableCell align='left'>{commande.prix} dhs</StyledTableCell>
      <StyledTableCell align='left'>{commande.quantite}</StyledTableCell>
      <StyledTableCell align='left'>{commande.somme}</StyledTableCell>
    </TableRow>
  );
};

export default SingleCommande;
