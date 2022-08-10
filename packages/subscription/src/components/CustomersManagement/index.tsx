import React from 'react';

import { Box } from '@mui/material';
import AppFrame from '../../container/AppFrame';
import DataTable from './components/Datatable';

const CustomersManagementList = () => {
  const [rows, setRows] = React.useState([])

  const breadcrumb_links = [
    {text:"고객 / 계약 / 결제 관리",href:"/"},
    {text:"고객 관리",href:null},
  ]

  return (
      <>
        <AppFrame title="고객 관리" links={breadcrumb_links}>
          <>
            <Box display="flex">
              <Box sx={{ ml: '30px', width: '100%' }}>
                {/*<DataTable rowData={rows} />*/}
              </Box>
            </Box>
          </>
        </AppFrame>
      </>
    )
}

export default CustomersManagementList;