import React from 'react';
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import DialogFormTemplate from '../../Common/DialogFormTemplate';

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

const FrmUserInfo = (props: { open: boolean }) => {
  return (
    <>
      <DialogFormTemplate
        open={props.open}
        title="사용자 정보 수정"
        width="500px"
        height="916px"
        children={
          <>
            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                아이디 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="text1"
                placeholder=""
                name="text1"
                value="Kim_Byeongcheol"
                className="sub_input_common sub_card_dialog_input"
                readOnly
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                비밀번호 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="text2"
                placeholder=""
                name="text2"
                value="123456@#@#"
                className="sub_input_common sub_card_dialog_input"
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                이름 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="text3"
                placeholder=""
                name="text3"
                value="김병철2222"
                className="sub_input_common sub_card_dialog_input"
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                전화번호 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="text4"
                placeholder=""
                name="text4"
                value="010-1234-5678"
                className="sub_input_common sub_card_dialog_input"
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                이메일 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="text5"
                placeholder=""
                name="text5"
                value="byeongcheol@gmail.com"
                className="sub_input_common sub_card_dialog_input"
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                사용자 그룹 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <Select
                fullWidth={true}
                id="select1"
                name="select1"
                value="홍보실"
                className="sub_select_common sub_dialog_list"
              >
                <MenuItem value="홍보실">홍보실</MenuItem>
              </Select>
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                사용 서비스 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <Box component="div" style={{ height: '182px', width: '100%' }}>
                <DataGrid
                  className="sub_tbl_dialog_common"
                  headerHeight={44}
                  rowHeight={45}
                  rows={rows}
                  columns={columns}
                  checkboxSelection
                  components={{
                    Footer: () => {
                      return <Box></Box>;
                    },
                  }}
                />
              </Box>
            </Box>
          </>
        }
        footer={
          <>
            <Button className="sub_button_white_none">취소</Button>
            <Button
              color="primary"
              variant="contained"
              className="sub_btn_primary_fill_common sub_dialog_button_blue"
            >
              저장
            </Button>
          </>
        }
      />
    </>
  );
};
export default FrmUserInfo;
