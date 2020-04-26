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