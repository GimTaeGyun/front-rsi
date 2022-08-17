import React, { useEffect, useState } from 'react';
import axios from '../../../../utils/axios';
import UserInfo from './UserInfo';
import PersonalInfo from './PersonalInfo';
import CompInfo from './CompInfo';
import CompMngInfo from './CompMngInfo';
import { useAtom } from 'jotai';
import PwResetPopup from '../../../Common/PwResetPopup';
import { DefaultAlertPopupData, customerData } from '../../../../data/atoms';
import AlertPopup from '../../../Common/AlertPopup';
import * as Yup from 'yup';
import SubmitButton from './SubmitButton';

const validator = Yup.object().shape({
  usrPw: Yup.string()
    .required()
    .min(8)
    .max(16)
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
});

const TabContent1 = () => {
  const [pwResetPopupOpen, setPwResetPopupOpen] = useState(false);
  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);
  const [loaded, setLoaded] = useState(false);

  const [alertPopupData, setAlertPopupData] = useState(DefaultAlertPopupData);

  useEffect(() => {
    const userApi = async () => {
      /*let tmpData = {
        rnum: 10,
        custId: '6a0c51e2e57af3f7f2186cbe6e0c18f9',
        custNm: '개발자',
        custTp: {
          value: 3,
          label: '개인',
        },
        loginId: 'atayun',
        mobile: '010-5555-5566',
        email: 'g9soft@gmail.com',
        joinedAt: '2022-07-22 00:20',
        status: {
          value: 1,
          label: '사용',
        },
      };*/
      let tmpData = {
        rnum: 8,
        custId: '232e9b0a3bb22717c5e54ae9df67219e',
        custNm: null,
        custTp: {
          value: 1,
          label: '법인',
        },
        loginId: 'ibk07',
        mobile: null,
        email: null,
        joinedAt: '2022-06-27 15:36',
        status: {
          value: 1,
          label: '사용',
        },
      };
      if (loaded) return;

      (tmpData as any).custTp = tmpData.custTp.value;

      const response = await axios.post(
        '/management/manager/customer/search/detail',
        {
          custId: tmpData.custId,
          custTp: tmpData.custTp,
        },
      );
      tmpData = { ...tmpData, ...response.data.result };
      //(tmpData as any).tosInfo[0].tosInfo.promotion.email == 'true'
      //  ? ((tmpData as any).tosInfo[0].tosInfo.promotion.email = true)
      //  : ((tmpData as any).tosInfo[0].tosInfo.promotion.email = false);
      (tmpData as any).chemail = false;
      (tmpData as any).chmobile = false;
      //(tmpData as any).tosInfo[0].tosInfo.promotion.mobile == 'true'
      //  ? ((tmpData as any).tosInfo[0].tosInfo.promotion.mobile = true)
      //  : ((tmpData as any).tosInfo[0].tosInfo.promotion.mobile = false);
      setSharedCustomerData(tmpData);
      setLoaded(true);
    };
    userApi();
  }, []);

  const pwOkCallback = async (value: any) => {
    let valid = await validator.isValid({ usrPw: value });
    if (valid) {
      axios
        .post('/management/manager/customer/userpw/update', {
          usrId: sharedCustomerData.custId,
          usrPw: value,
        })
        .then((res: any) => {
          if (res.data.code == '0000') {
            setAlertPopupData({
              ...alertPopupData,
              visible: true,
              message: '비밀번호가 변경되었습니다.',
              leftCallback: () => {
                setPwResetPopupOpen(false);
                setAlertPopupData({ ...alertPopupData, visible: false });
              },
            });
          } else {
            setAlertPopupData({
              ...alertPopupData,
              visible: true,
              message: '비밀번호 변경이 실패하였습니다.',
              leftCallback: () => {
                setAlertPopupData({ ...alertPopupData, visible: false });
              },
            });
          }
        })
        .catch((e: any) => {
          console.log(e);
        });
    } else {
      setAlertPopupData({
        ...alertPopupData,
        visible: true,
        message: '비밀번호는 대소문자, 특수문자를 포함한 8~16자입니다',
        leftCallback: () => {
          setAlertPopupData({ ...alertPopupData, visible: false });
        },
      });
    }
  };

  return (
    <>
      <PwResetPopup
        open={pwResetPopupOpen}
        closeCallback={() => {
          setPwResetPopupOpen(!pwResetPopupOpen);
        }}
        okCallback={pwOkCallback}
      />
      {alertPopupData.visible ? (
        <AlertPopup
          message={alertPopupData.message}
          buttontext={alertPopupData.leftText}
          closeCallback={alertPopupData.leftCallback}
        />
      ) : (
        ''
      )}
      {loaded ? (
        <>
          <UserInfo
            buttonCallback={() => {
              setPwResetPopupOpen(true);
            }}
            userData={sharedCustomerData}
          />
          {sharedCustomerData.custTp == 3 ||
          sharedCustomerData.custTp == '개인' ? (
            <PersonalInfo userData={sharedCustomerData} />
          ) : (
            <>
              <CompMngInfo userData={sharedCustomerData} />
              <CompInfo userData={sharedCustomerData} />
            </>
          )}
        </>
      ) : (
        ''
      )}
      <SubmitButton />
    </>
  );
};
export default TabContent1;
