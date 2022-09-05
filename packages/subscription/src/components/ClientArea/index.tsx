import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

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
  breadcrumbs: Array<{ name: string; link: string }>;
}): ReactElement => {
  const { drawerWidth, open, title, children, breadcrumbs = [] } = props;

  return (
    <Main open={open} drawerWidth={drawerWidth} sx={{ maxWidth: '100%' }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ fontSize: '14px', fontFamily: 'NotoSansKRRegular ' }}
      >
        {breadcrumbs.map((item, index) => {
          if (index == breadcrumbs.length - 1)
            return (
              <Typography
                key={index}
                sx={{
                  color: '#000000DE',
                  fontSize: '14px',
                  fontFamily: 'NotoSansKRRegular ',
                }}
              >
                {item.name}
              </Typography>
            );
          else
            return (
              <Link
                key={index}
                underline="hover"
                sx={{
                  color: '#00000099',
                  fontSize: '14px',
                  fontFamily: 'NotoSansKRRegular ',
                }}
                component={RouterLink}
                to={item.link}
              >
                {item.name}
              </Link>
            );
        })}
      </Breadcrumbs>
      <Typography
        sx={{
          color: '#000000',
          fontSize: '35px',

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
