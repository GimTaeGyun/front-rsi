import { createTheme } from '@mui/material';

const css = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        /*'& .test': {
          fontSize: '30px !important',
        },*/
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          boxShadow: "0px 1px 5px #0000002E",
          backgroundColor: "yellow",
          borderRadius: "6px"
        },
      },
    },
  },
});

export default css;
