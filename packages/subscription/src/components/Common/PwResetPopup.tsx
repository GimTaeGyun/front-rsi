import CloseOutlined from '@mui/icons-material/CloseOutlined';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import * as React from 'react';

const PwResetPopup = (props: {
  open: boolean;
  saved?: boolean;
  closeCallback?: Function;
  okCallback?: Function;
}) => {
  const [inputText, setInputText] = React.useState('');
  React.useEffect(() => {
    if (!props.saved) setInputText('');
  }, [open]);
  const handleClose = () => {
    props.closeCallback ? props.closeCallback(inputText) : '';
  };
  const handleOk = () => {
    props.okCallback ? props.okCallback(inputText) : '';
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
              <Typography component="p" sx={styles.msg}>
                새 비밀번호 <span style={styles.label_dot}>•</span>{' '}
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
    },
  },
  msg: {
    m: '0',
    p: '0',
    color: '#333333',
    marginBottom: '10px',
    fontSize: '14px',
    lineHeight: '25px',
    fontFamily: 'NotoSansKRBold',
    fontWeight: '800',
  },
  btnOk: {
    minWidth: '46px',
    width: '46px',
    height: '30px',
    px: '0',
    color: '#fff',
    marginRight: '10px',
    borderColor: '#284AD5',
    backgroundColor: '#284AD5',
    boxShadow: '0px 3px 3px #0000002E',
    fontFamily: 'NotoSansKR',
    ':hover': {
      borderColor: '#0615B2',
      backgroundColor: '#0615B2',
      boxShadow: '0px 3px 3px #0000002E',
    },
  },
  btnCancel: {
    minWidth: '46px',
    width: '46px',
    height: '30px',
    px: '0',
    color: '#284ad5',
    marginRight: '10px',
    fontFamily: 'NotoSansKR',
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    boxShadow: '0px 3px 3px #0000002E',
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
  label_dot: { color: '#284ad5', fontSize: '20px', lineHeight: 0 },
  title: {
    display: 'inline-block',
    width: '136px',
    height: '56px',
    padding: '16px',
    fontSize: '16px',
    fontFamily: 'NotoSansKRBold',
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
      fontFamily: 'NotoSansKr',
    },
  },
};

export default PwResetPopup;
