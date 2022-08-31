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
              개인정보 설정
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
            <FormLabel>아이디</FormLabel>
            <TextField
              fullWidth
              disabled
              id="operator_id"
              placeholder="8~16자, 영문 대소문자, 숫자, 특수문자 입력 가능"
              value="bflysoft1"
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>비밀번호</FormLabel>
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
                placeholder="8~16자, 영문, 숫자, 특수문자 조합"
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
                중복확인
              </Button>
            </Box>
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
              value="김철수"
              sx={{ mt: '5px' }}
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
              value="010-0000-0000"
              sx={{ mt: '5px' }}
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
              value="bflysoft1@bflysoft.com"
              sx={{ mt: '5px' }}
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>유형</FormLabel>
            <Select fullWidth id="category" value="슈퍼바이저" disabled>
              <MenuItem>유형</MenuItem>
              <MenuItem value="슈퍼바이저">슈퍼바이저</MenuItem>
              <MenuItem>통합관리자 어드민</MenuItem>
              <MenuItem>재무회계 담당자</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>상태</FormLabel>
            <Select fullWidth value="사용" id="situation" disabled>
              <MenuItem value="사용">사용</MenuItem>
            </Select>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ justifyContent: 'center', padding: '16px 0' }}>
          <Button onClick={handleClose}>취소</Button>
          <Button variant="contained" onClick={handleClose}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ModifySettingsPopup;
