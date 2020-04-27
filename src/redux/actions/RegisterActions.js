import axios from "axios";
import environmentUrls from "../../dispatch";
import { Redirect} from "react-router-dom";
import React from 'react'
import promiseTimeout from "../../helpers/promiseTimeout";


export const REGISTER_USER_LOADING = "REGISTER_USER_LOADING";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";

export const registerUserLoading = () => ({ type: REGISTER_USER_LOADING });
export const registerUserSuccess = (data) => ({
  type: REGISTER_USER_SUCCESS,
  payload: data,
});
export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILED,
  payload: error,
});

export function registerUser(data, history) {
  // This function is used in Register.jsx
  // After sucecssful register: takes the user to the onboarding process
  // localStorage items are used to login automatically in onboarding process

  return function (dispatch) {
    dispatch(registerUserLoading());
    return axios
      .post(`${environmentUrls.base_url}/api/auth/register`, data)
      .then(promiseTimeout(6000))
      .then((response) => {
        dispatch(registerUserSuccess(response.data));
        history.push("/login");
        
      })
      .catch((error) => {
        dispatch(registerUserFailure(error.response.data.error));
      });
  };
}
