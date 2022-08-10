import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate, Route, Routes } from 'react-router-dom';
import AddGroup from './components/AddGroup';
import GroupAlert from './components/AddGroup/GroupAlert';
import GroupAlert2 from './components/AddGroup/GroupAlert2';
import ManagementList from './components/ManagementList';
import CustomersManagementList from './components/CustomersManagement';
import PaymentList from './components/PaymentList';
import AdminLogin from './container/Login';
import reportWebVitals from './reportWebVitals';
import CustomerIndex from './components/CCPMenu/customer/index';
import CustomerDetail from './components/CCPMenu/customer/detail';
import CustomerOrder from './components/CCPMenu/customer/order';
import CustomerContact from './components/CCPMenu/customer/contact';
import CustomerUser from './components/CCPMenu/customer/user';

export { default as Header } from './Header';
export { default as Login } from './container/Login';
export { default as ClientArea } from './components/ClientArea';
export { default as AppFrame } from './container/AppFrame';

const Subscription = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />}></Route>
      <Route path="/admin/common/admin" element={<AdminMenu />}></Route>
      <Route path="/admin/ccp/customer" element={<CustomerIndex />}>
        <Route path="detail" element={<CustomerDetail />} />
        <Route path="order" element={<CustomerOrder />} />
        <Route path="user" element={<CustomerUser />} />
        <Route path="contact" element={<CustomerContact />} />
		<Route path="/admin/customers" element={<CustomersManagementList />}></Route>
      </Route>
    </Routes>
  );
};

export default Subscription;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
