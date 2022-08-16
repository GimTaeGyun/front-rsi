import React, {useState} from 'react';
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

  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);
  const [pwResetPopupOpen, setPwResetPopupOpen] = useState(false);
  const [alertPopupData, setAlertPopupData] = useState({...DefaultAlertPopupData, message:"비밀번호가 변경되었습니다.", visible:false,
  leftCallback : ()=>{
    setPwResetPopupOpen(false);
    setAlertPopupData({...alertPopupData, visible: false});
  }});
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
      <UserInfo buttonCallback={()=>{setPwResetPopupOpen(true)}}/>
      {sharedCustomerData.custTp == '개인' ? <PersonalInfo/> : <CompInfo/>}
    </>
  );
};
export default TabContent1;
