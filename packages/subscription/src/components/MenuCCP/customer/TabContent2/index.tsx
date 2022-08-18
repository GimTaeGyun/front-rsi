import React from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  MenuItem,
  Select,
  Typography,
  TablePagination,
} from '@mui/material';
import MyDatePicker from '../../../Common/MyDatePicker';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';

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
    ),
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
    renderCell: params => {
      let str_class = 'sub_td_ostatus sub_td_ostatus_color1';
      switch (params.value) {
        case '입금대기':
          str_class = 'sub_td_ostatus sub_td_ostatus_color1';
          break;
        case '결제완료':
          str_class = 'sub_td_ostatus sub_td_ostatus_color2';
          break;
        case '취소요청':
          str_class = 'sub_td_ostatus sub_td_ostatus_color3';
          break;
        case '취소완료':
          str_class = 'sub_td_ostatus sub_td_ostatus_color4';
          break;
        default:
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

const rows = [
  {
    id: '0000001',
    productNm: 'EyeSurfer / 조간신문 / 중앙신문 / 경향신문 외 3종',
    orderDate: '2022-01-01 12:00',
    paymentDate: '2022-10-31 12:00',
    paymentMethod: '무통장입금',
    amount: '2,700,000원',
    status: '입금대기',
    orderBy: '현대중공업(주)',
    details: '보기',
  },
  {
    id: '0000002',
    productNm: 'EyeSurfer Premium Plus / 조간신문 / 중앙신문 / 경향신...',
    orderDate: '2022-01-01 12:00',
    paymentDate: '2022-10-31 12:00',
    paymentMethod: '무통장입금',
    amount: '300,000,000원',
    status: '결제완료',
    orderBy: '현대중공업(주)',
    details: '보기',
  },
  {
    id: '0000003',
    productNm: 'EyeSurfer 온라인 모니터링 서비스',
    orderDate: '2022-01-01 12:00',
    paymentDate: '2022-10-31 12:00',
    paymentMethod: '무통장입금',
    amount: '132,000원',
    status: '입금대기',
    orderBy: '현대중공업(주)',
    details: '보기',
  },
  {
    id: '0000004',
    productNm: 'EyeSurfer / 조간신문 / 중앙신문 / 조선일보 1개월',
    orderDate: '2022-01-01 12:00',
    paymentDate: '2022-10-31 12:00',
    paymentMethod: '무통장입금',
    amount: '110,000원',
    status: '취소완료',
    orderBy: '현대중공업(주)',
    details: '보기',
  },
  {
    id: '0000005',
    productNm: 'EyeSurfer Premium Plus / 조간신문 / 중앙신문 / 경향신...',
    orderDate: '2022-01-01 12:00',
    paymentDate: '2022-10-31 12:00',
    paymentMethod: '무통장입금',
    amount: '400,000,000원',
    status: '취소요청',
    orderBy: '현대중공업(주)',
    details: '보기',
  },
  {
    id: '0000006',
    productNm: 'EyeSurfer V4M / 조간신문 / 중앙신문 / 경향신문 외 3종',
    orderDate: '2022-01-01 12:00',
    paymentDate: '2022-10-31 12:00',
    paymentMethod: '무통장입금',
    amount: '10,200,500원',
    status: '결제완료',
    orderBy: '현대중공업(주)',
    details: '보기',
  },
  {
    id: '0000007',
    productNm: 'EyeSurfer 온라인 모니터링 서비스',
    orderDate: '2022-01-01 12:00',
    paymentDate: '2022-10-31 12:00',
    paymentMethod: '무통장입금',
    amount: '2,888,000원',
    status: '입금완료',
    orderBy: '현대중공업(주)',
    details: '보기',
  },
  {
    id: '0000008',
    productNm: 'EyeEyeSurfer / 조간신문 / 중앙신문 / 경향신문 외 3종',
    orderDate: '2022-01-01 12:00',
    paymentDate: '2022-10-31 12:00',
    paymentMethod: '무통장입금',
    amount: '27,500원',
    status: '결제완료',
    orderBy: '현대중공업(주)',
    details: '보기',
  },
  {
    id: '0000009',
    productNm: 'EyeSurfer / 조간신문 / 중앙신문 / 경향신문 외 3종',
    orderDate: '2022-01-01 12:00',
    paymentDate: '2022-10-31 12:00',
    paymentMethod: '무통장입금',
    amount: '55,000원',
    status: '취소요청',
    orderBy: '현대중공업(주)',
    details: '보기',
  },
  {
    id: '0000010',
    productNm: 'EyeSurfer / 조간신문 / 중앙신문 / 경향신문 외 3종',
    orderDate: '2022-01-01 12:00',
    paymentDate: '2022-10-31 12:00',
    paymentMethod: '무통장입금',
    amount: '440,000원',
    status: '취소완료',
    orderBy: '현대중공업(주)',
    details: '보기',
  },
];
const TabContent2 = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [pageSize, setPageSize] = React.useState<number>(10);

  return (
    <>
      {/* Filter Section */}
      <Card
        className="sub_card_common sub_card_filter"
        sx={{ width: '100%', height: '112px', mt: '20px' }}
      >
        <Box className="sub_listpage_filter_topsection">
          <Box className="sub_filter2_left" component="div">
            <Box component="div" className="sub_filter2_label1">
              기간
            </Box>
            <Select
              fullWidth={false}
              id="select1"
              name="select1"
              value="전체"
              className="sub_select_common sub_filter2_list"
            >
              <MenuItem value="전체">전체</MenuItem>
              <MenuItem value="주문일">주문일</MenuItem>
              <MenuItem value="결제일">결제일</MenuItem>
            </Select>
            <MyDatePicker
              strId="search-date1"
              strClass="sub_input_common sub_filter2_date"
              strName="search-date1"
              strPlaceholder="시작일"
              objSX={{ marginLeft: '8px' }}
              value={new Date()}
            />
            <MyDatePicker
              strId="search-date2"
              strClass="sub_input_common sub_filter2_date"
              strName="search-date2"
              strPlaceholder="종료일"
              objSX={{ marginLeft: '8px' }}
              value={new Date()}
            />
            <Button
              variant="outlined"
              className="sub_btn_secondary_outline_common sub_filter2_btn active"
              sx={{ marginLeft: '8px' }}
            >
              1개월
            </Button>
            <Button
              variant="outlined"
              className="sub_btn_secondary_outline_common sub_filter2_btn"
              sx={{ marginLeft: '10px' }}
            >
              3개월
            </Button>
            <Button
              variant="outlined"
              className="sub_btn_secondary_outline_common sub_filter2_btn"
              sx={{ marginLeft: '10px' }}
            >
              6개월
            </Button>
          </Box>

          <Box className="sub_filter2_right" component="div">
            <Box component="div" className="sub_filter2_label1">
              결제상태
            </Box>
            <Select
              fullWidth={false}
              id="select2"
              name="select2"
              value="전체"
              className="sub_select_common sub_filter2_list2"
            >
              <MenuItem value="전체">전체</MenuItem>
              <MenuItem value="입금대기">입금대기</MenuItem>
              <MenuItem value="입금완료">입금완료</MenuItem>
              <MenuItem value="결제완료">결제완료</MenuItem>
              <MenuItem value="취소요청">취소요청</MenuItem>
              <MenuItem value="취소완료">취소완료</MenuItem>
              <MenuItem value="환불완료">환불완료</MenuItem>
            </Select>
          </Box>
        </Box>

        <Box className="sub_listpage_filter_btmsection">
          <Button
            variant="outlined"
            className="sub_btn_primary_outline_common sub_btn_filter1"
          >
            초기화
          </Button>
          <Button
            variant="contained"
            className="sub_btn_primary_fill_common sub_btn_filter2"
          >
            검색하기
          </Button>
        </Box>
      </Card>

      <Card className="sub_tbl_section_common">
        <CardHeader
          className="sub_tbl_header_outer_common"
          component="div"
          title={
            <Box
              component="div"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography className="sub_tbl_header_text_common">
                주문 현황 리스트 (300)
              </Typography>
            </Box>
          }
        ></CardHeader>
        <div style={{ height: '626px', width: '100%' }}>
          <DataGrid
            className="sub_tbl_outer_common"
            headerHeight={57}
            rowHeight={52}
            rows={rows}
            columns={columns}
            pageSize={rowsPerPage}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 25, 50]}
            pagination={true}
            checkboxSelection={true}
            components={{
              Footer: () => {
                const handleChangePage = (
                  event: React.MouseEvent<HTMLButtonElement> | null,
                  newPage: number,
                ) => {
                  event;
                  setPage(newPage);
                };

                const handleChangeRowsPerPage = (
                  event: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement
                  >,
                ) => {
                  setRowsPerPage(parseInt(event.target.value, 10));
                  setPage(0);
                };

                return (
                  <Box className="sub_pagination_wrapper" component="div">
                    <Box component="div" className="sub_pagination_outer"></Box>
                    <Box component="div" className="sub_pagination_outer">
                      <TablePagination
                        className="sub_pagination"
                        component="div"
                        count={rows.length}
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
      </Card>
    </>
  );
};
export default TabContent2;
