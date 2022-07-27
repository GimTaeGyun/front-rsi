import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'jotai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddGroup from './components/Admin/AddGroup';
import ManagementList from './components/Admin/ManagementList';
import AppFrame from './container/AppFrame';
import AdminLogin from './container/Login';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.render(<AppFrame />, document.getElementById('root'));

export { default as Header } from './Header';
export { default as Login } from './container/Login';
export { default as ClientArea } from './components/ClientArea';
export { default as AppFrame } from './container/AppFrame';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppFrame />}></Route>
            <Route path="/admin/login" element={<AdminLogin />}></Route>
            <Route
              path="/admin/management-list"
              element={<ManagementList />}
            ></Route>
            <Route path="/admin/add_group" element={<AddGroup />}></Route>
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
