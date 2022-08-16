import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  GRID_CHECKBOX_SELECTION_COL_DEF,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import React from 'react';

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 140,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,

    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: 'name',
    headerName: '이름',
    width: 87,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px" aria-expanded="false">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'phone',
    headerName: '전화번호',
    width: 143,
    headerAlign: 'center',
    align: 'center',

    hideSortIcons: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: 'email',
    headerName: '이메일',
    width: 200,
    headerAlign: 'center',
    sortable: false,
    hideSortIcons: true,
    headerClassName: 'datagridMenu',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography
        fontSize="14px"
        sx={{
          ':hover': {
            pointerEvents: 'none !important',
          },
        }}
      >
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'status',
    headerName: '상태',
    width: 89,
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
    renderCell: (params: GridRenderCellParams<string>) => (
      <Typography
        fontSize="14px"
        sx={{
          ...((params.value as any) == 1 && { color: '#284AD5' }),
          ...((params.value as any) != 1 && { color: '#999999' }),
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
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: 'modifiedDate',
    headerName: '최종 수정일',
    width: 159,
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: 'management',
    headerName: '관리',
    width: 89,
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    disableColumnMenu: true,
    headerClassName: 'lastcolumnSeparator',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px" borderRight="none">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: () => (
      <Button
        variant="outlined"
        sx={{
          Width: '44px',
          height: '30px',
          fontSize: '13px',
        }}
        className="sub_button_white"
      >
        수정
      </Button>
    ),
  },
];
