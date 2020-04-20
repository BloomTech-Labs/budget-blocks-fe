import React, { useState, useEffect } from 'react'

function Block(props) {
  const [ownExpenses, setOwnExpenses] = useState([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    console.log('blocks state', { ownExpenses, total })
  }, [ownExpenses, total])

  useEffect(()=>{
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
      }
      console.log('onClickBLock', props)
    }}>
      <h2>{props.name}</h2>
      <p>{props.limit}</p>
    </div>
  )
}

export default Block