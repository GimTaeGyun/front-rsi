import axios from '@administrator/subscription/src/utils/axios';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';

//import AdminDrawerMenuItem from './DrawerMenuItem';

const AdminDrawer = (props: { drawerWidth: number; open: boolean }) => {
  const { drawerWidth, open } = props;
  const [menuItems, setMenuItems] = React.useState([]);
  /*React.useEffect(() => {
    axios.post('/management/subscription/admin/menu/inquiry', {
      appId: 1,
      menueId: 0,
      usrId: localStorage.getItem('usrId'),
    });
  }, []);*/

  return (
    <Drawer
      variant="persistent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: '#284AD5',
        },
      }}
      anchor="left"
      open={open}
    >
      <Toolbar sx={{ mt: '64px' }}>
        <Box
          component="img"
          alt="logo"
          src={require('@administrator/subscription/public/assets/images/logo_bfly.png')}
        />
      </Toolbar>
      <Box sx={{ overflow: 'auto' }}>
        {menuItems.map(index => (
          <List key={`list-item-${index}`}>
            {/*
            <AdminDrawerMenuItem
              defaultOpen={index === 0}
              menuItem={menuItem}
            />
        */}
          </List>
        ))}
      </Box>
    </Drawer>
  );
};

export default AdminDrawer;
