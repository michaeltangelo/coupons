import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Navbar from './navbar/Navbar.react';

import Coupon from './coupon/Coupon.react';

// Main coupon scrolling page
class Home extends Component {
  state = {
    coupons: null,
  };

  componentDidMount() {
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
      <div>
        <Navbar />
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
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    spacing: 24,
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  grid: {
    width: '100%',
    direction: 'row',
    alignItems: 'center',
    justify: 'flex-end',
  },
  gridItemRight: {
  },
  gridItemLeft: {
  }
});

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withTheme()(withStyles(styles)(Home));
