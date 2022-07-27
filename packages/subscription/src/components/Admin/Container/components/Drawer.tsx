import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";

import LogoImage from "../../../../assets/images/logo_bfly.png";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AdminDrawerMenuItem from "./DrawerMenuItem";

const menuItems = [
  {
    title: "공통 관리",
    icon: <SettingsIcon />,
    items: [
      {
        title: "운영자 관리"
      },
      {
        title: "서비스 관리"
      },
      {
        title: "매체 관리"
      },
      {
        title: "공지사항 관리"
      },
      {
        title: "약관 관리"
      }
    ]
  },
  {
    title: "고객 / 계약 / 결제 관리",
    icon: <PersonIcon />,
    items: [
      {
        title: "운영자 관리"
      }
    ]
  },
  {
    title: "상품 관리",
    icon: <DesktopMacIcon />,
    items: [
      {
        title: "운영자 관리"
      }
    ]
  }
];

const AdminDrawer = (props: { drawerWidth: number; open: boolean }) => {
  const { drawerWidth, open } = props;

  return (
    <Drawer
      variant="persistent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#284AD5"
        }
      }}
      anchor="left"
      open={open}
    >
      <Toolbar sx={{ mt: "64px" }}>
        <Box component="img" alt="logo" src={LogoImage} />
      </Toolbar>
      <Box sx={{ overflow: "auto" }}>
        {menuItems.map((menuItem, index) => (
          <List key={`list-item-${index}`}>
            <AdminDrawerMenuItem defaultOpen={index === 0} menuItem={menuItem} />
          </List>
        ))}
      </Box>
    </Drawer>
  );
};

export default AdminDrawer;
