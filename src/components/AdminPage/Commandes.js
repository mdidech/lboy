import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/context";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io";
import moment from "moment";
import "moment/locale/fr";

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

const Commandes = () => {
  const { ordersList, getUserByOrder } = useContext(ProductContext);
  const [page, setPage] = React.useState(0);
  const [orders, setOrders] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    const rows = ordersList.map((order) => {
      return { ...order, delete: <DeleteIcon /> };
    });
    setOrders(rows);
    // eslint-disable-next-line
  }, [ordersList]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const classes = useStyles();

  return (
    <div className='py-5 px-4' style={{ minHeight: "100vh" }}>
      <div className='text-right  py-2'>
        <Link
          to='/admin/commandes'
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
              <StyledTableCell align='left'>Date</StyledTableCell>
              <StyledTableCell align='left'>Nombre</StyledTableCell>
              <StyledTableCell align='left'>Prix total</StyledTableCell>
              <StyledTableCell align='left'>Status</StyledTableCell>
              <StyledTableCell align='left'></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? orders.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : orders
            ).map((row) => (
              <TableRow key={row.id}>
                <StyledTableCell>
                  <Link
                    to={`/admin/commandes/${row.id}`}
                    className='text-primary'
                    onClick={() => {
                      getUserByOrder(row.user);
                    }}
                  >
                    {row.id}
                  </Link>
                </StyledTableCell>
                <StyledTableCell align='left'>
                  {moment(row.date.toDate()).locale("fr").format("llll")}
                </StyledTableCell>
                <StyledTableCell align='left'>
                  {row.order.length}
                </StyledTableCell>
                <StyledTableCell align='left'>{row.total}</StyledTableCell>
                <StyledTableCell align='left'>{row.progress}</StyledTableCell>
                <TableCell align='left' className={classes.delete}>
                  {row.progress === "en attente" ? <Modal id={row.id} /> : ""}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={orders.length}
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
    </div>
  );
};
export default Commandes;
