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
            hover: 'none',
            '& .MuiDataGrid-menuIcon': {
              visibility: 'visible !important',
            },
          },
          '& .sub_tree_hover': {
            backgroundColor: '#F4F5F7',
            borderRadius: '4px',
            '& .MuiTypography-root.active_tree': {
              fontFamily: 'NotoSansKRBold',
              color: '#284AD5',
            },
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

          '& .MuiTypography-root.sub_label_dot': {
            color: '#284ad5',
            fontSize: '20px ',
            minWidth: '20px',
            display: 'inline-block',
            position: 'absolute',
            top: '-10px',
            borderLeft: '5px solid white',
          },
          '& .MuiTypography-root.sub_cust_label_dot': {
            color: '#284ad5',
            fontSize: '20px ',
            lineHeight: '0 ',
            display: 'inline-block',
            position: 'relative',
            bottom: '3px',
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
            color: '##000000DE',
            '& input::placeholder': { color: '#00000099' },
            '& .MuiOutlinedInput-input': {
              padding: '11px 10px',
              lineHeight: 'normal',
            },
            '& 	.MuiOutlinedInput-input, .MuiInputBase-input': {
              fontFamily: 'NotoSansKRRegular',
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
            color: '#f9f9f9',
            backgroundColor: '#F9F9F9',
            borderWidth: '1px',
            borderColor: '#0000003B',
            fontFamily: 'NotoSansKRRagular',
            '& .MuiSvgIcon-root': {
              color: 'black',
            },
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
          color: '#00000099',
          fontFamily: 'NotoSansKRRegular',
          fontSize: '13px',
          '& input::placeholder': {
            color: '#00000099',
            opacity: '1',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '4px',
            borderColor: '#0000001F',
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
          '& .MuiDataGrid-row--lastVisible .MuiDataGrid-cell': {
            borderBottomWidth: '0',
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
        '& .MuiDataGrid-columnHeader.sub_hideCheckboxSortBtn': {
          paddingLeft: '0 !important',
          paddingRight: '0 !important',
          '& .MuiDataGrid-iconButtonContainer': {
            display: 'none !important',
          },
        },
        '& .sub_tbl_header_text_common': {
          color: '#000000DE',
          fontFamily: 'NotoSansKRMedium !important',
          fontSize: '16px !important',
          letterSpacing: '-0.4px !important',
        },

        //This is all outlined select style class
        '& .sub_select_common': {
          color: '#000000DE',
          fontFamily: 'NotoSansKRRegular',
          fontSize: '13px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '4px',
            borderColor: '#0000001F',
          },
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
        '& .sub_btn_secondary_outline_common': {
          color: '#555555 !important',
          fontFamily: 'NotoSansKRMedium !important',
          fontSize: '14px !important',
          borderWidth: '1px',
          borderColor: '#0000001F !important',
          letterSpacing: '0.01px !important',
          backgroundColor: '#fff !important',
        },
        '& .sub_btn_secondary_outline_common:hover': {
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
        '& .sub_card_filter_dropdown': {
          height: '60px',
        },
        '& .sub_card_filter_dropdown.active': {
          height: '226px',
        },
        '& .sub_filter_dropdown_lbl': {
          paddingLeft: '20px',
          width: '120px',
          fontSize: '14px',
          letterSpacing: '-0.35px',
          borderRight: '0 solid red',
        },
        '& .sub_filter_dropdown_chk_outer': {
          width: '120px',
          '& .MuiTypography-root': {
            fontFamily: 'NotoSansKRRegular',
            color: '#000000DE',
            fontSize: '13px',
          },
        },
        '& .sub_listpage_filter_topsection': {
          height: '60px',
          borderBottom: '1px solid #0000001F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '& .sub_listpage_filter_topsection.b-0': {
          borderBottomWidth: '0',
        },
        '& .sub_listpage_filter_topsection_sub': {
          display: 'flex',
          minWidth: '490px',
          width: '33.33%',
          height: '60px',
          alignItems: 'center',
          justifyContent: 'stretch',
          paddingLeft: '20px',
          paddingRight: '10px',
        },
        '& .sub_listpage_filter_topsection_sub.last': {
          justifyContent: 'end',
        },
        '& .sub_listpage_filter_dropdown_row': {
          width: '100%',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          borderTop: '1px solid #0000001F',
        },
        '& .sub_listpage_filter_label': {
          color: '#333333',
          fontFamily: 'NotoSansKRMedium',
          fontSize: '14px',
          letterSpacing: '-0.35px',
          borderRight: '30px solid white',
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
          width: '116px',
          height: '36px',
          marginRight: '8px',
        },
        '& .sub_listpage_filter_list2:last-child': {
          marginRight: '0',
        },
        '& .sub_listpage_filter_list3': {
          width: '175px',
          height: '36px',
          marginRight: '8px',
        },
        '& .sub_listpage_filter_list3:last-child': {
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
          '& .active fieldset': {
            borderColor: '#1976d2',
            borderWidth: '2px',
          },
        },
        '& .MuiButton-root.sub_filter_btn_iconlink': {
          color: '#666',
          width: '90px',
          height: '36px',
          marginRight: '8px !important',
          fontFamily: 'NotoSansKRRegular !important',
        },
        '& .btn_add_icon': {
          marginLeft: '5px',
        },
        '& .sub_btn_filter1': {
          width: '84px',
          height: '36px',
          marginRight: '8px !important',
        },
        '& .sub_btn_filter2': {
          fontFamily: 'NotoSansKRRegular !important',
          width: '84px',
          height: '36px',
          borderRadius: '6px !important',
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
        '& .sub_td_btn_action2': {
          color: '#666',
          minWidth: '38px !important',
          maxWidth: '38px',
          minHeight: '23px',
          maxHeight: '23px',
          borderRadius: '4px !important',
          fontFamily: 'NotoSansKRMedium',
          fontSize: '12px !important',
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
        '& .sub_btn_footer_add': {
          width: '107px',
          height: '30px',
          fontSize: '13px !important',
          padding: '0 !important',
          fontFamily: 'NotoSansKRMedium !important',
          letterSpacing: '-0.33px !important',
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
          fontsize: '13px !important',
          fontFamily: 'NotoSansKRMedium',
          padding: '0 !important',
          letterSpacing: '-0.33px',
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
          width: '100px',
        },
        '& .sub_card_formcontrol_input': {
          width: '360px',
          height: '38px',
          backgroundColor: '#fff',
          '& .MuiOutlinedInput-input': {
            color: '#666 !important',
            fontSize: '13px',
            fontFamily: 'NotoSansKRRegular',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #0000001F !important',
          },
        },
        '& .sub_card_formcontrol_input_long': {
          width: '853px',
        },
        '& .sub_card_formcontrol_input.Mui-disabled': {
          '& .MuiOutlinedInput-notchedOutline': {
            backgroundColor: '#f9f9f9',
            border: '1px dotted #0000001F !important',
          },
        },
        '& .sub_card_formcontrol_input.MuiInputBase-readOnly': {
          '& .MuiInputBase-input': {
            color: '#666 !important',
            zIndex: 1,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            backgroundColor: '#f9f9f9',
            border: '1px dotted #0000001F !important',
            zIndex: 0,
          },
          '&:hover fieldset': {
            borderColor: '#f9f9f9',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#f9f9f9',
          },
        },
        '& .sub_card_formcontrol_list': {
          width: '360px',
          height: '38px',
          backgroundColor: '#fff',
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #0000001F',
          },
          '& .MuiOutlinedInput-input': {
            color: '#666 !important',
            fontSize: '13px',
            fontFamily: 'NotoSansKRRegular',
          },
        },
        '& .sub_card_formcontrol_list.MuiInputBase-readOnly': {
          '& .MuiInputBase-input': {
            color: '#666 !important',
            zIndex: 1,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            backgroundColor: '#f9f9f9',
            border: '1px dotted #0000001F !important',
            zIndex: 0,
          },
          '&:hover fieldset': {
            borderColor: '#0000001F',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#0000001F',
          },
          '& .MuiSvgIcon-root': {
            zIndex: 1,
          },
        },

        '& .sub_card_formcontrol_inputbutton_outer': {
          width: '360px',
          height: '38px',
          '& .sub_card_formcontrol_input': {
            width: '266px',
          },
          '& .sub_card_formcontrol_input_search': {
            width: '279px',
          },
          '& .sub_card_formcontrol_button': {
            width: '84px',
          },
          '& .sub_card_formcontrol_button_reg': {
            width: '71px',
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
          width: '1470px',
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
            color: '#284AD5',
          },
          '& .Mui-disabled': {
            '& .MuiSvgIcon-root': {
              color: '#00000042',
            },
            '& .MuiTypography-root': {
              color: '#000000DE !important',
            },
          },
        },
        '& .MuiButtonBase-root.sub_card_formcontrol_btn_reg': {
          fontSize: '13px',
          lineHeight: '13px',
          fontFamily: 'NotoSansKRRegular',
          color: '#0615B2',
          borderBottom: '1px solid #0615B2',
          paddingLeft: '0',
          paddingRight: '0',
          paddingBottom: '5px',
          borderRadius: '0',
        },
        '& .MuiButtonBase-root.sub_card_formcontrol_btn_reg:hover': {
          backgroundColor: '#fff',
        },
        '& .MuiButtonBase-root.sub_card_formcontrol_button_search': {
          width: '73px',
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
          width: '100%',
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

        '& .sub_td_ostatus': {
          fontSize: '14px',
          fontFamily: 'NotoSansKRMedium',
        },
        '& .sub_td_ostatus.sub_td_ostatus_color1': {
          color: '#284AD5',
        },
        '& .sub_td_ostatus.sub_td_ostatus_color2': {
          color: '#000000DE',
        },
        '& .sub_td_ostatus.sub_td_ostatus_color3': {
          color: '#284ad5',
        },
        '& .sub_td_ostatus.sub_td_ostatus_color4': {
          color: '#E50012',
        },
        '& .sub_td_ostatus.sub_td_ostatus_color5': {
          color: '#999999',
        },

        //
        '& .sub_filter2_left': {
          border: '0 solid #000',
          paddingLeft: '20px',
          width: '1000px',
          height: '60px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
        },
        '& .sub_filter2_right': {
          border: '0 solid #000',
          width: '470px',
          height: '60px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
        },
        '& .sub_filter2_label1': {
          width: '102px',
        },
        '& .sub_filter2_list': {
          width: '180px',
          height: '36px',
        },
        '& .sub_filter2_list2': {
          width: '360px',
          height: '36px',
        },
        '& .sub_filter2_date': {
          '& .MuiInputBase-root': {
            width: '205px',
            height: '36px',
          },
        },
        '& .sub_filter2_btn': {
          width: '68px',
          height: '36px',
          ':focus': {
            color: '#fff !important',
            backgroundColor: '#284AD5 !important',
            borderColor: '#284AD5 !important',
            boxShadow: '0px 3px 3px #0000002E !important',
          },
        },

        '& .sub_dialog_main': {
          '& .MuiPaper-root': {
            margin: '0 auto',
            maxWidth: 'unset',
          },
        },
        '& .sub_dialog_title_outer': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&.MuiTypography-root': {
            height: '56px',
            paddingLeft: '15px',
            paddingRight: '15px',
            borderBottom: '1px solid #E0E0E0',
          },
        },
        '& .sub_dialog_icon_close': {
          '&.MuiSvgIcon-root': {
            color: '#000',
          },
        },
        '& .MuiDialogContent-root.sub_dialog_content_outer': {
          border: '0 solid #000',
          width: '100%',
          padding: '10px 30px 0 30px !important',
        },
        '& .sub_dialog_input_outer': {
          marginBottom: '13px',
        },
        '& .MuiFormLabel-root.sub_dialog_formLabel': {
          fontSize: '14px',
          color: '#333',
          fontFamily: 'NotoSansKRMedium',
          lineHeight: '14px',
          letterSpacing: '-0.35px',
          marginTop: '20px',
          marginBottom: '10px',
        },
        '& .sub_card_dialog_input': {
          width: '360px',
          height: '42px',
          backgroundColor: '#fff',
          '& .MuiOutlinedInput-input': {
            color: '#666 !important',
            fontSize: '14px',
            fontFamily: 'NotoSansKRRegular',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #0000001F',
          },
          '& .MuiTextField-root': { height: '42px' },
          '& input': {
            height: '42px',
            paddingTop: '0px',
            paddingBottom: '0px',
            color: '#666 !important',
            fontSize: '14px',
            fontFamily: 'NotoSansKRRegular',
          },
        },
        '& .sub_card_dialog_input.Mui-disabled': {
          '& .MuiOutlinedInput-notchedOutline': {
            backgroundColor: '#f9f9f9',
            border: '1px dashed #0000001F !important',
          },
        },
        '& .sub_card_dialog_input.MuiInputBase-readOnly': {
          '& .MuiInputBase-input': {
            color: '#666 !important',
            zIndex: 1,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            backgroundColor: '#f9f9f9',
            border: '1px dashed #0000001F !important',
            zIndex: 0,
          },
          '&:hover fieldset': {
            borderColor: '#f9f9f9',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#f9f9f9',
          },
        },
        '& .sub_dialog_list': {
          width: '100%',
          height: '42px',
          backgroundColor: '#fff',
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #0000001F',
          },
          '& .MuiOutlinedInput-input': {
            color: '#666 !important',
            fontSize: '14px',
            fontFamily: 'NotoSansKRRegular',
          },
        },
        '& .sub_dialog_list.MuiInputBase-readOnly': {
          '& .MuiInputBase-input': {
            color: '#666 !important',
            zIndex: 1,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            backgroundColor: '#f9f9f9',
            border: '1px dashed #0000001F !important',
            zIndex: 0,
          },
          '&:hover fieldset': {
            borderColor: '#0000001F',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#0000001F',
          },
          '& .MuiSvgIcon-root': {
            zIndex: 1,
          },
        },
        '& .sub_dialog_footer': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '70px',
          borderTop: '1px solid #E0E0E0',
          //marginTop: '30px',
        },
        '& .sub_tbl_dialog_common': {
          boxShadow: 'unset !important',
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
          '& .MuiDataGrid-row--lastVisible .MuiDataGrid-cell': {
            borderBottomWidth: '0',
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
          '& .MuiDataGrid-cellContent': {
            color: '#000000DE',
            fontFamily: 'NotoSansKRRegular !important',
            fontSize: '14px !important',
          },
        },
        '& .sub_dialog_button_blue': {
          width: '57px',
          height: '36px',
        },

        //
        '& .MuiPaper-root.sub_dialog_card_orderinfo1': {
          width: '940px !important',
          height: '239px !important',
          boxShadow: 'none',
          border: '1px solid #ccc',
          marginTop: '29px',
          marginLeft: '30px',
          '& .sub_dialog_card_orderinfo_header': {
            width: '940px !important',
            height: '46px',
            borderBottom: '1px solid #ccc',
          },
          '& .sub_dialog_card_orderinfo1_content': {
            width: '940px !important',
            height: '196px',
          },
          '& .sub_dialog_card_orderinfo1_content.MuiCardContent-root': {
            padding: '8px 0',
          },
        },
        '& .MuiPaper-root.sub_dialog_card_orderinfo2': {
          width: '940px !important',
          height: '226px !important',
          boxShadow: 'none',
          border: '1px solid #ccc',
          marginTop: '15px',

          marginLeft: '30px',
          '& .sub_dialog_card_orderinfo_header': {
            width: '940px !important',
            height: '46px',
            borderBottom: '1px solid #ccc',
          },
          '& .sub_dialog_card_orderinfo2_content': {
            width: '940px !important',
            height: '180px',
          },
          '& .sub_dialog_card_orderinfo2_content.MuiCardContent-root': {
            padding: '0',
          },
        },
        '& .MuiPaper-root.sub_dialog_card_orderinfo3': {
          width: '940px !important',
          height: '126px !important',
          boxShadow: 'none',
          border: '1px solid #ccc',
          marginTop: '15px',
          marginLeft: '30px',
          '& .sub_dialog_card_orderinfo_header': {
            width: '940px !important',
            height: '46px',
            borderBottom: '1px solid #ccc',
          },
          '& .sub_dialog_card_orderinfo3_content': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '940px',
            height: '98px',
          },
          '& .sub_dialog_card_orderinfo3_content.MuiCardContent-root': {
            alignItems: 'center',
            justyfyContent: 'center',
          },
        },
        '& .sub_dialog_card_orderinfo_outer_common': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '38px',
          padding: '0 10px 0 20px',
        },
        '& .sub_dialog_card_orderinfo_label': {
          color: '#333 !important',
          fontSize: '14px',
          fontFamily: 'NotoSansKRMedium',
          letterSpacing: '-0.33px',
          width: '100px',
        },
        '& .sub_dialog_card_orderinfo_input': {
          width: '324px',
          height: '38px',
          backgroundColor: '#fff',
          '& .MuiOutlinedInput-input': {
            color: '#666 !important',
            fontSize: '13px',
            fontFamily: 'NotoSansKRRegular',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #0000001F',
          },
        },
        '& .sub_dialog_card_orderinfo_input.MuiInputBase-readOnly': {
          '& .MuiInputBase-input': {
            color: '#666 !important',
            zIndex: 1,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            backgroundColor: '#f9f9f9',
            border: '1px dashed #0000001F !important',
            zIndex: 0,
          },
          '&:hover fieldset': {
            borderColor: '#f9f9f9',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#f9f9f9',
          },
        },
        '& .MuiDataGrid-root.sub_dialog_card_tbl': {
          border: 'none',
          '& .MuiDataGrid-cell': {
            color: '#000000DE',
            fontSize: '13px',
            fontFamily: 'NotoSansKRRegular',
          },
        },
        '& .color_primary_common': {
          color: '#284AD5',
        },
        '& .MuiInputBase-root.sub_card_dialog_textarea': {
          padding: '10px',
          width: '831px',
          height: '60px',
          alignItems: 'start',
        },
        '& .sub_card_dialog_textarea_btn': {
          width: '80px',
          height: '60px',
        },
        '& .MuiPaper-root.sub_sidebar_box_card': {
          boxShadow: '0px 1px 5px #0000002E',
          borderRadius: '6px',
          color: '#000000DE',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          width: '350px',
        },
        '& .MuiCardContent-root.sub_sidebar_cardContent_list': {
          paddingTop: '12px',
          '& ul': {
            margin: 0,
            padding: 0,
            listStyleType: 'none',
            '& li > .MuiBox-root': {
              height: '44px',
            },
          },
        },
        '& .btn_usrgrp_1': {
          width: '84px',
          height: '36px',
        },
        '& .btn_usrgrp_2': {
          width: '84px',
          height: '36px',
        },
        '& .sub_arrow': {
          color: 'black !important',
        },
      },
    },
  },
});

export default css;
