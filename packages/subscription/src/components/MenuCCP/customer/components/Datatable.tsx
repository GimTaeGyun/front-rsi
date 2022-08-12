import { Box, Button, MenuItem, Select, TablePagination, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams
} from '@mui/x-data-grid';
import * as React from 'react';

const columns: GridColDef[] = [
  {
    align: 'left',
    field: 'id',
    headerName: 'ID',
    width: 150,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    align: 'left',
    field: 'customerName',
    headerName: '고객명',
    width: 132,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    align: 'center',
    field: 'category',
    headerName: '유형',
    width: 100,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: (params) => {
      let str_class = "td_cat td_cat_color1";
      switch(params.value){
        case "개인":
          str_class = "td_cat td_cat_color1";
          break;
        case "기업":
          str_class = "td_cat td_cat_color2";
          break;
        case "공공":
          str_class = "td_cat td_cat_color3";
          break;
        default:
          str_class = "td_cat td_cat_color1";
          break;
      }
      return (<Box component="span" className={str_class}>
        {params.value}
      </Box>)
    }
  },
  {
    align: 'center',
    field: 'manager',
    headerName: '담당자',
    width: 100,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    align: 'center',
    field: 'phone',
    headerName: '전화번호',
    width: 143,
    headerAlign: 'center',
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
    width: 200,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    align: 'center',
    field: 'memberSince',
    headerName: '가입일',
    width: 150,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    align: 'center',
    field: 'lastPaymentDate',
    headerName: '최종 결제일',
    width: 127,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    align: 'center',
    field: 'subsStatus',
    headerName: '구독현황',
    width: 114,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: (params) => {
      let str_class = "sub_td_status sub_td_status_color1";
      switch(params.value){
        case "구독중":
          str_class = "sub_td_status sub_td_status_color1";
          break;
        case "종료":
          str_class = "sub_td_status sub_td_status_color2";
          break;
        default:
          str_class = "sub_td_status sub_td_status_color1";
          break;
      }
      return (<Box component="span" className={str_class}>
        {params.value}
      </Box>)
    }
  },
  {
    align: 'center',
    field: 'situation',
    headerName: '상태',
    width: 89,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: (params) => {
      let str_class = "sub_td_sit sub_td_sit_color1";
      switch(params.value){
        case "사용":
          str_class = "sub_td_sit sub_td_sit_color1";
          break;
        case "휴면":
          str_class = "sub_td_sit sub_td_sit_color2";
          break;
          case "탈퇴":
            str_class = "sub_td_sit sub_td_sit_color3";
            break;
        default:
          str_class = "sub_td_sit sub_td_sit_color1";
          break;
      }
      return (<Box component="span" className={str_class}>
        {params.value}
      </Box>)
  }},
  {
    align: 'center',
    field: 'details',
    headerName: '상세보기',
    width: 105,
    headerAlign: 'center',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: (params) => {
      return (<Button variant="outlined" className="sub_btn_primary_outline_common sub_td_btn_action">
        {params.value}
      </Button>)
    }
  },
];

const rows = [
  {
    id: 'yujinyong1',
    customerName: '유진용',
    category: '개인',
    manager: '김철수',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong2',
    customerName: '유진용',
    category: '공공',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '종료',
    situation: '휴면',
    details: '보기',
  },
  {
    id: 'yujinyong3',
    customerName: '유진용',
    category: '개인',
    manager: '김철수',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '휴면',
    details: '보기',
  },
  {
    id: 'yujinyong4',
    customerName: '유진용',
    category: '기업',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '종료',
    situation: '탈퇴',
    details: '보기',
  },
  {
    id: 'yujinyong5',
    customerName: '유진용',
    category: '개인',
    manager: '김철수',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '탈퇴',
    details: '보기',
  },
  {
    id: 'yujinyong6',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '종료',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong7',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong8',
    customerName: '유진용',
    category: '개인',
    manager: '김철수',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '종료',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong9',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong10',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong11',
    customerName: '유진용',
    category: '개인',
    manager: '김철수',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong12',
    customerName: '유진용',
    category: '개인',
    manager: '김철수',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong13',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong14',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
  {
    id: 'yujinyong15',
    customerName: '유진용',
    category: '개인',
    manager: '',
    phone: '010-0000-0000',
    email: 'yujinyong@naver.com',
    memberSince: '2022-01-01 12:00',
    lastPaymentDate: '2022-10-31 12:00',
    subsStatus: '구독중',
    situation: '사용',
    details: '보기',
  },
];

const DataTable = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [pageSize, setPageSize] = React.useState<number>(10);

  return (
    <div style={{ height: '626px', width: '100%' }}>
      <DataGrid
        className="sub_tbl_outer_common"
        headerHeight={57}
        rowHeight={52}
        rows={rows}
        columns={columns}
        pageSize={rowsPerPage}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 25, 50]}
        pagination={true}
        checkboxSelection={true}
        components={{
          Footer: ()=>{
            const handleChangePage = (
              event: React.MouseEvent<HTMLButtonElement> | null,
              newPage: number,
            ) => {
              setPage(newPage);
            };
          
            const handleChangeRowsPerPage = (
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
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
                  <Button variant="contained" className="sub_btn_primary_fill_common sub_btn_footer_save">리스트 저장</Button>
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
                <Box component="div" className="sub_pagination_outer" sx={{justifyContent:"end"}}>
                  <Button variant="outlined" className="sub_btn_primary_outline_common sub_btn_footer_export"><Box component="img" src="/icon_export.png" sx={{marginRight:"3px"}}></Box>엑셀 다운로드</Button>
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
