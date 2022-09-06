import React, { useEffect, useState } from 'react';
import AppFrame from './AppFrame';
import AlertPopup from '../components/Common/AlertPopup';
import { DefaultAlertPopupData } from '../data/atoms';
import { useLocation } from 'react-router-dom';

const Empty = () => {
  const [alertPopup, setAlertPopup] = useState(DefaultAlertPopupData);
  const location = useLocation();

  useEffect(() => {
    setAlertPopup({
      ...alertPopup,
      visible: true,
      message: (location.state as any).msg,
      leftText: '확인',
      leftCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
      },
    });
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
