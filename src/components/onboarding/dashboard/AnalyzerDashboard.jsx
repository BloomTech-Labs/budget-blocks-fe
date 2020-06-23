import React, { useState, useEffect } from 'react';
import {
  Button,
  makeStyles,
  Grid,
  Box,
  Divider,
  Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import axios from 'axios';

// Imports for images
import carFade from '../../../media/carFade.svg';
import foodFade from '../../../media/foodFade.svg';
import houseFade from '../../../media/houseFade.svg';
import personalFade from '../../../media/personalFade.svg';
import incomeFade from '../../../media/pencil.svg';

//Imports for components
import ProgressBar from './ProgressBar';
import FooterComponent from './FooterComponent';

import {
  userAction,
  notAuthenticated,
} from '../../../redux/actions/userAction';

//Styles using material UI 'makeStyles' function
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    wrap: 'nowrap',
  },
  topContainerGreen: {
    textAlign: 'center',
    backgroundColor: 'rgba(19, 185, 172, 0.7)',
    color: 'white',
  },
  topContainerWhite: {
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
  lowerContainer: {},
  componentButton: {
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
    color: 'white',
    width: '10rem',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  hiMessage: {
    [theme.breakpoints.up('md')]: {
      marginTop: '1%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3%',
      marginBottom: '1%',
    },
  },
  balance: {
    marginTop: '0.7%',
    marginBottom: '4%',
  },
  blocksButtonFalse: {
    backgroundColor: '#F6F6F6',
  },
  blocksButtonTrue: {
    color: 'white',
    backgroundColor: '#5ACEC5',
  },
  thirdContainer: {
    margin: '2% 3% 2% 3%',
  },
  monthsButtonsBoxClass: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  blocksButtonsBoxClass: {
    width: '57%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  incomeBoxClass: {
    width: '17%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '3% 0 2% 0',
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
  dividerForSpendingComponent: {
    padding: '1px',
    backgroundColor: 'rgba(19, 185, 172, 0.33)',
  },
}));

const AnalyzerDashboard = (props) => {
  const user_id = window.localStorage.getItem('user_id');
  const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

  const classes = useStyles();
  let totalsArray = [];

  const { authState, authService } = useOktaAuth();
  const { accessToken } = authState;

  const [name, setName] = useState('');
  const [activeComponent, setActiveComponent] = useState('budget');
  const [income, setIncome] = useState(0);
  const [categoriesNames, setCategoriesNames] = useState([]);
  const [categoriesValues, setCategoriesValues] = useState([]);
  const [goalsValue, setGoalsValue] = useState([]);
  const [balance, setBalance] = useState(0);
  const [topContainer, setTopContainer] = useState(false);

  const [incomeButtonClass, setIncomeButtonClass] = useState(false);
  const [housingButtonClass, setHousingButtonClass] = useState(false);
  const [foodBuButtonClass, setFoodButtonClass] = useState(false);
  const [carBuButtonClass, setCarButtonClass] = useState(false);
  const [personalBuButtonClass, setPersonalButtonClass] = useState(false);

  const setButtonsClasses = (
    IncomeButtonOn = false,
    HousingButtonOn = false,
    FoodButtonOn = false,
    CarButtonOn = false,
    PersonalButtonOn = false
  ) => {
    setIncomeButtonClass(IncomeButtonOn);
    setHousingButtonClass(HousingButtonOn);
    setFoodButtonClass(FoodButtonOn);
    setCarButtonClass(CarButtonOn);
    setPersonalButtonClass(PersonalButtonOn);
  };

  const combineCategoriesNamesWithValues = () => {
    let tempObj = {};

    for (let i = 0; i < categoriesNames.length; i++) {
      tempObj = {
        category: categoriesNames[i],
        value: Math.round(categoriesValues[i]),
      };
      if (tempObj.value > 0) {
        totalsArray.push(tempObj);
      }
    }
    return null;
  };

  const displayGraph = (spendValue, goalValue) => {
    const totalPercent = Math.round((goalValue / income) * 100);
    const percentFilled = Math.round((spendValue / goalValue) * 100);
    return (
      <ProgressBar
        spendValue={spendValue}
        totalPercent={totalPercent}
        percentfilled={percentFilled}
      />
    );
  };

  //This function sorts TotalsArrays from largest category value
  //to lowest
  const sortTotalsArray = () => {
    let tempObj = {};

    for (let i = 0; i < totalsArray.length; i++) {
      for (let j = i + 1; j < totalsArray.length; j++) {
        if (totalsArray[j].value > totalsArray[i].value) {
          tempObj = totalsArray[i];
          totalsArray[i] = totalsArray[j];
          totalsArray[j] = tempObj;
        }
      }
    }
  };

  const handleSpending = () => {
    setTopContainer(true);
    setActiveComponent('spending');
  };

  const handleBudget = () => {
    setTopContainer(false);
    setActiveComponent('budget');
  };

  const handleIncomeClick = (e) => {
    setButtonsClasses(true);
  };

  const handleHousing = (e) => {
    setButtonsClasses(false, true);
  };

  const handleFood = (e) => {
    setButtonsClasses(false, false, true);
  };

  const handleCar = (e) => {
    setButtonsClasses(false, false, false, true);
  };

  const handlePersonal = (e) => {
    setButtonsClasses(false, false, false, false, true);
  };

  useEffect(() => {
    axios
      .get(`${SERVER_HOST}/plaid/userTransactions/${user_id}`)
      .then((res) => {
        axios
          .post(`https://api.budgetblocks.org/transaction`, res.data)
          .then((categorizedTransactions) => {
            setIncome(9646);
            delete categorizedTransactions.data.totals.Income;
            setCategoriesNames(
              Object.keys(categorizedTransactions.data.totals)
            );
            setCategoriesValues(
              Object.values(categorizedTransactions.data.totals)
            );
          })
          .catch((err) => {
            console.log('error', err);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    console.log('accessToken', accessToken);

    axios
      .get(`${SERVER_HOST}/api/goals/${user_id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        // setGoalsValue(Object.values(res.data));
        setGoalsValue([7000, 2500, 1500, 500]);
      })
      .catch((err) => {
        console.log('goals', err.message);
      });
  }, [authState, authService]);

  useEffect(() => {
    axios
      .get(`${SERVER_HOST}/plaid/userBalance/${user_id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setBalance(res.data.BalanceResponse.accounts[0].balances.current);
      })
      .catch((err) => {
        console.log('error:', err.message);
      });
  }, [authState, authService]);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      notAuthenticated();
    } else {
      authService.getUser().then((info) => {
        setName(info.given_name);
      });
    }
  }, [authState, authService]);

  combineCategoriesNamesWithValues();
  sortTotalsArray();

  return (
    <div className={classes.root}>
      <Grid
        container
        className={
          topContainer ? classes.topContainerWhite : classes.topContainerGreen
        }
      >
        <Grid item xs={12} className={classes.hiMessage}>
          <Typography variant="h5">Hi {name}!</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Your balance is</Typography>
        </Grid>
        <Grid item xs={12} className={classes.balance}>
          <Typography
            variant="h3"
            style={
              topContainer
                ? {
                    color: '#13B9AC',
                  }
                : { color: 'white' }
            }
          >
            ${balance}
          </Typography>
        </Grid>
        <Grid item xs={12} classname={classes.buttonsClass}>
          <Button
            className={classes.componentButton}
            style={topContainer ? { color: '#13B9AC' } : { color: 'white' }}
            onClick={handleSpending}
          >
            {' '}
            Spending{' '}
          </Button>
          <Button
            className={classes.componentButton}
            style={topContainer ? { color: '#C4C4C4' } : { color: 'white' }}
            onClick={handleBudget}
          >
            {' '}
            Budget{' '}
          </Button>
        </Grid>
      </Grid>
      {topContainer ? (
        <Divider className={classes.dividerForSpendingComponent}></Divider>
      ) : (
        <></>
      )}
      <div>
        {activeComponent === 'budget' ? (
          <Box className={classes.lowerContainer}>
            <Grid
              style={{
                margin: '2% 3%',
              }}
              item
              xs={12}
            >
              <Box className={classes.monthsButtonsBoxClass}>
                <Button style={{ color: '#959595' }}>May</Button>
                <Button style={{ color: '#959595' }}>Jun</Button>
                <Button style={{ color: '#959595' }}>Jul</Button>
                <Button style={{ color: '#959595' }}>Aug</Button>
                <Button style={{ color: '#959595' }}>Sep</Button>
                <Button style={{ color: '#959595' }}>Oct</Button>
                <Button style={{ color: '#959595' }}>Nov</Button>
                <Button style={{ color: '#959595' }}>Dec</Button>
              </Box>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item xs={12} className={classes.thirdContainer}>
              <Typography style={{ fontWeight: 'bold' }}>Blocks</Typography>
              <Box className={classes.blocksButtonsBoxClass}>
                <Button
                  className={
                    incomeButtonClass
                      ? classes.blocksButtonTrue
                      : classes.blocksButtonFalse
                  }
                  onClick={handleIncomeClick}
                >
                  {incomeButtonClass ? (
                    'Income'
                  ) : (
                    <img src={incomeFade} alt="Category Name Icon"></img>
                  )}
                </Button>
                <Button
                  className={
                    housingButtonClass
                      ? classes.blocksButtonTrue
                      : classes.blocksButtonFalse
                  }
                  onClick={(e) => handleHousing(e)}
                >
                  {housingButtonClass ? (
                    'House'
                  ) : (
                    <img src={houseFade} alt="Category Name Icon"></img>
                  )}
                </Button>
                <Button
                  className={
                    foodBuButtonClass
                      ? classes.blocksButtonTrue
                      : classes.blocksButtonFalse
                  }
                  onClick={(e) => handleFood(e)}
                >
                  {foodBuButtonClass ? (
                    'Food'
                  ) : (
                    <img src={foodFade} alt="Category Name Icon"></img>
                  )}
                </Button>
                <Button
                  className={
                    carBuButtonClass
                      ? classes.blocksButtonTrue
                      : classes.blocksButtonFalse
                  }
                  onClick={(e) => handleCar(e)}
                >
                  {carBuButtonClass ? (
                    'Car'
                  ) : (
                    <img src={carFade} alt="Category Name Icon"></img>
                  )}
                </Button>
                <Button
                  className={
                    personalBuButtonClass
                      ? classes.blocksButtonTrue
                      : classes.blocksButtonFalse
                  }
                  onClick={(e) => handlePersonal(e)}
                >
                  {personalBuButtonClass ? (
                    'Personal'
                  ) : (
                    <img src={personalFade} alt="Category Name Icon"></img>
                  )}
                </Button>
              </Box>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item xs={12} style={{ margin: '0 3%' }}>
              <Typography variant="h6">Income ${income}</Typography>
              <Grid container style={{ margin: '3% 0 2% 0' }}>
                <Grid item style={{ width: '17%' }}>
                  <Typography
                    style={{
                      fontWeight: 'bold',
                    }}
                  >
                    Category
                  </Typography>
                </Grid>
                <Grid item style={{ width: '10%' }}>
                  <Typography
                    style={{
                      fontWeight: 'bold',
                    }}
                  >
                    Goal
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                {totalsArray.map((item, index) => (
                  <Grid
                    container
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginBottom: '4%',
                    }}
                  >
                    <Grid style={{ width: '17%' }}>
                      <Typography style={{ fontWeight: 'bold' }}>
                        {item.category}
                      </Typography>
                    </Grid>
                    <Grid item style={{ width: '8%' }}>
                      <Typography style={{ color: '#959595' }}>
                        ${item.value}
                      </Typography>
                    </Grid>
                    <Grid item item xs={8}>
                      {displayGraph(item.value, goalsValue[index])}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
        ) : (
          <h1>Spending button was clicked</h1>
        )}
        <Divider className={classes.divider} />
        <FooterComponent />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transaction: state.trans.transaction,
    userInfo: state.users.userInfo,
  };
};

export default connect(mapStateToProps, { userAction, notAuthenticated })(
  AnalyzerDashboard
);
