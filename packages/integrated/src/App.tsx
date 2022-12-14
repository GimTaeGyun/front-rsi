import { AppFrame, Header } from '@administrator/subscription';
import React, { ReactElement } from 'react';

import TopMenu from './components/TopMenu';

const App = (): ReactElement => {
  return (
    <div className="App">
      <TopMenu />
      <AppFrame />
    </div>
  );
};

export default App;
