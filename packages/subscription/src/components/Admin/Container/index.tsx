import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import AdminDrawer from "./components/Drawer";
import ProfileMenu from "./components/ProfileMenu";

const drawerWidth = 350;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: "38px",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }),
  marginTop: "64px"
}));

const AdminContainer = (props: { children: JSX.Element, title: string }) => {
  const { children, title } = props;

  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          height: "64px",
          bgcolor: "#fff",
          color: "#000000",
          boxShadow: "0px 2px 5px #0000002E"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ fontSize: "20px", fontFamily: "NotoSansKRMedium" }}
            noWrap
            component="div"
          >
            Bflysoft 통합 관리자
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ml: "23px",
              mr: "20px"
            }}
          >
            <Button
              key="subscription"
              sx={{
                mr: "10px",
                display: "block",
                bgcolor: "#284AD5",
                fontSize: "13px",
                height: "25px",
                padding: "2px 5px",
                "&:hover": {
                  bgcolor: "#284AD5"
                }
              }}
              variant="contained"
            >
              구독관리
            </Button>
            <Button
              key="partnership"
              sx={{
                display: "block",
                color: "#AAAAAA",
                bgcolor: "#EEEEEE",
                borderColor: "#DEDEDE",
                fontSize: "13px",
                height: "25px",
                padding: "2px 5px",
                "&:hover": {
                  bgcolor: "#EEEEEE"
                }
              }}
            >
              제휴관리
            </Button>
          </Box>
          <ProfileMenu />
        </Toolbar>
      </AppBar>
      <AdminDrawer drawerWidth={drawerWidth} open={open} />
      <Main open={open}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ color: "#00000099", fontSize: "14px" }}
            href="/"
          >
            공통 관리
          </Link>
          <Typography sx={{ color: "#000000DE", fontSize: "14px" }}>
            운영자 관리
          </Typography>
        </Breadcrumbs>
        <Typography
          sx={{
            color: "#000000",
            fontSize: "35px",
            fontFamily: "NotoSansKRMedium",
            mt: "15px",
            mb: "30px"
          }}
        >
          {title}
        </Typography>
        {children}
      </Main>
    </Box>
  );
};

export default AdminContainer;
