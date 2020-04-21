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

  const [selectedAndHovering, setSelectedAndHovering] = useState(false)

  
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

  const handleMouseEnter = event => {
    if (props.selectedExpense.selected) {
      setSelectedAndHovering(true)
    }
  }


  const handleMouseLeave = event => {
    if (props.selectedExpense.selected) {
      setSelectedAndHovering(false)
    }
  }

  
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={selectedAndHovering ? "block green" : "block"}
      onClick={() => {
        if (props.selectedExpense.selected) {
          setOwnExpenses([...ownExpenses, props.selectedExpense.expense])
          props.handleUnselect(props.selectedExpense.expense.id)
          setSelectedAndHovering(false)
        } else {
          // open open up modal
          // handleOpenBlockModal(ownExpenses, total)
          setOpenBlockDetail(true)
          console.log('ownExpenses', ownExpenses)
        }
        console.log('onClickBLock', props)
      }}>
      <h2>{props.name}</h2>
      <span style={{ "color": "green" }}>{`${total}`} </span>
      <span> of </span> 
      <span>{`${props.limit}`}</span>
      
      <BlockDetailModal
        open={openBlockDetail}
        handleClose={handleClose}
        editBlock={props.editBlock}
        index={props.index}
        name={props.name}
        props={props.limit}
        ownExpenses={ownExpenses}
        setOwnExpenses={setOwnExpenses}
        handleDelete={props.deleteBlock}
        handleDeleteAndSave={props.deleteAndSave}
      />
    </div>
  )
}

export default Block