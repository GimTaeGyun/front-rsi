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
import DialogFormTemplate from '../../../Common/DialogFormTemplate';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'id',
    hide: true,
  },
  {
    field: 'groupNm',
    headerName: '그룹명',
    width: 125,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    headerClassName: 'lastcolumnSeparator',
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: 'explanation',
    headerName: '설명',
    width: 185,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
  },
  {
    headerClassName: 'sub_hideLastSeparator',
    align: 'center',
    field: 'details',
    headerName: '그룹관리',
    width: 116,
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
          className="sub_btn_secondary_outline_common sub_td_btn_action2"
        >
          삭제
        </Button>
      );
    },
  },
];

const rows = [
  { id: 1, groupNm: '영업부', explanation: '영업총괄', detail: '' },
  { id: 2, groupNm: '영업부1', explanation: '영업1팀', detail: '' },
  { id: 3, groupNm: '영업부2', explanation: '영업2팀', detail: '' },
  { id: 4, groupNm: '개발부', explanation: '-', detail: '' },
  { id: 5, groupNm: '개발부', explanation: '-', detail: '' },
];

const FrmAddUserGroup = (props: { open: boolean }) => {
  return (
    <>
      <DialogFormTemplate
        open={props.open}
        title="사용자 정보 수정"
        width="500px"
        height="710px"
        children={
          <>
            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                그룹명 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="text1"
                placeholder=""
                name="text1"
                value="생성할 그룹명을 입력해 주세요."
                className="sub_input_common sub_card_dialog_input"
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                그룹 설명
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="text1"
                placeholder=""
                name="text1"
                value="생성할 그룹명을 입력해 주세요."
                className="sub_input_common sub_card_dialog_input"
              />
            </Box>

            <Box
              component="div"
              className="sub_dialog_input_outer"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant="outlined"
                className="sub_btn_primary_outline_common btn_usrgrp_1"
                sx={{ marginRight: '8px' }}
              >
                초기화
              </Button>
              <Button
                variant="contained"
                className="sub_btn_primary_fill_common btn_usrgrp_2"
              >
                추가하기
              </Button>
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                등록 그룹 리스트
              </InputLabel>
              <Box component="div" style={{ height: '272px', width: '100%' }}>
                <DataGrid
                  className="sub_tbl_dialog_common"
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
              닫기
            </Button>
          </>
        }
      />
    </>
  );
};
export default FrmAddUserGroup;
