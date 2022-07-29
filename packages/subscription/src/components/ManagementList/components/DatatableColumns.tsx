import React from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from '@mui/x-data-grid';

export const columns: GridColDef[] = [
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
      field: 'situation',
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
        <Typography color="#284AD5">{params.value}</Typography>
      ),
    },
    {
      field: 'additionalInfo',
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