import * as React from 'react';
import {Box,Modal,Button,Typography} from "@mui/material";

const GroupAlert = ()=>{
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box component="div" sx={styles.popup_outer}>
                    <Box component="div" sx={styles.popup_inner}>
                        <Box component="div" sx={styles.popup_message}><Typography component="p" sx={styles.msg}>사용할 수 있는 그룹명 입니다.</Typography></Box>
                        <Box component="div" sx={styles.popup_btn}>
                            <Button color="primary" variant="contained" sx={styles.btn}>확인</Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}

const styles = {
    msg:{
        m:"0",p:"0",
        color:"#000000DE",
        fontSize:"15px",
        lineHeight:"15px",
        fontFamily:"NotoSansKRBold",
        fontWeight:"800",
    },
    btn:{
        minWidth:"46px",width:"46px",height:"30px",
        px:"0",
        color: "#fff",
        borderColor: "#284AD5",
        backgroundColor:"#284AD5",
        boxShadow:"0px 3px 3px #0000002E",
        ":hover":{
            borderColor:"#0615B2",
            backgroundColor:"#0615B2",
            boxShadow:"0px 3px 3px #0000002E"
        }
    },
    popup_inner:{
        width:"450px",
        height:"130px",
        px:"30px",
        display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"
    },
    popup_message:{
        
        width:"100%",
        height:"32px",
        textAlign:"left",
    },
    popup_btn:{
        width:"100%",
        height:"32px",
        textAlign:"right"
    },
    popup_outer:{
        display:"block",
        m:"0 auto",
        width:"450px",
        height:"130px",
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: '#fff',
        border: 'none',
        boxShadow: "0px 1px 5px #0000002E",
        borderRadius:"6px"
    }
};

export default GroupAlert;