import React from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'serviceNm',
    headerName: '서비스명',
    width: 140,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: 'period',
    headerName: '서비스 이용 기간',
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

const rows = [
  { id: 1, serviceNm: 'EyeSurfer', period: '2022-01-01 ~ 2022-10-31' },
  { id: 2, serviceNm: 'WIGO MON', period: '2022-01-01 ~ 2022-10-31' },
  { id: 3, serviceNm: 'WIGO DATA', period: '2022-01-01 ~ 2022-10-31' },
];

const FrmOrderDetails = () => {
  return (
    <>
      <Card className="sub_dialog_card_orderinfo1">
        <CardHeader
          className="sub_dialog_card_orderinfo_header"
          component="div"
          title={<Typography>주문서 관리</Typography>}
        ></CardHeader>
        <CardContent className="sub_dialog_card_orderinfo_content"></CardContent>
      </Card>
    </>
  );
};
export default FrmOrderDetails;
