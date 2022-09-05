import { Box, Button, Modal, Typography } from '@mui/material';
import * as React from 'react';

const AlertPopup = (props: {
  message: string;
  buttontext: string;
  rightButtonText?: string;
  leftCallback?: Function;
  rightCallback?: Function;
  okLeftRight?: string;
}) => {
  const { okLeftRight = 'left' } = props;
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleLeft = () => {
    setOpen(false);
    props.leftCallback ? props.leftCallback() : '';
  };
  const handleRight = () => {
    setOpen(false);
    props.rightCallback ? props.rightCallback() : '';
  };
  const handleClose = () => {
    setOpen(false);
    props.rightButtonText
      ? okLeftRight == 'left'
        ? handleRight()
        : handleLeft()
      : handleLeft();
  };

  return (
    <>
      <Modal
        hideBackdrop
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
                className="sub_button_blue"
                sx={styles.btn}
                onClick={handleLeft}
              >
                {props.buttontext}
              </Button>
              {props.rightButtonText ? (
                <Button
                  color="primary"
                  variant="contained"
                  className="sub_button_white"
                  sx={styles.btn2}
                  onClick={handleRight}
                >
                  {props.rightButtonText}
                </Button>
              ) : (
                ''
              )}
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
    whiteSpace: 'pre-line',
  },
  btn: {
    minWidth: '46px',
    height: '30px',
    shadow: 'none !important',
    fontSize: '13px',
    ml: '10px',
    fontFamily: 'NotoSandsKRMedeum',
    ':hover': {
      backgroundColor: '#284AD5',
    },
  },
  btn2: {
    minWidth: '46px',
    height: '30px',
    ml: '10px',
    boxShadow: '0 !important',
    fontSize: '13px',
    fontFamily: 'NotoSandsKRMedeum',
    border: '1px solid #cccccc !important',
    transition: 'none',
    ':hover': {
      backgroundColor: 'transparent',
    },
  },
  popup_inner: {
    width: '450px',
    height: '130px',
    px: '30px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  popup_message: {
    width: '100%',
    height: '32px',
    marginTop: '33px',
    textAlign: 'left',
  },
  popup_btn: {
    width: '100%',
    height: '32px',
    textAlign: 'right',
    marginBottom: '30px',
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
