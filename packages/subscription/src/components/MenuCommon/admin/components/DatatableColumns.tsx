import { Box, Button, IconButton, Typography } from '@mui/material';
import {
  GRID_CHECKBOX_SELECTION_COL_DEF,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import React from 'react';

export const columns: GridColDef[] = [
  {
    align: 'center',
    headerAlign: 'center',
    minWidth: 50,
    maxWidth: 80,
    flex: 1,
    field: '__check__',
    sortingOrder: ['desc'],
    sortable: false,
    hideSortIcons: true,
    renderHeader: () => (
      <Typography className="sub_tbl_th_common">선택</Typography>
    ),
  },
  {
    field: 'id',
    headerName: '주문 UUID',
    minWidth: 125,
    maxWidth: 203,
    flex: 1,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'name',
    headerName: '거래 UUID',
    minWidth: 140,
    maxWidth: 227,
    flex: 1,
    headerAlign: 'center',
    sortable: true,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'price',
    headerName: '거래 단가',
    minWidth: 120,
    maxWidth: 194,
    flex: 1,
    headerAlign: 'center',
    align: 'center',
    sortable: true,
    hideSortIcons: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'volume',
    headerName: '거래 수량',
    minWidth: 180,
    maxWidth: 292,
    flex: 1,
    headerAlign: 'center',
    disableColumnMenu: false,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'funds',
    headerName: '정산 금액',
    minWidth: 180,
    maxWidth: 292,
    flex: 1,
    headerAlign: 'center',
    disableColumnMenu: false,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'ror',
    headerName: '손익률',
    minWidth: 140,
    maxWidth: 227,
    flex: 1,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'revenue',
    headerName: '손익금',
    minWidth: 140,
    maxWidth: 227,
    flex: 1,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'created_at',
    headerName: '거래 일시',
    minWidth: 140,
    maxWidth: 227,
    flex: 1,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'col_date',
    headerName: '수집 일자',
    minWidth: 140,
    maxWidth: 227,
    flex: 1,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  }  
];
