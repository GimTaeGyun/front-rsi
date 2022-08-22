import React, { useEffect, useState } from 'react';
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
import FrmOrderDetails from './FrmOrderDetails';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import Axios from '../../../../utils/axios';

const columns: GridColDef[] = [
  {
    align: 'center',
    field: 'ordNo',
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
    field: 'prdNm',
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
    field: 'ordDate',
    headerName: '주문일시',
    width: 145,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: params => {
      const moment = require('moment');
      const date = params.value;
      const formatDate = moment(date).format('YYYY-MM-DD HH:MM');
      return <Box>{formatDate}</Box>;
    },
  },
  {
    align: 'center',
    field: 'pmtDate',
    headerName: '결제일시',
    width: 143,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: params => {
      const moment = require('moment');
      const date = params.value;
      const formatDate = moment(date).format('YYYY-MM-DD HH:MM');
      return <Box>{formatDate}</Box>;
    },
  },
  {
    align: 'center',
    field: 'pmtMethod',
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
    field: 'pmtAmt',
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
    headerName: '주문상태',
    width: 93,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderCell: params => {
      let str_class = 'sub_td_ostatus sub_td_ostatus_color1';
      let datas = '';
      switch (params.value.value) {
        case 0:
          datas = '결제대기중';
          str_class = 'sub_td_ostatus sub_td_ostatus_color1';
          break;
        case 1:
          datas = '결제완료';
          str_class = 'sub_td_ostatus sub_td_ostatus_color2';
          break;
        case 2:
          datas = '입금대기중';
          str_class = 'sub_td_ostatus sub_td_ostatus_color1';
          break;
        case 3:
          datas = '입금완료';
          str_class = 'sub_td_ostatus sub_td_ostatus_color2';
          break;
        case 4:
          datas = '취소요청';
          str_class = 'sub_td_ostatus sub_td_ostatus_color4';
          break;
        case 5:
          datas = '환불처리중';
          str_class = 'sub_td_ostatus sub_td_ostatus_color3';
          break;
        case 5:
          datas = '환불완료';
          str_class = 'sub_td_ostatus sub_td_ostatus_color5';
          break;
        default:
          break;
      }
      return (
        <Box component="span" className={str_class}>
          {datas}
        </Box>
      );
    },
  },
  {
    align: 'center',
    field: 'ordBy',
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

const TabContent2 = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [pageSize, setPageSize] = React.useState<number>(10);
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const defaultFromDate = '1900-01-01';
  const [dateFrom, setDateFrom] = useState(defaultFromDate);
  const defaultToDate = '2099-12-31';
  const [dateTo, setDateTo] = useState(defaultToDate);
  const [searchDateType, setSearchDateType] = useState('ALL');
  const [statuss, setStatuss] = useState(32767);
  const [detailrows, setDetailrows] = useState();

  const show_dialogOrderDetails = () => {
    setOpen(true);
  };
  const hide_dialogOrderDetails = () => {
    setOpen(false);
  };

  useEffect(() => {
    const Api = async () => {
      const param = {
        dateFrom: defaultFromDate,
        dateTo: defaultToDate,
        order: 'asc',
        pageNo: 1,
        pageSize: 10,
        searchDateType: 'ALL',
        sortField: 'ordNo',
        status: 32767,
      };
      const res = await Axios.post(
        '/management/manager/contract/order/inquiry',
        param,
      );
      const prd = res.data.result.dataRows;
      const prds = prd.map((item: any) => {
        item.prd.push({ prdNm: 'ffff' });
        item.pmtAmt = '_';
        item.pmtMethod = '_';
        const prdNm = item.prd.map((item: any) => {
          return item.prdNm;
        });
        return {
          ...item,
          id: item.rnum,
          prdNm: prdNm,
        };
      });
      setRows(prds);
    };
    Api();
  }, []);

  const onClickSearch = async () => {
    const param = {
      dateFrom: dateFrom,
      dateTo: dateTo,
      order: 'asc',
      pageNo: page + 1,
      pageSize: rowsPerPage,
      searchDateType: searchDateType,
      sortField: 'ordNo',
      status: statuss,
    };
    const res = await Axios.post(
      '/management/manager/contract/order/inquiry',
      param,
    );
    const prd = res.data.result.dataRows;
    if (prd === null || prd === undefined) {
      setRows([]);
    } else {
      const prds = prd.map((item: any) => {
        const prdNm = item.prd.map((item: any) => {
          return item.prdNm;
        });
        return {
          ...item,
          id: item.rnum,
          prdNm: prdNm,
        };
      });
      setRows(prds);
    }
  };

  const onChange = (data: any) => {
    setDateFrom(data);
  };

  const onChanges = (data: any) => {
    setDateTo(data);
  };

  const onClick = (data: any) => {
    let date: any = new Date(dateFrom);
    date.setMonth(date.getMonth() + data);
    date =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    setDateTo(date);
  };

  const cellClickEvent = (params: any, event: any) => {
    console.log(event);
    if (params.field == 'details') {
      setOpen(true);
      setDetailrows(params.row);
    }
  };
  const onCloseOrderDetails = () => {
    setOpen(false);
  };

  useEffect(() => {
    onClickSearch();
  }, [page, rowsPerPage]);
  console.log(open);

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
              defaultValue="All"
              value={searchDateType}
              className="sub_select_common sub_filter2_list"
              onChange={e => {
                setSearchDateType(e.target.value);
              }}
            >
              <MenuItem value="ALL">전체</MenuItem>
              <MenuItem value="orderDate">주문일</MenuItem>
              <MenuItem value="paymentDate">결제일</MenuItem>
            </Select>
            <MyDatePicker
              strId="search-date1"
              strClass="sub_input_common sub_filter2_date"
              strName="search-date1"
              strPlaceholder="시작일"
              objSX={{ marginLeft: '8px' }}
              value={dateFrom.toString()}
              onChange={onChange}
            />

            <MyDatePicker
              strId="search-date2"
              strClass="sub_input_common sub_filter2_date"
              strName="search-date2"
              strPlaceholder="종료일"
              objSX={{ marginLeft: '8px' }}
              value={dateTo.toString()}
              onChange={onChanges}
            />
            <Button
              variant="outlined"
              className="sub_btn_secondary_outline_common sub_filter2_btn"
              sx={{ marginLeft: '8px' }}
              onClick={() => {
                onClick(1);
              }}
            >
              1개월
            </Button>
            <Button
              variant="outlined"
              className="sub_btn_secondary_outline_common sub_filter2_btn"
              sx={{ marginLeft: '10px' }}
              onClick={() => {
                onClick(3);
              }}
            >
              3개월
            </Button>
            <Button
              variant="outlined"
              className="sub_btn_secondary_outline_common sub_filter2_btn"
              sx={{ marginLeft: '10px' }}
              onClick={() => {
                onClick(6);
              }}
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
              value={statuss}
              className="sub_select_common sub_filter2_list2"
              onChange={e => {
                setStatuss(Number(e.target.value));
              }}
            >
              <MenuItem value={32767}>전체</MenuItem>
              <MenuItem value={0}>결제대기중</MenuItem>
              <MenuItem value={1}>결제완료</MenuItem>
              <MenuItem value={2}>입금대기중</MenuItem>
              <MenuItem value={3}>입금완료</MenuItem>
              <MenuItem value={4}>결제취소</MenuItem>
              <MenuItem value={5}>환불처리중</MenuItem>
              <MenuItem value={6}>환불완료</MenuItem>
            </Select>
          </Box>
        </Box>

        <Box className="sub_listpage_filter_btmsection">
          <Button
            variant="outlined"
            className="sub_btn_primary_outline_common sub_btn_filter1"
            onClick={() => {
              setDateFrom(defaultFromDate);
              setStatuss(32767);
              setSearchDateType('ALL');
            }}
          >
            초기화
          </Button>
          <Button
            variant="contained"
            className="sub_btn_primary_fill_common sub_btn_filter2"
            onClick={onClickSearch}
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
            getRowId={row => row.rnum}
            pagination={true}
            checkboxSelection={true}
            onCellClick={(params, event) => cellClickEvent(params, event)}
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
      {open && (
        <FrmOrderDetails
          open={open}
          handleClose={hide_dialogOrderDetails}
          data={detailrows}
        />
      )}
    </>
  );
};
export default TabContent2;
