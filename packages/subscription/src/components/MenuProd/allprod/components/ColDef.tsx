import React from 'react';
import { GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid-pro';
import { Typography, Box, IconButton } from '@mui/material';

const ColDef: GridColDef[] = [
  {
    align: 'left',
    field: 'custNm',
    headerName: '유형',
    width: 57,
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
    headerName: '서비스',
    width: 102,
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
  {
    align: 'center',
    field: 'mobile',
    headerName: '상품 그룹',
    width: 398,
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
    headerName: '상품명',
    width: 380,
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
    headerName: '판매 시작일',
    width: 118,
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
  {
    align: 'center',
    field: 'recentPayment',
    headerName: '판매 종료일',
    width: 130,
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
    headerName: '상품상태',
    width: 75,
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
  },
  {
    align: 'center',
    field: 'status',
    headerName: '최종 수정일시',
    width: 208,
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
];

export default ColDef;
