import { axiosWithAuth } from "../../components/AxiosWithAuth";
import axios from 'axios'
import environmentUrls from "../../dispatch";

export const getExpenses = userID => async dispatch => {
  console.log('**********getExpenses************', userID)
  try {
    const response = await axios(`${environmentUrls.base_url}/expenses/${userID}`)
    // dispatch usersExpenses
    console.log('**************getExpenseData******************', response)
    dispatch({
      type: 'HYDRATE_EXPENSES',
      payload: response.data
    })
  } catch (e) {
    console.log('***********expenseActionError**************',e)
    // dispatch error
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
  } catch (e){
    console.log('**************deleteExpenseError*************', e)
  }
}