import { Box } from '@mui/material';
import React from 'react';

import AppFrame from '../../container/AppFrame';

const CustomersManagementList = () => {
  const [rows, setRows] = React.useState([]);

  return (
    <>
      <AppFrame title="고객 관리">
        <>
          <Box display="flex">
            <Box sx={{ ml: '30px', width: '100%' }}>
              {/*<DataTable rowData={rows} />*/}
            </Box>
          </Box>
        </>
      </AppFrame>
    </>
  );
};

export default CustomersManagementList;
