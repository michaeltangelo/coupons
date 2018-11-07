import history from '../history';

function Catch404(props) {
  history.push('/secret');
  return null;
}

export default Catch404;
