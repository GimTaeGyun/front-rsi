import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { atom, useAtom } from 'jotai';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import AddOperatorPopupUser from './AddOperatorPopup';

const data = {
  usremail: 'bfly@bflysoft.com',
  usrphone: '010-0000-0000',
  status: 1,
  usrGrpId: ['1', '2', '3'],
  usrId: 'g9soft',
  usrNm: '지구소프트',
  usrPw: 'g9soft',
  usrTp: 'DEFAULT',
};

const MenuItem = styled(MuiMenuItem)({
  minWidth: '180px',
  minHeight: '50x',
  fontSize: '15px',
  '&:hover': {
    backgroundColor: '#F4F5F7',
  },
});

export const openSettingsAtom = atom(false);

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // Toggle modify settings popup
  const navigate = useNavigate();
  const [open, setOpen] = useAtom(openSettingsAtom);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = () => {
    handleClose();
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickButton = () => {
    setOpen(true);
  };

  const logout = () => {
    localStorage.clear();
    navigate('/admin/login');
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
          <AddOperatorPopupUser
            open={open}
            handleClose={() => {
              setOpen(false);
            }}
            data={data}
          />
          <Box
            component="img"
            src={
              require('@administrator/subscription/public/assets/images/account_circle.svg')
                .default
            }
          />
          <Typography ml="5px" fontSize="14px">
            admin
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
            mt: '50px',
            borderRadius: '6px',
            '& .MuiList-root': {
              borderRadius: '6px',
              padding: 0,
            },
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={onClickButton}>개인정보 설정</MenuItem>
          <MenuItem onClick={logout}>로그아웃</MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default ProfileMenu;
