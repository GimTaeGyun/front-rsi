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
    align: 'left',
    field: 'loginId',
    headerName: 'ID',
    width: 150,
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
    width: 130,
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
    width: 100,
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
  },
  {
    align: 'center',
    field: 'mobile',
    headerName: '전화번호',
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
    align: 'left',
    field: 'email',
    headerName: '이메일',
    width: 180,
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
    field: 'registerDate',
    headerName: '가입일',
    width: 140,
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
      let text = '';
      switch (params.value) {
        case 1:
          str_class = 'sub_td_status sub_td_status_color1';
          text = '구독중';
          break;
        case 2:
          str_class = 'sub_td_status sub_td_status_color2';
          text = '종료';
          break;
        default:
          str_class = 'sub_td_status sub_td_status_color2';
          text = '종료';
          break;
      }
      return (
        <Box component="span" className={str_class}>
          {text}
        </Box>
      );
    },
  },
  {
    align: 'center',
    field: 'status',
    headerName: '상태',
    width: 89,
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
      let text = '';
      switch (params.value) {
        case 1:
          str_class = 'sub_td_sit sub_td_sit_color1';
          text = '사용';
          break;
        case 2:
          str_class = 'sub_td_sit sub_td_sit_color2';
          text = '휴면';
          break;
        case 0:
          str_class = 'sub_td_sit sub_td_sit_color3';
          text = '탈퇴';
          break;
        default:
          str_class = 'sub_td_sit sub_td_sit_color3';
          text = '탈퇴';
          break;
      }
      return (
        <Box component="span" className={str_class}>
          {text}
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
          className="sub_btn_primary_outline_common sub_td_btn_action"
        >
          보기
        </Button>
      );
    },
  },
];

interface Row {
  no: Number | null;
  custId: String | null;
  loginId: String | null;
  custNm: String | null;
  custTp: String | null;
  managerNm: String | null;
  email: String | null;
  mobile: String | null;
  registerDate: String | null;
  subscriptionStatus: String | null;
  recentPayment: String | null;
  status: Number | null;
}

const DataTable = (props: {
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
              setPage(newPage);
              pageChanged(newPage);
            };

            const handleChangeRowsPerPage = (
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              setPage(0);
              rowsChanged(event.target.value);
            };

            return (
              <Box className="sub_pagination_wrapper" component="div">
                <Box component="div" className="sub_pagination_outer">
                  <Select
                    fullWidth={false}
                    id="btn_batch"
                    name="btn_batch"
                    defaultValue="일괄 사용 처리"
                    className="sub_select_common sub_select_batch"
                  >
                    <MenuItem value="일괄 사용 처리">일괄 사용 처리</MenuItem>
                  </Select>
                  <Button
                    variant="contained"
                    className="sub_btn_primary_fill_common sub_btn_footer_save"
                  >
                    리스트 저장
                  </Button>
                </Box>
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
};

export default DataTable;
