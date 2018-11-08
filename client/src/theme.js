import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export default createMuiTheme({
  palette: {
      // type: 'dark',
      primary: blue,
      // primary: { main: '#1565c0' }, // Purple and green play nicely together.
      // secondary: { main: '#f48fb1' }, // This is just green.A700 as hex.
  },
  typography: {
    useNextVariants: true,
  },
});
