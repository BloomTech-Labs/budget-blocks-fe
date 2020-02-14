import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

const useStyles = makeStyles({
  card: {
    minWidth: 270,
    background: "#E0E0E0"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Header = props => {
  const classes = useStyles();

  return (
    <div className="lightgrey">
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <div className="right-header-content">
            <p className="right-header-email">{props.user.email}</p>
          </div>
        </Grid>
        
      </Grid>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    budget: state.plaidReducer.categories.map(
      i => Math.round(100 * i.budget) / 100
    ),
    expenses: state.plaidReducer.categories.map(
      i => Math.round(100 * i.total) / 100
    ),
    user: state.profileReducer.user
  };
}

export default connect(mapStateToProps)(Header);
