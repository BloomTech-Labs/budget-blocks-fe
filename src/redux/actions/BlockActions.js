import { axiosWithAuth } from "../../components/AxiosWithAuth";
import axios from 'axios'
import environmentUrls from "../../dispatch";

export const getBlocks = userID => async dispatch => {
  console.log('**********getExpenses************', userID)
  try {
    const response = await axiosWithAuth()(`${environmentUrls.base_url}/blocks/blk`)
    // dispatch usersExpenses
    console.log('**************getblocksData******************', response)
    dispatch({
      type: 'HYDRATE_BLOCKS',
      payload: response.data
    })
  } catch (e) {
    console.log('***********blocksActionError**************', e)
    // dispatch error
  }
}

export const addBlock = (userID, block) => async dispatch => {
  console.log('************AddBlock**********', userID, block)
  try {
    const response = await axiosWithAuth().post(`${environmentUrls.base_url}/blocks/blk`, block)
    dispatch({
      type: "ADD_BLOCK",
      payload: response.data
    })
  } catch (e) {
    console.log('***********addBlockActionError**************', e)
  }
}


export const deleteBlock = (id) => async dispatch => {
  console.log('**********deleteBlock************', id)
  try {
    const response = await axiosWithAuth().delete(`${environmentUrls.base_url}/blocks/${id}`)
    console.log('**************deleteDataBlock*************', response.data)
    dispatch({
      type: "DELETE_BLOCK",
      payload: response.data
    })
  } catch (e) {
    console.log('**************deleteBlockError*************', e)
  }
}

export const addOwnExpense = (blockID, expenseID) => async dispatch => {
  console.log('**************addOwnExpense************', blockID, expenseID)
  try {
    const response = await axiosWithAuth().get(`${environmentUrls.base_url}/blocks/${blockID}`)

    dispatch({
      type: 'HYDRATE_OWNEXPENSES',
      payload: { expenses: response.data, blockID }
    })
    console.log('hydrateOwnExpData', response.data)
  } catch (error) {
    console.log('***********addOwnExpError************', error)
  }
}

export const deleteAndSave = (blockID, ownExpenses) => async dispatch => {
  console.log('deleteAndSave', blockID, ownExpenses)
  try {
    const unassignArr = []
    ownExpenses.forEach(exp => {
      unassignArr.push(axiosWithAuth().put(`${environmentUrls.base_url}/expenses/${exp.id}/unassign`))
    })
    await Promise.all(unassignArr)
    const newExpenses = await axiosWithAuth()(`${environmentUrls.base_url}/expenses/exp`)
    dispatch({
      type: "HYDRATE_EXPENSES",
      payload: newExpenses.data
    })
    await axiosWithAuth().delete(`${environmentUrls.base_url}/blocks/${blockID}`)
    const newBlocks = await axiosWithAuth()(`${environmentUrls.base_url}/blocks/blk`)
    dispatch({
      type: "HYDRATE_BLOCKS",
      payload: newBlocks.data
    })
  } catch (error) {
    console.log('error')
  }
}

export const updateBlock = (id,block) => async dispatch => {
  console.log('updating vlock', block)
  try {
    const response = await axiosWithAuth().put(`${environmentUrls.base_url}/blocks/${id}`, block)
    dispatch({
      type: "UPDATE_BLOCKS",
      payload: response.data
    })
  } catch (error) {
    console.log(error)
  }
}