import { axios } from '../../../../utils/axios';
import React, { useEffect, useState } from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';

const validator = Yup.object().shape({
  usrPw: Yup.string()
    .required()
    .min(8)
    .max(16)
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
});

const TabContent1 = () => {
  const { state } = useLocation();
  const [pwResetPopupOpen, setPwResetPopupOpen] = useState(false);
  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);
  const [loaded, setLoaded] = useState(false);
  const [personalData, setPersonalData] = useState(Object);
  const [compData, setCompData] = useState(Object);
  const [compMngData, setCompMngData] = useState(Object);
  const [alertPopupData, setAlertPopupData] = useState(DefaultAlertPopupData);

  const personalChange = (data: any) => {
    setPersonalData(data);
  };

  const compChange = (data: any) => {
    setCompData(data);
    console.log('compChange', data);
  };

  const compMngChange = (data: any) => {
    setCompMngData(data);
  };

  const onClickUserChange = async () => {
    console.log('click', compData);
    let data: any = {
      action: 'mod',
      custId: sharedCustomerData.custId,
      custTp: sharedCustomerData.custTp,
    };
    if (personalData.custTp === 3) {
      data = {
        ...data,
        personData: { email: personalData.email, mobile: personalData.mobile },
      };
    } else {
      data = {
        ...data,
        corpData: {
          address: compData.address,
          addressDesc: compData.addressDesc,
          bizItem: compData.bizItem,
          ceo: compData.ceo,
          corpRegNo: compData.corpRegNo,
          corpRegPath: compData.corpRegPath ? compData.corpRegPath : '',
          corpRegFileNm: compData.corpRegFileNm ? compData.corpRegFileNm : '',
          licenseUpdate: compData.fileChanged ? 1 : 0,
          corpSize: compData.corpSize,
          corpTp: compData.corpTp,
          cpy_nm: compData.cpyNm,
          custNm: compMngData.custNm,
          dept: compMngData.custDept,
          email: compMngData.email,
          empSize: compData.empSize,
          fax: compMngData.fax,
          mobile: compMngData.mobile,
          postNo: compData.postNo,
          tel: compMngData.tel,
        },
      };
    }
    console.log('procced', data);
    const response = await axios.post(
      '/management/manager/customer/cust/update',
      data,
    );
    if (response.data.msg === '성공') {
      if (sharedCustomerData.custTp == 3) {
        setSharedCustomerData({ ...sharedCustomerData, ...data.personData });
      } else {
        setSharedCustomerData({ ...sharedCustomerData, ...data.corpData });
      }
      setAlertPopupData({
        ...alertPopupData,
        visible: true,
        message: '모든 변동사항이 저장되었습니다.',
        leftCallback: () => {
          setAlertPopupData({ ...alertPopupData, visible: false });
        },
      });
    } else {
      setAlertPopupData({
        ...alertPopupData,
        visible: true,
        message: '모든 변동사항이 저장되지않았습니다.',
        leftCallback: () => {
          setAlertPopupData({ ...alertPopupData, visible: false });
        },
      });
    }
  };

  useEffect(() => {
    const userApi = async () => {
      let tmpData = {};
      Object.assign(tmpData, state); //state 복사
      (tmpData as any).custTp = (tmpData as any).custTp.value;
      const response = await axios.post(
        '/management/manager/customer/search/detail',
        {
          custId: (tmpData as any).custId,
          custTp: (tmpData as any).custTp,
        },
      );
      tmpData = { ...(tmpData as any), ...response.data.result };

      if ((tmpData as any).tosInfo) {
        (tmpData as any).tosInfo[0].tosInfo.promotion.email == 'true'
          ? ((tmpData as any).tosInfo[0].tosInfo.promotion.email = true)
          : ((tmpData as any).tosInfo[0].tosInfo.promotion.email = false);

        (tmpData as any).tosInfo[0].tosInfo.promotion.mobile == 'true'
          ? ((tmpData as any).tosInfo[0].tosInfo.promotion.mobile = true)
          : ((tmpData as any).tosInfo[0].tosInfo.promotion.mobile = false);
      }
      setSharedCustomerData(tmpData);
      setLoaded(true);
    };
    userApi();
  }, []);

  const pwOkCallback = async (value: any) => {
    let valid = await validator.isValid({ usrPw: value });
    if (valid) {
      axios
        .post('/management/manager/customer/custpw/update', {
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
        message: '비밀번호는 대소문자, 특수문자를 포함한 8~16자입니다.',
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
          leftCallback={alertPopupData.leftCallback}
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
            <PersonalInfo
              userData={sharedCustomerData}
              personal={personalChange}
            />
          ) : (
            <>
              <CompMngInfo
                userData={sharedCustomerData}
                compMngChange={compMngChange}
              />
              <CompInfo userData={sharedCustomerData} compChange={compChange} />
            </>
          )}
        </>
      ) : (
        ''
      )}
      <SubmitButton onClickUserChange={onClickUserChange} />
    </>
  );
};
export default TabContent1;
