import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { borderBottom, height } from '@mui/system';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { axios } from '../../utils/axios';
import UpdateOperatorPopupUser from './UdateOperatorPopup';

const MenuItem = styled(MuiMenuItem)({
  minWidth: '180px',
  minHeight: '50x',
  fontSize: '15px',
  '&:hover': {
    backgroundColor: '#F4F5F7',
  },
});

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [user, setUser] = React.useState({});
  const [userInfo, setUserInfo] = React.useState('');

  React.useEffect(() => {
    const userApi = async () => {
      try {
        const response = await axios.post(
          '/management/subscription/admin/userinfo/inquiry',
          {
            usrId: localStorage.getItem('usrId'),
          },
        );
        if (response.data.code == '0000') {
          const users = response.data.result;
          setUser(users);
          setUserInfo(
            (users.usrId ? users.usrId : '') +
              '(' +
              (users.usrNm ? users.usrNm : '') +
              ')',
          );
        } else {
          navigate('/admin/login');
        }
      } catch (e) {
        console.log(e);
        navigate('/admin/login');
      }
    };
    userApi();
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const onClickButton = () => {
    setOpen(true);
  };

  const logout = () => {
    localStorage.clear();
    navigate('/admin/login');
  };

  const datas = {
    usrId: localStorage.getItem('usrID'),
  };

  return (
    <>
      <Box color="#000000DE">
        <Box
          display="flex"
          alignItems="center"
          sx={{
            cursor: 'pointer',
          }}
          onClick={handleMenu}
        >
          <UpdateOperatorPopupUser
            open={open}
            handleClose={handleClose}
            data={user}
          />
          <Box />
          <Typography ml="5px" fontSize="14px" fontFamily="NotoSansKRRegular">
            {userInfo}
          </Typography>
        </Box>

        <Menu
          id="menu-appbar"
          disableAutoFocusItem
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          sx={{
            minHeight: '100px',
            mt: '50px',
            borderRadius: '6px',
            '& .MuiList-root': {
              border: '1px solid #0000001F',
              borderRadius: '6px',
              padding: 0,
            },
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={onClickButton}
            sx={{
              height: '49px',
              borderBottom: '1px solid ',
              borderColor: '#0000001F',
              fontFamily: 'NotoSansKRRegular',
            }}
          >
            개인정보 설정
          </MenuItem>
          <MenuItem
            onClick={logout}
            sx={{ height: '49px', fontFamily: 'NotoSansKRRegular' }}
          >
            로그아웃
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default ProfileMenu;
