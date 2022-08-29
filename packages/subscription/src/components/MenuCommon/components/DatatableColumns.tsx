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
    width: 50,
    field: '__check__',
    sortingOrder: ['desc'],
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">선택</Typography>
    ),
  },
  {
    field: 'id',
    headerName: 'ID',
    width: 125,
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
    headerName: '이름',
    width: 140,
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
    field: 'phone',
    headerName: '전화번호',
    width: 120,
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
    field: 'email',
    headerName: '이메일',
    width: 180,
    headerAlign: 'center',
    disableColumnMenu: false,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'status',
    headerName: '상태',
    width: 80,
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
    width: 140,
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
    width: 245,
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
