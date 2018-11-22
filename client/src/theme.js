import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const defaultTheme = createMuiTheme({
  palette: {
      // type: 'dark',
      primary: blue,
      // secondary: purple,
      // primary: { main: '#1565c0' }, // Purple and green play nicely together.
      // secondary: { main: '#f48fb1' }, // This is just green.A700 as hex.
  },
  typography: {
    useNextVariants: true,
  },
});
//
// const darkTheme = createMuiTheme({
//   palette: {
//       type: 'dark',
//       primary: blue,
//       // primary: { main: '#1565c0' }, // Purple and green play nicely together.
//       // secondary: { main: '#f48fb1' }, // This is just green.A700 as hex.
//   },
//   typography: {
//     useNextVariants: true,
//   },
// });
//
// const themes = [defaultTheme, darkTheme];

export default defaultTheme;
