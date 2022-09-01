import {
  Box,
  Button,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { useAtom } from 'jotai';
import React from 'react';
import * as Yup from 'yup';

import { customerData,DefaultAlertPopupData } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';
import AlertPopup from '../../../Common/AlertPopup';
import DialogFormTemplate from '../../../Common/DialogFormTemplate';

const validationSchema = Yup.object().shape({
  custGrpNm: Yup.string().required(),
});

const defaultFormValidation = {
  custGrpNm: false,
};

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

const FrmAddUserGroup = (props: { open: boolean; handleClose: Function }) => {
  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);
  const defaultFormData = {
    action: 'add',
    custGrpNm: '',
    description: '',
    custGrpNo: null,
    custId: sharedCustomerData.custId,
  };

  const [alertPopup, setAlertPopup] = React.useState(DefaultAlertPopupData);
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
  console.log(alertPopup);
  const [popupData, setPopupData] = React.useState(defaultFormData);
  const [dataValid, setDataValid] = React.useState(defaultFormValidation);

  const [custGrpNm, setCustGrpNm] = React.useState(defaultFormData.custGrpNm);
  const [description, setDescription] = React.useState(
    defaultFormData.description,
  );

  const handleSubmit = () => {
    axios
      .post('/management/subscription/customer/usergroup/update', popupData)
      .then(res => {
        if (res.data.code == '0000') {
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
          setAlertPopup({
            ...defaultAlertPopup,
            leftCallback: () => {
              setAlertPopup({ ...alertPopup, visible: false });
            },
            message: '그룹에 사용자가 존재합니다.',
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
  return (
    <>
      {alertPopup.visible ? (
        <AlertPopup
          message={alertPopup.message}
          buttontext={alertPopup.leftText}
          rightButtonText={alertPopup.rightText}
          rightCallback={alertPopup.rightCallback}
          leftCallback={alertPopup.leftCallback}
        />
      ) : undefined}
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
              <OutlinedInput
                autoFocus={true}
                autoComplete="false"
                fullWidth
                id="custGrpNm"
                className="sub_input_common sub_card_dialog_input"
                placeholder="생성할 그룹명을 입력해 주세요."
                name="custGrpNm"
                error={dataValid.custGrpNm}
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
              <OutlinedInput
                autoComplete="false"
                fullWidth
                id="description"
                placeholder="설명을 입력해 주세요."
                name="description"
                className="sub_input_common sub_card_dialog_input"
                value={description}
                onChange={e => {
                  //e.target.value = e.target.value;
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
                    setDataValid({
                      custGrpNm:
                        !(await validationSchema.fields.custGrpNm.isValid(
                          popupData.custGrpNm,
                        )),
                    });
                    const tmp = alertPopup;
                    tmp.leftCallback = () => {
                      setAlertPopup({
                        ...tmp,
                        visible: false,
                      });
                    };
                    if (popupData.custGrpNm.length > 100)
                      tmp.message = '잘못된 형식입니다.';
                    else if (popupData.description.length > 100)
                      tmp.message = '100자 이내로 입력해주세요.';
                    setAlertPopup({ ...tmp, visible: true });
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
