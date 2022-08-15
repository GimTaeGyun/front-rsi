
import {
    Box,
    Button,
    Modal,
    Typography,
    TextField,
    InputLabel,
  } from '@mui/material';
import * as React from 'react';

const ModalResetPassword = (props: {
    title: string;
    open: boolean;
    handleClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <>
        <Modal
            className="mymodal_wrapper"
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box className="mymodal_outer modal_password">
                <Box component="div" className="mymodal_header">
                    <Box component="h3" className="mymodal_title">
                    {props.title}
                    </Box>
                    <Box
                        component="img"
                        src={require('@administrator/subscription/public/assets/images/popup_close.png')}
                        className="mymodal_close_btn"
                        onClick={props.handleClose}
                    ></Box>
                </Box>
                <Box className="mymodal_content">
                <Box component="div" className="mymodal_inputfield_outer">
                    <InputLabel className="sub_formLabel">새 비밀번호</InputLabel>
                    <TextField
                        fullWidth
                        placeholder=""
                        className="mymodal_inputfield"
                        name="description"
                    />
                    </Box>
                </Box>
                <Box className="mymodal_footer" >
                    <Button onClick={handleClose} className="sub_button_white_none">
                    취소
                    </Button>
                    <Button
                    className="sub_btn_primary_fill_common btn_modal_primary_fill"
                    >
                    저장
                    </Button>
                </Box>
            </Box>
        </Modal>
      </>

    );
}
export default ModalResetPassword;