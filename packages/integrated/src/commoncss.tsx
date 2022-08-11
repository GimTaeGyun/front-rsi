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
  },
});

export default css;
