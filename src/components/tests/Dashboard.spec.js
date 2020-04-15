import React from "react";
import { Dashboard } from "../Dashboard";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LinkedTransactions from "../Dashboard";

configure({ adapter: new Adapter() });

test("Dashboard renders correctly", () => {
  const wrapper = shallow(<Dashboard LinkedAccount={false} blocks={[]} />);

  expect(wrapper.exists()).toBe(true);
});
