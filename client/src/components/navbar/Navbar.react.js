import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Navbar extends Component {
  render() {
    return (
      <div>
      <AppBar position="static">
          <Toolbar>
              <Typography variant="h5" color="inherit">
                Natangelo's Coupon Composium
              </Typography>
          </Toolbar>
      </AppBar>
      </div>
    );
  }
}
export default Navbar;
