// import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
// import theme from './../theme';
import { withStyles, withTheme } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Coupon from './coupon/Coupon.react';

// Main coupon scrolling page
class Home extends Component {
  state = {
    coupons: null,
  };

  componentDidMount() {
    const { cookies } = this.props;

    this.fetchCoupons()
    .then(res => {
      this.setState({ coupons: res.coupons });
    })
    .catch(err => console.log(err));
  }

  fetchCoupons = async() => {
    const response = await fetch('/api/coupons');
    const body = await response.json();

    if (response.status !== 200) {
      console.log('throwing error');
      throw Error(body.message)
    }
    return body;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography>
          {`Our state: ${this.state.coupons}`}
        </Typography>
        <Grid className={classes.grid} container spacing={16}>
          <Grid item xs={12} sm={6} className={classes.gridItemRight}>
            <Coupon
                title="bob"
                description="awpeofjawepf"
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridItemLeft}>
            <Coupon />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridItemRight}>
            <Coupon />
          </Grid>
          <Grid item xl={12} className={classes.gridItemLeft}>
            <Coupon />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    spacing: 24,
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    // direction: 'column',
    // backgroundColor: 'white,
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  grid: {
    width: '100%',
    direction: 'row',
    alignItems: 'center',
    justify: 'flex-end',
    // height: 800,
  },
  gridItemRight: {
    // alignItems: 'flex-start',
  },
  gridItemLeft: {
    // alignItems: 'flex-start',
  }
});

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(Home));
