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
    <div className="lightgrey">
     
    <Grid container spacing={1}>
 <Grid item xs={5}>
   <div className="right-header-content">
   <h1>Hi, [First Name] </h1>
    <p className="right-header-email">{props.user.email}</p>
   </div>

</Grid>
<Grid item xs={2}>
  <div className="left-header-content">
    <p className="left-header-text">FN</p>
  </div>
 </Grid> 
 </Grid>
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
