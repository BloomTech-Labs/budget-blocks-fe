import React from "react";
import  { Balance }  from "../Balance";
import { render, fireEvent } from "@testing-library/react";
import {BrowserRouter as Router } from "react-router-dom"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render as enzymeRender } from 'enzyme';

configure({ adapter: new Adapter() });

test('Register renders correctly',()=>{
    const wrapper = shallow(<Balance LinkedAccount={false} balance={0.00}/>)
        
    expect(wrapper).toMatchSnapshot();
});

