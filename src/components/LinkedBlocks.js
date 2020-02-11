import React, { useState, useEffect } from 'react';
import {TableHeads} from "./Blocks_Components/TableHead";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Progress,Container} from "reactstrap";
import { getTransactions } from "../redux/actions/PlaidActions";
import { connect } from "react-redux";
import "./table.css"
import HeadsetIcon from '@material-ui/icons/Headset';
const useStyles = makeStyles({
	table: {
		minWidth: 649
	}
});

export function Blocks(props) {
  const classes = useStyles();
  const [filter,setFilter] = useState([])
  useEffect(() => {
          props.getTransactions(props.userID);
        },[props.LinkedAccount])
        const handleClick = e => {
          setFilter(!filter)
        }
      
  
// [0,10,20,30,...,490]
var shuffled = props.blocks.sort(function(){return .5 - Math.random()});

var selected=shuffled.slice(0,5);
console.log(selected)
return (
  <div>
    {filter ? 
    <div>
    <TableContainer className="table" component={Paper}>
    <Table className={classes.table} aria-label="simple table">
    <TableHeads CellNames={["","Block","Current Status", "", "Total Expenses", "Limit", "Action"]} className="lightgrey"/>
      <TableBody>
        {selected.map(i => (
          <TableRow key={i.id}>
            <TableCell ><HeadsetIcon className="head-icon"/></TableCell>
            <TableCell >{i.name}</TableCell>
            <TableCell>
            <Container>
          <Progress value={90} />
      </Container>
             </TableCell>
            <TableCell >&#9989;</TableCell>
            <TableCell >${i.total === null ? 0 : Math.round(10*i.total)/100}</TableCell>
            <TableCell >${i.budget === null ? 0 : Math.round(10*i.budget)/100}</TableCell>
            <TableCell ><a href="google.com">Edit</a></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
   
  </TableContainer> 
   <button onClick={handleClick}>View All</button>
  </div>
   : 
  <div>
  <TableContainer className="table" component={Paper}>
    <Table className={classes.table} aria-label="simple table">
    <TableHeads CellNames={["","Block","Current Status", "", "Total Expenses", "Limit", "Action"]} className="lightgrey"/>
      <TableBody>
        {props.blocks.map(i => (
          <TableRow key={i.id}>
            <TableCell ><HeadsetIcon className="head-icon"/></TableCell>
            <TableCell >{i.name}</TableCell>
            <TableCell>
<Progress value={i.total / i.budget * 100} />
             </TableCell>
            <TableCell >&#9989;</TableCell>
            <TableCell >${i.total === null ? 0 : Math.round(10*i.total)/100}</TableCell>
            <TableCell >${i.budget === null ? 0 : Math.round(10*i.budget)/100}</TableCell>
            <TableCell ><a href="google.com">Edit</a></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    
  </TableContainer>
<button onClick={handleClick}>View Less</button>
</div>
}
  
  </div>
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
