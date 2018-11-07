import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { CookiesProvider } from 'react-cookie';
import theme from './theme';
// import logofrom './logo.svg';
import './App.css';

import Main from './components/Main.react';
import Navbar from './components/navbar/Navbar.react';

class App extends Component {
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
