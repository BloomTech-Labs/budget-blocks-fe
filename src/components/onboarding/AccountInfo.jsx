import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  Button,
  makeStyles,
  withStyles,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useStyles } from '../../styles/theme_provider';

import { CustomSelect } from '../../styles/custom_components';

//SECTION Styles
const customStyles = makeStyles({
  mainWrapper: {
    height: '100vh',
  },
  budgetHeader: {
    color: '#000000',
    fontSize: '18px',
    lineHeight: '27px',
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
  accountInfoHeader: {
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
  accountInfoSubHeaders: {
    color: '#21242C',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '21px',
  },
  accountInfoPara: {
    color: '#21242C',
    fontSize: '14px',
    lineHeight: '21px',
  },
  cityInput: {
    borderColor: '#13B9AC',
  },
  stateInput: {
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
  const history = useHistory();
  const classes = customStyles();
  const buttonClasses = useStyles();

  const [accountInfo, setAccountInfo] = useState({
    name: '',
    email: '',
    country: '',
    zipCode: '',
  });

  //FIXME Remove after redux is implemented
  const { authState, authService } = useOktaAuth();

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setAccountInfo(null);
    } else {
      authService.getUser().then((info) => {
        setAccountInfo({
          name: info.name,
          email: info.email,
          country: 'United States',
        });
        console.log(info);
      });
    }
  }, [authState, authService]); // Update if authState changes

  //NOTE When the next button is clicked editMode gets set to false. When the user comes back to this page editMode should remain false. The user then has to click edit to change the values that they previously entered.

  const [editMode, setEditMode] = useState(true);

  const { register, handleSubmit, errors, control } = useForm();

  const onSubmit = async (data) => {
    await setAccountInfo({
      ...accountInfo,
      state: data.state,
      city: data.city,
    });

    await setEditMode(!editMode);
    console.log('data: ', data);
  };

  return (
    <div className={classes.mainWrapper}>
      <div>
        <h1 className={classes.budgetHeader}>Budget</h1>
        <h2 className={classes.profileHeader}>Profile</h2>
        <p className={classes.sectionDescription}>
          Ever wonder how much the average person spends on housing? Add your
          zip code and you can compare your budget to the average in your
          region.
        </p>
      </div>

      <div className={classes.accountInfoWrapper}>
        <h1 className={classes.accountInfoHeader}>Account Information</h1>

        {!editMode && (
          <Button
            className={classes.editButton}
            onClick={() => {
              setEditMode(!editMode);
            }}
          >
            Edit
          </Button>
        )}
        {editMode && (
          <Button
            className={classes.editButton}
            onClick={() => {
              setEditMode(!editMode);
            }}
          >
            Editing
          </Button>
        )}
      </div>

      {console.log('accountInfo: ', accountInfo)}

      {!accountInfo && <div>Loding...</div>}

      {accountInfo && (
        <div>
          <h3 className={classes.accountInfoSubHeaders}>Name</h3>
          <p className={classes.accountInfoPara}>{accountInfo.name}</p>

          <h3 className={classes.accountInfoSubHeaders}>Email</h3>
          <p className={classes.accountInfoPara}>{accountInfo.email}</p>

          <h3 className={classes.accountInfoSubHeaders}>Country</h3>
          <p className={classes.accountInfoPara}>{accountInfo.country}</p>
        </div>
      )}

      {editMode === true && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="city"
              label="City"
              as={ValidationTextField}
              control={control}
              variant="outlined"
              inputRef={register({ required: true })}
              className={classes.cityInput}
            />

            {/* //FIXME Too long.. when use CustomSelect the state comes back undefined */}
            <Controller
              name="state"
              label="State"
              as={
                <Select>
                  <MenuItem value="" selected="selected">
                    Select a State
                  </MenuItem>
                  <MenuItem value="AL">Alabama</MenuItem>
                  <MenuItem value="AK">Alaska</MenuItem>
                  <MenuItem value="AZ">Arizona</MenuItem>
                  <MenuItem value="AR">Arkansas</MenuItem>
                  <MenuItem value="CA">California</MenuItem>
                  <MenuItem value="CO">Colorado</MenuItem>
                  <MenuItem value="CT">Connecticut</MenuItem>
                  <MenuItem value="DE">Delaware</MenuItem>
                  <MenuItem value="DC">District Of Columbia</MenuItem>
                  <MenuItem value="FL">Florida</MenuItem>
                  <MenuItem value="GA">Georgia</MenuItem>
                  <MenuItem value="HI">Hawaii</MenuItem>
                  <MenuItem value="ID">Idaho</MenuItem>
                  <MenuItem value="IL">Illinois</MenuItem>
                  <MenuItem value="IN">Indiana</MenuItem>
                  <MenuItem value="IA">Iowa</MenuItem>
                  <MenuItem value="KS">Kansas</MenuItem>
                  <MenuItem value="KY">Kentucky</MenuItem>
                  <MenuItem value="LA">Louisiana</MenuItem>
                  <MenuItem value="ME">Maine</MenuItem>
                  <MenuItem value="MD">Maryland</MenuItem>
                  <MenuItem value="MA">Massachusetts</MenuItem>
                  <MenuItem value="MI">Michigan</MenuItem>
                  <MenuItem value="MN">Minnesota</MenuItem>
                  <MenuItem value="MS">Mississippi</MenuItem>
                  <MenuItem value="MO">Missouri</MenuItem>
                  <MenuItem value="MT">Montana</MenuItem>
                  <MenuItem value="NE">Nebraska</MenuItem>
                  <MenuItem value="NV">Nevada</MenuItem>
                  <MenuItem value="NH">New Hampshire</MenuItem>
                  <MenuItem value="NJ">New Jersey</MenuItem>
                  <MenuItem value="NM">New Mexico</MenuItem>
                  <MenuItem value="NY">New York</MenuItem>
                  <MenuItem value="NC">North Carolina</MenuItem>
                  <MenuItem value="ND">North Dakota</MenuItem>
                  <MenuItem value="OH">Ohio</MenuItem>
                  <MenuItem value="OK">Oklahoma</MenuItem>
                  <MenuItem value="OR">Oregon</MenuItem>
                  <MenuItem value="PA">Pennsylvania</MenuItem>
                  <MenuItem value="RI">Rhode Island</MenuItem>
                  <MenuItem value="SC">South Carolina</MenuItem>
                  <MenuItem value="SD">South Dakota</MenuItem>
                  <MenuItem value="TN">Tennessee</MenuItem>
                  <MenuItem value="TX">Texas</MenuItem>
                  <MenuItem value="UT">Utah</MenuItem>
                  <MenuItem value="VT">Vermont</MenuItem>
                  <MenuItem value="VA">Virginia</MenuItem>
                  <MenuItem value="WA">Washington</MenuItem>
                  <MenuItem value="WV">West Virginia</MenuItem>
                  <MenuItem value="WI">Wisconsin</MenuItem>
                  <MenuItem value="WY">Wyoming</MenuItem>
                </Select>
              }
              control={control}
              variant="outlined"
              inputRef={register({ required: true })}
              className={classes.stateInput}
            />

            <Button
              variant="contained"
              type="submit"
              className={buttonClasses.nextButton}
            >
              Confirm {'>'}
            </Button>
          </form>
        </>
      )}
      {editMode === false && (
        <div>
          <p className={classes.accountInfoPara}>City: {accountInfo.city}</p>

          <p className={classes.accountInfoPara}>State: {accountInfo.state}</p>

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            className={buttonClasses.backButton}
            onClick={() => {
              history.push('/onboarding/welcome');
            }}
          >
            <KeyboardArrowLeft /> Back
          </Button>
          <Button
            variant="contained"
            type="submit"
            className={buttonClasses.nextButton}
            onClick={() => {
              history.push('/onboarding/banklink');
            }}
          >
            Next <KeyboardArrowRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccountInfo;
