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
import { blocksData } from "../redux/actions/userBlocks";
import { connect } from "react-redux";
import AddBlockModal from "."

const useStyles = makeStyles({
  table: {
    minWidth: 649,
  },
});


const Blocks = props => {
  const classes = useStyles();
  const [filter,setFilter] = useState([])
  useEffect(() => {
          props.blocksData()
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
          {props.blocks.map(i => (
            <TableRow key={i.id}>
              <TableCell >{i.name}</TableCell>
              <TableCell>
<Progress value={i.budget + i.total ? 0 : i.budget/i.total * 100 > 100 ? 100 : i.budget/i.total} />
               </TableCell>
              <TableCell >&#9989;</TableCell>
              <TableCell >${i.total}</TableCell>
              <TableCell >${i.budget}</TableCell>
              <TableCell ><AddBlockModal /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
  
  );
}
function mapStateToProps(state){
  return {
      blocks:state.blockReducer.blocks
  }
}
const mapDispatchToProps = {
  blocksData
   }

export default connect(mapStateToProps,mapDispatchToProps)(Blocks)
