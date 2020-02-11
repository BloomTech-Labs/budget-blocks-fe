import React from "react";
import { Dashboard } from "../Dashboard";
import { render, fireEvent } from "@testing-library/react";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render as enzymeRender } from 'enzyme';
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { reducer as plaidReducer } from "../../redux/reducers/PlaidReducer";
import { reducer as registerReducer } from "../../redux/reducers/RegisterReducer";
import { reducer as profileReducer } from "../../redux/reducers/ProfileReducer";
import { BrowserRouter as Router } from "react-router-dom";

const initialState = {
    user:{
        id:null,
        token:"",
        message:"",
        LinkedAccount:true
    },
    error:null,
    isFetching:false
};

let loginReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}


const store = createStore(combineReducers({loginReducer,plaidReducer,registerReducer,profileReducer}), applyMiddleware(thunk, logger));

configure({ adapter: new Adapter() });

test('Dashboard renders correctly',()=>{
    const wrapper = shallow(<Dashboard LinkedAccount={false} blocks={[]}/>)
        
    expect(wrapper).toMatchSnapshot();
});
