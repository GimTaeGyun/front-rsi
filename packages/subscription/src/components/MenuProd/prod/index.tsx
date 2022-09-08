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
import PrdUpdatePopup from './components/PrdUpdatePopup';

const Prod = () => {
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);

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
          <PrdUpdatePopup />
        </>
      </AppFrame>
    </>
  );
};

export default Prod;
