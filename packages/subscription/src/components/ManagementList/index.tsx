import { Box } from '@mui/material';
import { atom, useAtom } from 'jotai';
import React from 'react';

import AppFrame from '../../container/AppFrame';
import DataTable from './components/Datatable';
import ModifySettingsPopup from './components/ModifySettingsPopup';
import Sidebar, { ITreeItem } from './components/Sidebar';
import UpdateOperatorPopup from './components/UpdateOperatorPopup';
import axios from '../../utils/axios';

const ManagementList = () => {
  const [selectedTreeitem, setSelectedTreeitem] = React.useState<ITreeItem>();
  const [open, setOpen] = React.useState(false);
  const [updateOperOpen, setUpdateOperOpen] = React.useState(false);
  const [updateOperValue, setUpdateOperValue] = React.useState({
    action: 'mod',
    email: '',
    phone: '',
    status: 1,
    usrGrpId: ['1', '2', '3'],
    usrId: '',
    usrNm: '',
    usrPw: '',
    usrTp: 'DEFAULT',
    description: '',
  });
  const cellClickEvent = (params: any) => {
    if (params.field === 'management') {
      axios
        .post('/management/subscription/admin/userinfo/inquiry', {
          usrId: 'sysadm', //params.id,
        })
        .then(res => {
          setUpdateOperValue({
            ...res.data.result,
            description: params.row.description,
          });
          setUpdateOperOpen(true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <AppFrame title="운영자 관리">
        <>
          <Box display="flex">
            <Sidebar onSelect={item => setSelectedTreeitem(item)} />
            <Box sx={{ ml: '30px', width: '100%' }}>
              <DataTable
                cellClickEvent={cellClickEvent}
                treeItem={selectedTreeitem}
              />
            </Box>
          </Box>
          <ModifySettingsPopup open={open} handleClose={() => setOpen(false)} />
          <UpdateOperatorPopup
            open={updateOperOpen}
            handleClose={() => setUpdateOperOpen(false)}
            value={updateOperValue}
          />
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

export default ManagementList;
