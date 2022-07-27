import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import React from 'react';

import DatatableFooter from './DatatableFooter';

const columns: GridColDef[] = [
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

const rows = [
  {
    id: 'bflysoft1',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft2',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft3',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft4',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft5',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft6',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft7',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft8',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft9',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft10',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
];

const DataTable = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Card
        sx={{
          boxShadow: '0px 1px 5px #0000002E',
          borderRadius: '6px',
          color: '#000000DE',
          height: 682,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardHeader
          component="div"
          title={
            <Box
              component="div"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  '& .MuiTypography-root': {
                    fontSize: '16px',
                    fontFamily: 'NotoSansKRMedium',
                  },
                }}
              >
                AI연구개발실 (30)
              </Typography>
              <OutlinedInput
                sx={{
                  width: '194px',
                  height: '37px',
                  bgcolor: '#0000000A',
                  borderRadius: '4px',
                  pl: 0,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#0000000A',
                    '&:hover': {
                      borderColor: '#0000000A',
                    },
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#0000000A',
                  },
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
          }
          sx={{
            height: '56px',
            '& .MuiTypography-root': {
              fontSize: '16px',
              fontFamily: 'NotoSansKRMedium',
            },
          }}
        />
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{
            borderRadius: 0,
            fontSize: '14px',
          }}
          components={{
            Footer: DatatableFooter,
          }}
        />
      </Card>
    </Box>
  );
};

export default DataTable;
