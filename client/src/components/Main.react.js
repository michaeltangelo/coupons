import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Catch404 from './Catch404.react';
import Home from './Home.react';
import Signin from './signin/Signin.react';
import { withCookies } from 'react-cookie';

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
    authed: true,
  }

  componentDidMount() {
    const { cookies } = this.props;
    // can be null
    const userToken = cookies.get('token');

    if (userToken !== undefined) {
      this.checkAuthenticationStatus(userToken)
      .then(res => {
        this.setState({ authed: res.message === 'ok' ? true : false });
        const expiration = new Date();
        expiration.setDate(expiration.getDate() + 30);
        cookies.set('user', 'wejfpwoefj', { path: '/', expires: expiration });
      })
      .catch(err => console.log(err));
    } else {
      console.log('no cookie, redirecting to signup')
    }
  }

  checkAuthenticationStatus = async(userToken) => {
    const response = await fetch('/api/authenticate', {
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify({userToken: userToken}),
    });
    const body = await response.json();

    if (response.status !== 200) {
      console.log('throwing error');
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <Switch>
        <Route path='/secret' component={Signin}/>
        {/* <PrivateRoute
          authed={this.state.authed}
          path='/home'
          render={() => (<Home cookies={this.props.cookies}/>)}
        /> */}
        <PrivateRoute
          authed={this.state.authed}
          path='/home'
          componentExtraProps={{cookies: this.props.cookies}}
          component={Home}
        />
        {/* <Route
          path='/home'
          render={() => (<Home cookies={this.props.cookies}/>)}
        /> */}
        <Route component={Catch404}/>
      </Switch>
    )
  }
}

export default withCookies(Main);
