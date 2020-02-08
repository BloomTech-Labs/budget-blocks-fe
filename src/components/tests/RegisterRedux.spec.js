import * as actions  from "../../redux/actions/RegisterActions"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import logger from "redux-logger";
var MockAdapter = require('axios-mock-adapter');
import axios from "axios"
import { reducer } from "../../redux/reducers/RegisterReducer"
 
const middlewares = [thunk, logger];
const mockStore = configureMockStore(middlewares);
var mock = new MockAdapter(axios);
const history = {
    push: (string)=>{console.log(`Go to ${string}!`)}
}

const initialState = {
    error:null,
    isFetching:false
};



test('should create an action to add a user on successful login',()=>{
    const payload = {
        id:null,
        token:"",
        message:"",
        LinkedAccount:false
    };
    const expectedAction = {
        type: actions.REGISTER_USER_SUCCESS,
        payload:payload
    };
    expect(actions.registerUserSuccess(payload)).toEqual(expectedAction)
});

test('should create an action to call loading action when login is loading',()=>{
    const expectedAction = {
        type: actions.REGISTER_USER_LOADING
    };
    expect(actions.registerUserLoading()).toEqual(expectedAction)
});

test('should create an action to add an error when login fails',()=>{
    const payload = "You failed to login";
    const expectedAction = {
        type: actions.REGISTER_USER_FAILED,
        payload:payload
    };
    expect(actions.registerUserFailure(payload)).toEqual(expectedAction)
});

test('creates REGISTER_USER_SUCCESS when register is successful',()=>{
    const returnBody = {
        hello:"hello"
    }

    mock.onPost('https://lambda-budget-blocks.herokuapp.com/api/auth/register').reply(200, returnBody);
    

    const expectedActions = [
      { type: actions.REGISTER_USER_LOADING },
      { type: actions.REGISTER_USER_SUCCESS, payload: returnBody }
    ]

    const store = mockStore({ user:{} })
    return store.dispatch(actions.registerUser({})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
})

test('should return the initial state',()=>{
    expect(reducer(undefined, {})).toEqual({
        error:null,
        isFetching:false
    })
})

test('should handle REGISTER_USER_SUCCESS',()=>{
    const returnBody = {
        "hello":"hello"
    }

    expect(
        reducer(initialState, {
          type: actions.REGISTER_USER_SUCCESS,
          payload: returnBody
        })
      ).toEqual({
            error:null,
            isFetching:false
        })
});

test('should handle REGISTER_USER_LOADING',()=>{

    expect(
        reducer(initialState, {
          type: actions.REGISTER_USER_LOADING
        })
      ).toEqual({
            error:null,
            isFetching:true
        })
});

test('should handle REGISTER_USER_FAILED',()=>{
    const returnBody = {error:'there is an error'}

    expect(
        reducer(initialState, {
          type: actions.REGISTER_USER_FAILED,
          payload: returnBody
        })
      ).toEqual({
            error:returnBody,
            isFetching:false
        })
});