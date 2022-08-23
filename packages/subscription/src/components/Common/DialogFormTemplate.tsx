import React from 'react';
import {
  Box,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import CloseOutlined from '@mui/icons-material/CloseOutlined';

const DialogFormTemplate = (props: {
  open: boolean;
  handleClose: Function;
  width: string;
  height: string;
  title: string;
  children: any;
  footer: any;
}) => {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={() => props.handleClose()}
        className="sub_dialog_main"
        sx={{
          '& .MuiPaper-root': {
            width: props.width,
            height: props.height,
          },
        }}
      >
        <DialogTitle className="sub_dialog_title_outer">
          <Typography>{props.title}</Typography>
          <IconButton
            color="primary"
            component="label"
            onClick={() => {
              props.handleClose();
            }}
          >
            <CloseOutlined className="sub_dialog_icon_close" />
          </IconButton>
        </DialogTitle>
        <DialogContent className="sub_dialog_content_outer">
          {props.children}
        </DialogContent>
        <Box className="sub_dialog_footer">{props.footer}</Box>
      </Dialog>
    </>
  );
};
export default DialogFormTemplate;
