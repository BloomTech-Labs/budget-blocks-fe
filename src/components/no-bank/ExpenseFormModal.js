import React, { useState } from 'react'
import { Modal, Button, TextField } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import BBModal from './BBModal'
import BBButton from './BBButton'
import BBTextField from './BBTextField'


// const BBButton = styled(Button)({
//   backgroundColor: "#3BC14A",
//   marginLeft: "50px",
//   marginTop: "3px"
// })

// const BBTextField = styled(TextField)({

// })


function getModalStyle() {
  const top = 45;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const style = getModalStyle()

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

}));


function ExpenseFormModal(props) {

  const [newExpense, setNewExpense] = useState({
    name: "",
    amount: "",
  });

  return (

    // <Modal
    //   open={props.open}
    //   onClose={props.handleClose}
    //   aria-labelledby="simple-modal-title"
    //   aria-describedby="simple-modal-description"
    // >
    //   <div style={style} className={useStyles().paper}>
    <BBModal
      open={props.open}
      handleClose={props.handleClose}
      addExpense={props.addExpense}
      handleOpen={props.handleOpen}
    >
      <>
        <h3>Add A New Expense</h3>
        <form onSubmit={(event) => {
          props.addExpense(newExpense, event)
          props.handleOpen(false)
        }}>
          <h4>New Expense</h4>
          <BBTextField
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={newExpense.name}
            onChange={(e) =>
              setNewExpense({ ...newExpense, [e.target.name]: e.target.value })
            }
          />
          <h4>Amount</h4>
          <BBTextField
            
            variant="outlined"
            id="amount"
            name="amount"
            type="text"
            placeholder="Amount"
            value={newExpense.amount}
            onChange={(e) =>
              setNewExpense({ ...newExpense, [e.target.name]: e.target.value })
            }
          />
          <BBButton type="submit" >Add New Expense</BBButton>
        </form>
      </>
    </BBModal>


  )
}

export default ExpenseFormModal
