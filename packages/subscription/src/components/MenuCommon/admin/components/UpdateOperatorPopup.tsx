import styled from '@emotion/styled';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import { InputLabel } from '@mui/material';
import { Box, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import MuiMenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import MuiSelect from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MuiTextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { isConstructorDeclaration } from 'typescript';
import * as Yup from 'yup';
import { AlertPopupData } from '../../../../data/atoms';

import { axios } from '../../../../utils/axios';
import AlertPopup from '../../../Common/AlertPopup';

const MenuItem = styled(MuiMenuItem)({
  '&:hover': {
    backgroundColor: '#ebebeb',
  },
});

const defaultValue = {
  action: 'mod',
  email: '',
  phone: '',
  status: 1,
  usrId: '',
  usrNm: '',
  usrPw: '',
  usrTp: 'DEFAULT',
  description: '',
};

const validationSchema = Yup.object().shape({
  usrNm: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().max(13).required(),
  usrPw: Yup.string()
    .required()
    .min(8)
    .max(16)
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
});

const defaultFormValidation = {
  usrPw: false,
  usrNm: false,
  phone: false,
  email: false,
};

const validationMsg = {
  usrPw: '대소문자, 숫자, 특수문자 포함 8~16 글자 입력해주세요',
  usrNm: '필수입력',
  phone: '필수입력',
  email: '정확한 이메일을 입력해주세요',
};

const UpdateOperatorPopup = (props: {
  handleClose: Function;
  handleMiddle: Function;
  handleOk: Function;
  value: any;
}) => {
  const {
    handleClose,
    handleMiddle = () => {},
    handleOk = () => {},
    value = defaultValue,
  } = props;

  const [dataValid, setDataValid] = React.useState(defaultFormValidation);

  // API REQUESTBODY
  const [popupData, setPopupData] = React.useState(defaultValue);

  // 열고 닫을 때마다 초기화
  useEffect(() => {
    setPopupData({ ...value, action: 'mod' });
    setDataValid(defaultFormValidation);
  }, [open]);

  // selectItem
  const [selectItems, setSelectItems] = useState([]);
  useEffect(() => {
    const api = async () => {
      const res = await axios.post('/management/subscription/admin/codeset', {
        code: 'usr_tp',
        code_grp: 'app.user',
      });
      setSelectItems(res.data.result.codeSetItems);
    };
    api();
  }, []);

  // 운영자 추가 수정 form 값 변경이벤트
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPopupData({ ...popupData, [name]: value });
  };

  return (
    <Box component="div" sx={{ width: '500px' }}>
      <Dialog
        open={true}
        onClose={() => handleClose()}
        sx={{
          '& .MuiPaper-root': {
            minWidth: '500px',
          },
        }}
      >
        <DialogTitle className="sub_dialog_title_outer">
          <Typography>운영자 정보 수정</Typography>
          <IconButton
            color="primary"
            component="label"
            onClick={() => handleClose()}
          >
            <CloseOutlined className="sub_dialog_icon_close" />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ padding: '10px 30px 30px 30px' }}>
          <Box>
            <InputLabel className="sub_formLabel" sx={{ marginTop: '0' }}>
              아이디 <Typography className="sub_cust_label_dot">•</Typography>{' '}
            </InputLabel>
            <TextField
              id="operator_id"
              placeholder="8~16자, 영문 대소문자, 숫자, 특수문자 입력 가능"
              className="sub_formText"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: '1px dashed #0000003B !important' },
                },
              }}
              disabled
              onChange={handleChange}
              name="usrId"
              value={popupData.usrId || ''}
            />
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">비밀번호</InputLabel>
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
                placeholder="8~16자, 영문, 숫자, 특수문자 조합"
                className="sub_formText"
                sx={{
                  width: '348px !important',
                  mr: '10px',
                  flex: '1',
                  marginTop: '0 !important',
                }}
                name="usrPw"
                value={popupData.usrPw || ''}
                onChange={handleChange}
                error={dataValid.usrPw}
                helperText={dataValid.usrPw ? validationMsg.usrPw : ''}
              />
              <Button
                variant="contained"
                sx={{
                  height: '42px',
                  minWidth: '82px',
                  fontSize: '14px',
                }}
                onClick={() => handleMiddle(popupData.usrPw)}
                className="sub_button_blue"
              >
                변경
              </Button>
            </Box>
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">
              이름 <Typography className="sub_cust_label_dot">•</Typography>{' '}
            </InputLabel>
            <TextField
              fullWidth
              id="name"
              placeholder="이름"
              className="sub_formText"
              name="usrNm"
              value={popupData.usrNm || ''}
              onChange={handleChange}
              error={dataValid.usrNm}
              helperText={dataValid.usrNm ? validationMsg.usrNm : ''}
            />
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">
              전화번호 <Typography className="sub_cust_label_dot">•</Typography>{' '}
            </InputLabel>
            <TextField
              fullWidth
              id="phone"
              placeholder="전화번호"
              name="phone"
              className="sub_formText"
              value={popupData.phone || ''}
              onChange={handleChange}
              error={dataValid.phone}
              helperText={dataValid.phone ? validationMsg.phone : ''}
            />
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">
              이메일 <Typography className="sub_cust_label_dot">•</Typography>{' '}
            </InputLabel>
            <TextField
              fullWidth
              id="email"
              placeholder="이메일 주소"
              name="email"
              className="sub_formText"
              value={popupData.email || ''}
              onChange={handleChange}
              error={dataValid.email}
              helperText={dataValid.email ? validationMsg.email : ''}
            />
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">유형</InputLabel>
            <Select
              fullWidth
              id="category"
              value={popupData.usrTp || ''}
              name="usrTp"
              onChange={e => {
                setPopupData({ ...popupData, usrTp: e.target.value as string });
              }}
              className="sub_select_form"
            >
              {selectItems.map((item: any) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))}
            </Select>
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">상태</InputLabel>
            <Select
              fullWidth
              className="sub_select_form"
              id="status"
              value={popupData.status}
              onChange={e => {
                setPopupData({
                  ...popupData,
                  status: e.target.value as number,
                });
              }}
            >
              <MenuItem value={1}>사용</MenuItem>
              <MenuItem value={0}>종료</MenuItem>
            </Select>
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">추가 내용</InputLabel>
            <TextField
              fullWidth
              id="description"
              className="sub_formText"
              placeholder="운영자 설명"
              name="description"
              value={popupData.description || ''}
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ justifyContent: 'center', padding: '16px 0' }}>
          <Button
            onClick={() => handleClose()}
            sx={{ fontSize: '14px' }}
            className="sub_button_white_none"
          >
            취소
          </Button>
          <Button
            variant="contained"
            className="sub_button_blue"
            sx={{ width: '57px', height: '36px', fontSize: '14px' }}
            onClick={async () => {
              const valid = {
                action: 'mod',
                usrPw: false,
                usrNm: !(await validationSchema.fields.usrNm.isValid(
                  popupData.usrNm,
                )),
                email: !(await validationSchema.fields.email.isValid(
                  popupData.email,
                )),
                phone: !(await validationSchema.fields.phone.isValid(
                  popupData.phone,
                )),
              };
              setDataValid(valid);

              if (
                !valid.usrPw &&
                !valid.usrNm &&
                !valid.email &&
                !valid.phone
              ) {
                handleOk(popupData);
              }
            }}
          >
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UpdateOperatorPopup;
