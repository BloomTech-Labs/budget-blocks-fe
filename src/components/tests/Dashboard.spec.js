import React from "react";
import { Dashboard } from "../Dashboard";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import LinkedTransactions from "../Transactions_Components/LinkedTransactions";
import TotalBudget from "../TotalBudget_Components/TotalBudget";
import LinkedBlocks from '../Blocks_Components/LinkedBlocks';

configure({ adapter: new Adapter() });

test('Dashboard renders correctly',()=>{
    const wrapper = shallow(<Dashboard LinkedAccount={false} blocks={[]}/>)
        
    expect(wrapper).toMatchSnapshot();
});

test('Dashboard renders correctly',()=>{
    const wrapper = shallow(<Dashboard LinkedAccount={false} blocks={[]}/>)
        
    expect(wrapper.exists()).toBe(true)
});

// test('Linked Blocks renders correctly',()=>{
//     const wrapper = shallow(<LinkedBlocks />)
//     expect(wrapper.exists()).toBe(true)
// });

// test('Linked Blocks renders correctly',()=>{
//     const wrapper = shallow(<LinkedTransactions />)
//     expect(wrapper.exists()).toBe(true)
// });

// test('Linked Blocks renders correctly',()=>{
//     const wrapper = shallow(<TotalBudget/>)
//     expect(wrapper.exists()).toBe(true)
// });

