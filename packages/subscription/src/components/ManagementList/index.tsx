import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';
import AppFrame from '../../container/AppFrame';
import { openSettingsAtom } from '../Topbar/ProfileMenu';

import DataTable from './components/Datatable';
import ModifySettingsPopup from './components/ModifySettingsPopup';
import Sidebar from './components/Sidebar';
import TreeView from './components/TreeView';

const ManagementList = () => {
  const [open, setOpen] = useAtom(openSettingsAtom);

  return (
    <>
      <AppFrame title="운영자 관리">
        <>
          <Box display="flex">
            <TreeView />
            <Box sx={{ ml: '30px', width: '100%' }}>
              <DataTable />
            </Box>
          </Box>
          <ModifySettingsPopup open={open} handleClose={() => setOpen(false)} />
        </>
      </AppFrame>

      <Box
        sx={{
          width: '100%',
          height: '400px',
          zIndex: 300,
          backgroundColor: 'white',
          position: 'absolute',
        }}
      ></Box>
    </>
  );
};
<>
  <AppFrame title="운영자 관리">
    <Box display="flex">
      <Sidebar />
      <Box sx={{ ml: '30px', width: '100%' }}>
        <DataTable />
      </Box>
    </Box>
  </AppFrame>
</>;

export default ManagementList;
