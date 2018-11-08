import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 12,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  fabProgress: {
    // color: green[500],
    position: 'absolute',
    top: 3,
    left: 3,
    zIndex: 1,
  },
  buttonProgress: {
    // color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: 0,
    marginLeft: -12,
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
  },
});

class SignIn extends Component {
  state = {
    password: '',
    loading: false,
    success: false,
    error: '',
  }

  componentDidMount = (props) => {
    const { authed } = this.props;
    if (authed) {
      // we pass in an empty string to indicate that we are already authenticated
      props.onAuthSuccess('');
    }
  }

  onSubmitClicked = (e) => {
    e.preventDefault();
    if (!this.state.loading) {
      this.setState({ loading: true });
    }
    if (this.state.password !== '') {
      this.authenticate(this.state.password)
      .then(res => {
        const authed = res.message === 'ok' ? true : false;
        this.setState({ loading: false, success: authed, error: res.errorMsg || '' });
        if (authed) {
          this.props.onAuthSuccess(res.sessionToken);
        } else {
          this.setState({ password: '' }); // clear password field
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      });
    }
  }

  authenticate = async(password) => {
    const response = await fetch('/api/authenticate', {
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify({ password: password }),
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }

  onPasswordTextChanged = (event) => {
    this.setState({password: event.target.value});
  }

  render() {
    const { loading, success } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={this.props.classes.layout}>
          <Paper className={this.props.classes.paper}>
            <div className={this.props.classes.wrapper}>
              <Avatar className={this.props.classes.avatar}>
                {success ? <LockOpenIcon /> : <LockIcon />}
              </Avatar>
              {loading && <CircularProgress size={50} className={this.props.classes.fabProgress} />}
            </div>
            <form onSubmit={this.onSubmitClicked} className={this.props.classes.form}>
              <FormControl margin="normal" error={this.state.error === '' ? false : true} required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  onChange={this.onPasswordTextChanged}
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                />
                <FormHelperText id="component-error-text">{this.state.error && `* ${this.state.error}`}</FormHelperText>
              </FormControl>
              <Typography>

              </Typography>
              <div className={this.props.classes.wrapper}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={this.props.classes.submit}
                  disabled={loading}
                  >
                  Enter
                </Button>
                {loading && <CircularProgress size={24} className={this.props.classes.buttonProgress} />}
              </div>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
