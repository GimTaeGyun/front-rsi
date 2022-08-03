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
  handleClose: Function;
  value?: any;
}) => {
  const { open, handleClose, value } = props;

  // 열고 닫을 때마다 초기화
  useEffect(() => {
    setPopupData(
      value
        ? { ...value, action: 'mod' }
        : {
            action: 'mod',
            email: '',
            phone: '',
            status: 1,
            usrId: '',
            usrNm: '',
            usrPw: '',
            usrTp: 'DEFAULT',
            description: '',
          },
    );
    setIsOpenPopup(false);
  }, [open]);

  // 저장 API REQUESTBODY
  const [popupData, setPopupData] = React.useState({
    action: 'add',
    email: '',
    phone: '',
    status: 1,
    usrId: '',
    usrNm: '',
    usrPw: '',
    usrTp: 'DEFAULT',
    description: '',
  });

  // form 값 변경이벤트
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPopupData({ ...popupData, [name]: value });
  };

  const [popupMsg, setPopupMsg] = React.useState('');
  const [isOpenPopup, setIsOpenPopup] = React.useState(false); // 팝업 온/오프

  const getPopupMsg = (type: any) => {
    switch (type) {
      case 1:
        return '비밀번호가 변경되었습니다';
      case 2:
        return '모든 변동사항이 저장되었습니다';
      default:
        return '';
    }
  };

  // 저장 버튼 클릭이벤트
  const saveBtn = () => {
    axios
      .post('/management/subscription/admin/user/update', {
        ...popupData,
        usrPw: '',
      })
      .then(res => {
        if (res.data.code == '0000') {
          setPopupMsg(getPopupMsg(2));
          setIsOpenPopup(true);
        }
      })
      .catch(() => {});
  };

  // 비밀번호 변경 클릭이벤트
  const chnagePw = () => {
    axios
      .post('/management/subscription/admin/userpw/update', {
        usrId: popupData.usrId,
        usrPw: popupData.usrPw,
      })
      .then(res => {
        console.log(res);
        if (res.data.code == '0000') {
          setPopupMsg(getPopupMsg(1));
          setIsOpenPopup(true);
          return;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Box component="div" sx={{ width: '500px' }}>
      {isOpenPopup && (
        <AlertPopup
          message={popupMsg}
          buttontext="확인"
          closeCallback={() => {
            setIsOpenPopup(false);
            if (popupMsg === '모든 변동사항이 저장되었습니다') handleClose();
          }}
        />
      )}
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
              운영자 정보 수정
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
                className="Mui-disabled"
                disabled
                onChange={handleChange}
                name="usrId"
                value={popupData.usrId}
                sx={{ mr: '10px', flex: '1' }}
              />
            </Box>
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
                fullWidth
                id="password"
                type="password"
                placeholder="비밀번호"
                sx={{ mr: '10px', flex: '1' }}
                name="usrPw"
                value={popupData.usrPw}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                sx={{
                  height: '42px',
                  minWidth: '50px',
                  fontSize: '14px',
                  p: '11px 16px',
                }}
                onClick={chnagePw}
              >
                변경
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
              sx={{ mt: '5px' }}
              name="usrNm"
              value={popupData.usrNm}
              onChange={handleChange}
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
              value={popupData.phone}
              onChange={handleChange}
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
              value={popupData.email}
              onChange={handleChange}
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
              value={popupData.usrTp ? popupData.usrTp : 'DEFAULT'}
              name="usrTp"
              onChange={e => {
                setPopupData({ ...popupData, usrTp: e.target.value as string });
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
              id="status"
              value={popupData.status ? popupData.status : 1}
              onChange={e => {
                setPopupData({
                  ...popupData,
                  status: e.target.value as any,
                });
              }}
            >
              <MenuItem value="1">사용</MenuItem>
              <MenuItem value="0">미사용</MenuItem>
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
              id="description"
              placeholder="운영자 설명"
              sx={{ mt: '5px' }}
              name="description"
              value={popupData.description}
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ justifyContent: 'center', padding: '16px 0' }}>
          <Button onClick={() => handleClose()}>취소</Button>
          <Button variant="contained" onClick={() => saveBtn()}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddOperatorPopup;
