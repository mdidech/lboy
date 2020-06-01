import React, { useContext } from "react";
import { ProductContext } from "../../context/context";
import AddProduitButtons from "./AddProduitButtons";
import ModalSupProduit from "./ModalSupProduit";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import EditIcon from "@material-ui/icons/Edit";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  delete: {
    cursor: "pointer",
    color: "red",
  },
  update: {
    cursor: "pointer",
    color: "blue",
  },
});

const Produits = () => {
  const { storeProducts } = useContext(ProductContext);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const rows = storeProducts.map((produit) => {
    return { ...produit, update: <EditIcon />, delete: <DeleteIcon /> };
  });
  const classes = useStyles();

  const updateRow = (id) => {
    console.log("mise a jour id: ", id);
  };
  return (
    <div className='py-5 px-4' style={{ minHeight: "100vh" }}>
      <div className='text-right  py-2'>
        <Link
          to='/admin/produits'
          className='btn btn-primary rounded-circle'
          onClick={() => {
            window.location.reload();
          }}
        >
          <IoMdRefresh />
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>reference</StyledTableCell>
              <StyledTableCell align='left'>image</StyledTableCell>
              <StyledTableCell align='left'>Titre</StyledTableCell>
              <StyledTableCell align='left'>description</StyledTableCell>
              <StyledTableCell align='left'>categorie</StyledTableCell>
              <StyledTableCell align='left'>prix</StyledTableCell>
              <StyledTableCell align='left'></StyledTableCell>
              <StyledTableCell align='left'></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.id}>
                <StyledTableCell>{row.id}</StyledTableCell>
                <StyledTableCell align='left'>
                  {" "}
                  <img
                    src={row.image}
                    alt='produit'
                    width='40'
                    className='img-fluid'
                  />
                </StyledTableCell>
                <StyledTableCell align='left'>{row.title}</StyledTableCell>
                <StyledTableCell align='left'>
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align='left'>{row.categorie}</StyledTableCell>
                <StyledTableCell align='left'>{row.price}</StyledTableCell>
                <StyledTableCell align='left' className={classes.update}>
                  <Link
                    to={`/admin/produits/${row.id}`}
                    className='text-primary'
                    onClick={() => updateRow(row.id)}
                  >
                    {row.update}
                  </Link>
                </StyledTableCell>
                <TableCell align='left' className={classes.delete}>
                  <ModalSupProduit id={row.docId} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <AddProduitButtons />
    </div>
  );
};
export default Produits;
