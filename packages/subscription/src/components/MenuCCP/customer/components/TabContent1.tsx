import React, {useEffect, useState} from 'react';
import axios from "../../../../utils/axios";
import UserInfo from './UserInfo';
import PersonalInfo from './PersonalInfo';
import CompInfo from './CompInfo';
import {useAtom} from 'jotai'
import PwResetPopup from '../../../Common/PwResetPopup';
import {DefaultAlertPopupData, customerData} from '../../../../data/atoms';
import AlertPopup from '../../../Common/AlertPopup';
import * as Yup from 'yup';
const validator = Yup.object().shape({usrPw: Yup.string()
.required()
.min(8)
.max(16)
.matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)});





const TabContent1 = () => {

  const [pwResetPopupOpen, setPwResetPopupOpen] = useState(false);
  const [userData , setUserData] = useState({});
  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);
  const [custTp, setCustTp] = useState(3);
  const [emailCheck, setEmailCheck] = useState(false);
  const [smsCheck, setSmsCheck] = useState(false);

  const [alertPopupData, setAlertPopupData] = useState({...DefaultAlertPopupData, message:"비밀번호가 변경되었습니다.", visible:false,
  leftCallback : ()=>{
    setPwResetPopupOpen(false);
    setAlertPopupData({...alertPopupData, visible: false});
  }});

  useEffect(() => {
    const custTps = () => {
    if(sharedCustomerData.custId === '기업') {
      setCustTp(1);
    }    
    if(sharedCustomerData.custId === '공공') {
      setCustTp(2);
    }    
    if(sharedCustomerData.custId === '개인') {
      setCustTp(3);
    }
  };
  custTps();
  }, [sharedCustomerData]);

   
  
  useEffect(() => {
    const userApi = async() => {
      
      const response = await axios.post(
        "/management/manager/customer/search/detail",
        {
          custId: sharedCustomerData.custId, 
          custTp: custTp,
        }
      );

      setUserData(response.data.result);
      switch(response.data.result.tosInfo[0].tosInfo.promotion.email) {
        case 'true':
          setEmailCheck(true);
          break;
        case 'false':
          setEmailCheck(false);
          break;
      };
      switch(response.data.result.tosInfo[0].tosInfo.promotion.mobile) {
        case 'true':
          setSmsCheck(true);
          break;
        case 'false':
          setSmsCheck(false);
          break;
      }
      
      
    }
    userApi();
  }, [custTp]);

  const pwOkCallback = async (value:any)=>{
    let valid = await validator.isValid({usrPw:value});
    if( valid ){
      axios.post("/management/manager/customer/userpw/update",
      {usrId:sharedCustomerData.custId,
      usrPw:value})
      .then((res:any)=>{
        if(res.data.code == '0000'){
          setAlertPopupData({...alertPopupData,
                              visible:true,
                              message:"비밀번호가 변경되었습니다.",
                              leftCallback: ()=>{setPwResetPopupOpen(false);
                                setAlertPopupData({...alertPopupData, visible: false});}});
        }else{
          setAlertPopupData({...alertPopupData,
            visible:true,
            message:"비밀번호 변경이 실패하였습니다.",
            leftCallback: ()=>{
              setAlertPopupData({...alertPopupData, visible: false});}});
        }
      })
      .catch((e:any)=>{console.log(e)});
    }else{
      setAlertPopupData({...alertPopupData, 
                        visible: true,
                        message:"비밀번호는 대소문자, 특수문자를 포함한 8~16자입니다",
                        leftCallback:()=>{setAlertPopupData({...alertPopupData, visible: false})}})
    }
  }

  


  return (
    <>
      <PwResetPopup open={pwResetPopupOpen} closeCallback={()=>{setPwResetPopupOpen(!pwResetPopupOpen)}} okCallback={pwOkCallback}/>
      {alertPopupData.visible ? <AlertPopup  message={alertPopupData.message} buttontext={alertPopupData.leftText} closeCallback={alertPopupData.leftCallback} />: ''}
      <UserInfo buttonCallback={()=>{setPwResetPopupOpen(true)}} userData={userData} />
      {sharedCustomerData.custTp == '개인' ? <PersonalInfo userData={userData} emailCheck={emailCheck} smsCheck={smsCheck}/> : <CompInfo userData={userData} />}
    </>
  );
};
export default TabContent1;
