import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  Dialog,
} from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import DialogFormTemplate from '../../../Common/DialogFormTemplate';

const columns: GridColDef[] = [
  {
    align: 'center',
    field: 'id',
    headerName: '상품번호',
    width: 100,
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
    field: 'info',
    headerName: '상품 정보',
    width: 420,
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
    field: 'quantity',
    headerName: '수량',
    width: 58,
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
    field: 'total',
    headerName: '합계 금액',
    width: 118,
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
    field: 'discount',
    headerName: '할인 금액',
    width: 118,
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
    headerClassName: 'sub_hideLastSeparator',
    align: 'right',
    field: 'net',
    headerName: '최종 결제 금액',
    width: 120,
    headerAlign: 'right',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: params => {
      return (
        <Box component="span" className="color_primary_common">
          {params.value}
        </Box>
      );
    },
  },
];

const rows = [
  {
    id: '0000011',
    info: 'EyeSurfer / 조간신문 / 중앙신문 / 경향신문',
    quantity: '1',
    total: '1,000,000원',
    discount: '100,000원',
    net: '900,000원',
  },
  {
    id: '0000012',
    info: 'EyeSurfer / 조간신문 / 중앙신문 / 경향신문',
    quantity: '1',
    total: '1,000,000원',
    discount: '100,000원',
    net: '900,000원',
  },
  {
    id: '0000013',
    info: 'EyeSurfer / 조간신문 / 중앙신문 / 경향신문',
    quantity: '1',
    total: '1,000,000원',
    discount: '100,000원',
    net: '900,000원',
  },
];

const FrmOrderDetails = (props: {
  open: boolean;
  handleClose: Function;
  data?: any;
}) => {
  const { data } = props;
  const [person, setPerson] = useState('');
  const [ordDate, setOrdDate] = useState();
  const [pmtDate, setPmtDate] = useState();

  useEffect(() => {
    const moment = require('moment');
    const formatDate = moment(data.ordDate).format('YYYY-MM-DD HH:MM');
    const formatChargeDate = moment(data.pmtDate).format('YYYY-MM-DD HH:MM');
    setOrdDate(formatDate);
    setPmtDate(formatChargeDate);
  }, [data]);

  useEffect(() => {
    switch (data.status.value) {
      case 0:
        setPerson('결제대기중');
        break;
      case 1:
        setPerson('결제완료');
        break;
      case 2:
        setPerson('입금대기중');
        break;
      case 3:
        setPerson('결제취소');
        break;
      case 4:
        setPerson('환불처리중');
        break;
      case 5:
        setPerson('환불완료');
        break;
    }
  }, [props.open]);

  return (
    <>
      <Dialog
        open={props.open}
        sx={{
          '& .MuiPaper-root': {
            minWidth: '1000px !important',
          },
        }}
      >
        <Card
          className="sub_dialog_card_orderinfo1"
          sx={{ minWidth: '100%', minHeight: '239px !important' }}
        >
          <CardHeader
            className="sub_dialog_card_orderinfo_header"
            component="div"
            title={<Typography>주문서 관리</Typography>}
          ></CardHeader>
          <CardContent className="sub_dialog_card_orderinfo1_content">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item md={6} sx={{ marginBottom: '8px' }}>
                  <Box
                    component="div"
                    className="sub_dialog_card_orderinfo_outer_common"
                  >
                    <Box
                      component="span"
                      className="sub_dialog_card_orderinfo_label"
                    >
                      주문번호
                    </Box>
                    <OutlinedInput
                      fullWidth={false}
                      id="text1"
                      placeholder=""
                      name="text1"
                      value={data.ordNo || ''}
                      className="sub_input_common sub_dialog_card_orderinfo_input"
                      readOnly
                    />
                  </Box>
                </Grid>
                <Grid item md={6} sx={{ marginBottom: '8px' }}>
                  <Box
                    component="div"
                    className="sub_dialog_card_orderinfo_outer_common"
                  >
                    <Box
                      component="span"
                      className="sub_dialog_card_orderinfo_label"
                    >
                      주문일시
                    </Box>
                    <OutlinedInput
                      fullWidth={false}
                      id="text2"
                      placeholder=""
                      name="text2"
                      value={ordDate || ''}
                      className="sub_input_common sub_dialog_card_orderinfo_input"
                      readOnly
                    />
                  </Box>
                </Grid>
                <Grid item md={6} sx={{ marginBottom: '8px' }}>
                  <Box
                    component="div"
                    className="sub_dialog_card_orderinfo_outer_common"
                  >
                    <Box
                      component="span"
                      className="sub_dialog_card_orderinfo_label"
                    >
                      주문자
                    </Box>
                    <OutlinedInput
                      fullWidth={false}
                      id="text3"
                      placeholder=""
                      name="text3"
                      value={data.ordBy || ' '}
                      className="sub_input_common sub_dialog_card_orderinfo_input"
                      readOnly
                    />
                  </Box>
                </Grid>
                <Grid item md={6} sx={{ marginBottom: '8px' }}>
                  <Box
                    component="div"
                    className="sub_dialog_card_orderinfo_outer_common"
                  >
                    <Box
                      component="span"
                      className="sub_dialog_card_orderinfo_label"
                    >
                      주문자 연락처
                    </Box>
                    <OutlinedInput
                      fullWidth={false}
                      id="text4"
                      placeholder=""
                      name="text4"
                      value="010-0000-0000"
                      className="sub_input_common sub_dialog_card_orderinfo_input"
                      readOnly
                    />
                  </Box>
                </Grid>
                <Grid item md={6} sx={{ marginBottom: '8px' }}>
                  <Box
                    component="div"
                    className="sub_dialog_card_orderinfo_outer_common"
                  >
                    <Box
                      component="span"
                      className="sub_dialog_card_orderinfo_label"
                    >
                      결제수단
                    </Box>
                    <OutlinedInput
                      fullWidth={false}
                      id="text5"
                      placeholder=""
                      name="text5"
                      value={data.pmtMethod || ''}
                      className="sub_input_common sub_dialog_card_orderinfo_input"
                      readOnly
                    />
                  </Box>
                </Grid>

                <Grid item md={6} sx={{ marginBottom: '8px' }}>
                  <Box
                    component="div"
                    className="sub_dialog_card_orderinfo_outer_common"
                  >
                    <Box
                      component="span"
                      className="sub_dialog_card_orderinfo_label"
                    >
                      결제일시
                    </Box>
                    <OutlinedInput
                      fullWidth={false}
                      id="text6"
                      placeholder=""
                      value={pmtDate || ''}
                      className="sub_input_common sub_dialog_card_orderinfo_input"
                      readOnly
                    />
                  </Box>
                </Grid>

                <Grid md={6}>
                  <Box
                    component="div"
                    className="sub_dialog_card_orderinfo_outer_common"
                  >
                    <Box
                      component="span"
                      className="sub_dialog_card_orderinfo_label"
                    >
                      결제상태
                    </Box>
                    <OutlinedInput
                      fullWidth={false}
                      id="text7"
                      placeholder=""
                      name="text7"
                      value={person || ''}
                      className="sub_input_common sub_dialog_card_orderinfo_input"
                      readOnly
                    />
                  </Box>
                </Grid>

                <Grid item md={6}>
                  <Box
                    component="div"
                    className="sub_dialog_card_orderinfo_outer_common"
                  >
                    <Box
                      component="span"
                      className="sub_dialog_card_orderinfo_label"
                    >
                      총 결제금액
                    </Box>
                    <OutlinedInput
                      fullWidth={false}
                      id="text8"
                      placeholder=""
                      name="text8"
                      value={data.pmtAmt || ''}
                      className="sub_input_common sub_dialog_card_orderinfo_input"
                      readOnly
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>

        <Card
          className="sub_dialog_card_orderinfo2"
          sx={{ minHeight: '225px !important' }}
        >
          <CardHeader
            className="sub_dialog_card_orderinfo_header"
            component="div"
            title={<Typography>주문 상품 정보</Typography>}
          ></CardHeader>
          <CardContent className="sub_dialog_card_orderinfo2_content">
            <DataGrid
              className="sub_tbl_dialog_common sub_dialog_card_tbl"
              headerHeight={44}
              rowHeight={45}
              rows={rows}
              columns={columns}
              checkboxSelection={false}
              components={{
                Footer: () => {
                  return <Box></Box>;
                },
              }}
            />
          </CardContent>
        </Card>

        <Card
          className="sub_dialog_card_orderinfo3"
          sx={{ minHeight: '144px' }}
        >
          <CardHeader
            className="sub_dialog_card_orderinfo_header"
            component="div"
            title={<Typography>메모</Typography>}
          ></CardHeader>
          <CardContent className="sub_dialog_card_orderinfo3_content">
            <OutlinedInput
              multiline={true}
              maxRows={2}
              fullWidth={false}
              id="text9"
              placeholder="관리자 메모를 작성해 주세요."
              name="text9"
              value=""
              className="sub_input_common sub_card_dialog_textarea"
            />
            <Button className="sub_btn_primary_fill_common sub_card_dialog_textarea_btn">
              저장
            </Button>
          </CardContent>
        </Card>
        <Button
          className="sub_button_white_none"
          onClick={() => {
            props.handleClose();
          }}
        >
          닫기
        </Button>
      </Dialog>
    </>
  );
};
export default FrmOrderDetails;
