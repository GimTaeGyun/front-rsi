import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';

import AppFrame from '../../../container/AppFrame';
import { AlertPopupData, DefaultAlertPopupData } from '../../../data/atoms';
import axios from '../../../utils/axios';
import AlertPopup from '../../Common/AlertPopup';
import Info from './components/Info';
import { SubmitButton } from './components/SubmitButton';
import TabButton from './components/TopButton';

const Data = [
  {
    title: '상세정보',
    index: 1,
  },
  {
    title: '주문정보',
    index: 2,
  },
  {
    title: '사용자관리',
    index: 3,
  },
  {
    title: '문의관리',
    index: 4,
  },
];

const Admin = () => {
  // alertPopup object
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);

  return (
    <>
      <AppFrame
        title="고객 관리"
        breadcrumbs={[
          { name: '고객/계약/결제 관리', link: '/admin/ccp/customer' },
          { name: '고객 관리', link: '/admin/ccp/customer' },
          { name: '상세정보', link: '/admin/ccp/customer/detail' },
        ]}
      >
        <Box sx={{ minWidth: '1480px' }}>
          {alertPopup.visible ? (
            <AlertPopup
              message={alertPopup.message}
              buttontext={alertPopup.leftText}
              rightButtonText={alertPopup.rightText}
              rightCallback={alertPopup.rightCallback}
              closeCallback={alertPopup.leftCallback}
            />
          ) : undefined}
          <TabButton item={Data} />
          <Info />
          <SubmitButton />
        </Box>
      </AppFrame>
    </>
  );
};

export default Admin;
