import React from 'react';
import SubmitButton from './SubmitButton';

import UserInfo from './UserInfo';
import PersonalInfo from './PersonalInfo';
import CompInfo from './CompInfo';
import {customerData} from '../../../../data/atoms';
import {useAtom} from 'jotai'

const TabContent1 = () => {

  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);
  console.log(sharedCustomerData);

  return (
    <>
      <UserInfo/>
      {sharedCustomerData.custTp == '개인' ? <PersonalInfo/> : <CompInfo/>}
      <SubmitButton />
    </>
  );
};
export default TabContent1;
