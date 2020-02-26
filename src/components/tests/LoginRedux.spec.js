import * as actions from "../../redux/actions/LoginActions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import logger from "redux-logger";
var MockAdapter = require("axios-mock-adapter");
import axios from "axios";
import { reducer } from "../../redux/reducers/LoginReducer";

const middlewares = [thunk, logger];
const mockStore = configureMockStore(middlewares);
var mock = new MockAdapter(axios);
const history = {
  push: string => {
    console.log(`Go to ${string}!`);
  }
};

const initialState = {
  user: {
    id: null,
    token: "",
    message: "",
    LinkedAccount: false
  },
  error: null,
  isFetching: false
};

test("should create an action to add a user on successful login", () => {
  const payload = {
    id: null,
    token: "",
    message: "",
    LinkedAccount: false
  };
  const expectedAction = {
    type: actions.LOGIN_USER_SUCCESS,
    payload: payload
  };
  expect(actions.loginUserSuccess(payload)).toEqual(expectedAction);
});

test("should create an action to call loading action when login is loading", () => {
  const expectedAction = {
    type: actions.LOGIN_USER_LOADING
  };
  expect(actions.loginUserLoading()).toEqual(expectedAction);
});

test("should create an action to add an error when login fails", () => {
  const payload = "You failed to login";
  const expectedAction = {
    type: actions.LOGIN_USER_FAILED,
    payload: payload
  };
  expect(actions.loginUserFailure(payload)).toEqual(expectedAction);
});

test("creates LOGIN_USER_SUCCESS when login is successful", () => {
  const returnBody = {
    id: 1,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6Ikt5bGUiLCJpYXQiOjE1ODAyMzU0NzMsImV4cCI6MTU4MDI0OTg3M30.vOU1ZbHcLxOgCtD50Pu7JqHiudEc-0VYtDfbtXeqvlU",
    message: "Welcome Yeet!",
    LinkedAccount: false
  };

  mock
    .onPost("https://lambda-budget-blocks.herokuapp.com/api/auth/login")
    .reply(200, returnBody);

  const expectedActions = [
    { type: actions.LOGIN_USER_LOADING },
    { type: actions.LOGIN_USER_SUCCESS, payload: returnBody }
  ];

  const store = mockStore({ user: {} });
  return store.dispatch(actions.loginUser({}, history)).then(() => {
    // return of async actions
    expect(store.getActions()).toEqual(expectedActions);
  });
});

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual({
    error: null,
    isFetching: false,
    navState: "",
    user: { LinkedAccount: false, id: null, message: "", token: "" }
  });
});

test("should handle LOGIN_USER_SUCCESS", () => {
  const returnBody = {
    id: 1,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6Ikt5bGUiLCJpYXQiOjE1ODAyMzU0NzMsImV4cCI6MTU4MDI0OTg3M30.vOU1ZbHcLxOgCtD50Pu7JqHiudEc-0VYtDfbtXeqvlU",
    message: "Welcome Yeet!",
    LinkedAccount: false
  };

  expect(
    reducer(initialState, {
      type: actions.LOGIN_USER_SUCCESS,
      payload: returnBody
    })
  ).toEqual({
    user: returnBody,
    error: null,
    isFetching: false,
    navState: "I am in show logout but"
  });
});

test("should handle LOGIN_USER_LOADING", () => {
  expect(
    reducer(initialState, {
      type: actions.LOGIN_USER_LOADING
    })
  ).toEqual({
    user: {
      id: null,
      token: "",
      message: "",
      LinkedAccount: false
    },
    error: null,
    isFetching: true
  });
});

test("should handle LOGIN_USER_FAILED", () => {
  const returnBody = { error: "there is an error" };
  const user = {
    id: null,
    token: "",
    message: "",
    LinkedAccount: false
  };

  expect(
    reducer(initialState, {
      type: actions.LOGIN_USER_FAILED,
      payload: returnBody
    })
  ).toEqual({
    user: user,
    error: returnBody,
    isFetching: false
  });
});
