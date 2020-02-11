import React,{useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { getTransactions } from "../redux/actions/PlaidActions";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid'
import TransactionsModals from "./transactionsModals"
// Generate Order Data
function createData(id, date, description, category, paymentMethod, amount) {
	return { id, date, description, category, paymentMethod, amount };
}

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	topcontent: {
		display: 'flex',
		
	},
	card: {
		width:"100%",
		marginBottom:"1rem",
		height:"70%",
		background: 'lightgrey',
		
	},
	details: {
		display: 'flex'
	},
	content: {
		flex: '1 0 auto',
		alignItems: 'flex-start',
		textAlign: 'left',
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'right',
		alignContent: 'flex-end',
		
	},
	text: {
		textAlign: 'left',
		paddingLeft: theme.spacing(5)
	}
}));

//dummy data
const rows = [
	createData(
		0,
		'Jan 20, 2020',
		'Puchase Authorized on 01/01 Storage Company For USER 6A7BC81524XY1524',
		'Grocery',
		'VISA ⠀•••• 1234',
		312.44
	),
	createData(
		1,
		'Jan 21, 2020',
		'LA fitness',
		'Utility',
		'VISA ⠀•••• 1234',
		866.99
	),
	createData(
		2,
		'Jan 22, 2020',
		'APPPLE.COM/BILL',
		'Entertainment',
		'VISA ⠀•••• 1234',
		100.81
	),
	createData(
		3,
		'Jan 23, 2020',
		'Target',
		'Shopping',
		'Visa ⠀•••• 1234',
		654.39
	),
	createData(
		4,
		'Jan 24, 2020',
		'Nordstrom #0123',
		'Shopping',
		'VISA ⠀•••• 1234',
		212.79
	)
];

function preventDefault(event) {
	event.preventDefault();
}

const  Transactions = props =>  {
	const classes = useStyles();
	const theme = useTheme();
	const [filter,setFilter] = useState(true)
  
    
    let transactions = props.transactions.filter(i => i.transactions.length > 0)
	console.log(transactions)
	transactions = transactions.sort(function(a,b){
	  return new Date(b.payment_date) - new Date(a.payment_date)
	})
	const handleClick = e => {
		setFilter(!filter)
	}
	var shuffled = props.transactions.sort(function(){return .5 - Math.random()});

var selected=shuffled.slice(0,5);
	return (
		<div>
	{filter ? 
		<React.Fragment >
		<div className={classes.topcontent}>
			<h3 className={classes.text}>Recent Transactions:</h3>
			{/* <div className={classes.root}>
				<Button variant='contained'>
					<AddIcon />
					Add Transactions
				</Button>
				<Button variant='contained' color='primary'>
					<AddIcon />
					Add Income
				</Button>
			</div> */}
		</div>

		{transactions.map(i => {
			const category = i.name
			return(
			i.transactions.filter(i => i.id <= 3).map( i => 
			<Card className={classes.card} key={i.id}>
				
					
						
					<p className="cardheader">{`Puchase Authorized on ${i.payment_date} from ${i.name}`}</p>
					
				<Grid container spacing={1}>
   <Grid item xs={3}>
   <p>{i.payment_date}</p>
   <b>Category</b>
  </Grid>
  <Grid item xs={9}>
  <p className={i.amount < 0 ? "red bottom-content" : "green bottom-content"}>${(Math.round(10 * i.amount)/100).toFixed(2)}</p>
  <p className="bottom-content">{category}</p>
   </Grid> 
   </Grid>
					
				
			
			</Card>
			))
			})}
			<button onClick={handleClick}>View All</button>
	</React.Fragment>
:
<React.Fragment >
<div className={classes.topcontent}>
	<h3 className={classes.text}>Recent Transactions:</h3>
	{/* <div className={classes.root}>
		<Button variant='contained'>
			<AddIcon />
			Add Transactions
		</Button>
		<Button variant='contained' color='primary'>
			<AddIcon />
			Add Income
		</Button>
	</div> */}
</div>

{transactions.map(i => {
	const category = i.name
	return(
	i.transactions.map( i => 
		<Card className={classes.card} key={i.id}>
				
					
						
					<p className="cardheader">{`Puchase Authorized on ${i.payment_date} from ${i.name}`}</p>
					
				<Grid container spacing={1}>
   <Grid item xs={3}>
   <p>{i.payment_date}</p>
   <b>Category</b>
  </Grid>
  <Grid item xs={9}>
  <p className={i.amount < 0 ? "red bottom-content" : "green bottom-content"}>${(Math.round(10 * i.amount)/100).toFixed(2)}</p>
  <p className="bottom-content">{category}</p>
   </Grid> 
   </Grid>
					
				
			
			</Card>
))
})}
<button onClick={handleClick}>View Less</button>
</React.Fragment>
}
		</div>
	);
}
function mapStateToProps(state){
	return {
		userID:state.loginReducer.user.id,
		LinkedAccount:state.loginReducer.user.LinkedAccount,
		transactions:state.plaidReducer.categories
	}
  }
  
  export default connect(mapStateToProps,{ getTransactions })(Transactions)

// export const Tran = props => { }
//const mapStateToProps = state =>{return{ }}
//export default connect(mapStateToProps, {}(trans  ))
