import React from "react";
import { Register } from "../register";
import { render, fireEvent } from "@testing-library/react";
import {BrowserRouter as Router } from "react-router-dom"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render as enzymeRender } from 'enzyme';

configure({ adapter: new Adapter() });

test('Register renders correctly',()=>{
    expect(render(
        <Router>
            <Register/>
        </Router>
    )).toMatchSnapshot();
});



