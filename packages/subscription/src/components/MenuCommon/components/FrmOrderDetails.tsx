import React from 'react';
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
} from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import DialogFormTemplate from '../components/DialogFormTemplate';

const columns: GridColDef[] = [
  {
    field: 'serviceNm',
    headerName: '서비스명',
    width: 140,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: 'period',
    headerName: '서비스 이용 기간',
    width: 230,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    headerClassName: 'lastcolumnSeparator',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
  },
];

const rows = [
  { id: 1, serviceNm: 'EyeSurfer', period: '2022-01-01 ~ 2022-10-31' },
  { id: 2, serviceNm: 'WIGO MON', period: '2022-01-01 ~ 2022-10-31' },
  { id: 3, serviceNm: 'WIGO DATA', period: '2022-01-01 ~ 2022-10-31' },
];

const FrmOrderDetails = (props: { open: boolean }) => {
  return (
    <>
      <DialogFormTemplate
        open={props.open}
        title="주문 상세 정보"
        width="1000px"
        height="802px"
        children={
          <>
            <Card className="sub_dialog_card_orderinfo1">
              <CardHeader
                className="sub_dialog_card_orderinfo_header"
                component="div"
                title={<Typography>주문서 관리</Typography>}
              ></CardHeader>
              <CardContent className="sub_dialog_card_orderinfo_content">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid>
                      <Box
                        component="div"
                        className="sub_card_formcontrol_outer_common"
                      >
                        <Box
                          component="span"
                          className="sub_card_formcontrol_label"
                        >
                          아이디
                        </Box>
                        <OutlinedInput
                          fullWidth={false}
                          id="text1"
                          placeholder=""
                          name="text1"
                          value=""
                          className="sub_input_common sub_card_formcontrol_input"
                          readOnly
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </>
        }
        footer={
          <>
            <Button className="sub_button_white_none">닫기</Button>
          </>
        }
      />
    </>
  );
};
export default FrmOrderDetails;
