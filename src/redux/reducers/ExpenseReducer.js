export const expenseReducer = (state = {
  selectedExpense: { selected: false, expense: {} },
  expenses: [],
  blockHover: false
}, action) => {
  switch (action.type) {
    case "HYDRATE_EXPENSES":
      return {
        ...state,
        expenses: action.payload
      }
    case "DELETE_EXPENSE":
      console.log('deleteEXpesneReducer', action)
      return {
        ...state,
        expenses: action.payload
      }
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: action.payload
      }
    case "UPDATE_EXPENSE":
      return {
        ...state,
        expenses: action.payload
      }
    case "SELECT_EXPENSE":
      return {
        ...state,
        selectedExpense: action.payload
      }
    case "BLOCK_HOVER":
      return {
        ...state,
        blockHover: action.payload
      }
    default: {
      return state
    }
  }
}