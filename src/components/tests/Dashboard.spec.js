import React from "react";
import { Dashboard } from "../Dashboard";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

test('Dashboard renders correctly',()=>{
    const wrapper = shallow(<Dashboard LinkedAccount={false} blocks={[]}/>)
        
    expect(wrapper).toMatchSnapshot();
});
