import React, { useState, useEffect } from "react";
import axios from "axios";
import { fakeExpenses, fakeBlocks } from './fakeData'

const initialExpense = {
  name: "",
  amount: "",
};

const ExpenseList = ({ Expenses }) => {
  console.log(Expenses);
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState(initialExpense);
  const [newExpense, setNewExpense] = useState(initialExpense);
  const [expenseToDelete, setExpenseToDelete] = useState();

  const props = {
    expenses: fakeExpenses,
    blocks: fakeBlocks
  }
  const deleteExpense = (expense) => {
    console.log('*****************************************expense List Rendered')
    axios
      .delete(
        `https://lambda-budget-blocks.herokuapp.com/manual/transaction/:userId/:tranId`
      )
      .then((res) => {
        console.log(res);
        setExpenseToDelete(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const saveEdit = (e) => {
    console.log(expenseToEdit.id);
    e.preventDefault();
    axios
      .put(
        `https://lambda-budget-blocks.herokuapp.com/manual/transaction/:userId/:transactionId`,
        expenseToEdit
      )
      .then((res) => {
        console.log(res.data);
        setExpenseToEdit(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const addExpense = (expense) => {
    axios
      .post(
        `https://lambda-budget-blocks.herokuapp.com//manual/transaction/:userId`,
        expense
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get(
        `https://lambda-budget-blocks.herokuapp.com/manual/transaction/:userId`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const editExpense = (expense) => {
    setEditing(true);
    setExpenseToEdit(expense);
  };

  return (
    <div className="exp-blocks-container">
      <div className="expenses">
        {props.expenses.map(
          exp => {
            return (
              <div className="expense">
                <h2>{exp.name}</h2>
                <p>{exp.amount}</p>
              </div>)
          }
        )}

      </div>
      <div className="blocks">
        {props.blocks.map(
          block => {
            return (
              <div className="block">
                <h2>{block.name}</h2>
                <p>{block.limit}</p>
              </div>
            )
          }
        )}
      </div>
    </div>
    // <div>
    //   <div className="add-form">
    //     <h3>Add A New Expense</h3>
    //     <form onSubmit={() => addExpense(newExpense)}>
    //       <h4>New Expense</h4>
    //       <input
    //         id="name"
    //         name="name"
    //         type="text"
    //         placeholder="Name"
    //         value={newExpense.name}
    //         onChange={(e) =>
    //           setNewExpense({ ...newExpense, [e.target.name]: e.target.value })
    //         }
    //       />
    //       <h4>Amount</h4>
    //       <input
    //         id="amount"
    //         name="amount"
    //         type="text"
    //         placeholder="amount"
    //         value={newExpense.amount}
    //         onChange={(e) =>
    //           setNewExpense({ ...newExpense, [e.target.name]: e.target.value })
    //         }
    //       />

    //       <button type="submit">Add New Expense</button>
    //     </form>
    //   </div>

    //   <div className="edit-form">
    //     {editing && (
    //       <form onSubmit={saveEdit}>
    //         <h3>Edit Expense</h3>
    //         <label>
    //           Expense Name:
    //           <input
    //             onChange={(e) =>
    //               setExpenseToEdit({ ...expenseToEdit, name: e.target.value })
    //             }
    //             value={expenseToEdit.name}
    //           />
    //         </label>
    //         <label>
    //           Expense amount:
    //           <input
    //             onChange={(e) =>
    //               setExpenseToEdit({ ...expenseToEdit, amount: e.target.value })
    //             }
    //             value={expenseToEdit.amount}
    //           />
    //         </label>
    //         <div className="button-row">
    //           <button type="submit">save</button>
    //           <button onClick={() => setEditing(false)}>cancel</button>
    //         </div>
    //       </form>
    //     )}
    //   </div>

    //   <div className="card-container">
    //     <ul>
    //       {data.map((expense) => (
    //         <div key={expense.id}>
    //           <div className="expense-card">
    //             {" "}
    //             <h2>expense</h2>
    //             <h3>expense Name:</h3>
    //             <p> {expense.name}</p>
    //             <h4>expense amount: </h4>
    //             <p>{expense.amount}</p>
    //             <button
    //               className="card-button"
    //               onClick={() => editExpense(expense)}
    //             >
    //               Edit
    //             </button>
    //             <button
    //               className="card-button"
    //               onClick={(e) => {
    //                 e.stopPropagation();
    //                 deleteExpense(expense);
    //               }}
    //             >
    //               X
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
};



export default ExpenseList;
