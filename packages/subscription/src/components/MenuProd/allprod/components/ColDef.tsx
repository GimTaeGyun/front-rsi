import { Box, IconButton, Typography } from '@mui/material';
import { GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid-pro';
import React from 'react';

const ColDef: GridColDef[] = [
  {
    align: 'center',
    field: 'category',
    headerName: '유형',
    minWidth: 80,
    maxWidth: 114,
    flex: 1,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: params => {
      let str_class = 'sub_td_cat sub_td_cat_color1';
      switch (params.value) {
        case '개인':
          str_class = 'sub_td_cat sub_td_cat_color1';
          break;
        case '기업':
          str_class = 'sub_td_cat sub_td_cat_color2';
          break;
        case '공공':
          str_class = 'sub_td_cat sub_td_cat_color3';
          break;
        default:
          str_class = 'sub_td_cat sub_td_cat_color1';
          break;
      }
      return (
        <Box component="span" className={str_class}>
          {params.value}
        </Box>
      );
    },
  },
  {
    align: 'center',
    field: 'service',
    headerName: '서비스',
    minWidth: 130,
    maxWidth: 185,
    flex: 1,
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
    align: 'left',
    field: 'productGroup',
    headerName: '상품 그룹',
    minWidth: 395,
    maxWidth: 564,
    flex: 1,
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
    field: 'productName',
    headerName: '상품명',
    minWidth: 370,
    maxWidth: 528,
    flex: 1,
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
    field: 'salesStart',
    headerName: '판매 시작일',
    minWidth: 118,
    maxWidth: 168,
    flex: 1,
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
    field: 'salesEnd',
    headerName: '판매 종료일',
    minWidth: 118,
    maxWidth: 168,
    flex: 1,
    headerAlign: 'center',
    disableColumnMenu: true,
    sortable: false,
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
  {
    align: 'center',
    field: 'status',
    headerName: '상품상태',
    minWidth: 80,
    maxWidth: 114,
    flex: 1,
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
        case '판매중':
          str_class = 'sub_td_status sub_td_status_color1';
          break;
        case '미게시':
          str_class = 'sub_td_status sub_td_status_color2';
          break;
        default:
          str_class = 'sub_td_status sub_td_status_color1';
          break;
      }
      return (
        <Box component="span" className={str_class}>
          {params.value}
        </Box>
      );
    },
  },
  {
    align: 'center',
    field: 'date',
    headerName: '최종 수정일시',
    minWidth: 160,
    maxWidth: 228,
    flex: 1,
    sortable: false,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
];

export default ColDef;
