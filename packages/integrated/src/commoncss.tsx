import { createTheme } from '@mui/material';

const css = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        /*'.test': {
          fontSize: '30px !important',
        },*/
        '& .sub_button_white': {
          root: {
            padding: '5px 10px',
            lineHeight: 'normal',
            fontFamily: 'NotoSansKRMedium',
            color: '#284AD5',
            borderColor: '#284AD5',
          },
        },
      },
    },
  },
});

export default css;
