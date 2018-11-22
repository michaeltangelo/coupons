import FullPageSpinner from './FullPageSpinner.react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from './navbar/Navbar.react';

import Coupon from './coupon/Coupon.react';

// Main coupon scrolling page
class Home extends Component {
  state = {
    loading: true,
    coupons: null,
  };

  componentDidMount() {
    this.fetchCoupons()
    .then(res => {
      this.setState({ coupons: res.coupons, loading: false });
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
    if (this.state.loading) {
      return <FullPageSpinner />;
    }

    const { classes } = this.props;
    const couponItems = this.state.coupons.map((coupon) => {
      return (
        <Grid item xs={12} sm={6} key={coupon._id}>
          <Coupon
            id={coupon._id}
            title={coupon.title}
            description={coupon.description}
            redeemed={coupon.redeemed}
          />
        </Grid>
      );
    });
    return (
      <div>
        <Navbar />
        <div className={classes.root}>
          <Grid className={classes.grid} container spacing={16}>
            {couponItems}
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
