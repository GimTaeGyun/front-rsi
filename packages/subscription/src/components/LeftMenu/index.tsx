import { ConnectingAirportsOutlined } from '@mui/icons-material';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { axios } from '../../utils/axios';
import LeftMenuMenuItem from './LeftMenuItem';
const menuLink = [
  '###', // 0 root
  '/admin/common/admin', // 4 운영자 관리
  '/admin/common/rsi', // 4 운영자 관리
  '/admin/trade', // 1 거래 내역
  '/admin/common', // 1 공통관리
  '/admin/ccp', // 2 고객/계약/결제 관리
  '/admin/prod', // 3 상품관리
  '/admin/common/service', // 5 서비스 관리
  '/admin/common/media', // 6 매체 관리
  '/admin/common/notice', // 7 공지사항 관리
  '/admin/common/terms', // 8 약관 관리
  '/admin/ccp/customer', // 9 고객 관리
  '/admin/ccp/contract', // 10 계약 관리
  '/admin/ccp/pay', // 11 결제 관리
  '/admin/prod/itemgrp', // 12 상품 그룹 관리
  '/admin/prod/option', // 13 옵션 관리
  '/admin/prod/prod', // 14 상품 관리
  '###', // 15
  '###', // 16
  '###', // 17
  '###', // 18
  '/admin/prod/allprod', // 19
];
const LeftMenu = (props: { drawerWidth: number; open: boolean }) => {
  const { drawerWidth, open } = props;
  const [menuItems, setMenuItems] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    const callMenuApi = async () => {
      try {
        const menuResult = await axios.post(
          // '/management/subscription/admin/menu/inquiry',
          '/rsiupbit/menu',
          {
            appId: 1,
            menuId: 0,
            usrId: localStorage.getItem('usrId'),
          },
        );
        const tempMenuItems = [] as any;
        console.log('usrId 이상함222'+ menuResult.data.result);
        // for (const menu of menuResult.data.result.subMenu) {
        for (const menu of menuResult.data.result) {
          const menuItem = {
            title: menu.menu_nm,
            icon: <></>,
            items: [] as any,
            menuId: menu.menu_id,
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

          if (menu.subMenu) {
            for (const subMenu of menu.subMenu) {
              if (subMenu == null) continue;
              menuItem.items.push({
                title: subMenu.menuNm,
                link: menuLink[subMenu.menuId],
              });
            }
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
      <Toolbar sx={{ mt: '64px', height: '74px', padding: '9px !important' }}>
        <Box
          component="img"
          alt="logo"
          src={require('@administrator/subscription/public/assets/images/logo_bfly.png')}
          sx={{
            borderTop: '6px solid #284AD5',
            maxnHeight: '74px',
            paddingRight: '8px',
          }}
        />
      </Toolbar>
      <Box sx={{ overflow: 'auto' }}>
        {menuItems.map((menuItem: any, index) => (
          <List disablePadding key={`list-item-${index}`}>
            <LeftMenuMenuItem
              defaultOpen={
                window.location.pathname.includes(menuLink[menuItem.menuId])
                  ? true
                  : false
              }
              menuItem={menuItem}
            />
          </List>
        ))}
      </Box>
    </Drawer>
  );
};

export default LeftMenu;
