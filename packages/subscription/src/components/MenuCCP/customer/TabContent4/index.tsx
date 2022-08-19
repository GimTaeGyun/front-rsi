import React from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  TablePagination,
} from '@mui/material';

import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import MyDatePicker from '../../../Common/MyDatePicker';
const columns: GridColDef[] = [
  {
    hide: true,
    field: 'id',
    headerName: 'ID',
    width: 0,
  },
  {
    align: 'center',
    field: 'servType',
    headerName: '서비스 구분',
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
    field: 'qaType',
    headerName: '문의 구분',
    width: 118,
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
    field: 'title',
    headerName: '제목',
    width: 480,
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
    field: 'date',
    headerName: '작성일시',
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
    field: 'date2',
    headerName: '처리일시',
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
    field: 'status',
    headerName: '처리상태',
    width: 126,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: params => {
      return (
        <Box
          component="span"
          className={params.value == '처리중' ? 'color_primary_common' : ''}
        >
          {params.value}
        </Box>
      );
    },
  },
  {
    align: 'center',
    field: 'author',
    headerName: '작성자',
    width: 136,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    headerClassName: 'sub_hideLastSeparator',
    align: 'center',
    field: 'details',
    headerName: '상세보기',
    width: 110,
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
    id: '1',
    servType: 'EyeSurfer',
    qaType: '오류문의',
    title: '미리보기 기능 오류문의드립니다.',
    date: '2022-01-01 12:00',
    date2: '2022-10-31 12:00',
    status: '처리중',
    author: '현대중공업(주)',
    details: '수정',
  },
  {
    id: '2',
    servType: 'EyeSurfer',
    qaType: '구독문의',
    title: '월 구독료 문의',
    date: '2022-01-01 12:00',
    date2: '2022-10-31 12:00',
    status: '처리중',
    author: '현대중공업(주)',
    details: '수정',
  },
  {
    id: '3',
    servType: 'WIGO MON',
    qaType: '결제문의',
    title: '무통장 입금 시 은행 계좌번호는 어떻게 되나요?',
    date: '2022-01-01 12:00',
    date2: '2022-10-31 12:00',
    status: '처리중',
    author: '현대중공업(주)',
    details: '수정',
  },
  {
    id: '4',
    servType: 'EyeSurfer',
    qaType: '구독문의',
    title: '스크랩 이미지는 어디에 저장되나요?',
    date: '2022-01-01 12:00',
    date2: '2022-10-31 12:00',
    status: '처리중',
    author: '현대중공업(주)',
    details: '수정',
  },
  {
    id: '5',
    servType: 'Bflysoft',
    qaType: '구독문의',
    title: '뉴스레터는 어디서 신청하나요?',
    date: '2022-01-01 12:00',
    date2: '2022-10-31 12:00',
    status: '처리완료',
    author: '현대중공업(주)',
    details: '수정',
  },
  {
    id: '6',
    servType: '기타',
    qaType: '구독문의',
    title: '고객 지원센터 직통 번호 문의',
    date: '2022-01-01 12:00',
    date2: '2022-10-31 12:00',
    status: '처리완료',
    author: '현대중공업(주)',
    details: '수정',
  },
  {
    id: '7',
    servType: 'WIGO MON',
    qaType: '구독문의',
    title: '월 구독료 문의',
    date: '2022-01-01 12:00',
    date2: '2022-10-31 12:00',
    status: '처리완료',
    author: '현대중공업(주)',
    details: '수정',
  },
  {
    id: '8',
    servType: 'WIGO MON',
    qaType: '결제문의',
    title: '무통장 입금 시 은행 계좌번호는 어떻게 되나요?',
    date: '2022-01-01 12:00',
    date2: '2022-10-31 12:00',
    status: '처리완료',
    author: '현대중공업(주)',
    details: '수정',
  },
  {
    id: '9',
    servType: 'EyeSurfer',
    qaType: '구독문의',
    title: '스크랩 이미지는 어디에 저장되나요?',
    date: '2022-01-01 12:00',
    date2: '2022-10-31 12:00',
    status: '처리완료',
    author: '현대중공업(주)',
    details: '수정',
  },
  {
    id: '10',
    servType: 'Bflysoft',
    qaType: '구독문의',
    title: '뉴스레터는 어디서 신청하나요?',
    date: '2022-01-01 12:00',
    date2: '2022-10-31 12:00',
    status: '처리완료',
    author: '현대중공업(주)',
    details: '수정',
  },
];
const TabContent4 = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <>
      {/* Filter Section */}
      <Card
        className="sub_card_common sub_card_filter"
        sx={{ width: '100%', height: '112px', marginTop: '20px' }}
      >
        <Box className="sub_listpage_filter_topsection">
          <Box className="sub_listpage_filter_topsection_sub">
            <Box component="span" className="sub_listpage_filter_label">
              검색어 입력
            </Box>
            <Box component="span" className="sub_listpage_filter_inputgroup">
              <Select
                fullWidth={false}
                id="search-category"
                name="search-category"
                value="전체"
                className="sub_select_common sub_listpage_filter_list"
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="구독문의">구독문의</MenuItem>
                <MenuItem value="결제문의">결제문의</MenuItem>
                <MenuItem value="기능문의">기능문의</MenuItem>
                <MenuItem value="오류문의">오류문의</MenuItem>
                <MenuItem value="기타문의">기타문의</MenuItem>
              </Select>
              <OutlinedInput
                fullWidth={false}
                id="search-term"
                placeholder="검색어 입력"
                name="search-term"
                className="sub_input_common sub_listpage_filter_search"
              />
            </Box>
          </Box>
          <Box className="sub_listpage_filter_topsection_sub">
            <Box component="span" className="sub_listpage_filter_label">
              작성일시
            </Box>
            <Box component="span" className="sub_listpage_filter_inputgroup">
              <MyDatePicker
                strId="search-date1"
                strClass="sub_input_common sub_listpage_filter_date"
                strName="search-date1"
                strPlaceholder="시작일"
                objSX={{ marginRight: '8px' }}
                value={new Date().toString()}
              />
              <MyDatePicker
                strId="search-date2"
                strClass="sub_input_common sub_listpage_filter_date"
                strName="search-date2"
                strPlaceholder="종료일"
                objSX={null}
                value={new Date().toString()}
              />
            </Box>
          </Box>
          <Box
            className="sub_listpage_filter_topsection_sub"
            sx={{ minWidth: '500px' }}
          >
            <Box component="span" className="sub_listpage_filter_label">
              서비스 / 상태
            </Box>
            <Box component="span" className="sub_listpage_filter_inputgroup">
              <Select
                fullWidth={false}
                id="search1"
                name="search1"
                value="전체"
                className="sub_select_common sub_listpage_filter_list3"
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="Bflysoft">Bflysoft</MenuItem>
                <MenuItem value="EyeSurfer">EyeSurfer</MenuItem>
                <MenuItem value="WIGO MON">WIGO MON</MenuItem>
                <MenuItem value="기타">기타</MenuItem>
              </Select>
              <Select
                fullWidth={false}
                id="search2"
                name="search2"
                value="전체"
                className="sub_select_common sub_listpage_filter_list3"
              >
                <MenuItem value="전체">전체</MenuItem>
                <MenuItem value="처리중">처리중</MenuItem>
                <MenuItem value="처리완료">처리완료</MenuItem>
              </Select>
            </Box>
          </Box>
        </Box>
        <Box className="sub_listpage_filter_btmsection" sx={{ width: '100%' }}>
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
      <Card className="sub_tbl_section_common" sx={{ marginTop: '20px' }}>
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
                문의 내역 (20)
              </Typography>
            </Box>
          }
        ></CardHeader>
        <div style={{ height: '625px', width: '100%' }}>
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
            rowCount={rows.length}
            paginationMode="server"
            checkboxSelection={true}
            components={{
              Footer: () => {
                const pageChanged = () => {};
                const rowsChanged = () => {};
                const [page, setPage] = React.useState(0);

                const handleChangePage = (
                  event: React.MouseEvent<HTMLButtonElement> | null,
                  newPage: number,
                ) => {
                  console.log(event);
                  setPage(newPage);
                  pageChanged();
                };

                const handleChangeRowsPerPage = (
                  event: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement
                  >,
                ) => {
                  console.log(event);
                  setPage(0);
                  rowsChanged();
                };

                return (
                  <Box className="sub_pagination_wrapper" component="div">
                    <Box component="div" className="sub_pagination_outer">
                      <Button
                        variant="contained"
                        className="sub_btn_primary_fill_common sub_btn_footer_add"
                      >
                        사용자 그룹 추가
                      </Button>
                      <Button
                        variant="contained"
                        className="sub_btn_primary_fill_common sub_btn_footer_save"
                      >
                        사용자 추가
                      </Button>
                      <Button
                        variant="outlined"
                        className="sub_btn_primary_outline_common sub_btn_footer_export"
                        sx={{ marginLeft: '8px' }}
                      >
                        선택 사용자 삭제
                      </Button>
                    </Box>

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
export default TabContent4;
