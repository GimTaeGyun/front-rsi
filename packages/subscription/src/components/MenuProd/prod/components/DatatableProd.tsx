import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import {
  DataGridPro,
  GridColDef,
  GridColumnHeaderParams,
  GridSortItem,
} from '@mui/x-data-grid-pro';
import * as React from 'react';

import { Footer } from './footer';

const columns: GridColDef[] = [
  {
    align: 'center',
    field: 'category',
    headerName: '유형',
    minWidth: 100,
    maxWidth: 157,
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
    align: 'left',
    field: 'name',
    headerName: '상품명',
    minWidth: 365,
    maxWidth: 575,
    flex: 1,
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
    align: 'center',
    field: 'start_date',
    headerName: '판매 시작일',
    minWidth: 140,
    maxWidth: 220,
    flex: 1,
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
    align: 'center',
    field: 'end_date',
    headerName: '판매 종료일',
    minWidth: 130,
    maxWidth: 204,
    flex: 1,
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
    align: 'center',
    field: 'status',
    headerName: '판매 종료일',
    minWidth: 120,
    maxWidth: 189,
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
    headerClassName: 'sub_hideLastSeparator',
    align: 'center',
    field: 'date',
    headerName: '최종 수정일시',
    minWidth: 180,
    maxWidth: 283,
    flex: 1,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
];
const rows = [
  {
    id: '1',
    category: '개인',
    name: 'EyeSurfer NS_개인_스크랩_신탁',
    start_date: '2022-01-01',
    end_date: '2022-12-31',
    status: '판매중',
    date: '2022-10-31 12:00',
  },
  {
    id: '2',
    category: '기업',
    name: 'EyeSurfer NS_개인_스크랩_신탁',
    start_date: '2022-01-01',
    end_date: '2022-12-31',
    status: '미게시',
    date: '2022-10-31 12:00',
  },
  {
    id: '3',
    category: '공공',
    name: 'EyeSurfer NS_개인_스크랩_신탁',
    start_date: '2022-01-01',
    end_date: '2022-12-31',
    status: '판매중',
    date: '2022-10-31 12:00',
  },
  {
    id: '4',
    category: '개인',
    name: 'EyeSurfer NS_개인_스크랩_신탁',
    start_date: '2022-01-01',
    end_date: '2022-12-31',
    status: '판매중',
    date: '2022-10-31 12:00',
  },
];
const DatatableProd = () => {
  return (
    <div style={{ height: '316px', width: '100%' }}>
      <DataGridPro
        className="sub_tbl_outer_common"
        headerHeight={57}
        disableSelectionOnClick
        rowHeight={52}
        rows={rows}
        columns={columns}
        pagination={true}
        rowCount={rows.length}
        checkboxSelection={true}
        components={{
          Footer: () => {
            return <Footer />;
          },
        }}
      />
    </div>
  );
};
export default DatatableProd;
