import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Catch404 from './Catch404.react';
import Home from './Home.react';
import Signin from './signin/Signin.react';
import FullPageSpinner from './FullPageSpinner.react';
import { withCookies } from 'react-cookie';

import history from './../history';

function PrivateRoute ({ component: Component, authed, ...rest }) {
  const { componentExtraProps } = rest;
  return (
    <Route
      {...rest}
      render={(props) => (
      authed === true
        ? <Component {...props} {...componentExtraProps}/>
        : <Redirect to={{pathname: '/secret', state: {from: props.location}}} />
    )}/>
  );
};

class Main extends Component {
  state = {
    authed: false,
    // default to loading spinner until we have gotten auth
    loading: true,
  }

  componentDidMount() {
    const { cookies } = this.props;
    // can be null
    const userToken = cookies.get('sessionToken');

    if (userToken !== undefined) {
      this.verifyTokenStatus(userToken)
      .then(res => {
        this.setState({ authed: res.message === 'ok' ? true : false });
        this._onAuthSuccessCallback('');
      })
      .catch(err => console.log(err));
    } else {
      this.setState({ loading: false });
      // allow Switch component to route to Signin
    }
  }

  verifyTokenStatus = async(userToken) => {
    const response = await fetch('/api/verifyToken', {
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify({ userToken: userToken }),
    });
    const body = await response.json();

    if (response.status !== 200) {
      console.log('throwing error');
      throw Error(body.message)
    }
    return body;
  };

  // This seems sketchy. Oh well
  _onAuthSuccessCallback = (sessionToken) => {
    // sessionToken CAN be purposefully empty
    if (sessionToken !== '') {
      const { cookies } = this.props;
      this.setState({ authed: true });
      // Deliver sessionToken cookie
      const expiration = new Date();
      // expires in half a day
      expiration.setDate(expiration.getDate() + 1);
      cookies.set('sessionToken', sessionToken, { path: '/', expires: expiration });
    }
    history.push('/home');
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    return (
      (loading === true)
      // ? <div className={classes.root}>
      //     <CircularProgress className={classes.spinner}/>
      //     <Typography className={classes.loadingText} variant="subtitle1">
      //       loading...
      //     </Typography>
      //   </div>
      ? <FullPageSpinner />
      : <Switch>
          <Route
            path='/secret'
            render={() =>
              <Signin
                authed={this.state.authed}
                onAuthSuccess={this._onAuthSuccessCallback}
              />
            }
            />
          <PrivateRoute
            authed={this.state.authed}
            path='/home'
            componentExtraProps={{
              cookies: this.props.cookies,
            }}
            component={Home}
          />
          <Route component={Catch404}/>
        </Switch>
    )
  }
}

export default withCookies(Main);
