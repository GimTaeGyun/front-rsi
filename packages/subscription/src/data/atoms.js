import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import React from 'react';

atomWithStorage();
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

// 상품관리>상품관리 공유 데이터
const DefaultGrpInfo = {
  description: '',
  prdGrpId: 0,
  prdGrpNm: '',
  uppPrdGrpId: 0,
  introduction: '',
  status: 1,
};
const PrdMng = atom({ mngInput: DefaultGrpInfo });

export { GetSidebarData, AlertPopupData, customerData, PrdMng, DefaultGrpInfo };
