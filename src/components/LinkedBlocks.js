import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Progress, Container } from "reactstrap";
import { getTransactions } from "../redux/actions/PlaidActions";
import { connect } from "react-redux";
import BudgetModal from "../components/BudgetGoalModal";
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    minWidth: 649
  }
});

export function Blocks(props) {
  console.log(props.userID)
  const classes = useStyles();
  let [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState([]);
  const [open, setOpen] = useState(false);
  const [values, setValues]=useState({
    userId:"",
    catId:"",
    catName:"",
  });
  
  const handleOpen = (userId,catId,catName) => {
    setOpen(true);
    setValues({...values,userId:userId,catId:catId,catName:catName});
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  useEffect(() => {
    props.getTransactions(props.userID);
  }, [props.LinkedAccount]);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Block</TableCell>
            <TableCell>Current status</TableCell>
            <TableCell></TableCell>
            <TableCell>Total Expenses</TableCell>
            <TableCell>Limit</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.blocks.map(i => (
            <TableRow key={i.id}>
              <TableCell>{i.name}</TableCell>
              <TableCell>
                <Progress value={(i.total / i.budget) * 100} />
                {/* <BudgetModal userId={props.userID} catId={i.id} catName={i.name} handleClose={handleClose} open={open} /> */}
              </TableCell>
              <TableCell>&#9989;</TableCell>
              <TableCell>
                ${i.total === null ? 0 : Math.round(10 * i.total) / 100}
              </TableCell>
              <TableCell>
                ${i.budget === null ? 0 : Math.round(10 * i.budget) / 100}
              </TableCell>
              <TableCell onClick={()=>{handleOpen(props.userID,i.id,i.name)}}>Edit</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <BudgetModal values={values} handleClose={handleClose} open={open} />
    </TableContainer>
  );

          }

function mapStateToProps(state) {
  return {
    userID: state.loginReducer.user.id,
    LinkedAccount: state.loginReducer.user.LinkedAccount,
    blocks: state.plaidReducer.categories
  };
}

export default connect(mapStateToProps, { getTransactions })(Blocks);
