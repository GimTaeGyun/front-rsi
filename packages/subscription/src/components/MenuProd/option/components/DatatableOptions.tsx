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
    align: 'left',
    field: 'name',
    headerName: '옵션명',
    width: 314,
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
    field: 'operator',
    headerName: '연산자 적용',
    width: 180,
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
    field: 'num_items',
    headerName: '옵션 아이템 수',
    width: 180,
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
    field: 'status',
    headerName: '옵션 상태',
    width: 180,
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
        case '사용가능':
          str_class = 'sub_td_status sub_td_status_color1';
          break;
        case '사용불가':
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
    width: 180,
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
    name: '정기 구독 개월',
    operator: '상품에',
    num_items: '4',
    status: '사용가능',
    date: '2022-10-31 12:00',
  },
  {
    id: '2',
    name: '50% 할인 옵션',
    operator: '상품에',
    num_items: '2',
    status: '사용불가',
    date: '2022-10-31 12:00',
  },
  {
    id: '3',
    name: '다중 접속 옵션',
    operator: '아이템에',
    num_items: '1',
    status: '사용가능',
    date: '2022-10-31 12:00',
  },
  {
    id: '4',
    name: '추가 계정 옵션',
    operator: '아이템에',
    num_items: '5',
    status: '사용가능',
    date: '2022-10-31 12:00',
  },
  {
    id: '5',
    name: '기타 옵션 1',
    operator: '상품에',
    num_items: '5',
    status: '사용불가',
    date: '2022-10-31 12:00',
  },
  {
    id: '6',
    name: '기타 옵션 2',
    operator: '상품에',
    num_items: '5',
    status: '사용가능',
    date: '2022-10-31 12:00',
  },
];
const DatatableOptions = () => {
  return (
    <div style={{ height: '426px', width: '100%' }}>
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
export default DatatableOptions;