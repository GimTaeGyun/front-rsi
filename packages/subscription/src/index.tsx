import CssBaseline from '@mui/material/CssBaseline';
import { access } from 'fs';
import { Provider } from 'jotai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate, Route, Routes } from 'react-router-dom';
import AddGroup from './components/AddGroup';
import GroupAlert from './components/AddGroup/GroupAlert';
import GroupAlert2 from './components/AddGroup/GroupAlert2';
import ManagementList from './components/ManagementList';
import PaymentList from './components/PaymentList';
import AdminLogin from './container/Login';
import reportWebVitals from './reportWebVitals';
import moment from 'moment';

export { default as Header } from './Header';
export { default as Login } from './container/Login';
export { default as ClientArea } from './components/ClientArea';
export { default as AppFrame } from './container/AppFrame';

const Subscription = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const access = localStorage.getItem('refresh-token');
    if (access === null) {
      navigate('/admin/login');
    }
  }, []);

  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />}></Route>
      <Route path="/admin/management-list" element={<ManagementList />}></Route>
      <Route path="/admin/add_groupalert" element={<GroupAlert />}></Route>
      <Route path="/admin/add_groupalert2" element={<GroupAlert2 />}></Route>
      <Route path="/admin/payments" element={<PaymentList />}></Route>
    </Routes>
  );
};

export default Subscription;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
