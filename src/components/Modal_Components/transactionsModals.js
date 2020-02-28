import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import "./table.css"
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 900,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TransactionsModal = props => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let transactions = props.transactions.filter(i => i.transactions.length > 0)
  transactions = transactions.sort(function(a,b){
	  return new Date(b.payment_date) - new Date(a.payment_date)
	})
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
           <div style={modalStyle} className={classes.paper}>
          
           <React.Fragment >
			<div className={classes.topcontent}>
				<h3 className={classes.text}>Recent Transactions:</h3>
			</div>

			{transactions.map(i => {
                const category = i.name
                return(
                i.transactions.map( i => 
				<Card className={classes.card} key={i.id}>
					
						<CardContent >
							
							
                    <Grid container spacing={3}>
                    <Grid item xs={3}>
       {i.name}
      </Grid>
      <Grid item xs={9}>
       </Grid>
       <Grid item md={3}>
       {i.payment_date}
      </Grid>
      <Grid item md={6}>
       
      </Grid>
      <Grid item md={3}>
      
<p>{i.amount}</p>
       </Grid> <Grid item md={3}>
       category
      </Grid>
      <Grid item md={6}>
       
      </Grid>
      <Grid item md={3}>
      
<p>{category}</p>
       </Grid>
       </Grid>
						</CardContent>
					
				
				</Card>
                ))
                })}
		</React.Fragment>
        </div>
      
      </Modal>
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
  
  export default connect(mapStateToProps)(TransactionsModal)