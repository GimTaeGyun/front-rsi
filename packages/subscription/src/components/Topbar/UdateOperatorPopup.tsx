import styled from '@emotion/styled';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import {
  FormControl,
  IconButton,
  InputLabel,
  NativeSelect,
} from '@mui/material';
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
import { Formik, useFormik } from 'formik';
import Axios from '../../utils/axios';
import AlertPopup from '../Common/AlertPopup';
import * as Yup from 'yup';
import { ErrorSharp } from '@mui/icons-material';

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
        console.log(fetch);
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
          usrGrpId: ['1', '2', '3'],
          usrId: data.usrId,
          usrNm: values.custNm == undefined ? data.usrNm : values.custNm,
          usrPw: '',
          usrTp: data.usrTp,
        };

        console.log(userParam);
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
              <FormLabel>
                아이디{' '}
                <span className="label-dot" style={{ color: '#284AD5' }}>
                  {' '}
                  •
                </span>{' '}
              </FormLabel>
              <TextField
                disabled
                fullWidth
                id="operator_id"
                defaultValue={data.usrId}
                sx={{ mt: '5px' }}
              />
            </Box>
            {/* change user password form */}
            <FormLabel>
              비밀번호{' '}
              <span className="label-dot" style={{ color: '#284AD5' }}>
                {' '}
                •
              </span>{' '}
            </FormLabel>
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
                error={errorPassword}
                onChange={e => {
                  setPwd(e.target.value);
                  console.log(pwd);
                }}
                sx={{ mr: '10px', flex: '1' }}
              ></TextField>
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
              {/* change password form end */}
            </Box>
            <Box
              sx={{
                mb: '15px',
              }}
            >
              <FormLabel>
                이름{' '}
                <span className="label-dot" style={{ color: '#284AD5' }}>
                  {' '}
                  •
                </span>{' '}
              </FormLabel>
              <TextField
                fullWidth
                type="text"
                name="custNm"
                error={errors.custNm !== undefined}
                defaultValue={data.usrNm}
                value={values?.custNm}
                onChange={handleChange}
                sx={{ mt: '5px' }}
                onInput={e => {
                  if ((e.target as HTMLInputElement).value.length == 0) return;
                  (e.target as HTMLInputElement).value = (
                    e.target as HTMLInputElement
                  ).value.slice(0, 10);
                }}
              />
            </Box>
            <Box
              sx={{
                mb: '15px',
              }}
            >
              <FormLabel>
                핸드폰{' '}
                <span className="label-dot" style={{ color: '#284AD5' }}>
                  {' '}
                  •
                </span>{' '}
              </FormLabel>
              <TextField
                fullWidth
                type="text"
                defaultValue={data.phone}
                value={values?.phone}
                name="phone"
                error={errors.phone !== undefined}
                onChange={handleChange}
                sx={{ mt: '5px' }}
                onInput={e => {
                  if ((e.target as HTMLInputElement).value.length == 0) return;
                  (e.target as HTMLInputElement).value = (
                    e.target as HTMLInputElement
                  ).value.slice(0, 16);
                }}
              />
            </Box>
            <Box
              sx={{
                mb: '15px',
              }}
            >
              <FormLabel>
                이메일{' '}
                <span className="label-dot" style={{ color: '#284AD5' }}>
                  {' '}
                  •
                </span>{' '}
              </FormLabel>
              <TextField
                fullWidth
                type="text"
                defaultValue={data.email}
                value={values?.email}
                name="email"
                error={errors.email !== undefined}
                onChange={handleChange}
                sx={{ mt: '5px' }}
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
            <Box
              sx={{
                mb: '15px',
              }}
            >
              <FormControl fullWidth>
                <FormLabel>유형</FormLabel>
                <Select disabled defaultValue={data.usrTp}>
                  <option value="DEFAULT">기본</option>
                  <option value="SYSUSER">시스템사용자</option>
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
                <Select disabled defaultValue={data.status}>
                  <option value={1}>사용</option>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <Divider />
          <DialogActions sx={{ justifyContent: 'center', padding: '16px 0' }}>
            <Button onClick={handleClose}>취소</Button>
            <Button variant="contained" type="submit">
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

export default UpdateOperatorPopupUser;
