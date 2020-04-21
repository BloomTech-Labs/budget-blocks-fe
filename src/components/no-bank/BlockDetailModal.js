import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'

const BlockDetailModal = (props) => {
  const [newBlock, setNewBlock] = useState({ name: props.name, limit: props.limit })

  const handleSubmit = event => {
    event.preventDefault()
    console.log('blockProps', props)
    props.editBlock(props.index, newBlock)
    props.handleClose(event)
    // find block in parent's blocks array by props.index
    // change that block in the array
  }


  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
    >
      <div>
        <button onClick={ () => props.handleDelete(props.index)}>Delete</button>
        <button onClick={() => props.handleDeleteAndSave(props.index, props.ownExpenses)}>Delete And Save</button>

        <h2>{`${props.name}'s Expense History`}</h2>
        <form onSubmit={handleSubmit}>
          <h4>Edit Name</h4>
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
          <h4>Edit Block Limit</h4>
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
        <div className="expenses">
          {props.ownExpenses.map((exp, index) => (
            <div onClick={(event) => {
              // take out expense from block
              props.handleAddExpense(exp, event)
              const newExpenses = [...props.ownExpenses]
              newExpenses.splice(index, 1)
              props.setOwnExpenses(newExpenses)

              // put in expense in parent's expenses array
            }} className="green expense">
              <h3>{exp.name}</h3>
              <p>{exp.amount}</p>
            </div>
          ))}
        </div>
      </div>

    </Modal>
  )
}

export default BlockDetailModal