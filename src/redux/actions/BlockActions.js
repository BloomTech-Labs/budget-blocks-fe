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


export const deleteBlock = (userID, id) => async dispatch => {
  console.log('**********deleteBlock************', userID, id)
  try {
    const response = await axios.delete(`${environmentUrls.base_url}/expenses/${userID}/${id}`)
    console.log('**************deleteDataBlock*************', response.data)
    dispatch({
      type: "DELETE_BLOCK",
      payload: response.data
    })
  } catch (e) {
    console.log('**************deleteBlockError*************', e)
  }
}