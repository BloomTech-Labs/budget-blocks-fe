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

const ExpenseList = ({
  expenses,
  handleAddExpense,
  handleDeleteExpense,
  userID,
  blocks,
  handleAddBlock,
  handleAssignBlock,
  handleUpdateBlock,
  blockExpenses,
  handleUnassignExpense,
  handleDeleteAndSave,
  handleDeleteBlock,
  handleUpdateExpense,
  selectedExpense, 
  handleSelectExpense,
  handleSetBlockHover,
  blockHover
}) => {

  const [openTransactionForm, setOpenTransactionForm] = useState(false)
  const [openBlockForm, setOpenBlockForm] = useState(false)
  const [openExpenseDetail, setOpenExpenseDetail] = useState(false);
  const [editExpense, setEditExpense] = useState({})
  const [expensesView, setExpensesView] = useState(expenses)
  

  useEffect(() => {
    if (selectedExpense.selected) {
      setExpensesView(expensesView.filter(exp => exp.id !== selectedExpense.expense.id))
    }
    else {
      setExpensesView(expenses)
    }
  }, [expenses, selectedExpense])

  const editBlock = (index, block) => {
    const newBlocks = [...blocks]
    newBlocks[index] = block
  }

  const handleDragEnd = (e) => {
    e.stopPropagation() // explain this better

    if(!blockHover){
      setExpensesView(expenses)
      handleSelectExpense({
        selected:false,
        expense:{}
      })
    }
    
  }

  const unSelectExpense = (expenseID, blockID) => {
       handleAssignBlock(expenseID, blockID)
  }

  const addBlock = (block, event) => {
    event.preventDefault()
    handleAddBlock(userID, block)
  }
  

  const addExpense = (expense, event) => {
    event.preventDefault()
    handleAddExpense(userID, expense)
  };


  const handleTransactionFormClose = () => {
    setOpenTransactionForm(false)
  }

  const handleBlockFormClose = () => {
    setOpenBlockForm(false)
  }

  return (
    <div className="exp-blocks-container">
      <Container maxWidth="" >
        <div className="expense-bar" >
          <span>Expenses</span>
          <span>Amount</span>
          <AddIcon style={{ fontSize: '30px', color: "white" }} onClick={() => { setOpenTransactionForm(true) }} />
        </div>
        {expensesView.map(
          (exp, index) => {
            return (
              <Expense
                setEditExpense={setEditExpense}
                selectedExpense={selectedExpense}
                handleSelectExpense={handleSelectExpense}
                exp={exp}
                index={index}
                handleDragEnd={handleDragEnd}
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
                handleDeleteBlock={handleDeleteBlock}
                index={index}
                handleUnselect={unSelectExpense}
                selectedExpense={selectedExpense}
                name={block.name}
                limit={block.limit}
                selected={selectedExpense.selected}
                blockID={block.id}
                ownExpenses={blockExpenses[block.id] || []}
                handleUnassignExpense={handleUnassignExpense}
                handleDeleteAndSave={handleDeleteAndSave}
                handleUpdateBlock={handleUpdateBlock}
                handleSelectExpense={handleSelectExpense}
                handleSetBlockHovered={handleSetBlockHover}
                handleAddBlock={addBlock}
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
          setOpenExpenseDetail(false)
        }}>
        <>
          <h2> Edit Transaction </h2>
          <form onSubmit={(event) => {
            event.preventDefault()
            handleUpdateExpense(editExpense.id, editExpense)
            setOpenExpenseDetail(false)
          }
          }>
            <h3>Name</h3>

            <BBTextField
              id="name"
              name="name"
              type="text"
              value={editExpense.name}
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
                handleDeleteExpense(editExpense.id)
                setOpenExpenseDetail(false)
              }}
              role={"delete"}

            >
              Delete
            </BBButton>
          </form>
        </>
      </BBModal>
    </div>
  );
};

export default ExpenseList;
