import React, { ReactElement } from 'react';
import Box from "@mui/material/Box";

import ClientArea from '../../components/ClientArea';
import LeftMenu from '../../components/LeftMenu';
import Topbar from '../../components/Topbar';

const drawerWidth = 350;

const AppFrame = (props: { children?: JSX.Element, title?: string }): ReactElement => {
  const { children = <Box />, title = "" } = props;

  // Handle drawer toggle
  const [open, setOpen] = React.useState(true);

  const handleToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      <Topbar handleToggle={handleToggle} />
      <LeftMenu open={open} drawerWidth={drawerWidth} />
      <ClientArea open={open} drawerWidth={350} title={title}>
        {children}
      </ClientArea>
    </Box>
  );
};

export default AppFrame;
