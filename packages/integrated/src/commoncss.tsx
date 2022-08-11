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

        //This is all cards style class
        '& .sub_card_common':{
          boxShadow: "0px 1px 5px #0000002E",
          backgroundColor: "#fff",
          borderRadius: "6px"
        },

        //This is all outlined input style class
        '& .sub_input_common':{
          borderRadius:"4px",
          borderColor:"#0000001F",
          color: "#00000099",
          fontFamily:"NotoSansKRRegular",
          fontSize:"13px",
          '& input::placeholder': {
            color: '#00000099',
            opacity: '1',
          },
          '&.MuiOutlinedInput-root.Mui-focused fieldset': {
            borderWidth:"1px",
            borderColor: '#284AD5'
          }
        },
        '& .sub_input_common:hover':{
          borderColor: '#000000DE'
        },

        //This is all data tables style class
        '& .sub_tbl_outer_common':{
          border:"unset",
          boxShadow: "0px 1px 5px #0000002E",
          backgroundColor: "#fff",
          borderRadius: "6px"
        },
        '& .sub_tbl_th_common':{
          color: "#000000DE",
          fontFamily:"NotoSansKRMedium",
          fontSize:"14px",
          letterSpacing:"-0.35px"
        },

        //This is all outlined select style class
        '& .sub_select_common':{
          borderRadius:"4px",
          borderColor:"#0000001F",
          color: "#000000DE",
          fontFamily:"NotoSansKRRegular",
          fontSize:"13px",
          '&.MuiOutlinedInput-root.Mui-focused fieldset': {
            borderWidth:"1px",
            borderColor: '#284AD5'
          }
        },
        '& .sub_select_common:hover':{
          borderColor: '#000000DE'
        },

        //This is all outlined button style class
        '& .sub_btn_primary_outline_common':{
          color: "#284AD5",
          fontFamily:"NotoSansKRMedium",
          fontSize:"14px",
          borderColor:"#284AD5",
          letterSpacing:"0.01px"
        },
        '& .sub_btn_primary_outline_common:hover':{
          backgroundColor:"#fff"
        },

        //This is all contained/filled button style class
        '& .sub_btn_primary_fill_common':{
          color: "#fff",
          backgroundColor: "#284AD5",
          fontFamily:"NotoSansKRMedium",
          fontSize:"14px",
          borderColor:"#284AD5",
          letterSpacing:"0.01px",
          boxShadow:"0px 3px 3px #0000002E"
        },
        '& .sub_btn_primary_fill_common:hover':{
          backgroundColor: "#284AD5",
          borderColor:"#284AD5",
          boxShadow:"0px 3px 3px #0000002E"
        },

        //Clases specific to search filter section below:
        '& .sub_card_filter':{
          marginBottom:"20px"
        },
        '& .sub_listpage_filter_topsection':{
          height: "60px",
          borderBottom: "1px solid #0000001F",
          display: "flex",
          alignItems: "center",
          justifyContent: "stretch"
        },
        '& .sub_listpage_filter_topsection_sub':{
          display:"flex",minWidth:"490px",width:"33.33%",height: "60px",
          alignItems: "center",justifyContent: "space-between",
          paddingLeft:"20px",paddingRight:"10px"
        },
        '& .sub_listpage_filter_label':{
          color: "#333333",
          fontFamily:"NotoSansKRMedium",
          fontSize:"14px",
          letterSpacing:"-0.35",

        },
        '& .sub_listpage_filter_search':{
          width:"230px",height:"36px"
        },
        '& .sub_listpage_filter_list':{
          width:"104px",height:"36px",marginRight:"8px"
        },
        '& .sub_listpage_filter_list2':{
          width:"116px",height:"36px",marginRight:"8px"
        },
        '& .sub_listpage_filter_list2:last-child':{
          marginRight:"0"
        },
        '& .sub_listpage_filter_btmsection':{
          height: "52px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        '& .sub_listpage_filter_date':{
          width:"175px",height:"36px",
          background:"url(/icon-datetime-calendar.png)",backgroundRepeat:"no-repeat",backgroundPosition:"95%"
        },
        '& .sub_listpage_filter_date:first-child':{
          marginRight:"8px"
        },
        '& .sub_btn_filter1':{
          width:"84px",height:"36px",marginRight:"8px"
        },
        '& .sub_btn_filter2':{
          width:"84px",height:"36px",
        },

        
      },
    },
  },
});

export default css;
