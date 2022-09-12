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
        'input::-ms-reveal, input::-ms-clear': { display: 'none' },
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#00000061',
          borderRadius: '6px',
        },
        ':root': {
          '& .mt-25': { marginTop: '25px !important' },
          '& .d_flex': { display: 'flex' },
          '& .align-items-center': { alignItems: 'center' },
          '& .justify-content-between': { justifyContent: 'space-between' },
          '& .MuiPaper-root': { boxShadow: '0px 3px 3px #0000002E' },
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
            backgroundColor: '#fff',
          },

          '& .sub_button_white_none': {
            padding: '5px 10px ',
            lineHeight: 'normal ',
            color: '#284AD5',
            borderColor: '#F9F9F9',
            borderRadius: '6px',
            backgroundColor: '#fff',
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
              fontFamily: 'NotoSansKRRegular',
              '& fieldset': {
                fontFamily: 'NotoSansKRRegular',
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
            '& 	.MuiOutlinedInput-input, .MuiInputBase-input': {
              fontFamily: 'NotoSansKRRegular',
              fontSize: '14px',
            },
          },

          '& .sub_formText_dataGrid': {
            maxHeight: '28px !important',
            color: '##000000DE',
            '& input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button':
              {
                display: 'none',
              },
            '& input::placeholder': { color: '#00000099' },
            '& .MuiOutlinedInput-input': {
              padding: '11px 10px',
              lineHeight: 'normal',
              fontFamily: 'NotoSansKRRegular',
            },
            '& 	.MuiOutlinedInput-input, .MuiInputBase-input': {
              fontFamily: 'NotoSansKRRegular',
              fontSize: '14px',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                fontFamily: 'NotoSansKRRegular',
                borderColor: '#0000001F',
                borderWidth: '1px',
              },

              height: '28px',
            },
          },

          '& .sub_select_form_disable': {
            height: '42px',
            marginTop: '10px',
            fontSize: '14px',
            border: 'dashed',
            color: '#666666',
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
            fontFamily: 'NotoSansKRRagular !important',
            fontSize: '14px',
            fontWeight: '550',
            '&.MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#0000001F',
                borderWidth: '1px',

                fontFamily: 'NotoSansKRRagular !important',
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

        '& .sub_select_forms': {
          height: '28px',
          fontFamily: 'NotoSansKRRagular !important',
          fontSize: '14px',
          fontWeight: '550',
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

        //This is all cards style class
        '& .sub_card_common': {
          boxShadow: '0px 1px 5px #0000002E !important',
          backgroundColor: '#fff !important',
          borderRadius: '6px !important',
        },

        //This is all outlined input style class
        '& .sub_input_common': {
          color: '#00000099 !important',
          fontFamily: 'NotoSansKRRegular !important',
          fontSize: '13px !important',
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
          '& .MuiDataGrid-columnHeader:last-child .MuiDataGrid-columnSeparator':
            {
              display: 'none',
            },
          '& .MuiCheckbox-root.Mui-checked': {
            color: '#284AD5 !important',
          },
          '& .MuiDataGrid-row.Mui-selected:hover': {
            backgroundColor: '#fff !important',
          },
          '& .MuiDataGrid-row:hover': {
            backgroundColor: 'f4f5f7 !important',
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
          fontFamily: 'NotoSansKRRegular !important',
          fontSize: '13px !important',

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
          minWidth: '981px',
          width: '100%',
        },
        '& .sub_listpage_filter_topsection_sub': {
          display: 'flex',
          width: '33.33%',
          minWidth: '490px',
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
          border: 'none',
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
        },
        '& .MuiButton-root.sub_filter_btn_iconlink': {
          color: '#666',
          width: '90px',
          height: '36px',
          marginRight: '8px !important',
          fontFamily: 'NotoSansKRRegular !important',
        },
        '& .btn_add_icon': {
          marginLeft: '2px',
        },
        '& .sub_btn_filter1': {
          width: '84px',
          height: '36px',
          marginRight: '8px !important',
        },
        '& .sub_btn_filter2': {
          fontFamily: 'NotoSansKRRegular !important',
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
          width: '70px',
          height: '30px',
          fontSize: '13px !important',
          padding: '0 !important',
          fontFamily: 'NotoSansKRMedium !important',
          letterSpacing: '-0.33px !important',
          marginLeft: '8px !important',
          '&.disabled': {
            color: '#00000042 !important',
            backgroundColor: '#0000001F !important',
            fontFamily: 'NotoSansKRMedium !important',
            fontSize: '14px !important',
            border: '0 !important',
            letterSpacing: '0.01px !important',
            boxShadow: '0px 3px 3px #0000002E !important',
          },
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
          padding: '10px 30px 10px 30px !important',
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
          height: 'fit-content',
          minHeight: '42px',
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
          minHeight: '70px',
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
            fontSize: '13px !important',
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
          minHeight: '126px !important',
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
            height: '80px',
            padding: '9px',
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
        '& li.sub_menuitem_little': {
          fontFamily: 'NotoSansKRRegular',
          fontSize: '13px',
          lineHeight: '24px',
          letterSpacing: '-0.33px',
          color: '#000000DE',
          '&:first-of-type': {
            marginTop: '8px !important',
          },
          '&:last-child': {
            marginBottom: '8px !important',
          },
        },
        '& li.sub_menuitem_little_start': {
          fontFamily: 'NotoSansKRRegular',
          fontSize: '13px',
          lineHeight: '24px',
          letterSpacing: '-0.33px',
          color: '#000000DE',
          marginTop: '8px',
        },
        '& li.sub_menuitem_little_end': {
          fontFamily: 'NotoSansKRRegular',
          fontSize: '13px',
          lineHeight: '24px',
          letterSpacing: '-0.33px',
          color: '#000000DE',
          marginBottom: '8px',
        },
        '& .sub_select_paper_little': {
          maxHeight: '186px !important',
        },
        '& .sub_select_paper_little1': {
          maxHeight: '254px !important',
        },
        '& .sub_row_hover': {
          '&.MuiDataGrid-root': {
            ':hover': {
              backgroundColor: 'black',
            },
          },
        },
        '& .sub_items_filter_card': {
          minWidth: '1090px',
          width: '100%',
          '& .sub_items_filter_header': {
            width: '1090px',
            height: '56px',
          },
          '& .sub_items_filter_header .MuiTypography-root': {
            fontFamily: 'NotoSansKRMedium',
            fontSize: '16px',
            color: '#000000DE',
            letterSpacing: '-0.4px',
          },
          '& .sub_items_filter_content': {
            padding: '0',
          },
          '& .sub_items_filter_row': {
            width: '100%',
            height: '56px',
            display: 'flex !important',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #eee',
            paddingRight: '10px',
            position: 'relative',
          },
          '& .sub_items_filter_label': {
            marginLeft: '20px',
            width: '97px',
            letterSpacing: '-0.33px',
          },
          '& .sub_items_filter_input': {
            width: '415px',
            height: '36px',
            '@media (min-width: 1921px)': {
              width: '80%',
            },
          },
          '& .sub_items_filter_error': {
            position: 'absolute',
            right: '35px',
            top: '15px',
          },
          '& .sub_items_filter_list': {
            width: '415px',
            height: '36px',
            '@media (min-width: 1921px)': {
              width: '80%',
            },
          },
          '& .sub_items_filter_footer': {
            width: '100%',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '& .sub_items_filter_textarea': {
            height: '104px',
            borderBottom: '1px solid #eee',
          },
          '& .sub_items_filter_textarea_input': {
            width: '970px',
            height: '93px',
            '& .MuiInputBase-input': {
              lineHeight: '24px',
            },
            '@media (min-width: 1921px)': {
              width: '90%',
            },
          },
        },
        '& .sub_listpage_filter_dropdown_section': {
          display: 'none',
          width: '1110px',
          position: 'absolute',
          backgroundColor: '#fff !important',
          borderRadius: '0 0 6px 6px !important',
          boxShadow: '0px 1px 5px #0000002E !important',
          zIndex: '999',
          border: 'none',
          '&.active': {
            display: 'block',
          },
          '& .sub_listpage_divider': {
            borderColor: '#e0e0e0',
          },
          '@media (min-width: 1921px)': {
            maxWidth: '1750px',
            width: '100%',
          },
          '&.full-length': {
            '@media (min-width: 1921px)': {
              maxWidth: '2130px',
              width: '100%',
            },
          },
        },
        '& .sub_items_filter2_card': {
          position: 'relative',
          width: '100%',
          minWidth: '1090px',
          height: '56px',
          boxShadow: '0px 1px 5px #0000002E !important',
          '&.active': {
            borderRadius: '4px 4px 0 0',
          },
          '& .sub_items_filter2_container': {
            position: 'relative',
            padding: '0',
          },
          '& .sub_items_filter2_content': {
            width: '100%',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 !important',
            '& .sub_items_filter2_left': {
              display: 'flex',
              alignItems: 'center',
              width: '50%',
              height: '56px',
              border: '0 solid #000',
              '& .sub_items_filter_label': {
                letterSpacing: '-0.33px',
                marginLeft: '20px',
                width: '97px',
              },
              '& .sub_items_filter_list1': {
                width: '120px',
                height: '36px',
              },
            },
            '& .sub_items_filter2_right': {
              width: '50%',
              height: '56px',
              border: '0 solid #000',
              paddingRight: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
            },
            '& .sub_items_filter_search': {
              width: '230px',
              height: '36px',
              marginLeft: '8px',
            },
            '& .sub_items_btn_init': {
              width: '84px',
              height: '36px',
              marginRight: '8px',
            },
            '& .sub_items_btn_search': {
              width: '84px',
              height: '36px',
            },
            '& .sub_items_btn_dropdown': {
              border: '0 solid #000',
              color: '#666',
              fontSize: '14px ',
              fontFamily: 'NotoSansKRRegular',
              letterSpacing: '-0.35px',
              paddingRight: '0',
              marginRight: '8px',
            },
          },
        },
        '& .sub_sidebar_footer': {
          width: '100%',
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '& .rc-tree-title': {
          fontSize: '13px ',
          fontFamily: 'NotoSansKRMedium',
        },
        '& .sub_rc_parentNode .rc-tree-title': {
          color: '#000000DE',
          padding: '0 3px',
        },
        '& .sub_rc_childNode .rc-tree-title': {
          color: '#999',
        },
        '& .unactive .rc-tree-title': {
          color: '#999999',
        },
        '& .rc-tree .rc-tree-treenode span.rc-tree-iconEle.rc-tree-icon__close':
          {
            display: 'none',
          },
        '& .rc-tree .rc-tree-treenode span.rc-tree-iconEle.rc-tree-icon__open':
          {
            display: 'none',
          },
        '& .rc-tree .rc-tree-treenode span.rc-tree-iconEle.rc-tree-icon__docu':
          {
            display: 'none',
          },
        '& .rc-tree .rc-tree-treenode span.rc-tree-switcher.rc-tree-switcher_open':
          {
            width: '24px',
            height: '24px',
            backgroundImage: 'url(/icon_parent.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          },
        '& .rc-tree .rc-tree-treenode span.rc-tree-switcher.rc-tree-switcher_close':
          {
            width: '24px',
            height: '24px',
            backgroundImage: 'url(/icon_more.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          },
        '& .rc-tree.rc-tree-show-line .rc-tree-treenode:not(:last-child) > .rc-tree-switcher-noop':
          {
            backgroundPosition: 'center',
          },
        '& .rc-tree.rc-tree-show-line .rc-tree-treenode:last-child > .rc-tree-switcher-noop':
          {
            backgroundPosition: 'center',
          },
        '& .rc-tree .rc-tree-treenode span.rc-tree-switcher.rc-tree-switcher-noop':
          {
            width: '24px',
            height: '24px',
            backgroundImage: 'url(/icon_more_disabled.png)',
            backgroundRepeat: 'no-repeat',
          },
        '& .rc-tree-node-selected': {
          backgroundColor: '#284AD51F !important',
          boxShadow: 'unset',
          opacity: '1',
        },
        '& .rc-tree .rc-tree-treenode': {
          display: 'flex',
          alignItems: 'center',
          lineHeight: '22px',
        },
        '& .rc-tree .rc-tree-treenode .rc-tree-node-content-wrapper': {
          height: '24px',
          backgroundColor: '#fff',
          border: 'none !important',
          textDecoration: 'none',
          paddingLeft: '5px',
          paddingRight: '5px',
        },
        '& .rc-tree-checkbox': {
          width: '16px !important',
          height: '16px !important',
          backgroundImage: 'url(/checkbox_unchecked.png) !important',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
        },
        '& .rc-tree-checkbox.rc-tree-checkbox-checked': {
          backgroundImage: 'url(/checkbox_checked.png) !important',
          backgroundPosition: 'center !important',
        },
        '& .rc-tree-checkbox-indeterminate': {
          backgroundImage: 'url(/checkbox_indeterminate.png) !important',
          backgroundPosition: 'center !important',
        },
        //드래그 시작시 css
        '& .rc-tree .rc-tree-treenode.dragging': {},

        '& .rc-tree .rc-tree-treenode.drop-target': {
          backgroundColor: '#fff',
          textDecoration: 'none',
          border: '0 !important',
          '& span div:last-child': { display: 'none' },
        },

        '& .rc-tree .re-tree-treenode.dragg-over': {
          textDecoration: 'none',
          border: '0 !important',
        },

        '& .rc-tree .re-tree-treenode.drag-over-gab-top > .draggable': {
          borderColor: 'whilte',
        },

        '& .rc-tree .rc-tree-treenode.drop-container ~ .rc-tree-treenode': {
          border: '0 !important',
        },

        '& .sub_sideBarInput': {
          minHeight: '24px !important',
          width: '90%',
          color: '##000000DE',
          backgroundColor: '#284AD52E ',
          justifyContent: 'center',
          '& input::placeholder': {
            color: '#00000099',
            fontSize: '12px',
            textAligh: 'left',
            position: 'relative',
            top: '-2px',
            left: '4px',
          },
          '.Mui-disabled': {
            position: 'relative',
            padding: '0',
            zIndex: '10',
            height: '20px',
            '& .MuiOutlinedInput-notchedOutline': {
              height: '21px',
              backgroundColor: '#fff',
              border: '1px dashed #0000001F !important',
              margin: '2px !important',
              borderRadius: '2px',
            },
          },
        },
        '& .btn_gnb_manage': {
          width: '101px',
          height: '30px',
          color: '#00000042 !important',
          borderColor: '#00000042 !important',
          fontSize: '13px !important',
          padding: '0 !important',
        },
        '& .sub_filter_switch .MuiTypography-root': {
          fontSize: '13px !important',
          letterSpacing: '-0.33px',
          fontFamily: 'NotoSansKRRegular',
        },
        '& .sub_filter_switch .MuiSwitch-root': {
          paddingRight: '7px',
        },

        '& .sub_divider_1px': {
          height: '1px',
        },
        '& .sub_multitable_container': {
          width: '100%',
          height: '450px',
          border: '1px solid #0000001F',
          position: 'relative',
          '& .MuiGrid-root': {
            borderRight: '1px solid #0000001F',
          },
          '& .MuiGrid-root:last-child': {
            borderRight: 'unset',
            position: 'relative',
          },
          '& .sub_multitable_title': {
            display: 'flex',
            alignItems: 'center',
            height: '34px',
            padding: '0 10px',
            borderBottom: '1px solid #0000001F',
            '& .sub_multitable_header': {
              color: '#000000DE',
              fontSize: '13px',
              lineHeight: '13px',
              fontFamily: 'NotoSansKRMedium',
              paddingLeft: '8px',
              borderLeft: '3px solid #284AD5',
              '& .sub_multitable_headerinfo': {
                color: '#888888',
                fontFamily: 'NotoSansKRRegular',
              },
            },
          },
          '& .sub_multitable_list': {
            '& .MuiListItem-root': {
              height: '35px',
              width: '100%',
              borderBottom: '1px solid #0000001F',
              paddingLeft: '10px',
              '& .MuiListItemText-root .MuiTypography-root': {
                color: '#000000DE',
                fontSize: '12px',
                fontFamily: 'NotoSansKRRegular',
              },
            },
          },
          '& .sub_multitable_search': {
            width: '100px',
            height: '35px',
            '& fieldset': {
              border: 'unset',
            },
            '& .MuiInputBase-input': {
              paddingLeft: '5px',
            },
          },
          '& .sub_multitable_search_list': {
            position: 'absolute',
            width: '250px',
            height: 'fit-content',
            backgroundColor: '#fff',
            zIndex: '999',
            border: '1px solid #0000001F',
            borderRadius: '0 0 6px 6px',
            '& .MuiListItem-root': {
              width: '100%',
            },
            '& .MuiListItem-root:hover': {
              backgroundColor: '#00000014',
            },
            '& .MuiFormControlLabel-root': {
              margin: '0',
            },
            '& .MuiTypography-root': {
              color: '#000000DE',
              fontSize: '12px',
              fontFamily: 'NotoSansKRRegular',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '190px',
            },
          },
          '& .sub_multitable_selectmedium': {
            color: '#999999',
            fontFamily: 'NotoSansKRRegular',
            fontSize: '14px',
            letterSpacing: '-0.35px',
            textAlign: 'center',
            width: '100%',
            height: '415px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '& .sub_multitable_selectall .MuiTypography-root': {
            color: '#000000DE',
            fontSize: '13px',
            fontFamily: 'NotoSansKRMedium',
            letterSpacing: '-0.33px',
          },
          '& .sub_multitable_lastouter': {
            width: '249px',
            height: '448px',
            backgroundColor: '#F4F5F7',
          },
          '& .sub_multitable_lastinner': {
            width: '244px',
            height: '448px',
            backgroundColor: '#fff',
            marginLeft: '5px',
            borderLeft: '1px solid #0000001F',
          },
          '& .sub_multitable_body': {
            width: '252px',
            overflowY: 'scroll',
            overflowX: 'hidden',
            '& .sub_multitable_summary.level1': {
              paddingLeft: '34px',
            },
            '& .sub_multitable_summary.level2': {
              paddingLeft: '68px',
            },
            '& .sub_multitable_summary.level3': {
              paddingLeft: '103px',
            },
            '& .MuiAccordionSummary-content .MuiFormControlLabel-root': {
              margin: '0',
              padding: '0',
              marginLeft: '0',
              '& .MuiTypography-root': {
                color: '#555',
                fontSize: '12px',
                fontFamily: 'NotoSansKRRegular',
                letterSpacing: '-0.3px',
              },
            },
            '& .MuiAccordion-region > .MuiAccordionDetails-root': {
              marginLeft: '0',
            },
            '& .sub_multitable_checkboxlist': {
              overflow: 'hidden',
              '& .MuiListItem-root': {
                borderBottom: '1px solid #0000001F',
                height: '34px',
              },
              '&.level0': {
                '& .MuiListItem-root': {
                  paddingLeft: '35px !important',
                },
              },
              '&.level1': {
                '& .MuiListItem-root': {
                  paddingLeft: '70px !important',
                },
              },
              '&.level2': {
                '& .MuiListItem-root': {
                  paddingLeft: '105px !important',
                },
              },
              '&.level3': {
                '& .MuiListItem-root': {
                  paddingLeft: '140px !important',
                },
              },
            },
            '& .MuiAccordionDetails-root .MuiFormControlLabel-root': {
              margin: '0',
              padding: '0',
              borderLeft: '1px solid #fff',
              '& .MuiTypography-root': {
                color: '#555',
                fontSize: '12px',
                fontFamily: 'NotoSansKRRegular',
                letterSpacing: '-0.3px',
                padding: '0',
              },
            },
            '& .MuiButtonBase-root MuiCheckbox-root': {
              minWidth: 'unset',
              width: '35px',
              height: '35px',
              justifyContent: 'center',
            },
            '& > .MuiPaper-root': {
              height: 'fit-content',
              width: 'auto',
              boxShadow: 'none',
            },
            '& .MuiAccordionSummary-root': {
              padding: '0',
              minHeight: '35px',
              height: '34px',
              color: '#000000DE',
              fontSize: '12px',
              fontFamily: 'NotoSansKRMedium',
              borderBottom: '1px solid #0000001F',
              overflow: 'hidden',
            },
            '& .MuiAccordionSummary-root.level1 .sub_multitable_summary': {
              paddingLeft: '35px',
            },
            '& .MuiAccordionSummary-expandIconWrapper': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '35px',
              height: '34px',
              textAlign: 'center',
              border: '1px solid #0000001F',
              borderTop: 'unset',
              borderBottom: 'unset',
              transitionDuration: '0s!important',
            },
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              width: '35px',
              height: '34px',
              borderTop: '1px',
              borderBottom: '1px',
            },
            '& .MuiAccordionSummary-content': {
              display: 'flex',
              alignItems: 'center',
              margin: '0',
              /*borderLeft: '1px solid #0000001F',*/
              '& .MuiTypography-root': {
                paddingLeft: '8px',
                lineHeight: '35px',
                color: '#000000DE',
                fontSize: '12px',
                fontFamily: 'NotoSansKRMedium',
                letterSpacing: '-0.3px',
              },
            },
            '& .MuiButtonBase-root-MuiAccordionSummary-root': {},
            '& .MuiAccordionDetails-root': {
              padding: '0',
            },
          },
        },
        '& .sub_reg_subheading': {
          paddingLeft: '8px',
          lineHeight: '15px',
          color: '#000000DE',
          fontSize: '15px',
          fontFamily: 'NotoSansKRMedium',
          letterSpacing: '-0.38px',
          borderLeft: '3px solid #284AD5',
          marginTop: '25px',
          marginBottom: '12px',
        },
        '& .sub_dialg_checkbox_list': {
          width: '100%',
          height: '42px',
          border: '1px solid #0000000F',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          padding: '0 10px',
          '& .MuiFormControlLabel-root': {
            width: '115px',
          },
          '& .MuiTypography-root': {
            color: '#000000DE',
            fontSize: '13px',
            fontFamily: 'NotoSansKRRegular',
          },
        },
        '& .sub_dialog_rctree_outer': {
          width: '100%',
          height: '450px',
          border: '1px solid #0000000F',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '& .sub_dialog_rctree_outer_lft': {
            width: '347px',
            height: '450px',
            borderRight: '1px solid #0000000F',
            padding: '20px',
          },
          '& .sub_dialog_rctree_outer_rgt': {
            width: '574px',
            height: '448px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FCFCFC',
            '& .sub_dialog_rctree_outer_rgt_inner': {
              width: '542px',
              height: '418px',
              backgroundColor: '#fff',
              border: '1px solid #0000001F',
              borderRadius: '3px',
              boxShadow: 'none',
              '& .sub_dialog_header': {
                height: '44px',
                fontSize: '14px',
                borderBottom: '1px solid #0000001F',
              },
              '& .sub_dialog_chk_row_wrapper': {
                width: '100%',
                maxHeight: '330px',
                overflowY: 'scroll',
              },
              '& .sub_dialog_chk_row': {
                width: '100%',
                height: '45px',
                borderBottom: '1px solid #0000001F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                '& .MuiFormControlLabel-root': {
                  margin: '0',
                },
                '& .MuiTypography-root': {
                  fontSize: '13px',
                  fontFamily: 'NotoSansKRRegular',
                  color: '#000000DE',
                },
                '& .MuiButtonBase-root.Mui-checked.Mui-disabled': {
                  color: '#00000042 !important',
                },
              },
            },
          },
        },
        '& .sub_dialog_upload_list': {
          width: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          '& .sub_dialog_upload_area': {
            padding: '0',
            minWidth: '150px',
            maxWidth: '150px',
            width: '150px',
            height: '150px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #0000001F',
            backgroundColor: '#FCFCFC',
            borderRadius: '4px',
          },
          '& .MuiTypography-root': {
            color: '#999',
            fontSize: '13px',
            fontFamily: 'NotoSansKRRegular',
            lineHeight: '20px',
            letterSpacing: '-0.33px',
            textAlign: 'center',
          },
          '& .sub_dialog_btn_upload': {
            width: '89px',
            height: '26px',
            fontSize: '13px !important',
            letterSpacing: '-0.33px !important',
            padding: '0',
            marginTop: '5px',
          },
        },
        '& .sub_dialog_chk_noselected': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '330px',
          fontSize: '14px !important',
          letterSpacing: '-0.35px !important',
          color: '#999',
          fontFamily: 'NotoSansKRRegular',
          lineHeight: '22px',
          textAlign: 'center',
        },
        '& .sub_dialog_checkbox_field': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          '& .MuiButtonBase-root': {
            padding: '0 9px',
          },
          '& .MuiTypography-root': {
            color: '#000000DE',
            fontSize: '13px',
            fontFamily: 'NotoSansKRRegular',
          },
        },
        '& .sub_card_dialog_searchinput': {
          width: '200px',
          height: '30px',
          borderRadius: '4px',
          borderWidth: '0px',
          backgroundColor: '#0000000A',
          backgroundImage: 'url(/icon-search-inputfield.png)',
          backgroundSize: 'auto',
          backgroundPosition: '8px center',
          backgroundRepeat: 'no-repeat',
          '& .MuiInputBase-input': {
            padding: '0 30px',
          },
        },
        '& .sub_table_sqr_small': {
          minWidth: '23px !important',
          width: '23px',
          height: '23px',
          padding: '0 !important',
          margin: '0 4px !important',
        },
        '& .MuiPopover-root .MuiButtonBase-root': {
          fontSize: '13px',
          color: '#000000DE',
          fontFamily: 'NotoSansKRRegular',
        },
        '& .MuiButtonBase-root.Mui-selected': {
          backgroundColor: '#EBEBEB !important',
        },
      },
    },
  },
});

export default css;
