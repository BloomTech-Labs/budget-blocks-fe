import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import BBModal from './BBModal'
import BBButton from './BBButton'
import BBTextField from './BBTextField'

function BlockFormModal(props) {
  const [newBlock, setNewBlock] = useState({
    name: "",
    limit: ""
  });

  return (
    <BBModal
      open={props.open}
      handleClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="add-form">
        <h3>Add A New Block</h3>
        <form onSubmit={(event) => {
          props.addBlock(newBlock, event)
          props.handleOpen(false)
        }}>
          <h4>New Block</h4>
          <BBTextField
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
          <BBTextField
            id="limit"
            name="limit"
            type="text"
            placeholder="Limit"
            value={newBlock.limit}
            onChange={(e) =>
              setNewBlock({ ...newBlock, [e.target.name]: e.target.value })
            }
          />
          <BBButton type="submit">
            Add New Block
            </BBButton>

        </form>
      </div>
      {/* <h1>TRANSACTION FORM</h1> */}
    </BBModal>
  )
}

export default BlockFormModal