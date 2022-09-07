import '../../../public/assets/css/fonts.css';
import 'rc-tree/assets/index.css';

import Box from '@mui/material/Box';
import React, { ReactElement } from 'react';

import ClientArea from '../../components/ClientArea';
import LeftMenu from '../../components/LeftMenu';
import Topbar from '../../components/Topbar';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 350;

const AppFrame = (props: {
  children?: JSX.Element;
  title?: string;
  breadcrumbs?: Array<{ name: string; link: string }>;
}): ReactElement => {
  const { children = <Box />, title = '', breadcrumbs = [] } = props;
  const navigate = useNavigate();

  React.useEffect(() => {
    if (
      localStorage.getItem('usrId') === '' ||
      localStorage.getItem('usrId') === undefined ||
      localStorage.getItem('usrId') === 'undefined' ||
      localStorage.getItem('usrId') === null ||
      localStorage.getItem('usrId') === 'null'
    )
      navigate('/admin/login');
  }, []);

  // Handle drawer toggle
  const [open, setOpen] = React.useState(true);

  const handleToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#F4F5F7' }}>
      <Topbar handleToggle={handleToggle} />
      <LeftMenu open={open} drawerWidth={drawerWidth} />
      <ClientArea
        open={open}
        drawerWidth={drawerWidth}
        title={title}
        breadcrumbs={breadcrumbs}
      >
        {children}
      </ClientArea>
    </Box>
  );
};

export default AppFrame;
