import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import logo from '../media/images/logo.jpg';
import budget from '../media/images/budget_blocks.png';

const useStyles = makeStyles({
	root: {
		flexGrow: 1
	}
});

export default function CenteredTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className='navbar-container'>
			<div className='logo-img'>
				{/* <img src={logo} className='logo-img' alt='logo' /> */}
				<img src={budget} className='logo-label' alt='logo label' />
			</div>
			<Paper className={classes.root}>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					centered
				>
					<Tab label='My Dashboard' />
					<Tab label='My Profile' />
					<Tab label='Sign Out' />
				</Tabs>
			</Paper>
		</div>
	);
}
