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
const columns: GridColDef[] = [
  {
    align: 'left',
    field: 'name',
    headerName: '아이템명',
    width: 434,
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
    align: 'right',
    field: 'unit_price',
    headerName: '단위가격',
    width: 200,
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
    headerName: '아이템 상태',
    width: 200,
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
    width: 200,
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
    name: '경향신문',
    unit_price: '200,000',
    status: '사용가능',
    date: '2022-10-31 12:00',
  },
  {
    id: '2',
    name: '경향신문',
    unit_price: '200,000',
    status: '사용가능',
    date: '2022-10-31 12:00',
  },
  {
    id: '3',
    name: '경향신문',
    unit_price: '200,000',
    status: '사용불가',
    date: '2022-10-31 12:00',
  },
  {
    id: '4',
    name: '경향신문',
    unit_price: '200,000',
    status: '사용가능',
    date: '2022-10-31 12:00',
  },
  {
    id: '5',
    name: '경향신문',
    unit_price: '200,000',
    status: '사용가능',
    date: '2022-10-31 12:00',
  },
  {
    id: '6',
    name: '경향신문',
    unit_price: '200,000',
    status: '사용가능',
    date: '2022-10-31 12:00',
  },
];
const DatatableItems = () => {
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
            return (
              <Box className="sub_pagination_wrapper" component="div">
                <Box component="div" className="sub_pagination_outer">
                  <Select
                    fullWidth={false}
                    id="btn_batch"
                    name="btn_batch"
                    defaultValue="상태 일괄 변경"
                    className="sub_select_common sub_select_batch"
                  >
                    <MenuItem value="상태 일괄 변경">상태 일괄 변경</MenuItem>
                  </Select>
                  <Button
                    variant="contained"
                    className="sub_btn_primary_fill_common sub_btn_footer_save"
                  >
                    변경하기
                  </Button>
                </Box>
                <Box component="div" className="sub_pagination_outer"></Box>
                <Box
                  component="div"
                  className="sub_pagination_outer"
                  sx={{ justifyContent: 'end' }}
                >
                  <Button
                    variant="outlined"
                    className="sub_btn_primary_outline_common sub_btn_footer_save"
                  >
                    아이템 삭제
                  </Button>
                  <Button
                    variant="outlined"
                    className="sub_btn_primary_outline_common sub_btn_footer_save"
                  >
                    아이템 수정
                  </Button>
                  <Button
                    variant="contained"
                    className="sub_btn_primary_fill_common sub_btn_footer_save"
                  >
                    아이템 등록
                  </Button>
                </Box>
              </Box>
            );
          },
        }}
      />
    </div>
  );
};
export default DatatableItems;
