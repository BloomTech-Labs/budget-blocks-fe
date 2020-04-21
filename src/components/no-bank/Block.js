import React, { useState, useEffect } from 'react'
import Modal from '@material-ui/core/Modal'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Block(props) {
  const [ownExpenses, setOwnExpenses] = useState([])
  const [total, setTotal] = useState(0)
  const [openBlockDetail, setOpenBlockDetail] = useState(false)

  const [newBlock, setNewBlock] = useState({ name: props.name, limit: props.limit })
  const [openDeleteAskModal, setOpenDeleteAskModal] = useState(false)
  const [keepExpenses, setKeepExpenses] = useState("keep")

  const handleChooseKeep = (event) => {
    event.stopPropagation()
    setKeepExpenses(event.target.value);
  };
  useEffect(() => {
    console.log('blocks state', { ownExpenses, total })
  }, [ownExpenses, total])

  useEffect(() => {
    let total = 0
    ownExpenses.forEach(exp => {
      total = total + exp.amount
    })
    setTotal(total)
  }, [ownExpenses])


  return (
    <div className="block" onClick={() => {
      if (props.selectedExpense.selected) {
        setOwnExpenses([...ownExpenses, props.selectedExpense.expense])
        props.handleUnselect(props.selectedExpense.expense.id)
      } else {
        // open open up modal
        // handleOpenBlockModal(ownExpenses, total)
        setOpenBlockDetail(true)
        console.log('ownExpenses', ownExpenses)
      }
      console.log('onClickBLock', props)
    }}>
      <h2>{props.name}</h2>
      {/* <p>{props.limit}</p> */}
      <span style={{ "color": "green" }}>{`${total}`} </span>
      <span>{`${props.limit}`}</span>
      <button onClick={(event) => {
        event.stopPropagation()
        // if there are expenses, 
        // ask user if he wants to keep them
        // else delete

        // if expenses, and he says yes, then
        // add all ownexpenses to expenseList expenses
        if (ownExpenses.length === 0) {
          // run delete on block
          props.deleteBlock(props.index)
        } else {
          // ask
          setOpenDeleteAskModal(true)
          if(keepExpenses === "keep"){
            ownExpenses.forEach(exp => props.addExpense(exp, event))
            props.deleteBlock(props.index)
            return
          } 
          props.deleteBlock(props.index)
        }
      }}>Delete</button>
      <Modal
        open={openBlockDetail}
        onClose={(event) => {
          event.stopPropagation()
          console.log('onCLoseBLockDetail')
          setOpenBlockDetail(false)
        }
        }
      >
        <div>
          <h2>{`${props.name}'s Expense History`}</h2>
          <form onSubmit={(event) => {
            event.preventDefault()
            console.log('blockProps', props)
            props.editBlock(props.index, newBlock)
            setOpenBlockDetail(false)

            // find block in parent's blocks array by props.index
            // change that block in the array
          }}>
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
            {ownExpenses.map((exp, index) => (
              <div onClick={(event) => {
                // take out expense from block
                props.addExpense(exp, event)
                const newExpenses = [...ownExpenses]
                newExpenses.splice(index, 1)
                setOwnExpenses(newExpenses)

                // put in expense in parent's expenses array
              }} className="green expense">
                <h3>{exp.name}</h3>
                <p>{exp.amount}</p>
              </div>
            ))}
          </div>
        </div>

      </Modal>
      <Modal
        open={openDeleteAskModal}
        onClose={(event) => {
          event.stopPropagation()
          setOpenDeleteAskModal(false)
        }}
      >
        <div style={{ height: "100px", width: "230px" }}>
          
          <FormControl component="fieldset">
            <FormLabel component="legend">Keep or discard expenses?</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={keepExpenses} onChange={handleChooseKeep}>
              <FormControlLabel value="keep" control={<Radio />} label="Keep" />
              <FormControlLabel value="discard" control={<Radio />} label="Discard" />
            </RadioGroup>
          </FormControl>

        </div>
      </Modal>
    </div>
  )
}

export default Block