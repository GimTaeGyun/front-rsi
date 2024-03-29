import '../../../public/assets/css/fonts.css';

import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material';
import cryptojs from 'crypto-js';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import Image from '../../../public/assets/images/admin_bkg.png';
import { Axios, axios } from '../../utils/axios';

const AdminLogin = () => {
  const [usrId, setUsrId] = React.useState('');
  const [usrPwd, setUsrPwd] = React.useState('');
  const [isLogin, setIsLogin] = React.useState(true);
  const [isRemember, setIsRemember] = React.useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['rememberId']);
  const navigate = useNavigate();
  const onClick = async () => {
    const params = {
      usrId: usrId,
      usrPw: cryptojs.AES.encrypt(
        usrPwd,
        cryptojs.enc.Utf8.parse(process.env.REACT_APP_SECRETKEY),
        {
          iv: cryptojs.enc.Utf8.parse(
            process.env.REACT_APP_SECRETKEY?.substring(0, 16),
          ),
          padding: cryptojs.pad.Pkcs7,
          mode: cryptojs.mode.CBC,
        },
      ).toString(),
    };
    localStorage.clear();
    const fetch = await Axios.post(
      '/management/subscription/admin/login',
      params,
    );
    const data = fetch.data;
    if (data.code === '0000') {
      if (data.result.usrStatus === 1) {
        localStorage.setItem('access-token', fetch.data.result.accessToken);
        localStorage.setItem('refresh-token', fetch.data.result.refreshToken);
        localStorage.setItem('usrId', usrId);
        localStorage.setItem('auth', data.result.usrTp);
        setIsLogin(true);
        const menuResult = await axios.post(
          '/management/subscription/admin/menu/inquiry',
          {
            appId: 1,
            menuId: 0,
            usrId: usrId,
          },
        );
        if (menuResult.data.code === '9005') {
          navigate('/admin', {
            state: { msg: menuResult.data.msg },
          });
        } else navigate('/admin/common/admin');
      } else {
        setIsLogin(false);
      }
    } else {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    if (cookies.rememberId) {
      setUsrId(cookies.rememberId);
      setIsRemember(true);
    }
  }, []);

  useEffect(() => {
    if (isRemember) {
      removeCookie('rememberId');
      setCookie('rememberId', usrId, {
        path: '/admin',
        maxAge: 200000000,
      });
    } else {
      removeCookie('rememberId');
    }
  }, [usrId, isRemember]);

  const OnClose = () => {
    if (!isLogin) {
      return (
        <Alert severity="error" icon={false} sx={styles.alert_error}>
          <Box sx={{ textAlign: 'center', minWidth: '294px' }}>
            아이디 또는 비밀번호를 확인해 주세요.
          </Box>
        </Alert>
      );
    } else {
      return null;
    }
  };

  return (
    <Box sx={styles.main_wrapper}>
      <Box sx={styles.login_wrapper}>
        <Box
          component="img"
          src={require('@administrator/subscription/public/assets/images/logo_bfly_adminlogin.png')}
          sx={styles.admin_logo}
        ></Box>
        <Card sx={styles.login_content_outer}>
          <CardContent sx={{ m: '0', p: '0' }}>
            <Box component="h2" sx={styles.login_heading}>
              ADMIN{' '}
              <Box component="span" sx={styles.subtext}>
                LOGIN
              </Box>
            </Box>
            <TextField
              error={!isLogin}
              id="username"
              label="아이디"
              variant="outlined"
              sx={styles.input_field}
              onChange={e => {
                setUsrId(e.target.value);
              }}
              value={usrId}
            />

            <TextField
              error={!isLogin}
              id="password"
              label="비밀번호"
              type="password"
              variant="outlined"
              sx={styles.input_field}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  onClick();
                }
              }}
              onChange={e => {
                setUsrPwd(e.target.value);
              }}
              value={usrPwd}
            />

            <FormGroup sx={styles.checkboxouter}>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    sx={styles.checkbox}
                    checked={isRemember}
                    onClick={() => {
                      setIsRemember(!isRemember);
                    }}
                  />
                }
                label="아이디 저장"
                sx={styles.checkboxlabel}
              />
            </FormGroup>
          </CardContent>
          {!isLogin ? (
            <Alert severity="error" icon={false} sx={styles.alert_error}>
              <Box sx={{ textAlign: 'center', minWidth: '294px' }}>
                아이디 또는 비밀번호를 확인해 주세요.
              </Box>
            </Alert>
          ) : (
            ''
          )}
          <CardActions sx={styles.loginbutton_outer}>
            <Button
              aria-label="primary"
              sx={styles.loginbutton}
              className="sub_button_blue"
              onClick={onClick}
            >
              로그인
            </Button>
          </CardActions>
        </Card>
        <Box component="div" sx={styles.footer_text}>
          ⓒ Bflysoft Corp.
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  alert_error: {
    backgroundColor: '#F9F9F9',
    fontFamily: 'Noto Sans KR',
    width: '100%',
    fontSize: '15px',
    fontAligh: 'center',
    height: '58px',
    marginBottom: '15px',
    boxShadow: 'none !important',
    color: '#F44336',
    border: '0',
    borderRadius: '0',
    alignItems: 'center',
    marginTop: '20px',
    '&.MuiAlert-message': {
      overflow: 'hidden',
    },
  },
  loginbutton_outer: {
    p: '0',
    mt: '19px',
    flexDirection: 'column',
    boxShadow: '0px 1px 5px #0000002E',
  },
  loginbutton: {
    display: 'block',
    width: '100%',
    height: '60px',
    fontSize: '16px',
    ':hover': {
      backgroundColor: '#0615B2',
    },
  },
  checkbox: {
    ':hover': {
      backgroundColor: 'unset',
    },
    '&.Mui-checked': {
      color: '#284AD5',
    },
  },
  checkboxouter: {
    '& .MuiFormControlLabel-root': {
      m: '0',
      mb: '0',
      mt: '4px',
    },
    '& .MuiCheckbox-root': { py: '0' },
  },
  checkboxlabel: {
    '& .MuiTypography-root': {
      fontFamily: 'NotoSansKRRegular',
      fontSize: '15px',
      color: '#000000DE',
    },
    ':hover': {
      backgroundColor: 'unset',
    },
  },
  input_field: {
    borderRadius: '4px',
    border: '0000001F',
    width: '100%',
    height: '60px',
    mb: '9px',
    '& label': {
      '&.Mui-focused': {
        color: '#284AD5',
      },
      '&.Mui-error': {
        color: '#F44336',
      },
    },
    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
      borderColor: '#284AD5',
    },
    '& .MuiOutlinedInput-root.Mui-error fieldset': {
      borderColor: '#F44336',
      color: '#F44336',
    },
  },
  login_content_outer: {
    px: '30px',
    mx: '0',
    pb: '30px',
    width: '100%',
    minHeight: '365px !important',
    borderRadius: '6px',
    boxShadow: '0px 1px 5px #0000001F',
  },
  login_heading: {
    display: 'block',
    color: '#000000DE',
    textAlign: 'center',
    fontFamily: 'NotoSansKRBold',
    fontSize: '20px',
    lineHeight: '20px',
    mt: '40px',
    mb: '30px',
  },
  subtext: {
    color: '#888888DE',
    fontFamily: 'inherit',
    fontSize: 'inherit',
  },
  admin_logo: {
    display: 'block',
    margin: '0 auto 20px auto',
  },
  login_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    alignItems: 'center',
    border: '0 solid black',
    width: '386px',
    height: '100%',
  },
  main_wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#F2F3F6',
    backgroundImage: `url(${Image})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
  footer_text: {
    fontFamily: 'NotoSansKRRegular',
    fontSize: '14px',
    color: '#555',
    marginTop: '30px',
  },
};
export default AdminLogin;
