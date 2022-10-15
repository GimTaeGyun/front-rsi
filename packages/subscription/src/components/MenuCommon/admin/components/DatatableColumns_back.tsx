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
    headerName: '정산금액',
    minWidth: 80,
    maxWidth: 130,
    flex: 1,
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: (params: GridRenderCellParams<string>) => (
      <Typography
        fontSize="14px"
        sx={{
          ...((params.value as any) == 1 && { color: '#284AD5' }),
          ...((params.value as any) != 1 && {
            color: '#999999',
            fontFamily: 'NotoSansKRReguler',
          }),
        }}
      >
        {(params.value as any) == 1 ? '사용' : '종료'}
      </Typography>
    ),
  },
  {
    field: 'description',
    headerName: '추가 내용',
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
    field: 'modifiedDate',
    headerName: '최종 수정일',
    minWidth: 245,
    maxWidth: 397,
    flex: 1,
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    disableColumnMenu: false,
    headerClassName: 'lastcolumnSeparator',
    renderHeader: (params: GridColumnHeaderParams) => (
      <>
        <Typography className="sub_tbl_th_common">
          {params.colDef.headerName}
        </Typography>
        {/*<IconButton color="primary" component="label">
          <Box component="img" src="/filter_list.png"></Box>
        </IconButton>*/}
      </>
    ),
  },
];
