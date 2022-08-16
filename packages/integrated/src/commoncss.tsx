import { createTheme } from '@mui/material';
import { fontFamily } from '@mui/system';

const css = createTheme({
  typography: {
    fontFamily: 'NotoSansKRMedium',
  },

  palette: {
    background: {
      default: '#F4F5F7',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '& .lastcolumnSeparator': {
            '.MuiDataGrid-columnSeparator': {
              display: 'none',
            },
          },
          '& .datagridMenu': {
            pointerEvents: 'none',
            /* 
            '& .MuiDataGrid-menuIcon': {
              visibility: 'visible !important',
            },
            */
          },
          '& .sub_tree_hover': {
            backgroundColor: '#F4F5F7',
            borderRadius: '4px',
            color: '#284AD5',
          },
          '& .sub_button_white_noneborder': {
            color: '#284AD5',
            minWidth: '57px',

            ':hover': {
              color: '#0615B2',
              backgroundColor: 'unset',
            },
          },

          '& .sub_button_white': {
            padding: '5px 10px ',
            lineHeight: 'normal ',
            color: '#284AD5',
            border: '1px solid #284AD5',
            borderRadius: '6px',
          },

          '& .sub_button_white_none': {
            padding: '5px 10px ',
            lineHeight: 'normal ',
            color: '#284AD5',
            borderColor: '#F9F9F9',
            borderRadius: '6px',
          },

          '& .sub_button_blue': {
            padding: '5px 10px ',
            lineHeight: 'normal ',
            backgroundColor: '#284AD5',
            color: '#fff',
            borderRadius: '6px',
          },

          '& .sub_label_dot': {
            color: '#284ad5',
            fontSize: '20px ',
            lineHeight: '0 ',
            display: 'inline-block',
          },

          '& .sub_card': {
            boxShadow: '0px 1px 5px #0000002E ',
            backgroundColor: 'yellow ',
            borderRadius: '6px ',
          },

          '& .sub_formLabel': {
            marginTop: '15px',
            color: '#333333',
            fontSize: '14px',
          },

          '& .sub_formText': {
            marginTop: '10px',
            height: '42px',
            width: '100%',
            '& .MuiOutlinedInput-input': {
              padding: '11px 10px',
              lineHeight: 'normal',
            },
            '& 	.MuiOutlinedInput-input': {
              fontFamily: 'NotoSansKRMedium',
              fontStyle: 'normal',
              fontSize: '14px',
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
            marginTop: '10px',
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
            marginTop: '10px',
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

        //This is all cards style class
        '& .sub_card_common': {
          boxShadow: '0px 1px 5px #0000002E !important',
          backgroundColor: '#fff !important',
          borderRadius: '6px !important',
        },

        //This is all outlined input style class
        '& .sub_input_common': {
          borderRadius: '4px',
          borderColor: '#0000001F',
          color: '#00000099',
          fontFamily: 'NotoSansKRRegular',
          fontSize: '13px',
          '& input::placeholder': {
            color: '#00000099',
            opacity: '1',
          },
          '&.MuiOutlinedInput-root.Mui-focused fieldset': {
            borderWidth: '1px',
            borderColor: '#284AD5',
          },
        },
        '& .sub_input_common:hover': {
          borderColor: '#000000DE',
        },

        //This is all data tables style class
        '& .sub_tbl_section_common': {
          border: 'unset',
          boxShadow: '0px 1px 5px #0000002E !important',
          backgroundColor: '#fff !important',
          borderRadius: '6px !important',
        },
        '& .sub_tbl_outer_common': {
          boxShadow: 'unset !important',
          borderRadius: 'unset !important',
          borderLeftWidth: '0 !important',
          borderRightWidth: '0 !important',
          '& .MuiCheckbox-root.Mui-checked': {
            color: '#284AD5 !important',
          },
          '& .MuiDataGrid-row.Mui-selected:hover': {
            backgroundColor: '#fff !important',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: '#fff !important',
            cursor: 'pointer !important',
          },
          '& .MuiDataGrid-row.Mui-selected': {
            backgroundColor: 'unset !important',
          },
          '& .MuiDataGrid-cell:focus': {
            outline: 'none !important',
          },
          '& .MuiDataGrid-columnHeader:focus': {
            outline: 'none !important',
          },
          '& .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none !important',
          },
          '& .MuiDataGrid-cell:focus-within': {
            outline: 'none !important',
          },
          '& .MuiDataGrid-columnHeaderTitleContainer .MuiSvgIcon-root': {
            fontSize: '24px !important',
            color: '#141414',
          },
        },
        '& .sub_tbl_outer_common .MuiDataGrid-cellContent': {
          color: '#000000DE',
          fontFamily: 'NotoSansKRRegular !important',
          fontSize: '14px !important',
        },
        '& .sub_tbl_th_common': {
          color: '#000000DE',
          fontFamily: 'NotoSansKRMedium !important',
          fontSize: '14px !important',
          letterSpacing: '-0.35px !important',
        },
        '& .sub_hideLastSeparator .MuiDataGrid-columnSeparator--sideRight': {
          display: 'none !important',
        },
        '& .sub_tbl_header_text_common': {
          color: '#000000DE',
          fontFamily: 'NotoSansKRMedium !important',
          fontSize: '16px !important',
          letterSpacing: '-0.4px !important',
        },

        //This is all outlined select style class
        '& .sub_select_common': {
          borderRadius: '4px',
          borderColor: '#0000001F',
          color: '#000000DE',
          fontFamily: 'NotoSansKRRegular',
          fontSize: '13px',
          '&.MuiOutlinedInput-root.Mui-focused fieldset': {
            borderWidth: '1px',
            borderColor: '#284AD5',
          },
        },
        '& .sub_select_common:hover': {
          borderColor: '#000000DE !important',
        },
        '& .MuiButtonBase-root.Mui-checked': {
          color: '#284AD5 !important',
        },
        '& .selectMenuItem': {
          paddingLeft: '0 !important',
          paddingRight: '0 !important',
          height: '40px',
        },
        '& .MuiList-root': {
          padding: '0 !important',
        },

        //This is all outlined button style class
        '& .sub_btn_primary_outline_common': {
          color: '#284AD5 !important',
          fontFamily: 'NotoSansKRMedium !important',
          fontSize: '14px !important',
          borderWidth: '1px',
          borderColor: '#284AD5 !important',
          letterSpacing: '0.01px !important',
          backgroundColor: '#fff !important',
        },
        '& .sub_btn_primary_outline_common:hover': {
          backgroundColor: '#fff !important',
        },
        '& .MuiPickersDay-root.Mui-selected': {
          backgroundColor: '#284AD5 !important',
        },
        '& ul .selectMenuItem': {
          borderBottom: '1px solid #0000001F',
        },
        '& ul .selectMenuItem:hover': {
          backgroundColor: '#fff',
        },
        '& ul .selectMenuItem.Mui-selected:hover': {
          backgroundColor: '#fff',
        },
        '& ul .selectMenuItem.Mui-selected': {
          backgroundColor: '#fff',
        },
        '& ul .selectMenuItem.Mui-focusVisible': {
          backgroundColor: '#fff',
        },
        '& .MuiPickersDay-root.Mui-focusVisible.Mui-selected': {
          backgroundColor: '#fff',
        },

        //This is all contained/filled button style class
        '& .sub_btn_primary_fill_common': {
          color: '#fff !important',
          backgroundColor: '#284AD5 !important',
          fontFamily: 'NotoSansKRMedium !important',
          fontSize: '14px !important',
          borderColor: '#284AD5 !important',
          letterSpacing: '0.01px !important',
          boxShadow: '0px 3px 3px #0000002E !important',
        },
        '& .sub_btn_primary_fill_common:hover': {
          backgroundColor: '#284AD5 !important',
          borderColor: '#284AD5 !important',
          boxShadow: '0px 3px 3px #0000002E !important',
        },

        //Clases specific to search filter section below:
        '& .sub_card_filter': {
          marginBottom: '20px',
        },
        '& .sub_listpage_filter_topsection': {
          height: '60px',
          borderBottom: '1px solid #0000001F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '& .sub_listpage_filter_topsection_sub': {
          display: 'flex',
          maxWidth: '490px',
          width: '33.33%',
          height: '60px',
          alignItems: 'center',
          justifyContent: 'screch',
          paddingLeft: '20px',
          paddingRight: '10px',
        },
        '& .sub_listpage_filter_label': {
          color: '#333333',
          fontFamily: 'NotoSansKRMedium',
          fontSize: '14px',
          borderRight: '45px solid white',
          letterSpacing: '-0.35',
        },
        '& .sub_listpage_filter_search': {
          width: '230px',
          height: '36px',
        },
        '& .sub_listpage_filter_list': {
          width: '104px',
          height: '36px',
          marginRight: '8px',
        },
        '& .sub_listpage_filter_list2': {
          maxWidth: '116px',
          maxHeight: '36px',
          marginRight: '8px',
        },
        '& .sub_listpage_filter_list2:last-child': {
          marginRight: '0',
        },
        '& .sub_listpage_filter_btmsection': {
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .sub_listpage_filter_date': {
          '& .MuiInputBase-root': {
            width: '175px',
            height: '36px',
          },
        },
        '& .sub_btn_filter1': {
          width: '84px',
          height: '36px',
          marginRight: '8px !important',
        },
        '& .sub_btn_filter2': {
          width: '84px',
          height: '36px',
        },
        '& .sub_td_cat': {
          fontFamily: 'NotoSansKRMedium',
          width: '32px',
          height: '22px',
          borderRadius: '5px',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .sub_td_cat_color1': {
          backgroundColor: '#E8EAEE',
        },
        '& .sub_td_cat_color2': {
          backgroundColor: '#11ADBF',
          color: '#fff',
        },
        '& .sub_td_cat_color3': {
          backgroundColor: '#3A4B60',
          color: '#fff',
        },
        '& .sub_td_status': {
          fontSize: '14px',
          fontFamily: 'NotoSansKRMedium',
          letterSpacing: '-0.35px',
        },
        '& .sub_td_status_color1': {
          color: '#284AD5',
        },
        '& .sub_td_status_color2': {
          color: '#999999',
        },
        '& .sub_td_sit': {
          fontSize: '14px',
          fontFamily: 'NotoSansKRMedium',
          letterSpacing: '-0.35px',
        },
        '& .sub_td_sit_color1': {
          color: '#284AD5',
        },
        '& .sub_td_sit_color2': {
          color: '#E50012',
        },
        '& .sub_td_sit_color3': {
          color: '#999999',
        },
        '& .sub_td_btn_action': {
          minWidth: '44px !important',
          maxWidth: '44px',
          minHeight: '30px',
          maxHeight: '30px',
          borderRadius: '4px !important',
          fontSize: '13px !important',
          letterSpacing: '-0.33px !important',
        },
        '& .sub_pagination_wrapper': {
          borderTop: '1px solid rgba(224, 224, 224, 1)',
          display: 'flex',
          width: '100%',
          height: '52px',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .sub_pagination_outer': {
          width: '33.33%',
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px !important',
        },
        '& .sub_select_batch': {
          width: '120px',
          height: '30px',
          borderRadius: '4px',
          borderColor: '#0000001F',
          '& .MuiSelect-select': {
            color: '#000000DE',
            fontSize: '13px',
            fontFamily: 'NotoSansKRRegular',
            paddingLeft: '8px',
            paddingRight: '32px',
          },
        },
        '& .sub_btn_footer_save': {
          width: '80px',
          height: '30px',
          fontSize: '13px !important',
          padding: '0 !important',
          fontFamily: 'NotoSansKRMedium !important',
          letterSpacing: '-0.33px !important',
          marginLeft: '8px !important',
        },
        '& .sub_pagination': {
          '& .MuiTablePagination-selectLabel': {
            color: '#00000099',
            fontSize: '14px',
            fontFamily: 'NotoSansKRRegular',
          },
          '& .MuiSelect-select': {
            color: '#00000099',
            fontSize: '14px',
            fontFamily: 'NotoSansKRRegular',
          },
          '& .MuiTablePagination-displayedRows': {
            color: '#00000099',
            fontSize: '14px',
            fontFamily: 'NotoSansKRRegular',
          },
        },
        '& .sub_btn_footer_export': {
          width: '111px',
          height: '30px',
          fontsize: '13px',
          fontFamily: 'NotoSansKRMedium',
          padding: '0 !important',
          letterSpacing: '-0.33px',
        },

        // 고객관리 상세정보 탭 카드 컴포넌트
        '& .sub_ccp_detail_parent': {
          borderRadius: '6px !important',
          opacity: '1',
          boxShadow: '0px 3px 5px #0000002E !important',
          marginTop: '20px',
        },
        '& .sub_ccp_detail_parent .header': {
          color: '#000000DE',
          letterSpacing: '-0.4px',
          lineHeight: '20px',
          fontSize: '16px',
        },
        '& .sub_ccp_detail_parent .content': {
          width: '1470px',
          padding: '0px',
        },
        '& .sub_ccp_detail_parent .content:last-child': {
          padding: '0px',
        },
        '& .sub_ccp_detail_parent .content .column': {
          display: 'inline-block',
          width: '490px',
          color: '#333333',
        },
        '& .sub_ccp_detail_parent .content .column .label': {
          width: '100px',
          height: '30px',
          margin: '15px',
          marginLeft: '20px',
          marginRight: '0px',
          paddingTop: '5px',
          paddingBottom: '5px',
          fontSize: '14px',
          letterSpacing: '-0.35px',
          lineHeight: '25px',
          display: 'inline-block',
        },
        '& .sub_ccp_detail_parent .content .column .text': {
          width: '360px',
          height: '36px',
          marginTop: '12px',
          marginBottom: '12px',
          backgroundcolor: 'white',
          '& input': {
            padding: '8px',
            opacity: '1',
            fontSize: '13px',
            backgroundColor: '#F9F9F9',
            fontFamily: 'NotoSansKRRegular',
            letterSpacing: '0px',
            lineHeight: '24px',
            WebkitTextFillColor: '#666666',
          },
          '& fieldset': {
            border: 'dashed 1px #0000001F',
          },
        },
        '& .sub_ccp_detail_parent .content .column .select': {
          '& input': {
            borderStyle: 'hidden',
            height: '36px',
            opacity: 1,
          },
        },
        '& .sub_ccp_detail_parent .content .column .button': {
          width: '84px',
          height: '36px',
          border: 'solid 1px #284AD5',
          marginLeft: '10px',
          marginBottom: '10px',
        },

        //styles related to card/form input fields
        '& .sub_card_form_header': {
          borderBottom: '1px solid #0000001F',
        },
        '& .sub_card_form .MuiCardContent-root': {
          padding: '0',
        },
        '& .sub_card_formcontrol_outer_common': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '55px',
          borderBottom: '1px solid #0000001F',
          padding: '0 10px 0 16px',
        },
        '& .sub_card_formcontrol_outer_common.b-0': {
          borderWidth: '0px',
        },
        '& .sub_card_formcontrol_label': {
          color: '#333 !important',
          fontSize: '14px',
          fontFamily: 'NotoSansKRMedium',
          letterSpacing: '-0.33px',
        },
        '& .sub_card_formcontrol_input': {
          width: '344px',
          height: '38px',
          backgroundColor: '#F9F9F9',
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #0000001F',
          },
          '& .MuiOutlinedInput-input': {
            color: '#666 !important',
            fontSize: '13px',
            fontFamily: 'NotoSansKRRegular',
          },
        },
        '& .sub_card_formcontrol_list': {
          width: '344px',
          height: '38px',
          backgroundColor: '#F9F9F9',
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #0000001F',
          },
          '& .MuiOutlinedInput-input': {
            color: '#666 !important',
            fontSize: '13px',
            fontFamily: 'NotoSansKRRegular',
          },
        },
        '& .sub_card_formcontrol_inputbutton_outer': {
          width: '344px',
          height: '38px',
          '& .sub_card_formcontrol_input': {
            width: '250px',
          },
          '& .sub_card_formcontrol_button': {
            width: '84px',
          },
        },
        '& .sub_tabs_container': {
          '& .MuiButtonBase-root': {
            paddingTop: '0',
            paddingBottom: '0',
          },
          '& .MuiTab-textColorPrimary': {
            color: '#000000DE',
            opacity: '0.54',
          },
          '& .Mui-selected.MuiTab-textColorPrimary': {
            color: '#284AD5',
            opacity: '1',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#284AD5 !important',
          },
        },
        '& .sub_listpage_card_btmsection': {
          marginTop: '30px',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .sub_btn_card_btm': {
          width: '85px',
          height: '45px',
        },
        '& .primaryColor2': {
          backgroundColor: '#0615B2  !important',
        },
        '& .primaryColor2:hover': {
          backgroundColor: '#0615B2  !important',
        },
        '& .sub_card_formcontrol_checkboxes': {
          flexDirection: 'row',
          '& .MuiTypography-root': {
            color: '#000000DE',
            fontSize: '13px',
            fontFamily: 'NotoSansKRRegular',
          },
          '& .MuiFormControlLabel-root': {
            marginRight: '30px',
          },
          '& .MuiSvgIcon-root': {
            color: '#00000042',
          },
        },

        //styles related to modal/form
        '& .mymodal_wrapper': {
          '& .MuiBox-root:focus-visible': {
            outline: 'unset',
          },
        },
        '& .mymodal_outer.modal_password': {
          height: '257px',
          '& .mymodal_content': {
            height: '135px',
          },
        },
        '& .mymodal_outer': {
          display: 'block',
          margin: '0 auto',
          width: '500px',
          height: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          border: 'none',
          boxShadow: '0px 1px 5px #0000002E',
          borderRadius: '6px',
        },
        '& .mymodal_header': {
          padding: '0 15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '56px',
          borderBottom: '1px solid #eee',
        },
        '& .mymodal_title': {
          fontSize: '16px',
          fontColor: '#000000DE',
          fontFamily: 'NotoSansKRMedium',
        },
        '& .mymodal_content': {
          width: '100%',
          height: 'auto',
          padding: '30px 30px 0 30px',
        },

        '& .mymodal_footer': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          widwidth: '100%',
          height: '70px',
          borderTop: '1px solid #eee',
        },
        '& .btn_modal_primary_fill': {
          width: '57px',
          height: '36px',
        },
        '& .mymodal_inputfield_outer': {},
        '& .mymodal_inputlabel': {},
        '& .mymodal_inputfield': {},
      },
    },
  },
});

export default css;
