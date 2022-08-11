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
  },
});

export default css;
