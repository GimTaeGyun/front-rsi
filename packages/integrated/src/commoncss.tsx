import { createTheme } from '@mui/material';

const css = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '& .sub_label_dot': {
          color: '#284ad5',
          fontSize: '20px !important',
          lineHeight: '0 !important',
          display: 'inline-block',
        },
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
