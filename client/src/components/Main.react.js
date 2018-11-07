import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Catch404 from './Catch404.react';
import Home from './Home.react';
import Signin from './signin/Signin.react';
import { withCookies } from 'react-cookie';

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route {...rest} render={(props) => (
    authed === true
      ? <Component {...props} />
      : <Redirect to={{pathname: '/secret'}} />
  )} />
)

class Main extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    const { cookies } = this.props;
    const users = cookies.get('user');
    console.log(users);

    this.getAuthentication()
    .then(res => {
      this.setState({ authed: res.message });
      const expiration = new Date();
      expiration.setDate(expiration.getDate() + 30);

      cookies.set('user', 'wejfpwoefj', { path: '/', expires: expiration });
    })
    .catch(err => console.log(err));
  }

  getAuthentication = async() => {
    const response = await fetch('/api/coupons');
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
        <PrivateRoute
          authed={this.state.authed}
          path='/home'
          render={() => (<Home cookies={this.props.cookies}/>)}
        />
        <Route
          render={() => (<Catch404 authed={this.state.authed}/>)}
        />
      </Switch>
    )
  }
}

export default withCookies(Main);
