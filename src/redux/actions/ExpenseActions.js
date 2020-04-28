import { axiosWithAuth } from "../../components/AxiosWithAuth";
import environmentUrls from "../../dispatch";

export const getExpenses = userID => async dispatch => {
  try {
    const response = await axiosWithAuth()(`${environmentUrls.base_url}/expenses/exp`)
    dispatch({
      type: 'HYDRATE_EXPENSES',
      payload: response.data
    })
  } catch (e) {
    console.log(e)
  }
}

export const addExpense = (userID, expense) => async dispatch => {
  try {
    const response = await axiosWithAuth().post(`${environmentUrls.base_url}/expenses/exp`, expense)
    dispatch({
      type: "ADD_EXPENSE",
      payload: response.data
    })
  } catch (e) {
    console.log('***********addExpenseActionError**************', e)
  }
}

export const getUnassigned = (expenseID, blockID) => async dispatch => {
  try {
    const response = await axiosWithAuth().put(`${environmentUrls.base_url}/expenses/${blockID}`, { expenseID })
    dispatch({
      type: "HYDRATE_EXPENSES",
      payload: response.data
    })

  } catch (error) {
  }
}

export const deleteExpense = (id) => async dispatch => {
  try {
    const response = await axiosWithAuth().delete(`${environmentUrls.base_url}/expenses/${id}`)
    dispatch({
      type: "DELETE_EXPENSE",
      payload: response.data
    })
    console.log('**************deleteDataAFTER*************', response.data)

  } catch (e) {
    console.log('**************deleteExpenseError*************', e)
  }
}

export const assignBlock = (expenseID, blockID) => async dispatch => {
  try {
    const response = await axiosWithAuth().put(`${environmentUrls.base_url}/expenses/${expenseID}/assignBlock`, { blockID })
    dispatch({
      type: "HYDRATE_EXPENSES",
      payload: response.data
    })
    const blockResponse = await axiosWithAuth().get(`${environmentUrls.base_url}/blocks/${blockID}`)
    dispatch({
      type: 'HYDRATE_OWNEXPENSES',
      payload: { expenses: blockResponse.data, blockID }
    })
    dispatch({
      type: "SELECT_EXPENSE",
      payload: {
        selected: false,
        expense: {}
      }
    })
    dispatch({
      type: "BLOCK_HOVER",
      payload: false
    })
  } catch (error) {
    console.log('****************assignError************', error)
  }
}

export const selectExpense = selected => dispatch => {
  dispatch({
    type: "SELECT_EXPENSE",
    payload: selected
  })
}

export const unassignExpense = (expenseID, blockID) => async dispatch => {
  try {
    const response = await axiosWithAuth().put(`${environmentUrls.base_url}/expenses/${expenseID}/unassign`)
    dispatch({
      type: "HYDRATE_EXPENSES",
      payload: response.data
    })

    const blockResponse = await axiosWithAuth().get(`${environmentUrls.base_url}/blocks/${blockID}`)
    dispatch({
      type: 'HYDRATE_OWNEXPENSES',
      payload: { expenses: blockResponse.data, blockID }
    })

  } catch (error) {
    console.log('****************unassignError************', error)
  }
}

export const setBlockHover = (bool) => dispatch => {
  dispatch({
    type: "BLOCK_HOVER",
    payload: bool
  })
}

export const updateExpense = (id, expense) => async dispatch => {
  try {
    const response = await axiosWithAuth().put(`${environmentUrls.base_url}/expenses/${id}`, expense)
    console.log('UUUUUUUPDATEEXPDATA', response.data)
    dispatch({
      type: "UPDATE_EXPENSE",
      payload: response.data
    })
  } catch (error) {
    console.log(error)
  }
}

