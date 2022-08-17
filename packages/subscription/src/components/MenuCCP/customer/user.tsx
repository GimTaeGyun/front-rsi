import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';

import AppFrame from '../../../container/AppFrame';
import { AlertPopupData, DefaultAlertPopupData } from '../../../data/atoms';
import axios from '../../../utils/axios';
import AlertPopup from '../../Common/AlertPopup';
import SubmitButton from './components/SubmitButton';
import TabButton from './components/TopButton';
import {CustomerTab} from '../../../data/atoms';
const User = () => {
  // alertPopup object
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);

  return (
    <>
      <AppFrame
        title="고객 관리"
        breadcrumbs={[
          { name: '고객/계약/결제 관리', link: '/admin/ccp/customer' },
          { name: '고객 관리', link: '/admin/ccp/customer' },
          { name: '사용자관리', link: '/admin/ccp/customer/user' },
        ]}
      >
        <>
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
        </>
      </AppFrame>
    </>
  );
};

export default User;
