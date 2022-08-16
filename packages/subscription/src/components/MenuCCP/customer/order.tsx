import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';

import AppFrame from '../../../container/AppFrame';
import { AlertPopupData, DefaultAlertPopupData } from '../../../data/atoms';
import axios from '../../../utils/axios';
import AlertPopup from '../../Common/AlertPopup';

import TabContent1 from './components/TabContent1';
import TabContent2 from './components/TabContent2';
import TabButton from './components/TopButton';

const Data = [
  {
    title: '상세정보',
    index: 1,
    child: (
      <>
        <TabContent1 />
      </>
    ),
  },
  {
    title: '주문정보',
    index: 2,
    child: (
      <>
        <TabContent2 />
      </>
    ),
  },
  {
    title: '사용자관리',
    index: 3,
    child: (
      <>
      </>
    ),
  },
  {
    title: '문의관리',
    index: 4,
    child: (
      <>
      </>
    ),
  },
];

const Order = () => {
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
        <Box>
          {alertPopup.visible ? (
            <AlertPopup
              message={alertPopup.message}
              buttontext={alertPopup.leftText}
              rightButtonText={alertPopup.rightText}
              rightCallback={alertPopup.rightCallback}
              closeCallback={alertPopup.leftCallback}
            />
          ) : undefined}
          <TabButton item={Data} selectedIndex={2} />
        </Box>
      </AppFrame>
    </>
  );
};
export default Order;
