import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';


function ExpenseFormModal(props) {

  const [newExpense, setNewExpense] = useState({
    name: "",
    amount: "",
  });

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="add-form">
        <h3>Add A New Expense</h3>
        <form onSubmit={(event) => {
          props.addExpense(newExpense, event)
          props.handleOpen(false)
        }}>
          <h4>New Expense</h4>
          <input
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
          <input
            id="amount"
            name="amount"
            type="text"
            placeholder="amount"
            value={newExpense.amount}
            onChange={(e) =>
              setNewExpense({ ...newExpense, [e.target.name]: e.target.value })
            }
          />

          <button type="submit">Add New Expense</button>
        </form>
      </div>
    </Modal>
  )
}

export default ExpenseFormModal
