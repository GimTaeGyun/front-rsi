import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
  GRID_CHECKBOX_SELECTION_COL_DEF,
} from '@mui/x-data-grid';
import React from 'react';

export const columns: GridColDef[] = [
  {
    ...GRID_CHECKBOX_SELECTION_COL_DEF,
    field: 'checked',
  },
  {
    field: 'id',
    headerName: 'ID',
    width: 140,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontFamily="NotoSansKRMEdium">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'name',
    headerName: '이름',
    width: 87,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontFamily="NotoSansKRMEdium">
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
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontFamily="NotoSansKRMEdium">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'email',
    headerName: '이메일',
    width: 200,
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontFamily="NotoSansKRMEdium">
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
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontFamily="NotoSansKRMEdium">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: (params: GridRenderCellParams<string>) => (
      <Typography color="#284AD5">
        {(params.value as any) == 1 ? '사용' : '미사용'}
      </Typography>
    ),
  },
  {
    field: 'description',
    headerName: '추가 내용',
    width: 140,
    headerAlign: 'center',
    sortable: false,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontFamily="NotoSansKRMEdium">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'modifiedDate',
    headerName: '최종 수정일',
    width: 159,
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontFamily="NotoSansKRMEdium">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    field: 'management',
    headerName: '관리',
    width: 89,
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontFamily="NotoSansKRMEdium">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: () => (
      <Button
        variant="outlined"
        sx={{ p: '5px 10px', minWidth: '44px', height: '30px' }}
      >
        수정
      </Button>
    ),
  },
];
