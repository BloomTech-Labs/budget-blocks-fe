/**
 * Register/default_user
 * @returns default Register component state.user
 */
export const default_user = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
};

/**
 * Register/default_values
 * @returns default Register component state.values
 */
export const default_values = {
  password: {
    error: false,
    helperText: '',
  },
  email: {
    error: false,
    helperText: '',
  },
  first_name: {
    error: false,
    helperText: '',
  },
  last_name: {
    error: false,
    helperText: '',
  },
  button: {
    disabled: false,
  },
};
