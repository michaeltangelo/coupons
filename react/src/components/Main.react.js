import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.react';
import Signin from './signin/Signin.react';


class Main extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact path='/'
          render={(props) => (
            <Signin {...props}/>
          )}/> */}
        <Route exact path='/' component={Signin}/>
        <Route path='/home' component={Home}/>
        {/* <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/> */}
      </Switch>
    )
  }
}

export default Main;
