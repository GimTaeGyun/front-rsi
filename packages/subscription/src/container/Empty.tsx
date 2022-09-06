import React, { useEffect, useState } from 'react';
import AppFrame from './AppFrame';
import AlertPopup from '../components/Common/AlertPopup';
import { DefaultAlertPopupData } from '../data/atoms';

const Empty = () => {
  const [alertPopup, setAlertPopup] = useState(DefaultAlertPopupData);

  useEffect(() => {
    if (
      !localStorage.getItem('deny') &&
      localStorage.getItem('auth') !== 'SYSUSER'
    ) {
      localStorage.setItem('deny', 'true');
      setAlertPopup({
        ...alertPopup,
        visible: true,
        message:
          '현재 접근 권한이 없습니다.\n시스템관리자에게 문의하시길 바랍니다.',
        leftText: '확인',
        leftCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
        },
      });
    }
  }, []);
  return (
    <>
      <AppFrame title="" breadcrumbs={[]}></AppFrame>
      {alertPopup.visible ? (
        <AlertPopup
          message={alertPopup.message}
          leftCallback={alertPopup.leftCallback}
          buttontext={alertPopup.leftText}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Empty;
