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
import React, { useEffect } from 'react';

import axios from '../../../utils/axios';
import AlertPopup from '../../Common/AlertPopup';

const FormLabel = styled(MuiFormLabel)({
  color: '#333333',
  fontFamily: 'NotoSansKRMedium',
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
    '&.Mui-error fieldset': {
      borderColor: '#E50012',
      borderWidth: '1px',
    },
  },
  '&.Mui-disabled': {
    border: 'dashed',
    backgroundColor: '#F9F9F9',
    borderWidth: '1px',
    borderColor: '#0000003B',
  },
});

const MenuItem = styled(MuiMenuItem)({
  '&:hover': {
    backgroundColor: '#ebebeb',
  },
});

const AddOperatorPopup = (props: {
  open: boolean;
  handleClose?: Function;
  handleOk?: Function;
  handleMiddle?: Function;
  handleChange?: Function;
}) => {
  const {
    open = false,
    handleClose = () => {},
    handleOk = () => {},
    handleMiddle = () => {},
    handleChange = () => {},
  } = props;

  return (
    <Box component="div" sx={{ width: '500px' }}>
      <Dialog
        open={open}
        onClose={() => handleClose()}
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
              운영자 추가
            </Typography>
            <Button
              sx={{
                bgcolor: 'transparent',
                color: '#000000DE',
                '&:focus, &:hover': { bgcolor: 'transparent' },
              }}
              onClick={() => handleClose()}
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
            <FormLabel>아이디</FormLabel>
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
                placeholder="아이디"
                onChange={e => handleChange(e)}
                name="usrId"
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
                onClick={e => handleMiddle(e)}
              >
                중복확인
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>비밀번호</FormLabel>
            <TextField
              fullWidth
              id="password"
              type="password"
              placeholder="비밀번호"
              sx={{ mt: '5px' }}
              name="usrPw"
              onChange={e => handleChange(e)}
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>이름</FormLabel>
            <TextField
              fullWidth
              id="name"
              placeholder="이름"
              sx={{ mt: '5px' }}
              name="usrNm"
              onChange={e => handleChange(e)}
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>전화번호</FormLabel>
            <TextField
              fullWidth
              id="phone"
              placeholder="전화번호"
              sx={{ mt: '5px' }}
              name="phone"
              onChange={e => handleChange(e)}
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>이메일</FormLabel>
            <TextField
              fullWidth
              id="email"
              placeholder="이메일 주소"
              sx={{ mt: '5px' }}
              name="email"
              onChange={e => handleChange(e)}
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>유형</FormLabel>
            <Select
              fullWidth
              id="category"
              name="usrTp"
              defaultValue="DEFAULT"
              onChange={e => {
                handleChange(e);
              }}
            >
              <MenuItem value="DEFAULT">기본</MenuItem>
              <MenuItem value="SYSUSER">시스템사용자</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>상태</FormLabel>
            <Select
              fullWidth
              id="situation"
              value="1"
              readOnly
              className="Mui-disabled"
            >
              <MenuItem value="1">사용</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>추가 내용</FormLabel>
            <TextField
              fullWidth
              id="additional_info"
              placeholder="운영자 설명"
              sx={{ mt: '5px' }}
              name="description"
              onChange={e => handleChange(e)}
            />
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ justifyContent: 'center', padding: '16px 0' }}>
          <Button onClick={e => handleClose(e)}>취소</Button>
          <Button variant="contained" onClick={e => handleOk(e)}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddOperatorPopup;
