import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withStyles } from '@material-ui/core/styles';

class ConfirmationModal extends React.Component {
  state = {
    date: "",
    extraDetails: "",
  }
  onConfirmClicked = () => {
    this.props.onConfirmClicked(this.state.date, this.state.extraDetails);
  }
  handleExtraDetailsChange = (e) => {
    this.setState({ extraDetails: e.target.value });
  };

  handleDateInputChange = (e) => {
    this.setState({ date: e.target.value });
  };

  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps);
  }

  render() {
    // const today = new Date().toJSON().slice(0,10);
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Confirm Redemption</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is a single use coupon. Once redeemed, it will be expired. Fill out the details of your redemption request below.
            </DialogContentText>
            <TextField
              className={this.props.classes.datePicker}
              autoFocus
              label="Date"
              id="date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleDateInputChange}
            />
            <TextField
              className={this.props.classes.extraDetails}
              placeholder="Special requests?"
              margin="dense"
              multiline
              id="name"
              label="Request Details"
              type="email"
              fullWidth
              onChange={this.handleExtraDetailsChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onConfirmClicked} color="primary">
              Redeem
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const styles = theme => ({
  datePicker: {
    marginTop: theme.spacing.unit * 2,
  },
  extraDetails: {
    marginTop: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(ConfirmationModal);
