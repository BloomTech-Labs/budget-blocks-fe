import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';
export const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED';

export const userAction = (info, accessToken) => (dispatch) => {
  // const oktaUserInfo = info;
  dispatch({ type: FETCH_USER });
  const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

  axios
    .post(`${SERVER_HOST}/api/users`, info, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      // setUserInfo(res.data.data);
      console.log('hi');
      dispatch({ type: USER_SUCCESS, payload: res.data.data });
      window.localStorage.setItem('user_id', res.data.data.id);
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({ type: USER_FAILURE, payload: err });
    });
};

export const notAuthenticated = () => (dispatch) => {
  dispatch({ type: NOT_AUTHENTICATED });
};

export const updateUser = (userId, changes, accessToken) => (dispatch) => {
  dispatch({ type: UPDATE_USER });
  const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

  axios
    .put(`${SERVER_HOST}/api/users/${userId}`, changes, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => {
      dispatch({ type: USER_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({ type: USER_FAILURE, payload: err });
    });
};
