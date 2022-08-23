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
import { useAtom } from 'jotai';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import DialogFormTemplate from '../../../Common/DialogFormTemplate';
import * as Yup from 'yup';
import { AlertPopupData, customerData } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';

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

const validationSchema = Yup.object().shape({
  loginId: Yup.string()
    .required()
    .min(8)
    .max(16)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_=])[A-Za-z\d@$!%*#?&_=]{8,}$/,
    ),
  loginPw: Yup.string()
    .required()
    .min(8)
    .max(16)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_=])[A-Za-z\d@$!%*#?&_=]{8,}$/,
    ),
  usrNm: Yup.string().required(),
  email: Yup.string().email().required(),
  phone: Yup.string().max(13).required(),
  grpNo: Yup.string(),
  service: Yup.array(),
});

const defaultFormValidation = {
  loginId: false,
  loginPw: false,
  usrNm: false,
  phone: false,
  email: false,
  grpNo: false,
  service: false,
};

const FrmUserInfo = (props: { open: boolean; handleClose: Function }) => {
  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);
  const defaultFormData = {
    action: 'add',
    grpNo: '2',
    usrNm: '',
    loginId: '',
    loginPw: '',
    phone: '',
    email: '',
    service: [],
    custId: sharedCustomerData.custId,
  };

  const [popupData, setPopupData] = React.useState(defaultFormData);
  const [dataValid, setDataValid] = React.useState(defaultFormValidation);

  const [loginId, setLoginId] = React.useState(defaultFormData.loginId);
  const [usrNm, setUsrNm] = React.useState(defaultFormData.usrNm);
  const [loginPw, setLoginPw] = React.useState(defaultFormData.loginPw);
  const [phone, setPhone] = React.useState(defaultFormData.phone);
  const [email, setEmail] = React.useState(defaultFormData.email);
  const [service, setService] = React.useState(defaultFormData.service);
  const [grpNo, setGrpNo] = React.useState(defaultFormData.grpNo);
  const [isLoginAvailable, setIsLoginAvailable] = React.useState(false);

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

  React.useEffect(() => {
    setPopupData(defaultFormData);
    setDataValid(defaultFormValidation);
  }, [open]);

  const checkLoginId = () => {
    if (loginId == '') {
      return;
    }
    axios
      .post('/management/subscription/customer/check', {
        field: 'idCheck',
        value1: loginId,
        value2: null,
      })
      .then((res: any) => {
        if (res.data.code == '0000') {
          setIsLoginAvailable(true);
          setAlertPopup({
            ...defaultAlertPopup,
            leftCallback: () => {
              setAlertPopup({ ...alertPopup, visible: false });
            },
            message: '사용할 수 있는 아이디입니다',
          });
        } else {
          setIsLoginAvailable(false);
          setAlertPopup({
            ...defaultAlertPopup,
            leftCallback: () => {
              setAlertPopup({ ...alertPopup, visible: false });
            },
            message: '사용할 수 없는 아이디입니다',
          });
        }
      })
      .catch((e: any) => {
        console.log(e);
      });
  };
  const handleSubmit = () => {
    if (isLoginAvailable == false) {
      setAlertPopup({
        ...defaultAlertPopup,
        leftCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
        },
        message: '사용할 수 없는 아이디입니다',
      });
    } else {
      axios
        .post('/management/subscription/customer/user/update', popupData)
        .then((res: any) => {
          if (res.data.code == '0000') {
            setAlertPopup({
              ...defaultAlertPopup,
              leftCallback: () => {
                setLoginId('');
                setLoginPw('');
                setUsrNm('');
                setEmail('');
                setPhone('');
                setGrpNo('2');
                setService([]);
                setIsLoginAvailable(false);
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
        .catch((e: any) => {
          console.log(e);
        });
    }
  };

  return (
    <>
      <DialogFormTemplate
        open={props.open}
        handleClose={props.handleClose}
        title="사용자 추가"
        width="500px"
        height="916px"
        children={
          <>
            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                아이디 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <OutlinedInput
                fullWidth
                id="loginId"
                className="sub_input_common sub_card_dialog_input"
                placeholder="8~16자, 영문 대소문자, 숫자, 특수문자 입력 가능"
                name="loginId"
                value={loginId}
                error={dataValid.loginId}
                onChange={e => {
                  setIsLoginAvailable(false);
                  setLoginId(e.target.value);
                  setPopupData({ ...popupData, loginId: e.target.value });
                }}
                sx={{ width: '348px' }}
              />
              <Button
                variant="contained"
                sx={{
                  height: '42px',
                  minWidth: '82px',
                  fontSize: '14px',
                  marginLeft: '8px',
                }}
                className="sub_button_blue"
                onClick={checkLoginId}
              >
                중복확인
              </Button>
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                비밀번호 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                type="password"
                fullWidth
                id="loginPw"
                className="sub_input_common sub_card_dialog_input"
                placeholder="8~16자, 영문, 숫자, 특수문자 조합"
                name="loginPw"
                value={loginPw}
                error={dataValid.loginPw}
                onChange={e => {
                  //e.target.value = e.target.value;
                  setLoginPw(e.target.value);
                  setPopupData({ ...popupData, loginPw: e.target.value });
                }}
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                이름 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="usrNm"
                className="sub_input_common sub_card_dialog_input"
                placeholder="이름"
                name="usrNm"
                value={usrNm}
                error={dataValid.usrNm}
                onChange={e => {
                  //e.target.value = e.target.value;
                  setUsrNm(e.target.value);
                  setPopupData({ ...popupData, usrNm: e.target.value });
                }}
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                전화번호 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="phone"
                className="sub_input_common sub_card_dialog_input"
                placeholder="전화번호"
                name="phone"
                value={phone}
                error={dataValid.phone}
                onChange={e => {
                  //e.target.value = e.target.value;
                  setPhone(e.target.value);
                  setPopupData({ ...popupData, phone: e.target.value });
                }}
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                이메일 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="email"
                className="sub_input_common sub_card_dialog_input"
                placeholder="이메일 주소"
                name="email"
                value={email}
                error={dataValid.email}
                onChange={e => {
                  //e.target.value = e.target.value;
                  setEmail(e.target.value);
                  setPopupData({ ...popupData, email: e.target.value });
                }}
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                사용자 그룹 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <Select
                fullWidth={true}
                id="grpNo"
                className="sub_select_common sub_dialog_list"
                name="grpNo"
                value={grpNo}
                error={dataValid.grpNo}
                onChange={e => {
                  //e.target.value = e.target.value;
                  setGrpNo(e.target.value);
                  setPopupData({ ...popupData, grpNo: e.target.value });
                }}
              >
                <MenuItem value="2">기본</MenuItem>
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
            <Button
              className="sub_button_white_none"
              onClick={() => {
                props.handleClose();
              }}
            >
              취소
            </Button>
            <Button
              color="primary"
              variant="contained"
              className="sub_btn_primary_fill_common sub_dialog_button_blue"
              onClick={async e => {
                console.log(e);
                if (await validationSchema.isValid(popupData)) {
                  handleSubmit();
                } else {
                  setDataValid({
                    loginId: !(await validationSchema.fields.loginId.isValid(
                      popupData.loginId,
                    )),
                    loginPw: !(await validationSchema.fields.loginPw.isValid(
                      popupData.loginPw,
                    )),
                    email: !(await validationSchema.fields.email.isValid(
                      popupData.email,
                    )),
                    phone: !(await validationSchema.fields.phone.isValid(
                      popupData.phone,
                    )),
                    usrNm: !(await validationSchema.fields.usrNm.isValid(
                      popupData.usrNm,
                    )),
                    grpNo: !(await validationSchema.fields.grpNo.isValid(
                      popupData.grpNo,
                    )),
                    service: !(await validationSchema.fields.service.isValid(
                      popupData.service,
                    )),
                  });
                }
              }}
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
