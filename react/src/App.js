import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';
import logo from './logo.svg';
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
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      console.log('throwing error');
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Main />
      </MuiThemeProvider>
    )
  }
}

export default App;
