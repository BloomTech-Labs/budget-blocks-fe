import React from "react";

const Expense = (props) => {
  return (
    <div className={props.selectedExpense.selected && props.selectedExpense.expense.id === props.exp.id ? "expense green" : "expense"} 
    onClick={
      () => {
        console.log('onClickExpense', props.selectedExpense)
        if (!props.selectedExpense.selected) {

          props.setSelectedExpense({
            selected: true,
            expense: props.exp
          })

        } else if (props.selectedExpense.expense.id === props.exp.id) {
          props.setSelectedExpense({
            selected: false,
            expense: {}
          })
        }
      }
    }>
      <h2>{props.exp.name}</h2>
      <p>{props.exp.amount}</p>
      <button 
      className="edit-sub-btn"
        onClick={(e) => {
          console.log('before, editbtnclick')

          e.stopPropagation()
          console.log('after, editbtnclick')
          props.setEditExpense(props.exp)
          props.setIndexOfExpense(props.index)
          props.setOpenExpenseDetail(true)
        }}>Edit</button>
    </div>
  )
}

export default Expense; 