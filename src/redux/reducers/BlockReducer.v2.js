export const blocksReducer = (state = { blocks: [], blockExpenses: {} }, action) => {
  switch (action.type) {
    case "HYDRATE_BLOCKS":
      return {
        ...state,
        blocks: action.payload.blocks,
        blockExpenses: action.payload.blockExpenses
      }
    case "DELETE_BLOCK":
      return {
        ...state,
        blocks: action.payload
      }
    case "ADD_BLOCK":
      return {
        ...state,
        blocks: action.payload
      }
    case "HYDRATE_OWNEXPENSES":
      const newBlockExpenses = { ...state.blockExpenses }
      console.log('newBlockExpensesBEFORE', newBlockExpenses, action.payload.blockID,action.payload.expenses )
      newBlockExpenses[action.payload.blockID] = action.payload.expenses
      console.log('newBlockExpensesAFTER', newBlockExpenses, action.payload.blockID,action.payload.expenses )

      return {
        ...state,
        blockExpenses: newBlockExpenses
      }
    default: {
      return state
    }
  }
}