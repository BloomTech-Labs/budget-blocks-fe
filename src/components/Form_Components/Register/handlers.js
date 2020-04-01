import { CheckEmptyFields } from "../CheckEmpyFields";
import { ChangeCheckField } from "../ChangeCheckField";
import { default_user, default_values } from "./defaults";
import LANG from "../Lang";

/**
 * clearState will callback `setState` with default values.
 *
 * @param {Object} state form data
 * @param {Function} setState callback to update `state`
 *
 */
const clearState = ({ state, setState }) => {
  return setState({
    ...state,
    user: { ...default_user },
    values: { ...default_values },
    confirmPass: { confirmPassword: "" }
  });
};

/**
 * handleUserChange will callback `setState` to update `state.user`.
 *
 * @param {Event} e the event
 * @param {Object} state form data
 * @param {Function} setState callback to update `state`
 *
 */
const handleUserChange = ({ e, state, setState }) => {
  setState({
    ...state,
    user: { ...state.user, [e.target.name]: e.target.value },
    values: ChangeCheckField(e, state.values)
  });
};

/**
 * handleConfirm will callback `setState` to update `state.confirmPass`.
 *
 * @param {Event} e the event
 * @param {Object} state form data
 * @param {Function} setState callback to update `state`
 *
 */
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
/**
 * handleSubmit will callback `setState` to update `state.confirmPass`.
 * @param {Event} e the event
 * @param {Object} state form data
 * @param {Function} setState callback to update `state`
 * @param {*} props React component props
 *
 */
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
