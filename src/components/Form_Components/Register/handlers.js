import { CheckEmptyFields } from "../CheckEmpyFields";
import { ChangeCheckField } from "../ChangeCheckField";
import { default_user, default_values } from "./defaults";
import LANG from "../Lang";

const clearState = ({ state, setState }) => {
  return setState({
    ...state,
    user: { ...default_user },
    values: { ...default_values },
    confirmPass: { confirmPassword: "" }
  });
};

const handleUserChange = ({ e, state, setState }) => {
  setState({
    ...state,
    user: { ...state.user, [e.target.name]: e.target.value },
    values: ChangeCheckField(e, state.values)
  });
};

const handleConfirm = ({ e, state, setState }) => {
  setState({
    ...state,
    values: {
      ...state.values,
      password: {
        error: false,
        helperText: ""
      }
    },
    confirmPass: { ...state.confirmPass, [e.target.name]: e.target.value }
  });
};

const handleSubmit = ({ e, state, setState, props }) => {
  e.preventDefault();
  const rCheck = CheckEmptyFields(state.user, state.values);
  const rConcern = rCheck instanceof Object;
  const rMismatch = state.confirmPass.confirmPassword !== state.user.password;
  const rHelper = rMismatch
    ? LANG.PW_MISMATCH
    : state.values.password.helperText;
  const rValues = rConcern ? { ...rCheck } : state.values;
  setState({
    ...state,
    values: {
      ...rValues,
      password: { error: rMismatch, helperText: rHelper }
    }
  });
  !rConcern && !rMismatch
    ? props.registerUser(state.user, props.history) &&
      clearState({ state, setState })
    : console.log(rHelper);
};

export default { handleUserChange, handleConfirm, handleSubmit };
