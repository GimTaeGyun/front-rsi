import { createTheme } from '@mui/material';

const css = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        /*'.test': {
          fontSize: '30px !important',
        },*/
        '& .sub_button_white': {
          padding: '5px 10px !important',
          lineHeight: 'normal !important',
          fontFamily: 'NotoSansKRMedium !important',
          color: '#284AD5 !important',
          borderColor: '#284AD5 !important',
        },
      },
    },
  },
});

export default css;
