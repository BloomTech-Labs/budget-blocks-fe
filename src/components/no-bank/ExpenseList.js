import React, { useState, useEffect } from "react";
import axios from "axios";
import { fakeExpenses, fakeBlocks } from './fakeData'
import ExpenseFormModal from './ExpenseFormModal'
import BlockFormModal from './BlockFormModal'
import Block from './Block'


const ExpenseList = ({ Expenses }) => {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState({});
  const [expenseToDelete, setExpenseToDelete] = useState();
  const [openTransactionForm, setOpenTransactionForm] = useState(false)
  const [openBlockForm, setOpenBlockForm] = useState(false)
  const [openBlockDetail, setOpenBlockDetail] = useState(false)

  const [expenses, setExpenses] = useState(fakeExpenses)
  const [blocks, setBlocks] = useState(fakeBlocks)
  const [selectedExpense, setSelectedExpense] = useState({
    selected: false,
    expense: {}
  })

  // const props = {
  //   expenses: fakeExpenses,
  //   blocks: fakeBlocks
  // }

  const editBlock = (index, block) => {
    const newBlocks = [...blocks]
    newBlocks[index] = block
    setBlocks(newBlocks)
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
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const unSelectExpense = (id) => {
    setSelectedExpense({
      selected: false,
      expense: {}
    })
    const newExpenses = expenses.filter(exp => exp.id !== id)
    setExpenses(newExpenses)
  }

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
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const addBlock = (block, event) => {
    event.preventDefault()
    setBlocks([...blocks, block])
  }

  const deleteBlock = index => {
    const newBlocks = [...blocks]
    newBlocks.splice(index, 1)
    setBlocks(newBlocks)
   }

  const addExpense = (expense, event) => {
    event.preventDefault()
    setExpenses([...expenses, expense])

  };

  useEffect(() => {
    console.log('selectedExpense', selectedExpense)
  }, [selectedExpense])

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://lambda-budget-blocks.herokuapp.com/manual/transaction/:userId`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // }, []);

  const editExpense = (expense) => {
    setEditing(true);
    setExpenseToEdit(expense);
  };

  const handleTransactionFormClose = () => {
    setOpenTransactionForm(false)
  }

  const handleBlockFormClose = () => {
    setOpenBlockForm(false)
  }

  return (
    <div className="exp-blocks-container">
      <div className="expenses">
        <button onClick={() => { setOpenTransactionForm(true) }} >OPEN TRASACTION FORM</button>
        {expenses.map(
          exp => {
            return (
              <div className={selectedExpense.selected && selectedExpense.expense.id === exp.id ? "expense green" : "expense"} onClick={
                () => {
                  console.log('onClickExpense', selectedExpense)
                  if (!selectedExpense.selected) {

                    setSelectedExpense({
                      selected: true,
                      expense: exp
                    })

                  } else if (selectedExpense.expense.id === exp.id) {
                    setSelectedExpense({
                      selected: false,
                      expense: {}
                    })
                  }
                }
              }>
                <h2>{exp.name}</h2>
                <p>{exp.amount}</p>
              </div>)
          }
        )}

      </div>
      <div className="blocks">
        <button onClick={() => { setOpenBlockForm(true) }} >OPEN BLOCK FORM</button>
        {blocks.map(
          (block, index) => {
            return (
              <Block
                addExpense={addExpense}
                editBlock={editBlock}
                deleteBlock={deleteBlock}
                index={index}
                handleUnselect={unSelectExpense}
                selectedExpense={selectedExpense}
                name={block.name}
                limit={block.limit}

              />
            )
          }
        )}
      </div>

      <ExpenseFormModal
        open={openTransactionForm}
        handleClose={handleTransactionFormClose}
        addExpense={addExpense}
        handleOpen={setOpenTransactionForm}
      />
      <BlockFormModal
        open={openBlockForm}
        handleCLose={handleBlockFormClose}
        addBlock={addBlock}
        handleOpen={setOpenBlockForm}
      />

      />
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
