import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { CookiesProvider } from 'react-cookie';
import theme from './theme';
// import logofrom './logo.svg';
import './App.css';

import Main from './components/Main.react';
import Navbar from './components/navbar/Navbar.react';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.initBackend()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
  }

  initBackend = async() => {
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
      <CookiesProvider>
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <Main />
        </MuiThemeProvider>
      </CookiesProvider>
    )
  }
}

export default App;
