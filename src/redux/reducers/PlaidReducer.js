
import {
    SEND_LINK_TOKEN_LOADING,
    SEND_LINK_TOKEN_SUCCESS,
    SEND_LINK_TOKEN_FAILED,
    GET_TRANS_LOADING,
    GET_TRANS_SUCCESS,
    GET_TRANS_FAILED,

    } from "../actions/PlaidActions";

import {
    CLEAR_PLAID
} from "../actions/LogoutAction";

import {
    CATEGORY_UPDATE_SUCCESS,
    BLOCKS_CATEGORY_LOADING, 
    BLOCKS_CATEGORY_FAILED
} from "../actions/userBlocks";

import {
    ADD_DEFAULT_CATEGORIES_LOADING,
    ADD_DEFAULT_CATEGORIES_SUCCESS,
    ADD_DEFAULT_CATEGORIES_FAILED,
    SELECT_CATEGORIES_SUCCESS,
    ADD_MANUAL_BLOCKS_SUCCESS,
    ADD_MANUAL_BLOCKS_FAILED
    } from "../actions/ManualActions";

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MANUAL_BLOCKS_SUCCESS:
            return {
                ...state,
                categories:[...state.categories,action.payload],
                error: null
            };
        case SEND_LINK_TOKEN_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case SEND_LINK_TOKEN_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case SEND_LINK_TOKEN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null
            }
        case GET_TRANS_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case GET_TRANS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case GET_TRANS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                accounts:action.payload.accounts,
                categories:action.payload.Categories,
                transactions:sortTrans(action.payload.Categories)
            }
        case CLEAR_PLAID:
            return {
                ...initialState
            }
        case CATEGORY_UPDATE_SUCCESS:
            return {
                ...state,
                categories:updateCategory(state.categories, action.payload.categoryid, action.payload.amount)
            }
        case ADD_DEFAULT_CATEGORIES_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case ADD_DEFAULT_CATEGORIES_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_DEFAULT_CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                categories:action.payload
            }
        case SELECT_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories:action.payload
            }
        case BLOCKS_CATEGORY_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case BLOCKS_CATEGORY_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const initialState = {
    error:null,
    isFetching:false,
    transactions:[],
    Balance:0.00,
    categories:[],
    accounts:[],
    
    
};

function sortTrans(cats){
    let transArr = [];
    const catTransArr = cats.map((cat)=>{
        console.log(cat);
        return cat.transactions.map((trans)=>{
            return {...trans, category:cat.name}
        })
    });
    console.log(catTransArr);
    catTransArr.forEach(trans => {
        transArr = [...transArr, ...trans];
    });

    transArr = transArr.sort((a,b)=>{
        return new Date(b.payment_date) - new Date(a.payment_date);
    })

    return transArr;
}

function updateCategory(arr,categoryid, amount){
    const newCategory = arr.map(c =>
        c.id === categoryid
          ? { ...c, budget: amount }
          : c
      );
    
    return newCategory;
}