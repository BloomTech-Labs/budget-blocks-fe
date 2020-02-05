import * as actions  from "../../redux/actions/LoginActions"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import logger from "redux-logger";
var MockAdapter = require('axios-mock-adapter');
import axios from "axios"

const middlewares = [thunk, logger];
const mockStore = configureMockStore(middlewares);
var mock = new MockAdapter(axios);
const history = {
    push: (string)=>{console.log(`Go to ${string}!`)}
}



test('should create an action to add a user on successful login',()=>{
    const payload = {
        id:null,
        token:"",
        message:"",
        LinkedAccount:false
    };
    const expectedAction = {
        type: actions.LOGIN_USER_SUCCESS,
        payload:payload
    };
    expect(actions.loginUserSuccess(payload)).toEqual(expectedAction)
});

test('should create an action to call loading action when login is loading',()=>{
    const expectedAction = {
        type: actions.LOGIN_USER_LOADING
    };
    expect(actions.loginUserLoading()).toEqual(expectedAction)
});

test('should create an action to add an error when login fails',()=>{
    const payload = "You failed to login";
    const expectedAction = {
        type: actions.LOGIN_USER_FAILED,
        payload:payload
    };
    expect(actions.loginUserFailure(payload)).toEqual(expectedAction)
});

test('creates LOGIN_USER_SUCCESS when login is successful',()=>{
    const returnBody = {
        "id": 1,
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6Ikt5bGUiLCJpYXQiOjE1ODAyMzU0NzMsImV4cCI6MTU4MDI0OTg3M30.vOU1ZbHcLxOgCtD50Pu7JqHiudEc-0VYtDfbtXeqvlU",
        "message": "Welcome Yeet!",
        "LinkedAccount": false
    }

    mock.onPost('https://lambda-budget-blocks.herokuapp.com/api/auth/login').reply(200, returnBody);
    

    const expectedActions = [
      { type: actions.LOGIN_USER_LOADING },
      { type: actions.LOGIN_USER_SUCCESS, payload: returnBody }
    ]

    const store = mockStore({ user:{} })
    return store.dispatch(actions.loginUser({}, history)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
})