import React, { useState, useEffect } from 'react'
import Modal from '@material-ui/core/Modal'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import BlockDetailModal from './BlockDetailModal'

function Block(props) {
  const [ownExpenses, setOwnExpenses] = useState([])
  const [total, setTotal] = useState(0)
  const [openBlockDetail, setOpenBlockDetail] = useState(false)

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

  const handleClose = event => {
    event.stopPropagation()
    console.log('onCLoseBLockDetail')
    setOpenBlockDetail(false)

  }

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
          if (keepExpenses === "keep") {
            ownExpenses.forEach(exp => props.addExpense(exp, event))
            props.deleteBlock(props.index)
            return
          }
          props.deleteBlock(props.index)
        }
      }}>Delete</button>
      <BlockDetailModal
        open={openBlockDetail}
        handleClose={handleClose}
        editBlock={props.editBlock}
        index={props.index}
        name={props.name}
        props={props.limit}
        ownExpenses={ownExpenses}
        setOwnExpenses={setOwnExpenses}
      />
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