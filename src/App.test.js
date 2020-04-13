import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render as enzymeRender } from 'enzyme';
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { reducer as plaidReducer } from "./redux/reducers/PlaidReducer";
import { reducer as registerReducer } from "./redux/reducers/RegisterReducer";
<<<<<<< HEAD
// import { reducer as profileReducer } from "./redux/reducers/ProfileReducer";
=======
>>>>>>> 076a0639fdefbe992ef4976c77819058df844587
import { BrowserRouter as Router } from "react-router-dom";

const initialState = {
  user: {
    id: null,
    token: "",
    message: "",
    LinkedAccount: true
  },
  error: null,
  isFetching: false
};

let loginReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}


<<<<<<< HEAD
const store = createStore(combineReducers({loginReducer,plaidReducer,registerReducer}), applyMiddleware(thunk, logger));
=======
const store = createStore(combineReducers({ loginReducer, plaidReducer, registerReducer }), applyMiddleware(thunk, logger));
>>>>>>> 076a0639fdefbe992ef4976c77819058df844587

configure({ adapter: new Adapter() });

test('App renders correctly', () => {
  expect(render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )).toMatchSnapshot();
});
