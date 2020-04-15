import React from "react";
import { Register } from "../Form_Components/Register/Register";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { configure, mount, shallow } from "enzyme";



configure({ adapter: new Adapter() });


test('Register renders correctly',()=>{
  const wrapper = shallow(<Register />)
      
  expect(wrapper.exists()).toBe(true)
});

test("Form errors when passwords do not match", () => {
  const callAPI = jest.fn();

  const wrapper = mount(
    <Router>
      <Register registerUser={callAPI} />
    </Router>
  );

  let passInput = wrapper.find("input").at(3);
  let emailInput = wrapper.find("input").at(0);
  let fName = wrapper.find("input").at(1);
  let lName = wrapper.find("input").at(2);
  let confirmPassInput = wrapper.find("input").at(4);

  fName.simulate("change", { target: { value: "FName", name: "first_name" } });
  lName.simulate("change", { target: { value: "LName", name: "last_name" } });
  passInput.simulate("change", { target: { value: "true", name: "password" } });
  emailInput.simulate("change", {
    target: { value: "sendtests@gmail.com", name: "email" }
  });
  confirmPassInput.simulate("change", {
    target: { value: "false", name: "confirmPassword" }
  });

  wrapper.find("form").simulate("submit");

  let errorText = wrapper.find("p").get(4);

  expect(errorText.props.children).toBe("Password Mismatch");
  expect(callAPI).not.toHaveBeenCalled();
});


test("Form calls api when form is filled out correctly", () => {
  const callAPI = jest.fn();

  const wrapper = mount(
    <Router>
      <Register registerUser={callAPI} />
    </Router>
  );

  let fName = wrapper.find("input").at(1);
  let lName = wrapper.find("input").at(2);
  let passInput = wrapper.find("input").at(3);
  let emailInput = wrapper.find("input").at(0);
  let confirmPassInput = wrapper.find("input").at(4);

  fName.simulate("change", { target: { value: "Fname", name: "first_name" } });
  lName.simulate("change", { target: { value: "Lname", name: "last_name" } });
  passInput.simulate("change", { target: { value: "true", name: "password" } });
  emailInput.simulate("change", {
    target: { value: "sendtests@gmail.com", name: "email" }
  });
  confirmPassInput.simulate("change", {
    target: { value: "true", name: "confirmPassword" }
  });

  wrapper.find("form").simulate("submit");

  expect(callAPI).toHaveBeenCalled();
});
