import '../../../public/assets/css/fonts.css';

import Box from '@mui/material/Box';
import React, { ReactElement } from 'react';

import ClientArea from '../../components/ClientArea';
import LeftMenu from '../../components/LeftMenu';
import Topbar from '../../components/Topbar';

const drawerWidth = 350;

const AppFrame = (props: {
  children?: JSX.Element;
  title?: string;
  links: Array<Object>
}): ReactElement => {
  const { children = <Box />, title = '' } = props;

  // Handle drawer toggle
  const [open, setOpen] = React.useState(true);

  const handleToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      <Topbar handleToggle={handleToggle} />
      <LeftMenu open={open} drawerWidth={drawerWidth} />
      <ClientArea open={open} drawerWidth={drawerWidth} title={title} links={props.links}>
        {children}
      </ClientArea>
    </Box>
  );
};

export default AppFrame;
