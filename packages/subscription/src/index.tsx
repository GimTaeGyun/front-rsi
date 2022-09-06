import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ContractMenu from './components/MenuCCP/contract';
import CustomerMenu from './components/MenuCCP/customer';
import Empty from './container/Empty';
//고객/계약/결제 관리 메뉴
import CustomerTab from './components/MenuCCP/customer/customertab';
import PayMenu from './components/MenuCCP/pay';
import AdminMenu from './components/MenuCommon/admin';
import MediaMenu from './components/MenuCommon/media';
import NoticeMenu from './components/MenuCommon/notice';
// 공통관리 메뉴
import ServiceMenu from './components/MenuCommon/service';
import TermsMenu from './components/MenuCommon/terms';
import AllProdMenu from './components/MenuProd/allprod';
//상품관리 메뉴
import GroupMngMenu from './components/MenuProd/GroupMng';
import OptionMenu from './components/MenuProd/option';
import ProdMenu from './components/MenuProd/prod';
import AdminLogin from './container/Login';
import reportWebVitals from './reportWebVitals';

export { default as Header } from './Header';
export { default as Login } from './container/Login';
export { default as ClientArea } from './components/ClientArea';
export { default as AppFrame } from './container/AppFrame';

const Subscription = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />}></Route>
      <Route path="/admin/common">
        <Route path="admin" element={<AdminMenu />}></Route>
        <Route path="service" element={<ServiceMenu />}></Route>
        <Route path="media" element={<MediaMenu />}></Route>
        <Route path="notice" element={<NoticeMenu />}></Route>
        <Route path="terms" element={<TermsMenu />}></Route>
      </Route>
      <Route path="/admin/ccp">
        <Route path="customer">
          <Route path="tab" element={<CustomerTab />} />
          <Route path="" element={<CustomerMenu />} />
        </Route>
        <Route path="contract" element={<ContractMenu />}></Route>
        <Route path="pay" element={<PayMenu />}></Route>
      </Route>
      <Route path="/admin/prod">
        <Route path="itemgrp" element={<GroupMngMenu />}></Route>
        <Route path="option" element={<OptionMenu />}></Route>
        <Route path="prod" element={<ProdMenu />}></Route>
        <Route path="allprod" element={<AllProdMenu />}></Route>
      </Route>
      <Route path="/admin" element={<Empty />} />
    </Routes>
  );
};

export default Subscription;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
