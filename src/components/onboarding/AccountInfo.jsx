import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Button,
  makeStyles,
  withStyles,
} from '@material-ui/core';

//SECTION Styles
const useStyles = makeStyles({
  mainWrapper: {
    height: '100vh',
  },
  budgetHeader: {
    color: '#000000',
    fontSize: '18px',
    lineHeight: '27px',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: '700',
  },
  profileHeader: {
    color: '#13B9AC',
    fontSize: '36px',
    lineHeight: '54px',
  },
  sectionDescription: {
    color: '#000000',
    fontSize: '16px',
    lineHeight: '24px',
  },
  accountInfoWrapper: {
    display: 'flex',
  },
  accountInfo: {
    color: '#000000',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '600',
  },
  editButton: {
    color: '#13B9AC',
    textTransform: 'capitalize',
    fontSize: '12px',
    lineHeight: '18px',
  },
  zipCodeInput: {
    borderColor: '#13B9AC',
  },
  nextButton: {
    background: '#13B9AC',
  },
});

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#13B9AC',
      borderWidth: 1,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderColor: '#13B9AC',
      borderWidth: 1,
      // borderLeftWidth: 6,
      // padding: '4px !important', // override inline-style
    },
  },
})(TextField);

const AccountInfo = () => {
  const classes = useStyles();

  const [accountInfo, setAccountInfo] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
    zipCode: '',
  });

  //NOTE When the next button is clicked editMode gets set to false. When the user comes back to this page editMode should remain false. The user then has to click edit to change the values that they previously entered.

  const [editMode, setEditMode] = useState(true);

  const { register, handleSubmit, errors, control } = useForm();

  const onSubmit = async (data) => {
    await setAccountInfo({
      name: data.name,
      email: data.email,
      password: data.password,
      country: data.country,
      zipCode: data.zipCode,
    });

    await setEditMode(!editMode);
    console.log(data);
  };

  return (
    <div className={classes.mainWrapper}>
      <div>
        <h1 className={classes.budgetHeader}>Budget</h1>
        <h2 className={classes.profileHeader}>Profile</h2>
        <p className={classes.sectionDescription}>
          Ever wonder how much the average person spends on housing? Add
          your zip code and you can compare your budget to the average in
          your region.
        </p>
      </div>

      <div className={classes.accountInfoWrapper}>
        <h1 className={classes.accountInfo}>Account Information</h1>
        <Button
          className={classes.editButton}
          onClick={() => {
            setEditMode(!editMode);
          }}
        >
          Edit
        </Button>
      </div>

      {console.log('accountInfo: ', accountInfo)}

      {editMode === true && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            label='Name'
            name='name'
            as={TextField}
            variant='outlined'
            control={control}
            inputRef={register({ required: true })}
          />
          {errors.name &&
            errors.name.type === 'required' &&
            'Name is required!'}

          <Controller
            label='Email'
            name='email'
            as={TextField}
            control={control}
            variant='outlined'
            inputRef={register({ required: true })}
          />
          {errors.email &&
            errors.email.type === 'required' &&
            'Email is required!'}

          <Controller
            label='Password'
            name='password'
            as={TextField}
            control={control}
            variant='outlined'
            inputRef={register({ required: true })}
          />
          {errors.password &&
            errors.password.type === 'required' &&
            'Password is required!'}

          <Controller
            label='Country'
            name='country'
            as={TextField}
            control={control}
            variant='outlined'
            inputRef={register({ required: true })}
          />
          {errors.country &&
            errors.country.type === 'required' &&
            'Country is required!'}
          <p></p>

          <Controller
            name='zipCode'
            label='Zip Code'
            as={ValidationTextField}
            control={control}
            variant='outlined'
            inputRef={register({ required: true })}
            className={classes.zipCodeInput}
          />
          {/* {errors.zipCode &&
            errors.zipCode.type === 'required' &&
            'Zip code is required!'} */}

          <Button variant='contained' color='secondary' type='submit'>
            {'<'} Back
          </Button>
          <Button
            variant='contained'
            type='submit'
            className={classes.nextButton}
          >
            Next {'>'}
          </Button>
        </form>
      )}
      {editMode === false && (
        <div>
          <p>Name: {accountInfo.name}</p>
          <p>Email: {accountInfo.email}</p>
          <p>Password: {accountInfo.password}</p>
          <p>Country: {accountInfo.country}</p>
          <p>Zip Code: {accountInfo.zipCode}</p>
        </div>
      )}
    </div>
  );
};

export default AccountInfo;
