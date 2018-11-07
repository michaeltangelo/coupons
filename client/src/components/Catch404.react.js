import React, {Component} from 'react';

import history from '../history';

function Catch404(props) {
  const { authed } = props;
  if (authed) {
    history.push('/home');
  } else {
    history.push('/secret');
  }
  return null;
}

export default Catch404;
