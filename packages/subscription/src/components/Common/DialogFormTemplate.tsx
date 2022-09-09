import CloseOutlined from '@mui/icons-material/CloseOutlined';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { DialogProps } from '@mui/material/Dialog';
import React from 'react';

const DialogFormTemplate = (props: {
  open: boolean;
  handleClose: Function;
  width: string;
  height: string;
  title: string;
  children: any;
  footer: any;
  scroll?: DialogProps['scroll'] | 'paper';
}) => {
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>(
    props.scroll,
  );
  return (
    <>
      <Dialog
        scroll={scroll}
        open={props.open}
        onClose={() => props.handleClose()}
        className="sub_dialog_main"
        sx={{
          '& .MuiPaper-root.MuiDialog-paper': {
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
