import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import TabContent1 from '../components/MenuCCP/customer/components/TabContent1';
import TabContent2 from '../components/MenuCCP/customer/components/TabContent2';
import PersonalInfo from '../components/MenuCCP/customer/components/PersonalInfo';
import React from 'react';

import axios from '../utils/axios';

// Agreement
const AgreementData = atomWithStorage();

// SignUp
const SignupData = atom();

const SignupUser = async data => {
  const response = await axios.post(
    '/management/subscription/customer/signup',
    data,
  );

  return response.data;
};

const CheckLoginId = async data => {
  const response = await axios.post(
    '/management/subscription/customer/check',
    data,
  );

  if (response.data.code !== '0000') {
    return false;
  } else {
    return true;
  }
};

const GetSidebarData = atom();

export const DefaultAlertPopupData = {
  visible: false,
  message: '',
  leftCallback: () => {},
  rightCallback: () => {},
  leftText: '확인',
  rightText: '',
};
const AlertPopupData = atom(DefaultAlertPopupData);

// 고객관리 테이블 로우 정보보기 공유데이터
const customerData = atom();
export const CustomerTab = [
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
        <PersonalInfo />
      </>
    ),
  },
  {
    title: '문의관리',
    index: 4,
    child: (
      <>
        <PersonalInfo />
      </>
    ),
  },
];

export {
  SignupData,
  AgreementData,
  SignupUser,
  CheckLoginId,
  GetSidebarData,
  AlertPopupData,
  customerData
};
