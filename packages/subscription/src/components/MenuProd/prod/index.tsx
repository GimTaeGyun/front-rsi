import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useEffect, useMemo, useState } from 'react';

import AppFrame from '../../../container/AppFrame';
import { AlertPopupData, DefaultGrpInfo, PrdMng } from '../../../data/atoms';
import { axios } from '../../../utils/axios';
import AlertPopup from '../../Common/AlertPopup';
import DataTableProd from './components/DataTableProd';
import PrdGrpInfo from './components/PrdGrpInfo';
import SidebarRcTree from './components/SidebarRcTree';
import DialogProductRegister from './components/DialogProductRegister';
import DialogGNBList from './components/DialogGNBList';

const Prod = () => {
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [showDialogRegister, setShowDialogRegister] = useState(true);
  const [showDialogGNBList, setShowDialogGNBList] = useState(false);

  return (
    <>
      <AppFrame
        title="상품 관리"
        breadcrumbs={[
          { name: '상품 관리', link: '/admin/prod/itemgrp' },
          { name: '상품 관리', link: '/admin/prod/prod' },
        ]}
      >
        <>
          {showDialogRegister ? (
            <DialogProductRegister
              open={showDialogRegister}
              handleClose={() => {
                setShowDialogRegister(!showDialogRegister);
              }}
            />
          ) : undefined}
          {showDialogGNBList ? (
            <DialogGNBList
              open={showDialogGNBList}
              handleClose={() => {
                setShowDialogGNBList(!showDialogGNBList);
              }}
            />
          ) : undefined}
          {alertPopup.visible ? (
            <AlertPopup
              message={alertPopup.message}
              buttontext={alertPopup.leftText}
              rightButtonText={alertPopup.rightText}
              rightCallback={alertPopup.rightCallback}
              leftCallback={alertPopup.leftCallback}
            />
          ) : undefined}
          <Box
            display="flex"
            sx={{
              fontFamily: 'NotoSansKRMedium',
            }}
          >
            <SidebarRcTree />
            <Box sx={{ ml: '30px', width: '100%' }}>
              <PrdGrpInfo />
              <DataTableProd />
            </Box>
          </Box>
        </>
      </AppFrame>
    </>
  );
};

export default Prod;
