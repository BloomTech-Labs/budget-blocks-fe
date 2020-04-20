import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'

function BlockFormModal(props) {
  const [newBlock, setNewBlock] = useState({
    name: "",
    limit: ""
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
          props.addBlock(newBlock, event)
          props.handleOpen(false)
        }}>
          <h4>New Block</h4>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={newBlock.name}
            onChange={(e) =>
              setNewBlock({ ...newBlock, [e.target.name]: e.target.value })
            }
          />
          <h4>Amount</h4>
          <input
            id="limit"
            name="limit"
            type="text"
            placeholder="limit"
            value={newBlock.limit}
            onChange={(e) =>
              setNewBlock({ ...newBlock, [e.target.name]: e.target.value })
            }
          />

          <button type="submit">Add New Block</button>
        </form>
      </div>
      {/* <h1>TRANSACTION FORM</h1> */}
    </Modal>
  )
}

export default BlockFormModal