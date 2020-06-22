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

//Styles using material UI 'makeStyles' function
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    wrap: 'nowrap',
  },
  topContainer: {
    textAlign: 'center',
    backgroundColor: 'rgba(19, 185, 172, 0.7)',
    color: 'white',
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
    },
  },
  balance: {
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
    border: '1px solid black',
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
}));

const AnalyzerDashboard = (props) => {
  const user_id = window.localStorage.getItem('user_id');
  const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

  const classes = useStyles();
  let totalsArray = [];

  const { authState } = useOktaAuth();
  const { accessToken } = authState;

  const [activeComponent, setActiveComponent] = useState('budget');
  const [income, setIncome] = useState(0);
  const [categoriesNames, setCategoriesNames] = useState([]);
  const [categoriesValues, setCategoriesValues] = useState([]);
  const [goalsValue, setGoalsValue] = useState([]);
  const [balance, setBalance] = useState(0);

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
      if (tempObj.value != 0) {
        totalsArray.push(tempObj);
      }
    }
    return null;
  };

  const displayGraph = (totalValue, goalValue) => {
    console.log('total', totalValue);
    console.log('goalValue', goalValue);

    const totalPercent = Math.round((goalValue / income) * 100);
    const percentFilled = Math.round((totalValue / goalValue) * 100);
    return (
      <ProgressBar totalPercent={totalPercent} percentfilled={percentFilled} />
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
    setActiveComponent('spending');
  };

  const handleBudget = () => {
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

  console.log('user name', props.userInfo.name);

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
        setGoalsValue(Object.values(res.data));
      })
      .catch((err) => {
        console.log('goals', err.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${SERVER_HOST}/plaid/userBalance/${user_id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log(
          'res',
          res.data.BalanceResponse.accounts[0].balances.current
        );
        setBalance(res.data.BalanceResponse.accounts[0].balances.current);
      })
      .catch((err) => {
        console.log('goals', err.message);
      });
  }, []);

  combineCategoriesNamesWithValues();
  sortTotalsArray();

  console.log('goals', goalsValue);
  console.log('totalArrays', totalsArray);
  console.log('balance', balance);

  return (
    <div className={classes.root}>
      <Grid container className={classes.topContainer}>
        <Grid item xs={12} className={classes.hiMessage}>
          Hi {props.userInfo.name}!
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Your balance is</Typography>
        </Grid>
        <Grid item xs={12} className={classes.balance}>
          <Typography variant="h3">${balance}</Typography>
        </Grid>
        <Grid item xs={12} classname={classes.buttonsClass}>
          <Button className={classes.componentButton} onClick={handleSpending}>
            {' '}
            Spending{' '}
          </Button>
          <Button className={classes.componentButton} onClick={handleBudget}>
            {' '}
            Budget{' '}
          </Button>
        </Grid>
      </Grid>
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
                <Button>May</Button>
                <Button>Jun</Button>
                <Button>Jul</Button>
                <Button>Aug</Button>
                <Button>Sep</Button>
                <Button>Oct</Button>
                <Button>Nov</Button>
                <Button>Dec</Button>
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
                <Grid item style={{ width: '15%' }}>
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
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginBottom: '4%',
                    }}
                  >
                    <Grid style={{ width: '15%' }}>
                      <Typography>{item.category}</Typography>
                    </Grid>
                    <Grid item style={{ width: '7%' }}>
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

export default connect(mapStateToProps, {})(AnalyzerDashboard);
