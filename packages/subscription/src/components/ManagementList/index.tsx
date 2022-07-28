import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';
import AppFrame from '../../container/AppFrame';
import { openSettingsAtom } from '../Topbar/ProfileMenu';

import DataTable from './components/Datatable';
import ModifySettingsPopup from './components/ModifySettingsPopup';
import Sidebar from './components/Sidebar';

const ManagementList = () => {
  const [open, setOpen] = useAtom(openSettingsAtom);

  return (
    <AppFrame title="운영자 관리">
      <>
        <Box display="flex">
          <Sidebar />
          <Box sx={{ ml: '30px', width: '100%' }}>
            <DataTable />
          </Box>
        </Box>
        <ModifySettingsPopup open={open} handleClose={() => setOpen(false)} />
      </>
    </AppFrame>
  );
};

export default ManagementList;
