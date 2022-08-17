import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CustomerTab from './components/MenuCCP/customer/customertab';
import CustomerIndex from './components/MenuCCP/customer/index';
import AdminMenu from './components/MenuCommon/admin';
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
      <Route path="/admin/common/admin" element={<AdminMenu />}></Route>
      <Route path="/admin/ccp/customer">
        <Route path="tab" element={<CustomerTab />} />
        <Route path="" element={<CustomerIndex />} />
      </Route>
    </Routes>
  );
};

export default Subscription;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
