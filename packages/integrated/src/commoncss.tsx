import { createTheme } from '@mui/material';

const css = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          '& .sub_form_header': { color: '#000000DE' },
          '& .sub_form_body': {
            width: '1470px',
            height: '120px',
            padding: '0px',
          },
          '& .sub_form_body .sub_col3': {
            display: 'inline-block',
            width: '490px',
            height: '60px',
            color: '#333333',
          },
          '& .sub_form_body .sub_col3 label': {
            width: '100px',
            height: '30px',
            margin: '15px',
            margingLeft: '20px',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '& .sub_label_dot': {
            color: '#284ad5',
            fontSize: '20px',
            lineHeight: '0',
            display: 'inline-block',
          },
          '& .sub_font_medium': {
            fontFamily: 'NotoSansKRMedium',
          },
          '& .sub_font_regular': {
            fontFamily: 'NotoSansKRRegular',
            letterSpacing: '-0.4px',
          },
          '& .sub_fontsize16': {
            letterSpacing: '-0.4px',
            lineHeight: '20px',
            fontSize: '16px',
          },
          '& .sub_fontsize14': {
            letterSpacing: '-0.35px',
            lineHeight: '25px',
            fontSize: '14px',
          },
        },
        '& .sub_button_white': {
          padding: '5px 10px !important',
          lineHeight: 'normal !important',
          fontFamily: 'NotoSansKRMedium !important',
          color: '#284AD5 !important',
          borderColor: '#284AD5 !important',
        },
        '& .sub_card': {
          boxShadow: '0px 1px 5px #0000002E !important',
          backgroundColor: 'yellow !important',
          borderRadius: '6px !important',
        },
      },
    },
  },
});

export default css;
