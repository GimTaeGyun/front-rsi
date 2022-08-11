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
    field: 'id',
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
    width: 105,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
];

const rows = [
  {
    id: 'yujinyong1',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong2',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong3',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong4',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong5',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong6',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong7',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong8',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong9',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong10',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong11',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong12',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong13',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong14',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong15',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
];

const DataTable = () => {
  return (
    <div style={{ height: '626px', width: '100%' }}>
      <DataGrid
        className="sub_tbl_outer_common"
        headerHeight={57}
        rowHeight={52}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
