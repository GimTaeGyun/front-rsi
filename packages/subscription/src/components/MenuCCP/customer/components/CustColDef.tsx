import { Box, Button, Typography } from '@mui/material';
import { GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid-pro';
import React from 'react';

const columns: GridColDef[] = [
  {
    align: 'left',
    field: 'loginId',
    headerName: 'ID',
    width: 175,
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
    align: 'left',
    field: 'custNm',
    headerName: '고객명',
    width: 158,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    align: 'center',
    field: 'custTp',
    headerName: '유형',
    width: 143,
    sortable: false,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: params => {
      let str_class = 'sub_td_cat sub_td_cat_color1';
      switch (params.value.value) {
        case 3:
          str_class = 'sub_td_cat sub_td_cat_color1';
          break;
        case 1:
          str_class = 'sub_td_cat sub_td_cat_color2';
          break;
        case 2:
          str_class = 'sub_td_cat sub_td_cat_color3';
          break;
        default:
          str_class = 'sub_td_cat sub_td_cat_color1';
          break;
      }
      return (
        <Box component="span" className={str_class}>
          {params.value.label}
        </Box>
      );
    },
  },
  /*{
    align: 'center',
    field: 'managerNm',
    headerName: '담당자',
    width: 100,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },*/
  {
    align: 'center',
    field: 'mobile',
    headerName: '전화번호',
    width: 190,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    align: 'left',
    field: 'email',
    headerName: '이메일',
    width: 230,
    sortable: false,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    align: 'center',
    field: 'joinedAt',
    headerName: '가입일',
    width: 226,
    headerAlign: 'center',
    filterable: false,
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <>
        <Typography className="sub_tbl_th_common">
          {params.colDef.headerName}
        </Typography>
      </>
    ),
  },
  /*{
    align: 'center',
    field: 'recentPayment',
    headerName: '최종 결제일',
    width: 149,
    headerAlign: 'center',
    disableColumnMenu: true,
    sortable: false,
    renderHeader: (params: GridColumnHeaderParams) => (
      <>
        <Typography className="sub_tbl_th_common">
          {params.colDef.headerName}
        </Typography>
        <IconButton color="primary" component="label">
          <Box component="img" src="/filter_list.png"></Box>
        </IconButton>
      </>
    ),
  },
  {
    align: 'center',
    field: 'subscriptionStatus',
    headerName: '구독현황',
    width: 114,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: params => {
      let str_class = 'sub_td_status sub_td_status_color1';
      switch (params.value) {
        case 1:
          str_class = 'sub_td_status sub_td_status_color1';
          break;
        case 2:
          str_class = 'sub_td_status sub_td_status_color2';
          break;
        default:
          str_class = 'sub_td_status sub_td_status_color2';
          break;
      }
      return (
        <Box component="span" className={str_class}>
          {(params as any).label}
        </Box>
      );
    },
  },*/
  {
    align: 'center',
    field: 'status',
    headerName: '상태',
    width: 178,
    sortable: false,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: params => {
      let str_class = 'sub_td_sit sub_td_sit_color1';
      switch (params.value.value) {
        case 1:
          str_class = 'sub_td_sit sub_td_sit_color1';
          break;
        case 2:
          str_class = 'sub_td_sit sub_td_sit_color2';
          break;
        case 0:
          str_class = 'sub_td_sit sub_td_sit_color3';
          break;
        default:
          str_class = 'sub_td_sit sub_td_sit_color3';
          break;
      }
      return (
        <Box component="span" className={str_class}>
          {params.value.label}
        </Box>
      );
    },
  },
  {
    headerClassName: 'sub_hideLastSeparator',
    align: 'center',
    field: 'details',
    headerName: '상세보기',
    width: 114,
    headerAlign: 'center',
    disableColumnMenu: true,
    sortable: false,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: () => {
      return (
        <Button
          variant="outlined"
          sx={{
            minWidth: '44px',
            height: '30px',
            fontSize: '13px',
            borderRadius: '4px',
          }}
          className="sub_button_white"
        >
          보기
        </Button>
      );
    },
  },
];

export default columns;
