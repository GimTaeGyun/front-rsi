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
        /*'.test': {
          fontSize: '30px !important',
        },*/
        ':root': {
          '& .sub_button_white': {
            padding: '5px 10px ',
            lineHeight: 'normal ',
            fontFamily: 'NotoSansKRMedium ',
            color: '#284AD5',
            borderColor: '#284AD5',
          },
          '& .sub_button_blue': {
            padding: '5px 10px ',
            lineHeight: 'normal ',
            fontFamily: 'NotoSansKRMedium ',
            backgroundColor: '#284AD5',
            color: 'white',
          },
          '& .sub_label_dot': {
            color: '#284ad5',
            fontSize: '20px ',
            lineHeight: '0 ',
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
          '& .sub_card': {
            boxShadow: '0px 1px 5px #0000002E ',
            backgroundColor: 'yellow ',
            borderRadius: '6px ',
          },
          '& .sub_formLabel': {
            marginTop: '15px',
            color: '#333333',
            fontFamily: 'NotoSansKRMedium',
            fontSize: '14px',
          },

          '& .sub_formText': {
            fontFamily: 'NotoSansKRMedium',
            marginTop: '15px',
            height: '42px',
            '& .MuiOutlinedInput-input': {
              padding: '11px 10px',
              lineHeight: 'normal',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#0000001F',
                borderWidth: '1px',
              },
              '&:hover fieldset': {
                borderColor: '#0000001F',
                borderWidth: '1px',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#0000001F',
                borderWidth: '1px',
              },
              '&.Mui-error fieldset': {
                borderColor: '#E50012',
                borderWidth: '1px',
              },
            },
          },
          '& .sub_select_form_disable': {
            height: '42px',
            marginTop: '15px',
            fontSize: '14px',
            border: 'dashed',
            backgroundColor: '#F9F9F9',
            borderWidth: '1px',
            borderColor: '#0000003B',
            fontFamily: 'NotoSansKRRagular',
            '&.MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#0000001F',
                borderWidth: '0px',
              },
            },
          },
          '& .sub_select_form': {
            height: '42px',
            marginTop: '15px',
            fontFamily: 'NotoSansKRRagular',
            fontSize: '14px',
            '&.MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#0000001F',
                borderWidth: '1px',
              },
              '&:hover fieldset': {
                borderColor: '#0000001F',
                borderWidth: '1px',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#0000001F',
                borderWidth: '1px',
              },
              '&.Mui-error fieldset': {
                borderColor: '#E50012',
                borderWidth: '1px',
              },
            },
          },
        },
      },
    },
  },
});

export default css;
