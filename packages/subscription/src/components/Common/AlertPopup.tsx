import * as React from 'react';
import { Box, Modal, Button, Typography } from '@mui/material';

const AlertPopup = (props: {
  message: string;
  buttontext: string;
  closeCallback?: Function;
}) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    props.closeCallback ? props.closeCallback() : '';
  };

  return (
    <>
      <Modal
        sx={styles.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box component="div" sx={styles.popup_outer}>
          <Box component="div" sx={styles.popup_inner}>
            <Box component="div" sx={styles.popup_message}>
              <Typography component="p" sx={styles.msg}>
                {props.message}
              </Typography>
            </Box>
            <Box component="div" sx={styles.popup_btn}>
              <Button
                color="primary"
                variant="contained"
                sx={styles.btn}
                onClick={handleClose}
              >
                {props.buttontext}
              </Button>
            </Box>
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
    color: '#000000DE',
    fontSize: '15px',
    lineHeight: '15px',
    fontFamily: 'NotoSansKRBold',
    fontWeight: '800',
  },
  btn: {
    minWidth: '46px',
    width: '46px',
    height: '30px',
    px: '0',
    color: '#fff',
    borderColor: '#284AD5',
    backgroundColor: '#284AD5',
    boxShadow: '0px 3px 3px #0000002E',
    ':hover': {
      borderColor: '#0615B2',
      backgroundColor: '#0615B2',
      boxShadow: '0px 3px 3px #0000002E',
    },
  },
  popup_inner: {
    width: '450px',
    height: '130px',
    px: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  popup_message: {
    width: '100%',
    height: '32px',
    textAlign: 'left',
  },
  popup_btn: {
    width: '100%',
    height: '32px',
    textAlign: 'right',
  },
  popup_outer: {
    display: 'block',
    m: '0 auto',
    width: '450px',
    height: '130px',
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#fff',
    border: 'none',
    boxShadow: '0px 1px 5px #0000002E',
    borderRadius: '6px',
  },
};

export default AlertPopup;
