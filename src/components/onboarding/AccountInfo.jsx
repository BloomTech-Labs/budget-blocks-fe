import React, { useState } from 'react';
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
import { connect } from 'react-redux';
import { updateUser, notAuthenticated } from '../../redux/actions/userAction';

//SECTION Styles
const customStyles = makeStyles({
  mainWrapper: {
    margin: '5% 7%',
  },
  budgetHeader: {
    color: '#000000',
    fontSize: '18px',
    lineHeight: '27px',
    fontWeight: '700',
    marginBottom: '20%',
  },
  profileHeader: {
    color: '#13B9AC',
    fontSize: '36px',
    lineHeight: '54px',
    fontWeight: '600',
    marginBottom: '5%',
  },
  sectionDescription: {
    color: '#000000',
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: '8%',
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
    marginBottom: '2%',
  },
  cityInput: {
    borderColor: '#13B9AC',
    marginBottom: '2%',
    marginTop: '2%',
    width: '22.5rem',
  },
  stateInput: {
    //FIXME need to figure out how to override material ui's border color.. below isn't working.
    borderColor: '#13B9AC',
    marginTop: '2%',
    marginBottom: '8%',
    width: '22.5rem',
  },
  confirmButton: {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: 'white',
    background: '#13B9AC',
    width: '15rem',
    // marginLeft: '10%',
    '&:hover': {
      background: '#13B9AC',
      textDecoration: 'underline',
    },
  },
  confirmButtonWrapper: {
    display: 'flex',
    // justifyContent: 'center',
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  backNextButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '24%',
    // marginLeft: '12%',
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
    },
  },
})(TextField);

const AccountInfo = (props) => {
  const history = useHistory();
  const classes = customStyles();
  const buttonClasses = useStyles();
  console.log(props.userInfo);

  const { authState } = useOktaAuth();
  const { accessToken } = authState;
  const userId = localStorage.getItem('user_id');

  const [editMode, setEditMode] = useState(true);

  const { register, handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    const changes = {
      state: data.state,
      city: data.city,
    };
    await props.updateUser(userId, changes, accessToken);

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

      {!props.userInfo && <div>Loding...</div>}

      {props.userInfo && (
        <div>
          <h3 className={classes.accountInfoSubHeaders}>Name</h3>
          <p className={classes.accountInfoPara}>{props.userInfo.name}</p>

          <h3 className={classes.accountInfoSubHeaders}>Email</h3>
          <p className={classes.accountInfoPara}>{props.userInfo.email}</p>
        </div>
      )}

      {editMode === true && (
        <>
          <form
            className={classes.formWrapper}
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className={classes.accountInfoSubHeaders}>City</label>
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
            <label className={classes.accountInfoSubHeaders}>State</label>
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

            <div className={classes.confirmButtonWrapper}>
              <Button
                variant="contained"
                type="submit"
                className={classes.confirmButton}
              >
                Confirm {'>'}
              </Button>
            </div>
          </form>
        </>
      )}
      {editMode === false && (
        <div>
          <h3 className={classes.accountInfoSubHeaders}>City</h3>
          <p className={classes.accountInfoPara}>{props.userInfo.city}</p>

          <h3 className={classes.accountInfoSubHeaders}>State</h3>
          <p className={classes.accountInfoPara}>{props.userInfo.state}</p>

          <div className={classes.backNextButtonWrapper}>
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
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.users.userInfo,
  };
};

export default connect(mapStateToProps, { updateUser, notAuthenticated })(
  AccountInfo
);
