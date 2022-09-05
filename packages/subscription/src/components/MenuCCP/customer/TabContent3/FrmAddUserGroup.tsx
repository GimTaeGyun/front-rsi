import { ItemTypes } from '@minoru/react-dnd-treeview';
import {
  Box,
  Button,
  InputLabel,
  OutlinedInput,
  Typography,
  TextField,
} from '@mui/material';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { useAtom } from 'jotai';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';

import {
  AlertPopupData,
  customerData,
  DefaultAlertPopupData,
} from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';
import AlertPopup from '../../../Common/AlertPopup';
import DialogFormTemplate from '../../../Common/DialogFormTemplate';

const validationSchema = Yup.object().shape({
  custGrpNm: Yup.string().required(),
});

const defaultFormValidation = {
  custGrpNm: { length: false, exist: false },
  desc: false,
};

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'id',
    hide: true,
  },
  {
    field: 'custGrp',
    headerName: '그룹명',
    width: 125,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography fontSize="14px">{params.colDef.headerName}</Typography>
    ),
  },
  {
    field: 'description',
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

const FrmAddUserGroup = (props: { open: boolean; handleClose: Function }) => {
  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);
  const defaultFormData = {
    action: 'add',
    custGrpNm: '',
    description: '',
    custGrpNo: null,
    custId: sharedCustomerData.custId,
  };

  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const defaultAlertPopup = {
    visible: true,
    leftText: '확인',
    leftCallback: () => {
      setAlertPopup({ ...alertPopup, visible: false });
    },
    rightCallback: () => {},
    rightText: '',
    message: '',
  };

  const [popupData, setPopupData] = React.useState(defaultFormData);
  const [dataValid, setDataValid] = React.useState(defaultFormValidation);

  const [custGrpNm, setCustGrpNm] = React.useState(defaultFormData.custGrpNm);
  const [description, setDescription] = React.useState(
    defaultFormData.description,
  );
  const [rows, setRows] = useState([]);

  const handleSubmit = () => {
    axios
      .post('/management/subscription/customer/usergroup/update', popupData)
      .then(res => {
        if (res.data.code == '0000') {
          refreshList();
          setDataValid(defaultFormValidation);
          setAlertPopup({
            ...defaultAlertPopup,
            leftCallback: () => {
              setDescription('');
              setCustGrpNm('');
              setDataValid(defaultFormValidation);
              setPopupData(defaultFormData);
              setAlertPopup({ ...alertPopup, visible: false });
            },
            message: '새로운 사용자 그룹이 추가되었습니다.',
          });
        } else {
          setDataValid({
            ...dataValid,
            custGrpNm: { exist: true, length: dataValid.custGrpNm.length },
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  // 열고 닫을 때마다 리셋
  React.useEffect(() => {
    setDataValid(defaultFormValidation);
  }, [open]);

  // 초기화
  useEffect(() => {
    refreshList();
  }, []);

  // 삭제 버튼 이벤트
  const cellClickEvent = (e: any) => {
    console.log(e);
    if (e.field === 'details') {
      axios
        .post('/management/subscription/customer/usergroup/update', {
          action: 'del',
          custId: sharedCustomerData.custId,
          custGrpNo: e.row.custGrpNo,
          custGrpNm: e.row.custGrp,
        })
        .then(res => {
          if (res.data.code === '0000') {
            refreshList();
            setAlertPopup({
              ...alertPopup,
              visible: true,
              message: '삭제가 완료되었습니다.',
              leftText: '확인',
              leftCallback: () => {
                setAlertPopup({ ...alertPopup, visible: false });
              },
              rightText: '',
            });
          } else {
            setAlertPopup({
              ...alertPopup,
              visible: true,
              message: '삭제가 실패하였습니다.',
              leftText: '확인',
              leftCallback: () => {
                setAlertPopup({ ...alertPopup, visible: false });
              },
              rightText: '',
            });
          }
        })
        .catch(() =>
          setAlertPopup({
            ...alertPopup,
            visible: true,
            message: '삭제가 실패하였습니다.',
            leftText: '확인',
            leftCallback: () => {
              setAlertPopup({ ...alertPopup, visible: false });
            },
            rightText: '',
          }),
        );
    }
  };

  const refreshList = () => {
    axios
      .post('/management/manager/customer/usergroup/inquiry', {
        custId: sharedCustomerData.custId,
      })
      .then(res => {
        if (res.data.code === '0000') {
          let data = res.data.result.dataRows;
          data = data.map((item: any) => {
            return { ...item, id: item.custGrpNo, details: '' };
          });
          setRows(data);
        }
      })
      .catch(e => console.log(e));
  };

  return (
    <>
      <DialogFormTemplate
        open={props.open}
        handleClose={props.handleClose}
        title="사용자 그룹 추가"
        width="500px"
        height="710px"
        children={
          <>
            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                그룹명 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <TextField
                autoFocus={true}
                autoComplete="false"
                fullWidth
                id="custGrpNm"
                className="sub_input_common sub_card_dialog_input"
                placeholder="생성할 그룹명을 입력해 주세요."
                name="custGrpNm"
                error={dataValid.custGrpNm.exist || dataValid.custGrpNm.length}
                helperText={
                  dataValid.custGrpNm.exist
                    ? '중복된 그룹명입니다.'
                    : dataValid.custGrpNm.length
                    ? '잘못된 형식입니다.'
                    : ''
                }
                value={custGrpNm}
                onChange={e => {
                  //e.target.value = e.target.value;
                  setCustGrpNm(e.target.value);
                  setPopupData({ ...popupData, custGrpNm: e.target.value });
                }}
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                그룹 설명
              </InputLabel>
              <TextField
                autoComplete="false"
                fullWidth
                id="description"
                placeholder="설명을 입력해 주세요."
                name="description"
                className="sub_input_common sub_card_dialog_input"
                value={description}
                error={dataValid.desc}
                helperText={dataValid.desc ? '100자 이내로 입력해 주세요.' : ''}
                onChange={e => {
                  setDescription(e.target.value);
                  setPopupData({ ...popupData, description: e.target.value });
                }}
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
                onClick={() => {
                  setDescription('');
                  setCustGrpNm('');
                  setDataValid(defaultFormValidation);
                  setPopupData(defaultFormData);
                }}
              >
                초기화
              </Button>
              <Button
                variant="contained"
                className="sub_btn_primary_fill_common btn_usrgrp_2"
                onClick={async () => {
                  if (
                    (await validationSchema.isValid(popupData)) &&
                    popupData.custGrpNm.length < 100 &&
                    popupData.description.length < 100
                  ) {
                    handleSubmit();
                  } else {
                    let tmp = defaultFormValidation;
                    if (popupData.custGrpNm.length > 100)
                      tmp = {
                        ...tmp,
                        custGrpNm: { exist: false, length: true },
                      };
                    if (popupData.custGrpNm.length == 0)
                      tmp = {
                        ...tmp,
                        custGrpNm: { exist: false, length: true },
                      };
                    if (popupData.description.length > 100)
                      tmp = { ...tmp, desc: true };

                    setDataValid(tmp);
                  }
                }}
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
                  onCellClick={cellClickEvent}
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
            <Button
              className="sub_button_white_none"
              onClick={() => {
                props.handleClose();
              }}
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
