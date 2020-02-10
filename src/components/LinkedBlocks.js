import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios"
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap'
import { Progress,Container} from "reactstrap";
import { getTransactions } from "../redux/actions/PlaidActions";
import { connect } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 649,
  },
});


export function Blocks(props) {
  const classes = useStyles();
  let [categories,setCategories] = useState([])
  const [filter,setFilter] = useState([])
  useEffect(() => {
          props.getTransactions(props.userID);
        },[props.LinkedAccount])
  return (
   
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Block</TableCell>
            <TableCell>Current status</TableCell>
            <TableCell></TableCell>
            <TableCell>Total Expenses</TableCell>
            <TableCell >Limit</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.blocks.map(i => (
            <TableRow key={i.id}>
              <TableCell >{i.name}</TableCell>
              <TableCell>
<Progress value={i.total / i.budget * 100} />
               </TableCell>
              <TableCell >&#9989;</TableCell>
              <TableCell >${i.total === null ? 0 : Math.round(10*i.total)/100}</TableCell>
              <TableCell >${i.budget === null ? 0 : Math.round(10*i.budget)/100}</TableCell>
              <TableCell >Edit</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


function mapStateToProps(state){
  return {
      userID:state.loginReducer.user.id,
      LinkedAccount:state.loginReducer.user.LinkedAccount,
      blocks:state.plaidReducer.categories
  }
}

export default connect(mapStateToProps,{ getTransactions })(Blocks)