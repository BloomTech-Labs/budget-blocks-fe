import React from "react";
import  { Balance }  from "../Balance_Components/Balance";
import { render, fireEvent } from "@testing-library/react";
import {BrowserRouter as Router } from "react-router-dom"
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render as enzymeRender } from 'enzyme';

configure({ adapter: new Adapter() });

test('Balance renders correctly',()=>{
    const wrapper = shallow(<Balance LinkedAccount={false} balance={{accounts:[]}}/>)
        
    expect(wrapper).toMatchSnapshot();
});

test('Balance renders Link account component when Linked Account is false',()=>{
    const wrapper = shallow(<Balance LinkedAccount={false} />)
        
    const component = wrapper.find("div").at(0);
    expect(component.props().className).toBe("NoBalance");
});

// test('Balance renders Balance when Linked Account is true',()=>{
//     const wrapper = shallow(<Balance LinkedAccount={true} />)
        
//     const component = wrapper.find("div").at(0);
//     expect(component.props().className).toBe("Balance");
// });

