import React, {useState} from 'react';

import UserInfo from './UserInfo';
import PersonalInfo from './PersonalInfo';
import CompInfo from './CompInfo';
import {AlertPopupData, customerData} from '../../../../data/atoms';
import {useAtom} from 'jotai'
import PwResetPopup from '../../../Common/PwResetPopup';
import {DefaultAlertPopupData} from '../../../../data/atoms';
import AlertPopup from '../../../Common/AlertPopup';

const TabContent1 = () => {
  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);
  const [pwResetPopupOpen, setPwResetPopupOpen] = useState(true);
  const [alertPopupData, setAlertPopupData] = useState({...DefaultAlertPopupData, message:"비밀번호가 변경되었습니다."});
  return (
    <>
      <PwResetPopup open={pwResetPopupOpen} closeCallback={()=>{setPwResetPopupOpen(!pwResetPopupOpen)}}/>
      <AlertPopup message={alertPopupData.message} buttontext={alertPopupData.leftText} closeCallback={alertPopupData.leftCallback} />
      <UserInfo/>
      {sharedCustomerData.custTp == '개인' ? <PersonalInfo/> : <CompInfo/>}
    </>
  );
};
export default TabContent1;
