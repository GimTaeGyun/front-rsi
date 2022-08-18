import styled from '@emotion/styled';
import { BorderBottom, ErrorSharp } from '@mui/icons-material';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import {
  FormControl,
  IconButton,
  InputLabel,
  NativeSelect,
  Select,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiMenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';
import MuiTextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Formik, useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import Axios from '../../utils/axios';
import AlertPopup from '../Common/AlertPopup';

const UpdateOperatorPopupUser = (props: {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  data: any;
}) => {
  const { open, handleClose } = props;
  const { data } = props;
  const [pwd, setPwd] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenPassword, setIsOpenPassword] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);

  /* change password */
  const onClickUpdatePassword = async () => {
    const userPasswordParam = {
      usrId: data.usrId,
      usrPw: pwd,
    };
    if (pwd.length >= 6 && pwd.length <= 16) {
      try {
        const fetch = await Axios.post(
          '/management/subscription/admin/userpw/update',
          userPasswordParam,
        );
        if (fetch.data.msg == '성공') {
          setIsOpenPassword(true);
        } else {
          setIsOpenPassword(false);
        }
      } catch (e) {
        console.error(e);
      }
      setErrorPassword(false);
    } else {
      setErrorPassword(true);
    }
  };
  /* change password end */

  /* change user and valid */
  const validationSchema = Yup.object().shape({
    custNm: Yup.string().max(10, '잘못된 이름입니다.').nullable(true),
    email: Yup.string().email('잘못된 E-mail입니다.').nullable(true),
    phone: Yup.string()
      .nullable(true)
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      ),
  });

  const formik = useFormik({
    initialValues: {
      custNm: data.usrNm,
      email: data.email,
      phone: data.phone,
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async values => {
      if (formik.isValid) {
        const userParam = {
          action: 'mod',
          description: data.description,
          email: values.email == undefined ? data.email : values.email,
          phone: values.phone == undefined ? data.phone : values.phone,
          status: data.status,
          usrId: data.usrId,
          usrNm: values.custNm == undefined ? data.usrNm : values.custNm,
          usrPw: '',
          usrTp: data.usrTp,
        };
        try {
          const fetch = await Axios.post(
            '/management/subscription/admin/user/update',
            userParam,
          );
          if (fetch.data.code == '0000') {
            setIsOpen(true);
          }
        } catch (e) {
          return console.log(e);
        }
      } else {
        console.log(errors);
      }
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  /* change user and valid end*/
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
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ float: 'left' }}>개인정보 설정</Typography>
            <Button
              sx={{
                bgcolor: 'transparent',
                color: '#000000DE',
                float: 'right',
                padding: '0 0 0 0',
                '&:focus, &:hover': { bgcolor: 'transparent' },
              }}
              onClick={handleClose}
            >
              <CloseOutlined />
            </Button>
          </Box>
        </DialogTitle>
        <Divider />
        {/* change user form */}
        <form onSubmit={handleSubmit}>
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
              <InputLabel className="sub_formLabel">
                아이디 <Typography className="sub_label_dot">•</Typography>{' '}
              </InputLabel>
              <TextField
                disabled
                fullWidth
                id="operator_id"
                defaultValue={data.usrId}
                className="sub_formText"
              />
            </Box>
            {/* change user password form */}
            <InputLabel className="sub_formLabel">
              비밀번호 <Typography className="sub_label_dot">•</Typography>{' '}
            </InputLabel>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: '15px',
                minHeight: '45px',
              }}
            >
              <TextField
                type="password"
                id="password"
                value={pwd}
                error={errorPassword}
                onChange={e => {
                  setPwd(e.target.value);
                  console.log(pwd);
                }}
                className="sub_formText"
                sx={{ width: '348px', marginTop: '0 !important' }}
              ></TextField>
              <Button
                variant="contained"
                onClick={onClickUpdatePassword}
                className="sub_button_blue"
                sx={{
                  height: '45px',
                  minWidth: '82px',
                  fontSize: '14px',
                  padding: '0 !important',
                }}
              >
                변경
              </Button>
              {/* change password form end */}
            </Box>
            <Box>
              <InputLabel className="sub_formLabel">
                이름 <Typography className="sub_label_dot">•</Typography>{' '}
              </InputLabel>
              <TextField
                fullWidth
                type="text"
                name="custNm"
                error={errors.custNm !== undefined}
                defaultValue={data.usrNm}
                value={values?.custNm}
                onChange={handleChange}
                className="sub_formText"
                onInput={e => {
                  if ((e.target as HTMLInputElement).value.length == 0) return;
                  (e.target as HTMLInputElement).value = (
                    e.target as HTMLInputElement
                  ).value.slice(0, 10);
                }}
              />
            </Box>
            <Box>
              <InputLabel className="sub_formLabel">
                전화번호 <Typography className="sub_label_dot">•</Typography>{' '}
              </InputLabel>
              <TextField
                fullWidth
                type="text"
                defaultValue={data.phone}
                value={values?.phone}
                name="phone"
                error={errors.phone !== undefined}
                onChange={handleChange}
                className="sub_formText"
                onInput={e => {
                  if ((e.target as HTMLInputElement).value.length == 0) return;
                  (e.target as HTMLInputElement).value = (
                    e.target as HTMLInputElement
                  ).value.slice(0, 16);
                }}
              />
            </Box>
            <Box>
              <InputLabel className="sub_formLabel">
                이메일 <Typography className="sub_label_dot">•</Typography>{' '}
              </InputLabel>
              <TextField
                fullWidth
                type="text"
                defaultValue={data.email}
                value={values?.email}
                name="email"
                error={errors.email !== undefined}
                onChange={handleChange}
                className="sub_formText"
                onInput={e => {
                  if ((e.target as HTMLInputElement).value.length == 0) return;
                  (e.target as HTMLInputElement).value = (
                    e.target as HTMLInputElement
                  ).value.slice(0, 32);
                }}
                InputProps={{
                  endAdornment: touched.email ? (
                    <IconButton></IconButton>
                  ) : (
                    <span />
                  ),
                }}
              />
            </Box>
            <Box>
              <InputLabel className="sub_formLabel">유형</InputLabel>
              <Select
                fullWidth
                disabled
                defaultValue={data.usrTp}
                className="sub_select_form_disable"
              >
                <option value="DEFAULT">기본</option>
                <option value="SYSUSER">시스템사용자</option>
              </Select>
            </Box>
            <Box
              sx={{
                mt: '15px',
                mb: '15px',
              }}
            >
              <InputLabel className="sub_formLabel">상태</InputLabel>
              <Select
                disabled
                defaultValue={data.status}
                fullWidth
                className="sub_select_form_disable"
              >
                <option value={1}>사용</option>
              </Select>
            </Box>
          </DialogContent>
          <Divider />
          <DialogActions sx={{ justifyContent: 'center', padding: '16px 0' }}>
            <Button
              onClick={handleClose}
              className="sub_button_white_noneborder"
            >
              취소
            </Button>
            <Button
              variant="contained"
              type="submit"
              className="sub_button_blue"
              sx={{ height: '36px' }}
            >
              저장
            </Button>
          </DialogActions>
        </form>
        {/* change user form end */}
      </Dialog>
      {isOpen ? (
        <AlertPopup
          message="모든 변동사항이 저장되었습니다."
          buttontext="확인"
          closeCallback={() => {
            setIsOpen(false);
          }}
        />
      ) : (
        ' '
      )}
      {isOpenPassword ? (
        <AlertPopup
          message="비밀번호가 변경되었습니다."
          buttontext="확인"
          closeCallback={() => {
            setIsOpenPassword(false);
          }}
        />
      ) : (
        ' '
      )}
    </Box>
  );
};

const MenuItem = styled(MuiMenuItem)({
  '&:hover': {
    backgroundColor: '#ebebeb',
  },
});

export default UpdateOperatorPopupUser;
