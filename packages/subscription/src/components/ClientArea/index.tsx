import React, { ReactElement } from 'react';

const ClientArea = (): ReactElement => {
  return (
    <h1
      style={{
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      Client Area
    </h1>
  );
};
export default ClientArea;
