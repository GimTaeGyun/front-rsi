import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from '../../../../utils/axios';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import FrmAddUserGroup from './FrmAddUserGroup';
import FrmUserInfo from './FrmUserInfo';

const columns: GridColDef[] = [
  {
    align: 'left',
    field: 'id',
    headerName: 'ID',
    width: 250,
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
    field: 'usrNm',
    headerName: '사용자명',
    width: 180,
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
    field: 'phone',
    headerName: '전화번호',
    width: 180,
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
    field: 'email',
    headerName: '이메일',
    width: 280,
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
    field: 'grpNm',
    headerName: '사용자 그룹',
    width: 220,
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
    field: 'recent_date',
    headerName: '최종 수정일',
    width: 200,
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <>
        <Typography className="sub_tbl_th_common">
          {params.colDef.headerName}
        </Typography>
        <IconButton color="primary" component="label">
          <Box component="img" src="/filter_list.png"></Box>
        </IconButton>
      </>
    ),
  },

  {
    headerClassName: 'sub_hideLastSeparator',
    align: 'center',
    field: 'details',
    headerName: '수정',
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
          수정
        </Button>
      );
    },
  },
];

const TabContent3 = () => {
  const { state } = useLocation();
  const [rows, setRows] = useState([]);
  const [dialogAddUserGroup, setDialogAddUserGroup] = useState(false);
  const [dialogAddUser, setDialogAddUser] = useState(false);

  const show_dialogAddUserGroup = () => {
    setDialogAddUserGroup(true);
  };
  const hide_dialogAddUserGroup = () => {
    setDialogAddUserGroup(false);
  };

  const show_dialogAddUser = () => {
    setDialogAddUser(true);
  };
  const hide_dialogAddUser = () => {
    setDialogAddUser(false);
  };

  useEffect(() => {
    axios
      .post('/management/manager/customer/userlist/inquiry', {
        custId: (state as any).custId,
      })
      .then(res => {
        setRows(
          res.data.result.map((item: any) => {
            return { ...item, id: item.loginId };
          }),
        );
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      {dialogAddUserGroup && (
        <FrmAddUserGroup
          open={dialogAddUserGroup}
          handleClose={hide_dialogAddUserGroup}
        />
      )}
      {dialogAddUser && (
        <FrmUserInfo open={dialogAddUser} handleClose={hide_dialogAddUser} />
      )}

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
                전체 사용자 (7)
              </Typography>
            </Box>
          }
        ></CardHeader>
        <div style={{ height: '475px', width: '100%' }}>
          <DataGrid
            className="sub_tbl_outer_common"
            headerHeight={57}
            rowHeight={52}
            rows={rows}
            columns={columns}
            checkboxSelection={true}
            components={{
              Footer: () => {
                return (
                  <Box className="sub_pagination_wrapper" component="div">
                    <Box component="div" className="sub_pagination_outer">
                      <Button
                        variant="contained"
                        className="sub_btn_primary_fill_common sub_btn_footer_add"
                        onClick={show_dialogAddUserGroup}
                      >
                        사용자 그룹 추가
                      </Button>
                      <Button
                        variant="contained"
                        className="sub_btn_primary_fill_common sub_btn_footer_save"
                        onClick={show_dialogAddUser}
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

                    <Box component="div" className="sub_pagination_outer"></Box>

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
export default TabContent3;
