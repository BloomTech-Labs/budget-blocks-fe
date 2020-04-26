export const blocksReducer = (state = { blocks: [] }, action) => {
  switch (action.type) {
    case "HYDRATE_BLOCKS":
      return {
        ...state,
        blocks: action.payload
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
    default: {
      return state
    }
  }
}