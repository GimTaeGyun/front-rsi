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
        '& .sub_label_dot': {
          color: '#284ad5',
          fontSize: '20px !important',
          lineHeight: '0 !important',
          display: 'inline-block',
        },
        '& .sub_card': {
          boxShadow: '0px 1px 5px #0000002E',
          backgroundColor: 'yellow',
          borderRadius: '6px',
        },
      },
    },
  },
});

export default css;
