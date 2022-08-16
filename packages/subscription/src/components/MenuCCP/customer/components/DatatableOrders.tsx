
import {
    Box,
    Button,
    IconButton,
    MenuItem,
    Select,
    TablePagination,
    Typography,
  } from '@mui/material';
  import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
  import * as React from 'react';

const columns: GridColDef[] = [
  {
    align: 'center',
    field: 'id',
    headerName: '주문번호',
    width: 120,
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
    field: 'productNm',
    headerName: '상품명',
    width: 380,
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
    field: 'orderDate',
    headerName: '주문일시',
    width: 145,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    )
  },
  {
    align: 'center',
    field: 'paymentDate',
    headerName: '결제일시',
    width: 143,
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
    field: 'paymentMethod',
    headerName: '결제수단',
    width: 93,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    align: 'right',
    field: 'amount',
    headerName: '결제금액',
    width: 150,
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
    field: 'status',
    headerName: '결제상태',
    width: 93,
    headerAlign: 'center',
    disableColumnMenu: true,
  },
  {
    align: 'center',
    field: 'orderBy',
    headerName: '주문자',
    width: 150,
    headerAlign: 'center',
    disableColumnMenu: true,
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
          className="sub_btn_primary_outline_common sub_td_btn_action"
        >
          보기
        </Button>
      );
    },
  },
];

interface Row {
    id: String | null;
    productNm: String | null;
    orderDate: String | null;
    paymentDate: String | null;
    paymentMethod: String | null;
    amount: String | null;
    status: String | null;
    orderBy: String | null;
  }

const DatatableOrders = (props: {
    rows: Array<Row>;
    cellClickEvent?: Function;
    rowsPerPage?: number;
    pageChanged?: Function;
    rowsChanged?: Function;
    total?: number;
  }) => {
    const {
      rows = [],
      cellClickEvent = () => {},
      rowsPerPage = 10,
      pageChanged = () => {},
      rowsChanged = () => {},
      total = 10,
    } = props;
    const [page, setPage] = React.useState(0);

    return (
        <div style={{ height: '626px', width: '100%' }}>
          <DataGrid
            className="sub_tbl_outer_common"
            headerHeight={57}
            disableSelectionOnClick
            rowHeight={52}
            rows={rows}
            columns={columns}
            pageSize={rowsPerPage}
            rowsPerPageOptions={[10, 25, 50]}
            pagination={true}
            rowCount={total}
            paginationMode="server"
            checkboxSelection={true}
            onCellClick={(params, event) => cellClickEvent(params, event)}
            components={{
              Footer: () => {
                const handleChangePage = (
                  event: React.MouseEvent<HTMLButtonElement> | null,
                  newPage: number,
                ) => {
                  console.log(event, 'here?');
                  setPage(newPage);
                  pageChanged(newPage);
                };
    
                const handleChangeRowsPerPage = (
                  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
                ) => {
                  console.log(event, 'here??');
                  setPage(0);
                  rowsChanged(event.target.value);
                };
    
                return (
                  <Box className="sub_pagination_wrapper" component="div">
                    <Box component="div" className="sub_pagination_outer"></Box>
                    <Box component="div" className="sub_pagination_outer">
                      <TablePagination
                        className="sub_pagination"
                        component="div"
                        count={total}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </Box>
                    <Box
                      component="div"
                      className="sub_pagination_outer"
                      sx={{ justifyContent: 'end' }}
                    >
                      <Button
                        variant="outlined"
                        className="sub_btn_primary_outline_common sub_btn_footer_export"
                      >
                        <Box
                          component="img"
                          src="/icon_export.png"
                          sx={{ marginRight: '3px' }}
                        ></Box>
                        엑셀 다운로드
                      </Button>
                    </Box>
                  </Box>
                );
              },
            }}
          />
        </div>
      );
}
export default DatatableOrders;