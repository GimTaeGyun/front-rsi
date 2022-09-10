import * as React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Card,
  CardHeader,
  Divider,
  FormControlLabel,
  InputLabel,
  IconButton,
  OutlinedInput,
  Typography,
  List,
  ListItem,
  Select,
  MenuItem,
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
    align: 'center',
    field: 'menuOrder',
    headerName: '메뉴 순서',
    width: 95,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
    renderCell: () => {
      return (
        <>
          <Button
            variant="outlined"
            className="sub_btn_secondary_outline_common sub_table_sqr_small"
          >
            <Box component="img" src="/btn_dropdown.png"></Box>
          </Button>
          <Button
            variant="outlined"
            className="sub_btn_secondary_outline_common sub_table_sqr_small"
          >
            <Box component="img" src="/btn_dropdown_down.png"></Box>
          </Button>
        </>
      );
    },
  },
  {
    align: 'left',
    field: 'description',
    headerName: '그룹명',
    width: 240,
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
    headerName: '메뉴 관리',
    width: 98,
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
  {
    id: '1',
    description: 'EyeSurfer',
  },
  {
    id: '2',
    description: 'WIGO MON',
  },
  {
    id: '3',
    description: 'EyeSurfer / BEST',
  },
  {
    id: '4',
    description: 'EVENT',
  },
  {
    id: '5',
    description: 'IMAGE',
  },
];

const DialogGNBList = (props: { open: boolean; handleClose: Function }) => {
  return (
    <DialogFormTemplate
      open={props.open}
      handleClose={props.handleClose}
      title="GNB 목록 관리"
      width="500px"
      height="572px"
      children={
        <>
          <Box component="div" className="sub_dialog_input_outer">
            <InputLabel className="sub_dialog_formLabel">
              GNB 등록 리스트{' '}
              <Typography className="sub_label_dot">•</Typography>
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

          <Box component="div" className="sub_dialog_input_outer mt-25">
            <InputLabel className="sub_dialog_formLabel">
              저장 후 게시 <Typography className="sub_label_dot">•</Typography>
            </InputLabel>
            <Select
              fullWidth={true}
              value="저장 후 게시"
              className="sub_select_common sub_card_formcontrol_list"
            >
              <MenuItem value="저장 후 게시">저장 후 게시</MenuItem>
              <MenuItem value="임시저장">임시저장</MenuItem>
            </Select>
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
  );
};
export default DialogGNBList;
