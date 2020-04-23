import React from "react";
import BBCard from './BBCard'
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const Expense = (props) => {
  return (
    <BBCard
    role="usersExpense"
    // title={props.exp.name}
    text={ 
    <div style={{display:'flex', justifyContent: 'space-around'}}>
      <span className="hundred-width">{props.exp.name}</span>
      <span className="red seventy-width">-${props.exp.amount}</span>
      <MoreVertIcon
      className="edit-sub-btn green-font"
      onClick={(e) => {
        console.log('before, editbtnclick')

        e.stopPropagation()
        console.log('after, editbtnclick')
        props.setEditExpense(props.exp)
        props.setIndexOfExpense(props.index)
        props.setOpenExpenseDetail(true)
      }}/>
    </div> 
    }
    cardSelected={props.selectedExpense.selected && props.selectedExpense.expense.id === props.exp.id ? true :false}  
    className={props.selectedExpense.selected && props.selectedExpense.expense.id === props.exp.id ? "expense green" : "expense"} 
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
    </BBCard>
  )
}

export default Expense; 