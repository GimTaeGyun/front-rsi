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
import { axios } from '../../../../utils/axios';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import FrmAddUserGroup from './FrmAddUserGroup';
import AlertPopup from '../../../Common/AlertPopup';
import { DefaultAlertPopupData } from '../../../../data/atoms';
import FrmUserInfo from './FrmUserAddInfo';
import FrmUserUpdateInfo from './FrmUserUpdateInfo';

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
    field: 'update',
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
  const [total, setTotal] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [alertPopupData, setAlertPopupData] = useState(DefaultAlertPopupData);
  const [dialogAddUserGroup, setDialogAddUserGroup] = useState(false);
  const [dialogAddUser, setDialogAddUser] = useState(false);
  const [dialogUserUpdate, setDialogUserUpdate] = useState(false);
  const [updateUserInfo, setUpdateUserInfo] = useState(null);

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
    updateTableList();
  }, []);

  const updateTableList = () => {
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
        setTotal(res.data.result.length);
      })
      .catch(e => console.log(e));
  };

  const deleteClickEvent = () => {
    if (selectedRows.length > 0) {
      setAlertPopupData({
        ...DefaultAlertPopupData,
        visible: true,
        message: '선택한 사용자를 삭제 하시겠습니까?',
        rightText: '취소',
        rightCallback: () => {
          setAlertPopupData({ ...alertPopupData, visible: false });
        },
        leftCallback: () => {
          let popupData = alertPopupData;
          setAlertPopupData({ ...alertPopupData, visible: false });
          axios
            .post('/management/subscription/customer/user/delete', {
              usrId: selectedRows.map((item: any) => item.usrId),
            })
            .then(res => {
              if (res.data.code == '0000') {
                popupData.message = '선택한 사용자 삭제가 완료되었습니다.';
                popupData.rightText = '';
                updateTableList();
              }
            })
            .catch(err => {
              console.log(err);
              popupData.message = '사용자 삭제가 실패하였습니다.';
            })
            .finally(() => {
              popupData.visible = true;
              popupData.leftCallback = () => {
                setAlertPopupData({ ...alertPopupData, visible: false });
              };

              setAlertPopupData({ ...alertPopupData, ...popupData });
            });
        },
      });
    }
  };
  const selectChangedEvent = (e: any) => {
    setSelectedRows([...rows.filter((item: any) => e.includes(item.id))]);
  };

  const cellClickEvent = (e: any) => {
    if (e.field == 'update') {
      setDialogUserUpdate(true);
      setUpdateUserInfo(e.row);
    }
  };

  const userUpdateSubmitEvent = (data: any) => {
    axios
      .post('/management/subscription/customer/user/update', {
        action: 'mod',
        email: data.email,
        grpNo: data.grpNo,
        loginId: data.loginId,
        loginPw: data.loginPw,
        phone: data.phone,
        service: data.service,
        usrId: data.usrId,
        usrNm: data.usrNm,
      })
      .then(res => {
        if (res.data.code == '0000') {
          setAlertPopupData({
            ...DefaultAlertPopupData,
            visible: true,
            message: '모든 변동사항이 저장되었습니다.',
            leftCallback: () => {
              setAlertPopupData({ ...alertPopupData, visible: false });
            },
          });
          setDialogUserUpdate(false);
        } else {
          setAlertPopupData({
            ...DefaultAlertPopupData,
            visible: true,
            message: '수정이 실패하였습니다.',
            leftCallback: () => {
              setAlertPopupData({ ...alertPopupData, visible: false });
            },
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <>
      {alertPopupData.visible ? (
        <AlertPopup
          message={alertPopupData.message}
          buttontext={alertPopupData.leftText}
          rightButtonText={alertPopupData.rightText}
          rightCallback={alertPopupData.rightCallback}
          leftCallback={alertPopupData.leftCallback}
        />
      ) : (
        ''
      )}

      {/* 사용자 그룹 추가 다이얼로그 */}
      {dialogAddUserGroup && (
        <FrmAddUserGroup
          open={dialogAddUserGroup}
          handleClose={hide_dialogAddUserGroup}
        />
      )}

      {/*사용자 추가 다이얼로그*/}
      {dialogAddUser && (
        <FrmUserInfo open={dialogAddUser} handleClose={hide_dialogAddUser} />
      )}

      {/* 사용자 정보 수정 다이얼로그 */}
      {dialogUserUpdate && (
        <FrmUserUpdateInfo
          handleClose={() => {
            setDialogUserUpdate(false);
          }}
          open={dialogUserUpdate}
          data={updateUserInfo}
          submitEvent={userUpdateSubmitEvent}
        />
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
                전체 사용자 ({total})
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
            onSelectionModelChange={selectChangedEvent}
            disableSelectionOnClick
            onCellClick={cellClickEvent}
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
                        onClick={deleteClickEvent}
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
