import React, { ReactElement } from 'react';

import ClientArea from '../../components/ClientArea';
import LeftMenu from '../../components/LeftMenu';

const AppFrame = (): ReactElement => {
  return (
    <>
      <LeftMenu />
      <ClientArea />
    </>
  );
};

export default AppFrame;
