import React from 'react';
import {
    Box,Card,Button,CardContent,CardActions,TextField,FormGroup,FormControlLabel,Checkbox,Alert
  } from "@mui/material";
  
const AdminLogin = () => {

    return (
        <Box sx={styles.main_wrapper}>
            <Box sx={styles.login_wrapper}>
                <Box component="img" src="/assets/images/logo_bfly_adminlogin.png" sx={styles.admin_logo}></Box>
                <Card sx={styles.login_content_outer}>
                    <CardContent sx={{m:"0",p:"0"}}>
                        <Box component="h2" sx={styles.login_heading}>ADMIN <Box component="span" sx={styles.subtext}>LOGIN</Box></Box>
                        <TextField id="username" label="아이디" variant="outlined" sx={styles.input_field}
                         />
                        <TextField id="password" label="비밀번호" type="password" variant="outlined" sx={styles.input_field} />
                        <FormGroup sx={styles.checkboxouter}>
                            <FormControlLabel control={<Checkbox size="small" sx={styles.checkbox} />} label="아이디 저장" sx={styles.checkboxlabel} />
                        </FormGroup>
                        
                    </CardContent>
                    <CardActions sx={styles.loginbutton_outer}>
                        <Alert severity="error" icon={false} sx={styles.alert_error}>아이디 또는 비밀번호를 확인해 주세요.</Alert>
                        <Button sx={styles.loginbutton}>로그인</Button>
                    </CardActions>
                </Card>
                <Box component="div" sx={styles.footer_text}>ⓒ Bflysoft Corp.</Box>
            </Box>
        </Box>
    );
}

const styles = {
    alert_error:{
        display:"none",
        mb:"12px",
        backgroundColor:"#f9f9f9",
        width:"100%",
        fontSize:"15p",
        color:"#F44336", 
        border:"none", 
        borderRadius:"0",
        "&.MuiAlert-message":{
            overflow:"hidden"
        }
    },
    loginbutton_outer:{
        p:"0",
        mt:"19px",
        "flexDirection":"column"
    },
    loginbutton:{
        display:"block",
        width:"100%",
        height:"60px",
        color:"#fff",
        backgroundColor:"#284AD5",
        fontSize:"16px",
        fontFamily:"NotoSansKRMedium",
        ":hover":{
            backgroundColor:"#0615B2"
        }
    },
    checkbox:{
        ":hover":{
            backgroundColor:"unset"
        },
        '&.Mui-checked': {
            color: "#284AD5",
        }
    },
    checkboxouter:{
        "& .MuiFormControlLabel-root":{
            m:"0",
            mb:"0",
            mt:"4px"},
            "& .MuiCheckbox-root":
            {py:"0"
        }
    },
    checkboxlabel:{
        "& .MuiTypography-root":{
            fontFamily:"NotoSansKRRegular",
            fontSize:"15px",
            color:"#000000DE"
        },
        ":hover":{
            backgroundColor:"unset"
        } 
    },
    input_field:{
        borderRadius:"4px",
        border:"0000001F",
        width:"100%",
        height:"60px",
        mb:"9px",
        "& label": {
            "&.Mui-focused": {
                color: "#284AD5"
            },
            "&.Mui-error": {
                color: "#F44336"
            }
        },
        "& .MuiOutlinedInput-root.Mui-focused fieldset":{
            borderColor: "#284AD5",
        },
        "& .MuiOutlinedInput-root.Mui-error fieldset":{
            borderColor: "#F44336",
            color: "#F44336"
        }
    },
    login_content_outer:{ 
        px:"30px",
        mx:"0",
        pb:"30px",
        width:"100%",
        minheight:"365px",
        borderRadius:"6px",
        boxShadow:"0px 1px 5px #0000001F" 
    },
    login_heading:{
        display:"block",
        color:"#000000DE",
        textAlign:"center",
        fontFamily:"NotoSansKRBold",
        fontSize:"20px",
        lineHeight:"20px",
        mt:"40px",
        mb:"30px",
    },
    subtext:{
        color:"#888888DE",
        fontFamily:"inherit",
        fontSize:"inherit",
    },
    admin_logo:{
        display:"block",
        margin:"0 auto 20px auto",
    },
    login_wrapper:{
        display:"flex",
        flexDirection: 'column',
        justifyContent: "center",
        margin:"0 auto",
        alignItems:"center",
        border:"0 solid black",
        width:"386px",
        height:"100%",
    },
    main_wrapper:{
        position:"absolute",
        width:"100%",height:"100%",
        backgroundColor:"#F2F3F6",
        backgroundImage:"url(/assets/images/admin_bkg.png)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"100%",
        backgroundPositionX:"center",
        backgroundPositionY:"-50px"
    },
    footer_text:{
        fontFamily:"NotoSansKRRegular",
        fontSize:"14px",
        color:"#555",
        marginTop:"30px"
    }
}
export default AdminLogin;