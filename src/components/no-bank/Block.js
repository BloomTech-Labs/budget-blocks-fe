import React, { useState, useEffect } from 'react'
import BlockDetailModal from './BlockDetailModal'
import BBCard from './BBCard'
import LinearProgress from '@material-ui/core/LinearProgress';

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
    <BBCard
      // title={props.name}
      text={<div style={{ display: "flex", justifyContent: "space-around" }}>
        <span className="fifty-width"> {props.name}</span>
        <span className="fifty-width" style={{ "color": "green" }}>{`${total}`} </span>
        <span className="fifty-width">{`${props.limit}`}</span>
        <span className="fifty-width">{
          <LinearProgress
            variant="determinate"
            value={total ===0 ? 0 : (total/props.limit)*100}
          />
        }</span>
      </div >
      }
      role="usersBlock"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      cardHovered={selectedAndHovering ? true : false}
      // className={selectedAndHovering ? "block green" : "block"}
      onClick={() => {
        if (props.selectedExpense.selected) {
          setOwnExpenses([...ownExpenses, props.selectedExpense.expense])
          props.handleUnselect(props.selectedExpense.expense.id)
          setSelectedAndHovering(false)
          console.log('lalala', (total/props.limit)*100)

        } else {
          // open open up modal
          // handleOpenBlockModal(ownExpenses, total)
          setOpenBlockDetail(true)
          console.log('ownExpenses', ownExpenses)
        }
        console.log('onClickBLock', props)
      }}>

      <BlockDetailModal
        open={openBlockDetail}
        handleClose={handleClose}
        editBlock={props.editBlock}
        index={props.index}
        name={props.name}
        limit={props.limit}
        props={props.limit}
        ownExpenses={ownExpenses}
        setOwnExpenses={setOwnExpenses}
        handleDelete={props.deleteBlock}
        handleDeleteAndSave={props.deleteAndSave}
        handleAddExpense={props.addExpense}
      />
    </BBCard>
  )
}

export default Block