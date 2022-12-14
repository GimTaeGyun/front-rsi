import styled from '@emotion/styled';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import MuiFormLabel from '@mui/material/FormLabel';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';
import MuiTextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';

const FormLabel = styled(MuiFormLabel)({
  color: '#333333',

  fontSize: '14px',
});

const TextField = styled(MuiTextField)({
  height: '42px',
  '& .MuiOutlinedInput-input': {
    padding: '11px 10px',
    lineHeight: 'normal',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#0000001F',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: '#0000001F',
      borderWidth: '1px',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0000001F',
      borderWidth: '1px',
    },
    '&.Mui-disabled fieldset': {
      borderColor: '#0000001F',
      borderWidth: '1px',
    },
    '&.Mui-disabled input': { backgroundColor: '#F9F9F9' },
    '&.Mui-error fieldset': {
      borderColor: '#E50012',
      borderWidth: '1px',
    },
  },
});

const Select = styled(MuiSelect)({
  height: '42px',
  marginTop: '5px',
  '&.MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#0000001F',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: '#0000001F',
      borderWidth: '1px',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0000001F',
      borderWidth: '1px',
    },
    '&.Mui-disabled .MuiSelect-select': { zIndex: 1 },
    '&.Mui-disabled fieldset': {
      borderColor: '#0000003B',
      borderWidth: '1px',
      backgroundColor: '#F9F9F9',
    },
    '&.Mui-error fieldset': {
      borderColor: '#E50012',
      borderWidth: '1px',
    },
  },
});

const MenuItem = styled(MuiMenuItem)({
  '&:hover': {
    backgroundColor: '#ebebeb',
  },
});

const ModifySettingsPopup = (props: {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { open, handleClose } = props;

  return (
    <Box component="div" sx={{ width: '500px' }}>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            minWidth: '500px',
          },
        }}
      >
        <DialogTitle sx={{ height: '56px', p: '16px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontFamily: 'NotoSansKRMedium' }}>
              ???????????? ??????
            </Typography>
            <Button
              sx={{
                bgcolor: 'transparent',
                color: '#000000DE',
                '&:focus, &:hover': { bgcolor: 'transparent' },
              }}
              onClick={handleClose}
            >
              <CloseOutlined />
            </Button>
          </Box>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ padding: '30px' }}>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>?????????</FormLabel>
            <TextField
              fullWidth
              disabled
              id="operator_id"
              placeholder="8~16???, ?????? ????????????, ??????, ???????????? ?????? ??????"
              value="bflysoft1"
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>????????????</FormLabel>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: '5px',
              }}
            >
              <TextField
                id="operator_id"
                placeholder="8~16???, ??????, ??????, ???????????? ??????"
                type="password"
                value="pass1234"
                sx={{ mr: '10px', flex: '1' }}
              />
              <Button
                variant="contained"
                sx={{
                  height: '42px',
                  minWidth: '50px',
                  fontSize: '14px',
                  p: '11px 16px',
                }}
              >
                ????????????
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>??????</FormLabel>
            <TextField
              fullWidth
              id="name"
              placeholder="??????"
              value="?????????"
              sx={{ mt: '5px' }}
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>????????????</FormLabel>
            <TextField
              fullWidth
              id="phone"
              placeholder="????????????"
              value="010-0000-0000"
              sx={{ mt: '5px' }}
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>?????????</FormLabel>
            <TextField
              fullWidth
              id="email"
              placeholder="????????? ??????"
              value="bflysoft1@bflysoft.com"
              sx={{ mt: '5px' }}
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>??????</FormLabel>
            <Select fullWidth id="category" value="???????????????" disabled>
              <MenuItem>??????</MenuItem>
              <MenuItem value="???????????????">???????????????</MenuItem>
              <MenuItem>??????????????? ?????????</MenuItem>
              <MenuItem>???????????? ?????????</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>??????</FormLabel>
            <Select fullWidth value="??????" id="situation" disabled>
              <MenuItem value="??????">??????</MenuItem>
            </Select>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ justifyContent: 'center', padding: '16px 0' }}>
          <Button onClick={handleClose}>??????</Button>
          <Button variant="contained" onClick={handleClose}>
            ??????
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ModifySettingsPopup;
