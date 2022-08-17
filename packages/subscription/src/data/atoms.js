import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';


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
export {
  SignupData,
  AgreementData,
  SignupUser,
  CheckLoginId,
  GetSidebarData,
  AlertPopupData,
  customerData
};
