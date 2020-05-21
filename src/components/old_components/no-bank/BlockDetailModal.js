import React, { useState } from 'react'
import BBModal from './BBModal'
import BBButton from './BBButton'
import BBTextField from './BBTextField'
import BBCard from './BBCard'

const BlockDetailModal = (props) => {
  const [newBlock, setNewBlock] = useState({ name: props.name, limit: props.limit })

  const handleSubmit = event => {
    event.preventDefault()
    props.handleUpdateBlock(props.blockID, newBlock)
    props.handleClose(event)
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
        <div style={{ maxHeight: "300px" }}>
          {props.ownExpenses.map(exp => (
            <BBCard
              onClick={(event) => {
                props.handleUnassignExpense(exp.id, props.blockID)
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