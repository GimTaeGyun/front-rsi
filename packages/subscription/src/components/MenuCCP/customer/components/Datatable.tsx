import { Box, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import * as React from 'react';

const columns: GridColDef[] = [
  {
    field: 'ID',
    headerName: 'ID',
    width: 150,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'customerName',
    headerName: '고객명',
    width: 132,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'category',
    headerName: '유형',
    width: 100,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'manager',
    headerName: '담당자',
    width: 100,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'phone',
    headerName: '전화번호',
    width: 143,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'email',
    headerName: '이메일',
    width: 200,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'memberSince',
    headerName: '가입일',
    width: 150,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'lastPaymentDate',
    headerName: '최종 결제일',
    width: 127,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'subsStatus',
    headerName: '구독현황',
    width: 114,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'situation',
    headerName: '상태',
    width: 89,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'details',
    headerName: '상세보기',
    width: 114,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
];

const rows = [
  { id: 1, roleName: '슈퍼바이저', roleDesc: 'SUPERVISOR' },
  { id: 2, roleName: '개발자', roleDesc: 'DEVELOPMENT' },
  { id: 3, roleName: '영업담당자', roleDesc: 'SALES' },
  { id: 4, roleName: '재무회계담당자', roleDesc: 'FINANCE' },
  { id: 5, roleName: '통합관리자어드민', roleDesc: 'ADMIN' },
];

const DataTable = (props: {  }) => {
  return (
    <div style={{ height: '682px', width: '100%' }}>
      <DataGrid
        className="sub_tbl_outer_common"
        headerHeight={56}
        rowHeight={52}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{
          Footer: () => {
            return <Box></Box>;
          },
        }}
        sx={styles.dg_styles}
      />
    </div>
  );
};

const styles = {
  dg_styles: {
    '& .MuiDataGrid-row:hover': {
      backgroundColor: 'unset',
      cursor: 'pointer',
    },
    '& .MuiDataGrid-row.Mui-selected:hover': {
      backgroundColor: 'black',
    },
    '& .MuiDataGrid-row.Mui-selected': {
      backgroundColor: 'unset',
    },
    '& .MuiDataGrid-cell:focus': {
      outline: 'none',
    },
    '& .MuiDataGrid-columnHeader:focus': {
      outline: 'none',
    },
    '& .MuiDataGrid-columnHeader:focus-within': {
      outline: 'none',
    },
    '& .MuiDataGrid-cell:focus-within': {
      outline: 'none',
    },
    '& .MuiCheckbox-root.Mui-checked': {
      color: '#284AD5',
    },
  },
};

export default DataTable;
