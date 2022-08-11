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
        '& .sub_card':{
          boxShadow: "0px 1px 5px #0000002E",
          backgroundColor: "yellow",
          borderRadius: "6px"
        }
      },
    },
  },
});

export default css;
