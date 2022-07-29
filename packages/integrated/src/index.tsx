import Subscription from '@administrator/subscription';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'jotai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Subscription />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </Provider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
