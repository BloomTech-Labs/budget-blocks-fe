import * as actions  from "../../redux/actions/PlaidActions"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import logger from "redux-logger";
var MockAdapter = require('axios-mock-adapter');
import axios from "axios"
import { reducer } from "../../redux/reducers/PlaidReducer"
 
const middlewares = [thunk, logger];
const mockStore = configureMockStore(middlewares);
var mock = new MockAdapter(axios);
const initialState = {
    error:null,
    isFetching:false,
    transactions:[],
    Balance:0.00
};



test('should create an action to add a user on successful token link',()=>{
    const payload = {
        "AccessTokenInserted": 1,
        "ItemIdInserted": 1
    };
    const expectedAction = {
        type: actions.SEND_LINK_TOKEN_SUCCESS,
        payload:payload
    };
    expect(actions.sendLinkSuccess(payload)).toEqual(expectedAction)
});

test('should create an action to call loading action when token link is loading',()=>{
    const expectedAction = {
        type: actions.SEND_LINK_TOKEN_LOADING
    };
    expect(actions.sendLinkLoading()).toEqual(expectedAction)
});

test('should create an action to add an error when login fails',()=>{
    const payload = "You failed to link token";
    const expectedAction = {
        type: actions.SEND_LINK_TOKEN_FAILED,
        payload:payload
    };
    expect(actions.sendLinkFailed(payload)).toEqual(expectedAction)
});

test('creates SEND_LINK_TOKEN_SUCCESS when register is successful',()=>{
    const returnBody = {
        "AccessTokenInserted": 1,
        "ItemIdInserted": 1
    }

    mock.onPost('https://cors-anywhere.herokuapp.com/https://lambda-budget-blocks.herokuapp.com/plaid/token_exchange').reply(200, returnBody);
    

    const expectedActions = [
      { type: actions.SEND_LINK_TOKEN_LOADING },
      { type: actions.SEND_LINK_TOKEN_SUCCESS, payload: returnBody },
      { type: actions.SEND_LINK_TOKEN_SUCCESS }
    ]

    const store = mockStore({ user:{} })
    return store.dispatch(actions.sendLinkToken("token",1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
})

test('should return the initial state',()=>{
    expect(reducer(undefined, {})).toEqual({
        error:null,
        isFetching:false,
        transactions:[],
        Balance:0.00,
        accounts: [],
        categories: []
    })
})

test('should handle SEND_LINK_TOKEN_SUCCESS',()=>{
    const returnBody = {
        "AccessTokenInserted": 1,
        "ItemIdInserted": 1
    }

    expect(
        reducer(initialState, {
          type: actions.SEND_LINK_TOKEN_SUCCESS,
          payload: returnBody
        })
      ).toEqual({
            error:null,
            isFetching:false,
            transactions:[],
            Balance:0.00
        })
});

test('should handle SEND_LINK_TOKEN_LOADING',()=>{

    expect(
        reducer(initialState, {
          type: actions.SEND_LINK_TOKEN_LOADING
        })
      ).toEqual({
            error:null,
            isFetching:true,
            transactions:[],
            Balance:0.00
        })
});

test('should handle SEND_LINK_TOKEN_FAILED',()=>{
    const returnBody = {error:'there is an error'}

    expect(
        reducer(initialState, {
          type: actions.SEND_LINK_TOKEN_FAILED,
          payload: returnBody
        })
      ).toEqual({
            error:returnBody,
            isFetching:false,
            transactions:[],
            Balance:0.00
        })
});