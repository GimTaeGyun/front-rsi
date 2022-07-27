import React from 'react';
import {Box,Button,OutlinedInput} from "@mui/material";
import DataTable from "./Datatable";

const AddGroup = ()=>{
    return (
        <Box sx={styles.popup_outer}>
            <Box sx={styles.popup_header}>
                <Box component="h3" sx={styles.popup_title}>운영자 그룹 추가</Box>
                <Box component="img" src="/assets/images/popup_close.png" sx={styles.close_btn}></Box>
            </Box>
            <Box sx={styles.popup_content}>
                <Box component="div" sx={styles.inputfield_outer}>
                    <Box sx={styles.input_label}>그룹명<Box component="span" sx={styles.req_field}></Box></Box>
                    <Box sx={{display:"flex",width:"100%",height:"42px",alignItems:"center",justifyContent:"space-between"}}>
                        <Box component="span" sx={{width:"348px","border":"0 solid #000"}}>
                            <OutlinedInput fullWidth id="group-name" placeholder="생성할 그룹명을 입력해 주세요." sx={styles.inputfield} />
                        </Box>
                        <Box component="span" sx={{display:"inline-block"}}>
                            <Button color="primary" variant="contained" sx={styles.btn_check}>중복확인</Button>
                        </Box>
                    </Box>
                </Box>
                <Box component="div" sx={styles.inputfield_outer}>
                    <Box sx={styles.input_label}>그룹 설명</Box>
                    <Box component="div" sx={{display:"flex",width:"100%",height:"42px",alignItems:"center",justifyContent:"space-between"}}>
                        <Box component="span" sx={{width:"100%","border":"0 solid #000"}}>
                            <OutlinedInput fullWidth id="group-desc" placeholder="그룹설명을 입력해 주세요." sx={styles.inputfield} />
                        </Box>
                    </Box>
                </Box>
                <Box component="div" sx={styles.inputfield_outer}>
                    <Box sx={styles.input_label}>그룹 역할 설정<Box component="span" sx={styles.req_field}></Box></Box>
                    <Box component="div" sx={{position:"relative"}}>
                        <DataTable />
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.popup_footer}>
                <Button sx={styles.btn_close}>취소</Button>
                <Button color="primary" variant="contained" sx={styles.btn_submit}>저장</Button>
            </Box>
        </Box>
    );
}

const styles = {
    req_field:{
        ml:"5px",
        display:"inline-block",
        backgroundImage:"url(/assets/images/req_field.png)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"auto",
        backgroundPosition:"left top",

        width:"14px",
        height:"12px"
    },
    inputfield_outer:{
        mb:"13px"
    },
    inputfield:{
        fontFamily:"NotoSansKRRegular",
        fontSize:"14px",
        width:"100%",
        height:"42px",
        "& input::placeholder":{
            color: "#00000099",
            opacity:"1"
        },
        "& .MuiOutlinedInput-root": {
            height:"45px",m:"0",p:"0",
            "& input": {
                m:"0",
                height:"45px",
            },
            "& fieldset": {
                height:"45px"
            }
        }
    },
    input_outer:{
        display:"inline-block"
    },
    btn_check:{
        px:"0",
        color: "#fff",
        width:"82px",
        height:"42px",
        borderColor: "#284AD5",
        backgroundColor:"#284AD5",
        boxShadow:"none",
        ":hover":{
            borderColor:"#0615B2",
            backgroundColor:"#0615B2",
            boxShadow:"none"
        }
    },
    input_label:{
        mb:"7px",color: "#333",fontSize:"14px",fontFamily:"NotoSansKRMedium",letterSpacing:"-0.35px",
    },
    btn_submit:{
        color: "#fff",
        width:"57px",
        height:"36px",
        borderColor: "#284AD5",
        backgroundColor:"#284AD5",
        boxShadow:"none",
        ":hover":{
            borderColor:"#0615B2",
            backgroundColor:"#0615B2",
            boxShadow:"none"
        }
    },
    btn_close:{
        color:"#284AD5",
        ":hover":{
            color:"#0615B2",
            backgroundColor:"unset"
        }
    },
    popup_outer:{display:"block",m:"0 auto",width:"500px",height:"660px",border:"1px solid #000"},
    popup_header:{
        p:"0 15px",
        display:"flex",alignItems:"center",justifyContent:"space-between",
        width:"100%",height:"56px",
        borderBottom:"1px solid #eee"
    },
    close_btn:{width:"24px",height:"24px"},
    popup_title:{
        fontSize:"16px",fontColor:"#000000DE",fontFamily:"NotoSansKRMedium"
    },
    popup_content:{width:"100%",height:"534px",px:"30px",pt:"30px"},
    popup_footer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        widwidth:"100%",height:"70px",borderTop:"1px solid #eee"
    },
};

export default AddGroup;