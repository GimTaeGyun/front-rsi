import { Box } from '@mui/material';
import React from 'react';

import AppFrame from '../../../container/AppFrame';
import axios from '../../../utils/axios';
import { AlertPopupData, DefaultAlertPopupData } from '../../../data/atoms';
import { useAtom } from 'jotai';
import AlertPopup from '../../Common/AlertPopup';
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
          { name: '주문정보', link: '/admin/ccp/customer/order' },
        ]}
      >
        {alertPopup.visible ? (
          <AlertPopup
            message={alertPopup.message}
            buttontext={alertPopup.leftText}
            rightButtonText={alertPopup.rightText}
            rightCallback={alertPopup.rightCallback}
            closeCallback={alertPopup.leftCallback}
          />
        ) : undefined}
      </AppFrame>
    </>
  );
};

export default Admin;
