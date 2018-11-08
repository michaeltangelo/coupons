import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function FullPageSpinner(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.spinner}/>
      <Typography className={classes.loadingText} variant="subtitle1">
        loading...
      </Typography>
    </div>
  );
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 24,
  },
  spinner: {
    marginBottom: theme.spacing.unit * 3,
  },
  loadingText: {
    color: '#BBBBBB',
  }
});

FullPageSpinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullPageSpinner);
