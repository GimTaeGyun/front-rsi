import CloseOutlined from '@mui/icons-material/CloseOutlined';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import React, { useEffect } from 'react';

const PwResetPopup = (props: {
  open: boolean;
  saved?: boolean;
  closeCallback?: Function;
  okCallback?: Function;
}) => {
  const [inputText, setInputText] = React.useState('');
  const {
    open,
    saved = false,
    closeCallback = () => {},
    okCallback = () => {},
  } = props;

  useEffect(() => {
    if (!saved) setInputText('');
  }, [open]);
  const handleClose = () => {
    closeCallback(inputText);
  };
  const handleOk = () => {
    okCallback(inputText);
  };

  return (
    <>
      <Modal
        sx={styles.modal}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box component="div" sx={styles.popup_outer}>
          <Box component="div" sx={styles.popup_header}>
            <Box component="div" sx={styles.title}>
              비밀번호 재설정
            </Box>
            <CloseOutlined sx={styles.closeX} onClick={handleClose} />
          </Box>
          <Divider />
          <Box component="div" sx={styles.popup_inner}>
            <Box component="div" sx={styles.popup_message}>
              <Typography component="div" sx={styles.msg}>
                새 비밀번호{' '}
                <Typography className="sub_cust_label_dot">•</Typography>
              </Typography>
              <TextField
                sx={styles.input_text}
                onChange={e => {
                  setInputText(e.target.value);
                }}
              />
            </Box>
          </Box>
          <Divider />
          <Box component="div" sx={styles.popup_btn}>
            <Button variant="text" sx={styles.btnCancel} onClick={handleClose}>
              취소
            </Button>
            <Button
              color="primary"
              variant="contained"
              sx={styles.btnOk}
              onClick={handleOk}
            >
              저장
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const styles = {
  modal: {
    '& .MuiBox-root:focus-visible': {
      outline: 'unset',
      border: '1px solid #0000001F',
    },
  },
  msg: {
    m: '0',
    p: '0',
    color: '#333333',
    marginBottom: '10px',
    fontSize: '14px',
    lineHeight: '25px',
    letterSpacing: '-0.35px',
  },
  btnOk: {
    minWidth: '57px',
    width: '57px',
    height: '36px',
    px: '0',
    color: '#fff',
    marginRight: '10px',
    borderColor: '#284AD5',
    backgroundColor: '#284AD5',
    boxShadow: '0px 3px 3px #0000002E',
    fontFamily: 'NotoSansKRRegular',
    fontSize: '14px',
    ':hover': {
      borderColor: '#0615B2',
      backgroundColor: '#0615B2',
      boxShadow: '0px 3px 3px #0000002E',
    },
  },
  btnCancel: {
    minWidth: '41px',
    width: '41px',
    height: '36px',
    px: '0',
    color: '#284ad5',
    marginRight: '10px',
    fontFamily: 'NotoSansKRMedium',
    fontSize: '14px',
    borderColor: 'var(--unnamed-color-284ad5)',
    backgroundColor: 'var(--unnamed-color-284ad5)',
  },
  popup_header: {
    width: '100%',
    height: '56px',
  },
  popup_inner: {
    width: '450px',
    height: '130px',
    px: '30px',
    display: 'flex',
    paddingTop: '30px',
    flexDirection: 'column',
  },
  popup_message: {
    width: '100%',
    height: '20px',
    textAlign: 'left',
  },
  popup_btn: {
    width: '100%',
    height: '50px',
    textAlign: 'center',
    marginTop: '17px',
  },
  popup_outer: {
    display: 'block',
    m: '0 auto',
    width: '500px',
    height: '257px',
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#fff',
    border: 'none',
    boxShadow: '0px 1px 5px #0000002E',
    borderRadius: '6px',
  },
  title: {
    display: 'inline-block',
    width: '136px',
    height: '56px',
    padding: '16px',
    fontSize: '16px',
    fontFamily: 'NotoSansKRMedium',
    letterSpacing: '-0.4px',
    lineHeight: '20px',
    color: '#000000DE',
  },
  closeX: {
    width: '24px',
    height: '24px',
    top: '16px',
    float: 'right',
    marginRight: '21px',
    marginTop: '16px',
  },
  input_text: {
    width: '440px',
    height: '42px',
    '& .MuiInputBase-root': {
      height: '42px',
    },
    '& input': {
      fontFamily: 'NotoSansKRRegular',
    },
  },
};

export default PwResetPopup;
