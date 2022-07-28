import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const MenuItem = styled(MuiMenuItem)({
  minWidth: '180px',
  minHeight: "50x",
  fontSize: "15px",
  '&:hover': {
    backgroundColor: '#F4F5F7',
  },
});

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box color="#000000DE">
      <Box
        display="flex"
        alignItems="center"
        sx={{
          cursor: 'pointer',
        }}
        onClick={handleMenu}
      >
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
            padding: 0
          },
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>개인정보 설정</MenuItem>
        <MenuItem onClick={handleClose}>로그아웃</MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileMenu;
