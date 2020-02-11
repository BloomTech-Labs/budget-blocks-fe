import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { connect } from "react-redux";

const useStyles = makeStyles({
  card: {
    minWidth: 270,
    background:"#E0E0E0"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Header = props =>{
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div>
    <Card className={classes.card}>
      <CardContent>
      <Grid  container spacing={3}>
      <Grid  item xs={7}>
         <h3>Hi, First Name</h3>
         <p>{props.user.email}</p>
       </Grid>
        <Grid item xs={5}>
           <p className="square">FN</p>
           </Grid>
           </Grid>
         
      </CardContent>
    
    </Card>
    </div>
  );
}
function mapStateToProps(state){
  return {
      budget:state.plaidReducer.categories.map(i => Math.round(100*i.budget)/100),
      expenses:state.plaidReducer.categories.map(i =>Math.round(100*i.total)/100 ),
      user:state.profileReducer.user
  }

}


export default connect(mapStateToProps)(Header)
