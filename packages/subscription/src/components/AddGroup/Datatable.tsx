import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as React from 'react';

const columns: GridColDef[] = [
  { field: 'roleName', headerName: '역할명', width: 157 },
  { field: 'roleDesc', headerName: '설명', width: 230 },
];

const rows = [
  { id: 1, roleName: '슈퍼바이저', roleDesc: 'SUPERVISOR' },
  { id: 2, roleName: '개발자', roleDesc: 'DEVELOPMENT' },
  { id: 3, roleName: '영업담당자', roleDesc: 'SALES' },
  { id: 4, roleName: '재무회계담당자', roleDesc: 'FINANCE' },
  { id: 5, roleName: '통합관리자어드민', roleDesc: 'ADMIN' },
];

const DataTable = (props: { onChange: any }) => {
  const onSelectionChange = (values: any[]) => {
    props.onChange(
      values.map(value => rows.find(row => row.id === value)?.roleDesc),
    );
  };
  return (
    <div style={{ height: '273px', width: '100%' }}>
      <DataGrid
        headerHeight={45}
        rowHeight={45}
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
        onSelectionModelChange={onSelectionChange}
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
      backgroundColor: 'unset',
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
