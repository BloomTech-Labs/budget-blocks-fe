import React, { useState } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useOktaAuth } from '@okta/okta-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// 13B9AC button primary color
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    '& > *': {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Income = () => {
  const { handleSubmit, control, register, errors } = useForm();
  const { authState } = useOktaAuth();
  const { accessToken } = authState;
  const [income, setIncome] = useState(null);
  const [editMode, setEditMode] = useState(true);
  const classes = useStyles();

  const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

  const formSubmit = (data) => {
    setIncome(data.income);
    axios
      .post(
        `${SERVER_HOST}/api/income`,
        { income: data.income, user_id: 1 },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setEditMode(!editMode);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {editMode === true && (
        <div className={classes.root}>
          <form className={classes.form} onSubmit={handleSubmit(formSubmit)}>
            <Controller
              as={TextField}
              name="income"
              control={control}
              defaultValue=""
              inputRef={register}
              id="outlined-basic"
              label="Income"
              variant="outlined"
            />
            {errors.name && <p>{errors.name.message}</p>}
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button onClick={() => setEditMode(!editMode)}>Edit</Button>
          </form>
        </div>
      )}

      {editMode === false && (
        <div>
          <p>Income:</p> {income}
          <Button onClick={() => setEditMode(!editMode)}>Edit</Button>
        </div>
      )}
    </div>
  );
};

export default Income;
