import styled from '@emotion/styled';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import { FormControl, InputLabel, NativeSelect } from '@mui/material';
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
import React, { useEffect, useState } from 'react';

import Axios from '../../utils/axios';
import AlertPopup from '../Common/AlertPopup';

4;

const AddOperatorPopupUser = (props: {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  data: {
    usremail: string;
    usrphone: string;
    status: number;
    usrGrpId: Array<any>;
    usrId: string;
    usrNm: string;
    usrPw: string;
    usrTp: string;
  };
}) => {
  const { open, handleClose } = props;
  const { data } = props;
  const [pwd, setPwd] = React.useState(data.usrPw);
  const [name, setName] = React.useState(data.usrNm);
  const [rphone, setRphone] = React.useState(data.usrphone);
  const [mails, setMails] = React.useState(data.usremail);

  const onClickUpdatePassword = async () => {
    console.log(data);
    const userPasswordParam = {
      usrId: data.usrId,
      usrPw: pwd,
    };
    try {
      const fetch = await Axios.post(
        '/management/subscription/admin/userpw/update',
        userPasswordParam,
      );
      alert(
        AlertPopup({
          message: '비밀번호가 변경되었습니다.',
          buttontext: '확인',
        }),
      );
    } catch (e) {
      alert(
        <AlertPopup message="비밀번호가 변경되었습니다.X" buttontext="확인" />,
      );
    }
  };

  const onClickUpdateUser = async () => {
    const userParam = {
      action: 'add',
      description: '사용자 설명입니다.',
      email: mails,
      phone: rphone,
      status: data.status,
      usrGrpId: data.usrGrpId,
      usrId: data.usrId,
      usrNm: name,
      usrPw: pwd,
      usrTp: data.usrTp,
    };

    console.log(userParam);
    try {
      const fetch = await Axios.post(
        '/management/subscription/admin/user/update',
        userParam,
      );
      if (userParam) {
        return (
          <AlertPopup
            message="모든 변동사항이 저장되었습니다."
            buttontext="확인"
          />
        );
      }
    } catch (e) {
      return console.log(e);
    }
  };

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
              내 정보
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
          ></Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>아이디</FormLabel>
            <TextField
              disabled
              fullWidth
              id="operator_id"
              defaultValue={data.usrId}
              sx={{ mt: '5px' }}
            />
          </Box>
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
              type="password"
              id="password"
              value={pwd}
              placeholder="비밀번호"
              onChange={e => {
                setPwd(e.target.value);
                console.log(pwd);
              }}
              sx={{ mr: '10px', flex: '1' }}
            />
            <Button
              variant="contained"
              onClick={onClickUpdatePassword}
              sx={{
                height: '42px',
                minWidth: '50px',
                fontSize: '14px',
                p: '11px 16px',
              }}
            >
              변경
            </Button>
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>이름</FormLabel>
            <TextField
              fullWidth
              type="text"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
              sx={{ mt: '5px' }}
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormLabel>핸드폰</FormLabel>
            <TextField
              fullWidth
              type="text"
              value={rphone}
              onChange={e => {
                setRphone(e.target.value);
              }}
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
              type="text"
              value={mails}
              onChange={e => {
                setMails(e.target.value);
              }}
              sx={{ mt: '5px' }}
            />
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormControl fullWidth>
              <FormLabel>유형</FormLabel>
              <Select disabled defaultValue={10}>
                <option value={10}>{data.usrTp}</option>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              mb: '15px',
            }}
          >
            <FormControl fullWidth>
              <FormLabel>상태</FormLabel>
              <Select disabled defaultValue={10}>
                <option value={10}>{data.status}</option>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ justifyContent: 'center', padding: '16px 0' }}>
          <Button onClick={handleClose}>취소</Button>
          <Button variant="contained" onClick={onClickUpdateUser}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

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
  '&:hover': {
    backgroundColor: '#ebebeb',
  },
});

export default AddOperatorPopupUser;
