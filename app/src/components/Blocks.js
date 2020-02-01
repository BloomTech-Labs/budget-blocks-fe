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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function Blocks() {
  const classes = useStyles();
  let [categories,setCategories] = useState([])
  const [filter,setFilter] = useState([])
  useEffect(() => {
          axios.get("https://lambda-budget-blocks.herokuapp.com/api/users/categories/1")
          .then(i => {
              setCategories(i.data)
             setFilter(i.data.slice(Math.max(i.data.length - 5, 1)))
          })
        },[])
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
          {filter.map(i => (
            <TableRow key={i.id}>
              <TableCell >{i.category}</TableCell>
              <TableCell>
<Progress value={i.id} />
               </TableCell>
              <TableCell >&#9989;</TableCell>
              <TableCell >$0.00</TableCell>
              <TableCell >$500.00</TableCell>
              <TableCell >Edit</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
