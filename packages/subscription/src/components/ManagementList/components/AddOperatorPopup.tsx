import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import DialogTitle from '@mui/material/DialogTitle';
import MuiFormLabel from '@mui/material/FormLabel';
import MuiTextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import MuiSelect from '@mui/material/Select';
import MuiMenuItem from '@mui/material/MenuItem';

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
});

const MenuItem = styled(MuiMenuItem)({
  "&:hover": {
    backgroundColor: "#ebebeb"
  }
})

const AddOperatorPopup = (props: {
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
            <Typography sx={{ fontFamily: 'NotoSansKRMedium' }}>
              운영자 추가
            </Typography>
            <Button sx={{ bgcolor: "transparent", color: "#000000DE", "&:focus, &:hover": { bgcolor: "transparent" } }} onClick={handleClose}>
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
            <FormLabel>비밀번호</FormLabel>
            <TextField
              fullWidth
              id="password"
              placeholder="비밀번호"
              sx={{ mt: '5px' }}
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
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>유형</FormLabel>
            <Select fullWidth id="category">
              <MenuItem>유형</MenuItem>
              <MenuItem>슈퍼바이저</MenuItem>
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
            <Select fullWidth id="situation">
              <MenuItem>사용</MenuItem>
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
            />
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

export default AddOperatorPopup;
