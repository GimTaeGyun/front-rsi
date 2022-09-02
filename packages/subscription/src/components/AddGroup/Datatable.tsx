import { Box, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';

const columns: GridColDef[] = [
  {
    field: 'role_nm',
    headerName: '역할명',
    width: 157,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: 'role_id',
    headerName: '설명',
    width: 230,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    headerClassName: 'lastcolumnSeparator',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
  },
];

interface Row {
  id: string;
  roleName: string;
  roleDesc: string;
}
const DataTable = (props: {
  onChange: any;
  rows: Row[];
  selectionModel: string[];
}) => {
  const onSelectionChange = (values: any[]) => {
    props.onChange(values);
  };

  return (
    <div style={{ height: '273px', width: '100%' }}>
      <DataGrid
        headerHeight={45}
        rowHeight={45}
        rows={props.rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{
          Footer: () => {
            return <Box></Box>;
          },
        }}
        selectionModel={props.selectionModel}
        sx={styles.dg_styles}
        onSelectionModelChange={(e: any) => {
          if (props.rows.length == 0) return;
          onSelectionChange(e);
        }}
      />
    </div>
  );
};

const styles = {
  dg_styles: {
    '& .MuiDataGrid-row': {
      fontFamily: 'NotoSansKRRegular',
      fontSize: '14px',
      color: '#000000DE',
    },
    '& .MuiDataGrid-row:last-child .MuiDataGrid-cell': { borderBottom: '0px' },
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
