import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { ReactElement } from 'react';

const Main = styled('main', {
  shouldForwardProp: prop => prop !== 'open' && prop !== 'drawerWidth',
})<{
  open?: boolean;
  drawerWidth?: number;
}>(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  padding: '38px',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  marginTop: '64px',
}));

const ClientArea = (props: {
  drawerWidth: number;
  open: boolean;
  title: string;
  children: JSX.Element;
}): ReactElement => {
  const { drawerWidth, open, title, children } = props;

  return (
    <Main open={open} drawerWidth={drawerWidth}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ color: '#00000099', fontSize: '14px' }}
          href="/admin/common/admin"
        >
          공통 관리
        </Link>
        <Typography sx={{ color: '#000000DE', fontSize: '14px' }}>
          운영자 관리
        </Typography>
      </Breadcrumbs>
      <Typography
        sx={{
          color: '#000000',
          fontSize: '35px',
          fontFamily: 'NotoSansKRMedium',
          mt: '15px',
          mb: '30px',
        }}
      >
        {title}
      </Typography>
      {children}
    </Main>
  );
};
export default ClientArea;
