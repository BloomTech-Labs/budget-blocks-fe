import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import BBModal from './BBModal'
import BBButton from './BBButton'
import BBTextField from './BBTextField'
import BBCard from './BBCard'
// import SaveIcon from '@material-ui/icons/Save';

const BlockDetailModal = (props) => {
  const [newBlock, setNewBlock] = useState({ name: props.name, limit: props.limit })

  const handleSubmit = event => {
    event.preventDefault()
    console.log('blockProps', props)
    // props.editBlock(props.index, newBlock)
    props.handleUpdateBlock(props.blockID, newBlock)
    props.handleClose(event)
    // find block in parent's blocks array by props.index
    // change that block in the array
  }


  return (
    <BBModal
      open={props.open}
      handleClose={props.handleClose}
    >
      <div>
        <BBButton
          onClick={() => props.handleDeleteBlock(props.blockID)}
          role={"delete"}>
          Delete
        </BBButton>
        <BBButton
          onClick={() => props.handleDeleteAndSave(props.blockID, props.ownExpenses)}
          role={"deleteAndSave"}
        >Delete And Save</BBButton>

        <h2>{`${props.name}'s Expense History`}</h2>
        <form onSubmit={handleSubmit}>
          <h4>Edit Name</h4>
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
          <h4>Edit Block Limit</h4>
          <BBTextField
            id="limit"
            name="limit"
            type="text"
            placeholder="limit"
            value={newBlock.limit}
            onChange={(e) =>
              setNewBlock({ ...newBlock, [e.target.name]: e.target.value })
            }
          />

          <BBButton type="submit">Save Block</BBButton>
        </form>
        <div style={{maxHeight:"300px"}}>
          {props.ownExpenses.map(exp => (
            <BBCard
              onClick={(event) => {
                props.handleUnassignExpense(exp.id, props.blockID)
                console.log('blockDetailOnClick', exp.id)
                // take out expense from block
                // props.handleAddExpense(exp, event)
                // const newExpenses = [...props.ownExpenses]
                // newExpenses.splice(index, 1)
                // props.setOwnExpenses(newExpenses)
                // put in expense in parent's expenses array
              }}
              role="blocksOwnExpense"

              title={exp.name}
              text={exp.amount}
            />

          ))}
        </div>
      </div>

    </BBModal>
  )
}

export default BlockDetailModal