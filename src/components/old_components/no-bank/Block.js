import React, { useState, useEffect } from 'react'
import BlockDetailModal from './BlockDetailModal'
import BBCard from './BBCard'
import LinearProgress from '@material-ui/core/LinearProgress';

const trunc = (str, n) => {
  return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
}

function Block(props) {
  const [total, setTotal] = useState(0)
  const [openBlockDetail, setOpenBlockDetail] = useState(false)
  const [selectedAndHovering, setSelectedAndHovering] = useState(false)


  useEffect(() => {
    let total = 0
    props.ownExpenses.forEach(exp => {
      total = total + exp.amount
    })
    setTotal(total)
  }, [props.ownExpenses])


  const handleDragOver = (event) => {
    event.preventDefault();
    setSelectedAndHovering(true)
    props.handleSetBlockHovered(true)

  }

  const handleDrop = (event) => {

    if (props.selectedExpense.selected &&
      (props.selectedExpense.expense.amount + total <= props.limit)) {
      props.handleUnselect(props.selectedExpense.expense.id, props.blockID)
      props.handleSelectExpense({
        selected: true,
        expense: {

        }
      })
      setSelectedAndHovering(false)
    } else {

      props.handleSetBlockHovered(false)
      props.handleSelectExpense({
        selected: false,
        expense: {}
      })
    }
  }

  const handleClose = event => {
    event.stopPropagation()
    setOpenBlockDetail(false)
  }



  const handleDragLeave = event => {
    event.preventDefault()
    setSelectedAndHovering(false)
    props.handleSetBlockHovered(false)
  }

  return (
    <BBCard
      text={<div style={{ display: "flex", justifyContent: "space-around" }}>
        <span className="fifty-width"> {trunc(props.name, 6)}</span>
        <span className="fifty-width" style={{ "color": "green" }}>{`${total}`} </span>
        <span className="fifty-width">{`${props.limit}`}</span>
        <span className="fifty-width">{
          <LinearProgress
            variant="determinate"
            value={total === 0 ? 0 : (total / props.limit) * 100}
          />
        }</span>
      </div >
      }
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      role="usersBlock"
      onDragLeave={handleDragLeave}
      cardHovered={selectedAndHovering ? true : false}
      className={selectedAndHovering ? "block green" : "block"}
      onClick={() => {
        setOpenBlockDetail(true)
      }}
    >
      <BlockDetailModal
        open={openBlockDetail}
        handleClose={handleClose}
        editBlock={props.editBlock}
        index={props.index}
        name={props.name}
        limit={props.limit}
        props={props.limit}
        ownExpenses={props.ownExpenses || []}
        handleDeleteBlock={props.handleDeleteBlock}
        handleDeleteAndSave={props.handleDeleteAndSave}
        handleAddExpense={props.addExpense}
        handleUnassignExpense={props.handleUnassignExpense}
        blockID={props.blockID}
        handleUpdateBlock={props.handleUpdateBlock}
      />
    </BBCard>
  )
}

export default Block