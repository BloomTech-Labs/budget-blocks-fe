import { axiosWithAuth } from "../../components/AxiosWithAuth";
import axios from 'axios'
import environmentUrls from "../../dispatch";

export const getExpenses = userID => async dispatch => {
  console.log('**********getExpenses************', userID)
  try {
    const response = await axiosWithAuth()(`${environmentUrls.base_url}/expenses/exp`)
    // dispatch usersExpenses
    console.log('**************getExpenseData******************', response)
    dispatch({
      type: 'HYDRATE_EXPENSES',
      payload: response.data
    })
  } catch (e) {
    console.log('***********expenseActionError**************', e)
    // dispatch error
  }
}

export const addExpense = (userID, expense) => async dispatch => {
  console.log('************AddExpense**********', userID, expense)
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
    console.log('**********assignBLockError**************', error)
  }
}

export const deleteExpense = (userID, id) => async dispatch => {
  console.log('**********deleteExpenses************', userID, id)
  try {
    const response = await axios.delete(`${environmentUrls.base_url}/expenses/${userID}/${id}`)
    console.log('**************deleteData*************', response.data)
    dispatch({
      type: "DELETE_EXPENSE",
      payload: response.data
    })
  } catch (e) {
    console.log('**************deleteExpenseError*************', e)
  }
}

export const assignBlock = (expenseID, blockID) => async dispatch => {
  console.log('**********assignBlock************', blockID, expenseID)
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
  } catch (error) {
    console.log('****************assignError************', error)
  }
}

export const unassignExpense = (expenseID, blockID) => async dispatch => {
  console.log('**********unassignExp************', expenseID)
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

