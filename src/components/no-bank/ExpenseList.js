import React, { useState, useEffect } from "react";
import axios from "axios";
import { fakeExpenses, fakeBlocks } from './fakeData'
import ExpenseFormModal from './ExpenseFormModal'
import BlockFormModal from './BlockFormModal'
import Block from './Block'
import Expense from './Expense';
import { Container } from '@material-ui/core';
import BBModal from './BBModal'
import BBButton from './BBButton'
import BBTextField from './BBTextField'
import AddIcon from '@material-ui/icons/Add';

const ExpenseList = ({ Expenses }) => {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState({});
  const [expenseToDelete, setExpenseToDelete] = useState();
  const [openTransactionForm, setOpenTransactionForm] = useState(false)
  const [openBlockForm, setOpenBlockForm] = useState(false)
  const [openExpenseDetail, setOpenExpenseDetail] = useState(false);
  const [editExpense, setEditExpense] = useState({})

  const [indexOfExpense, setIndexOfExpense] = useState(null);
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

  const deleteAndSave = (index, ownExpenses) => {
    setExpenses([...expenses, ...ownExpenses])
    deleteBlock(index)
    console.log('deleteAndSaveOwnExpenses', ownExpenses)
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

  // const editExpense = (expense) => {
  //   setEditing(true);
  //   setExpenseToEdit(expense);
  // };

  const handleTransactionFormClose = () => {
    setOpenTransactionForm(false)
  }

  const handleBlockFormClose = () => {
    console.log('BlockFormCLosed')
    setOpenBlockForm(false)
  }
  const handleEditExpense = (e, editExp, index) => {
    e.preventDefault();
    const newExpenses = [...expenses]
    newExpenses[index].name = editExp.name
    newExpenses[index].amount = editExp.amount
    setExpenses(newExpenses)
  }

  return (
    <div className="exp-blocks-container">
      {/* <h1>Welcome to Budget Blocks!</h1>  */}
      <Container maxWidth="" >
        {/* <h1>Expenses</h1> */}
        <div className="expense-bar" >
          <span>Expenses</span>
          <span>Amount</span>
          <AddIcon style={{ fontSize: '30px', color: "white" }} onClick={() => { setOpenTransactionForm(true) }} />
        </div>
        {expenses.map(
          (exp, index) => {
            return (
              <Expense
                setEditExpense={setEditExpense}
                selectedExpense={selectedExpense}
                setSelectedExpense={setSelectedExpense}
                setIndexOfExpense={setIndexOfExpense}
                exp={exp}
                index={index}
                setOpenExpenseDetail={setOpenExpenseDetail}
              />
            )
          }
        )}

      </Container>
      <Container >
        <div className="blocks-bar" >
          <span className="fifty-width">Blocks</span>
          <span className="fifty-width">Total</span>
          <span className="fifty-width">Limit</span>
          <span className='fifty-width'>
            <AddIcon
              style={{ fontSize: '30px', color: "white" }}
              onClick={() => { setOpenBlockForm(true) }}
            />
          </span>

        </div>
        {blocks.map(
          (block, index) => {
            return (
              <Block
                addExpense={addExpense}
                editBlock={editBlock}
                deleteBlock={deleteBlock}
                deleteAndSave={deleteAndSave}
                index={index}
                handleUnselect={unSelectExpense}
                selectedExpense={selectedExpense}
                name={block.name}
                limit={block.limit}
                selected={selectedExpense.selected}
              />
            )
          }
        )}

      </Container >

      <ExpenseFormModal
        open={openTransactionForm}
        handleClose={handleTransactionFormClose}
        addExpense={addExpense}
        handleOpen={setOpenTransactionForm}
      />
      <BlockFormModal
        open={openBlockForm}
        handleClose={handleBlockFormClose}
        addBlock={addBlock}
        handleOpen={setOpenBlockForm}
      />
      <BBModal
        open={openExpenseDetail}
        handleClose={(e) => {
          // e.stopPropagation()
          setOpenExpenseDetail(false)
        }}>
        <>
          <h2> Edit Transaction </h2>
          <form onSubmit={(event) => {
            handleEditExpense(event, editExpense, indexOfExpense)
            setOpenExpenseDetail(false)
          }
          }>
            <h3>Name</h3>

            <BBTextField
              id="name"
              name="name"
              type="text"
              value={editExpense.name}
              // onFocus={event => event.stopPropagation()}
              onChange={(e) => {
                setEditExpense({ ...editExpense, [e.target.name]: e.target.value })
              }}
            />
            <h3>Amount</h3>
            <BBTextField
              id="amount"
              name="amount"
              type="text"
              value={editExpense.amount}
              onFocus={event => event.stopPropagation()}
              onChange={(e) => {
                setEditExpense({ ...editExpense, [e.target.name]: e.target.value })
              }}
            />

            <BBButton
              type="submit"
              value="submit"
            > Save </BBButton>
            <BBButton
              onClick={() => {
                const newExpenses = [...expenses]
                newExpenses.splice(indexOfExpense, 1)
                setExpenses(newExpenses)
                setOpenExpenseDetail(false)
              }}
              role={"delete"}
              type="submit"
              value="submit"
            >
              Delete
            </BBButton>

          </form>

        </>
      </BBModal>

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
