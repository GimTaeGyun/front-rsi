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
  DialogTitle,
  DialogActions,
  DialogContent,
  Divider,
  IconButton,
} from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
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
    field: 'name',
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
    field: 'totalPrice',
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

const FrmOrderDetails = (props: {
  open: boolean;
  handleClose: Function;
  data?: any;
}) => {
  const { data } = props;
  const [person, setPerson] = useState(data.ordStatus);
  const [ordDate, setOrdDate] = useState('');
  const [pmtDate, setPmtDate] = useState('');
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const moment = require('moment');
    const formatDate = moment(data.ordDt).format('YYYY-MM-DD HH:MM');
    if (data.pmtDt) {
      const formatChargeDate = moment(data.pmtDt).format('YYYY-MM-DD HH:MM');
      setPmtDate(formatChargeDate);
    } else {
      setPmtDate(' ');
    }
    setOrdDate(formatDate);
    const rowData = data.ordProducts[0];
    const discount = -rowData.discount / rowData.prdPrice;
    const mapRow = rowData.prdItems.map((item: any) => {
      return {
        ...item,
        id: item.prdItemId,
        name: item.prdItemNm,
        quantity: item.quantity,
        unitPrice: item.rowunitPrice,
        totalPrice: item.supplyAmt,
        discount: item.supplyAmt * discount,
        net: item.supplyAmt - item.supplyAmt * discount,
      };
    });
    setRows(mapRow);
  }, [data]);

  return (
    <>
      <Dialog
        open={props.open}
        sx={{
          '& .MuiPaper-root': {
            maxWidth: '1000px !important',
          },
        }}
      >
        <DialogTitle
          sx={{
            width: '1000px',
            height: '56px',
            padding: '16px 20px 16px 16px',
            justifyItems: 'space-between',
          }}
        >
          <Typography
            sx={{
              width: '300px',
              justifySelf: 'center',
              float: 'left',
            }}
          >
            주문 상세 정보
          </Typography>
          <IconButton
            color="primary"
            component="label"
            sx={{ padding: '0', float: 'right', justifySelf: 'center' }}
            onClick={() => props.handleClose()}
          >
            <CloseOutlined className="sub_dialog_icon_close" />
          </IconButton>
        </DialogTitle>
        <Divider />
        <Card className="sub_dialog_card_orderinfo1">
          <CardHeader
            className="sub_dialog_card_orderinfo_header"
            component="div"
            title={<Typography>주문서 관리</Typography>}
          ></CardHeader>
          <CardContent className="sub_dialog_card_orderinfo1_content">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0}>
                <Grid item sx={{ marginBottom: '8px' }}>
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
                <Grid item sx={{ marginBottom: '8px' }}>
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
                <Grid item sx={{ marginBottom: '8px' }}>
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
                      value={data.orderer || ' '}
                      className="sub_input_common sub_dialog_card_orderinfo_input"
                      readOnly
                    />
                  </Box>
                </Grid>
                <Grid item sx={{ marginBottom: '8px' }}>
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
                      value={data.ordererContact}
                      className="sub_input_common sub_dialog_card_orderinfo_input"
                      readOnly
                    />
                  </Box>
                </Grid>
                <Grid item sx={{ marginBottom: '8px' }}>
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

                <Grid item sx={{ marginBottom: '8px' }}>
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

                <Grid>
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

                <Grid item>
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
              sx={{ padding: '0 !impotrant', justyfyContent: 'center' }}
              multiline={true}
              maxRows={2}
              fullWidth={false}
              id="text9"
              placeholder="관리자 메모를 작성해 주세요."
              name="text9"
              value=""
              className="sub_input_common sub_card_dialog_textarea"
            />
            <Button
              className="sub_btn_primary_fill_common sub_card_dialog_textarea_btn"
              sx={{ padding: '0 !impotrant', justyfyContent: 'center' }}
            >
              저장
            </Button>
          </CardContent>
        </Card>
        <Button
          className="sub_button_white_none"
          sx={{
            width: '41px',
            height: '36px',
            fontSize: '14px',
            marginTop: '31px',
            marginBottom: '16px',
            alignSelf: 'center',
          }}
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
