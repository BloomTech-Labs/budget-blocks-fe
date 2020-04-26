export const expenseReducer = (state = { expenses: [] }, action) => {
  switch (action.type) {
    case "HYDRATE_EXPENSES":
      return {
        ...state,
        expenses: action.payload
      }
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: action.payload
      }
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: action.payload
      }
    default: {
      return state
    }
  }
}