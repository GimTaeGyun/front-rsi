import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import AppFrame from '../../../container/AppFrame';
import { AlertPopupData, DefaultAlertPopupData } from '../../../data/atoms';
import { customerData } from '../../../data/atoms';
import AlertPopup from '../../Common/AlertPopup';
import TabContent1 from '../customer/TabContent1';
import TabContent2 from '../customer/TabContent2';
import TabContent3 from '../customer/TabContent3';
import TabContent4 from '../customer/TabContent4';
import TabButton from './components/TopButton';

const CustomerTabData = [
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
        <TabContent3 />
      </>
    ),
  },
  {
    title: '문의관리',
    index: 4,
    child: (
      <>
        <TabContent4 />
      </>
    ),
  },
];

const CustomerTab = () => {
  // alertPopup object
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);

  const { state } = useLocation();
  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);

  useEffect(() => {
    setSharedCustomerData(state);
  }, []);

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
        <Box>
          {alertPopup.visible ? (
            <AlertPopup
              message={alertPopup.message}
              buttontext={alertPopup.leftText}
              rightButtonText={alertPopup.rightText}
              rightCallback={alertPopup.rightCallback}
              leftCallback={alertPopup.leftCallback}
            />
          ) : undefined}
          <TabButton item={CustomerTabData} selectedIndex={1} />
        </Box>
      </AppFrame>
    </>
  );
};

export default CustomerTab;
