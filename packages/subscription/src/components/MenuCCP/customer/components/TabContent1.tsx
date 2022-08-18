import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

const validator = Yup.object().shape({
  usrPw: Yup.string()
    .required()
    .min(8)
    .max(16)
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
});

const TabContent1 = () => {
  const navigate = useNavigate();
  const [pwResetPopupOpen, setPwResetPopupOpen] = useState(false);
  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);
  const [loaded, setLoaded] = useState(false);
  const [personalData, setPersonalData] = useState([]);
  const [compData, setCompData] = useState(Object);
  const [compMngData, setCompMngData] = useState(Object);

  const [alertPopupData, setAlertPopupData] = useState(DefaultAlertPopupData);

  const personalChange = (data: any) => {
    setPersonalData(data);
  };

  const compChange = (data: any) => {
    setCompData(data);
  };

  const compMngChange = (data: any) => {
    setCompMngData(data);
  };

  const onClickUserChange = async () => {
    const data = {
      action: 'mod',
      corpData: [
        {
          address: compData.address,
          addressDesc: compData.addressDesc,
          bizItem: compData.bizItem,
          ceo: compData.ceo,
          corpRegNo: compData.corpRegNo,
          corpRegPath: '/contents/corpReg/Paper/사업자등록증.jpg',
          corpSize: compData.corpSize,
          corpTp: compData.corpTp,
          cpy_nm: compData.cpyNm,
          custNm: compMngData.custNm,
          dept: compMngData.custDept,
          email: compMngData.email,
          empSize: compData.empSize,
          fax: '02-000-0001',
          mobile: compMngData.mobile,
          postNo: compData.postNo,
          tel: compMngData.tel,
        },
      ],
      custId: '232e9b0a3bb22717c5e54ae9df67219e',
      custTp: 1,
      personData: [
        {
          email: compMngData.email,
          mobile: compMngData.mobile,
        },
      ],
    };
    const response = await axios.post(
      '/management/manager/customer/cust/update',
      data,
    );
    if (response.data.msg === '성공') {
      navigate('/admin/common/admin');
    } else {
      alert('XXX');
      navigate('/admin/ccp/customer/tab');
    }
  };

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
