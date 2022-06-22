import React from 'react';
import ReactDOM from 'react-dom';

import AppFrame from './container/AppFrame';

ReactDOM.render(<AppFrame />, document.getElementById('root'));

export { default as Header } from './Header';
export { default as Login } from './container/Login';
export { default as ClientArea } from './components/ClientArea';
export { default as AppFrame } from './container/AppFrame';
