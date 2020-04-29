import React from "react";
import BBCard from './BBCard'
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const trunc = (str, n) => {
  return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
}

const Expense = (props) => {

  const handleDragStart = (event) => {
    if (!props.selectedExpense.selected) {
      event.dataTransfer.setData("expenseID", props.exp.id);
      props.handleSelectExpense({
        selected: true,
        expense: props.exp
      })

    } else if (props.selectedExpense.expense.id === props.exp.id) {
      props.handleSelectExpense({
        selected: false,
        expense: {}
      })
    }
  }



  return (
    <BBCard
      role="usersExpense"
      text={
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <span className="hundred-width">{trunc(props.exp.name, 6)}</span>
          <span className="red seventy-width">-${props.exp.amount}</span>
          <MoreVertIcon
            className="edit-sub-btn green-font"
            onClick={(e) => {
              e.stopPropagation()
              props.setEditExpense(props.exp)
              props.setOpenExpenseDetail(true)
            }} />
        </div>
      }
      cardSelected={props.selectedExpense.selected && props.selectedExpense.expense.id === props.exp.id ? true : false}
      className={props.selectedExpense.selected && props.selectedExpense.expense.id === props.exp.id ? "expense green" : "expense"}
      onDragStart={handleDragStart}
      draggable
      onDragEnd={props.handleDragEnd}
    >
    </BBCard>
  )
}

export default Expense; 