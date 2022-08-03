import { ConnectingAirportsOutlined } from '@mui/icons-material';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';

import axios from '../../utils/axios';
import LeftMenuMenuItem from './LeftMenuItem';

const LeftMenu = (props: { drawerWidth: number; open: boolean }) => {
  const { drawerWidth, open } = props;
  const [menuItems, setMenuItems] = React.useState([]);

  React.useEffect(() => {
    const callMenuApi = async () => {
      try {
        const menuResult = await axios.post(
          '/management/subscription/admin/menu/inquiry',
          {
            appId: 1,
            menuId: 0,
            usrId: localStorage.getItem('usrId'),
          },
        );
        const tempMenuItems = [] as any;
        for (const menu of menuResult.data.result.subMenu) {
          const menuItem = {
            title: menu.menuNm,
            icon: <></>,
            items: [] as any,
          };

          switch (menu.menuId) {
            case 1:
              menuItem.icon = <SettingsIcon />;
              break;
            case 2:
              menuItem.icon = <PersonIcon />;
              break;
            case 3:
              menuItem.icon = <DesktopMacIcon />;
              break;
          }

          for (const subMenu of menu.subMenu) {
            if (subMenu == null) continue;
            menuItem.items.push({ title: subMenu.menuNm });
          }
          tempMenuItems.push(menuItem);
        }
        setMenuItems(tempMenuItems);
      } catch (e) {
        console.log(e);
      }
    };
    callMenuApi();
  }, []);

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
        {menuItems.map((menuItem, index) => (
          <List key={`list-item-${index}`}>
            <LeftMenuMenuItem defaultOpen={index === 0} menuItem={menuItem} />
          </List>
        ))}
      </Box>
    </Drawer>
  );
};

export default LeftMenu;
