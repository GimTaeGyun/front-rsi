import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import ProfileMenu from './ProfileMenu';

const Topbar = (props: {
  handleToggle: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { handleToggle } = props;

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
        height: '64px',
        bgcolor: '#fff',
        color: '#000000',
        boxShadow: '0px 2px 5px #0000002E',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleToggle}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ fontSize: '20px', fontFamily: 'NotoSansKRMedium' }}
          noWrap
          component="div"
        >
          Bflysoft 통합 관리자
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            ml: '23px',
            mr: '20px',
          }}
        >
          <Button
            key="subscription"
            sx={{
              mr: '10px',
              display: 'block',
              bgcolor: '#284AD5',
              fontSize: '13px',
              height: '25px',
              padding: '2px 5px',
              '&:hover': {
                bgcolor: '#284AD5',
              },
            }}
            variant="contained"
          >
            구독관리
          </Button>
          <Button
            key="partnership"
            sx={{
              display: 'block',
              color: '#AAAAAA',
              bgcolor: '#EEEEEE',
              borderColor: '#DEDEDE',
              fontSize: '13px',
              height: '25px',
              padding: '2px 5px',
              '&:hover': {
                bgcolor: '#EEEEEE',
              },
            }}
          >
            제휴관리
          </Button>
        </Box>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
