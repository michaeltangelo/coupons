import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { CookiesProvider } from 'react-cookie';
import themes from './theme';
// import logofrom './logo.svg';
import './App.css';

import Main from './components/Main.react';

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <MuiThemeProvider theme={themes}>
          <Main />
        </MuiThemeProvider>
      </CookiesProvider>
    )
  }
}

export default App;
