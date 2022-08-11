import styled from '@emotion/styled';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MuiMenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import MuiSelect from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import * as Yup from 'yup';

const MenuItem = styled(MuiMenuItem)({
  '&:hover': {
    backgroundColor: '#ebebeb',
  },
});

const validationSchema = Yup.object().shape({
  usrId: Yup.string().required().min(5).max(20),
  usrNm: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().max(13).required(),
  usrPw: Yup.string()
    .required()
    .min(8)
    .max(16)
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
});

const defaultFormData = {
  usrId: '',
  usrPw: '',
  usrNm: '',
  phone: '',
  email: '',
};

const defaultFormValidation = {
  usrId: false,
  usrPw: false,
  usrNm: false,
  phone: false,
  email: false,
};

const validationMsg = {
  usrId: '5~20 자 입력해주세요',
  usrPw: '대소문자, 숫자, 특수문자 포함 8~16 글자 입력해주세요',
  usrNm: '필수입력',
  phone: '필수입력',
  email: '정확한 이메일을 입력해주세요',
};

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

  const [popupData, setPopupData] = React.useState(defaultFormData);
  const [dataValid, setDataValid] = React.useState(defaultFormValidation);

  // 열고 닫을 때마다 리셋
  React.useEffect(() => {
    setPopupData(defaultFormData);
    setDataValid(defaultFormValidation);
  }, [open]);

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
                padding: '0 0 0 0',
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
          <Box>
            <InputLabel
              className="sub_formLabel"
              sx={{ marginTop: '0px !important' }}
            >
              아이디 <Typography className="sub_label_dot">•</Typography>{' '}
            </InputLabel>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <TextField
                id="operator_id"
                placeholder="아이디"
                error={dataValid.usrId}
                label={dataValid.usrId ? validationMsg.usrId : ''}
                onChange={e => {
                  e.target.value = e.target.value.substring(0, 20);
                  handleChange(e);
                  setPopupData({ ...popupData, usrId: e.target.value });
                }}
                name="usrId"
                sx={{ mr: '10px', flex: '1', minWidth: '348px' }}
                className="sub_formText"
              />
              <Button
                variant="contained"
                sx={{
                  height: '42px',
                  minWidth: '82px',
                  fontSize: '14px',
                }}
                className="sub_button_blue"
                onClick={e => handleMiddle(e)}
              >
                중복확인
              </Button>
            </Box>
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">
              비밀번호 <Typography className="sub_label_dot">•</Typography>{' '}
            </InputLabel>
            <TextField
              fullWidth
              id="password"
              type="password"
              placeholder="비밀번호"
              error={dataValid.usrPw}
              label={dataValid.usrPw ? validationMsg.usrPw : ''}
              className="sub_formText"
              name="usrPw"
              onChange={e => {
                e.target.value = e.target.value.substring(0, 16);
                handleChange(e);
                setPopupData({ ...popupData, usrPw: e.target.value });
              }}
            />
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">
              이름 <Typography className="sub_label_dot">•</Typography>{' '}
            </InputLabel>
            <TextField
              fullWidth
              id="name"
              placeholder="이름"
              className="sub_formText"
              name="usrNm"
              error={dataValid.usrNm}
              label={dataValid.usrNm ? validationMsg.usrNm : ''}
              onChange={e => {
                handleChange(e);
                setPopupData({ ...popupData, usrNm: e.target.value });
              }}
            />
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">
              전화번호 <Typography className="sub_label_dot">•</Typography>{' '}
            </InputLabel>
            <TextField
              fullWidth
              id="phone"
              placeholder="전화번호"
              className="sub_formText"
              name="phone"
              error={dataValid.phone}
              label={dataValid.phone ? validationMsg.phone : ''}
              onChange={e => {
                e.target.value = e.target.value.substring(0, 13);
                handleChange(e);
                setPopupData({ ...popupData, phone: e.target.value });
              }}
            />
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">
              이메일 <Typography className="sub_label_dot">•</Typography>{' '}
            </InputLabel>
            <TextField
              fullWidth
              id="email"
              placeholder="이메일 주소"
              className="sub_formText"
              name="email"
              error={dataValid.email}
              label={dataValid.email ? validationMsg.email : ''}
              onChange={e => {
                handleChange(e);
                setPopupData({ ...popupData, email: e.target.value });
              }}
            />
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">유형</InputLabel>
            <Select
              fullWidth
              id="category"
              name="usrTp"
              className="sub_select_form"
              defaultValue="DEFAULT"
              onChange={e => {
                handleChange(e);
              }}
            >
              <MenuItem
                value="DEFAULT"
                sx={{ fontFamily: 'NotoSansKRRagular' }}
              >
                기본
              </MenuItem>
              <MenuItem
                value="SYSUSER"
                sx={{ fontFamily: 'NotoSansKRRagular' }}
              >
                시스템사용자
              </MenuItem>
            </Select>
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">상태</InputLabel>
            <Select
              fullWidth
              id="situation"
              value="1"
              readOnly
              className="sub_select_form_disable"
            >
              <MenuItem value="1">사용</MenuItem>
            </Select>
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">추가 내용</InputLabel>
            <TextField
              fullWidth
              id="additional_info"
              placeholder="운영자 설명"
              className="sub_formText"
              name="description"
              onChange={e => handleChange(e)}
            />
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ justifyContent: 'center', padding: '16px 0' }}>
          <Button
            onClick={e => handleClose(e)}
            sx={{ fontSize: '14px' }}
            className="sub_button_white"
          >
            취소
          </Button>
          <Button
            variant="contained"
            className="sub_button_blue"
            sx={{ width: '57', height: '36', fontSize: '14px' }}
            onClick={async e => {
              if (await validationSchema.isValid(popupData)) {
                handleOk(e);
              } else {
                setDataValid({
                  usrId: !(await validationSchema.fields.usrId.isValid(
                    popupData.usrId,
                  )),
                  usrPw: !(await validationSchema.fields.usrPw.isValid(
                    popupData.usrPw,
                  )),
                  usrNm: !(await validationSchema.fields.usrNm.isValid(
                    popupData.usrNm,
                  )),
                  email: !(await validationSchema.fields.email.isValid(
                    popupData.email,
                  )),
                  phone: !(await validationSchema.fields.phone.isValid(
                    popupData.phone,
                  )),
                });
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

export default AddOperatorPopup;
