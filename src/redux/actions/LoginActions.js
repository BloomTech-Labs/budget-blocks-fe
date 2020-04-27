import axios from "axios";
import environmentUrls from "../../dispatch";
import promiseTimeout from "../../helpers/promiseTimeout";

export const LOGIN_USER_LOADING = "LOGIN_USER_LOADING";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export const loginUserLoading = () => ({ type: LOGIN_USER_LOADING });
export const loginUserSuccess = (data) => ({
  type: LOGIN_USER_SUCCESS,
  payload: data,
});
export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILED,
  payload: error,
});

export function loginUser(user, history) {
  console.log('***********loginUserData**************', user)
  return function (dispatch) {
    return axios
      .post(`${environmentUrls.base_url}/api/auth/login`, user)
      .then(promiseTimeout(1000))
      .then((response) => {
        dispatch(loginUserLoading());
        // All Login data saved to sessionStorage and then saved to redux
        // This way a user can refresh the page a not need to relogin
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("userID", response.data.id);
        sessionStorage.setItem("LinkedAccount", response.data.LinkedAccount);
        sessionStorage.setItem("navState", response.data.navState);
        localStorage.clear();
        return response;
      })
      .then((response) => {
        // If the user is not using manual nor plaid: take them to onboarding process. Otherwise take them to dashboard
        dispatch(loginUserSuccess(response.data));
        // if (
        //   response.data.LinkedAccount === true ||
        //   response.data.ManualOnly === true
        // ) {
          history.push("/dashboard");
        // } else {
        //   history.push("/onBoard/1");
        // }
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginUserFailure(error));
      });
  };
}
