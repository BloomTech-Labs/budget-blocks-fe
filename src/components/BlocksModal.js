import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import { Progress,Container} from "reactstrap";
import "./table.css"
import HeadsetIcon from '@material-ui/icons/Headset';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 700,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const BlocksModal = props => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
           <div style={modalStyle} className={classes.paper}>
          
           <TableContainer className="smalltable" component={Paper}>
       <Table className={classes.table} aria-label="simple table">
         <TableHead>
           <TableRow  className="lightgrey">
           <TableCell></TableCell>
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
        </div>
      
      </Modal>
    </div>
  );
}
function mapStateToProps(state){
    return {
        userID:state.loginReducer.user.id,
        LinkedAccount:state.loginReducer.user.LinkedAccount,
        blocks:state.plaidReducer.categories
    }
  }
  
  export default connect(mapStateToProps)(BlocksModal)