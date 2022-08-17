import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';

import AppFrame from '../../../container/AppFrame';
import { AlertPopupData, DefaultAlertPopupData } from '../../../data/atoms';
import {customerData, CustomerTab} from '../../../data/atoms';
import AlertPopup from '../../Common/AlertPopup';
import SubmitButton from './components/SubmitButton';
import TabButton from './components/TopButton';
import { useLocation } from 'react-router-dom';

const Detail = () => {
  // alertPopup object
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);

  const {state} = useLocation();
  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);
  setSharedCustomerData(state);

  
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
              closeCallback={alertPopup.leftCallback}
            />
          ) : undefined}
          <TabButton item={CustomerTab} selectedIndex={1} />
          <SubmitButton />
        </Box>
      </AppFrame>
    </>
  );
};

export default Detail;
