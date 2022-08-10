import { AppFrame, Header } from '@administrator/subscription';
import React, { ReactElement } from 'react';

import TopMenu from './components/TopMenu';

const App = (): ReactElement => {
  return (
    <div className="App">
      <TopMenu />
      <AppFrame links={[]} />
    </div>
  );
};

export default App;
