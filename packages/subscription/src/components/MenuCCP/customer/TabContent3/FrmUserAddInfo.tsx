import React from 'react';
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  TextField,
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
const errMsg = {
  loginId: [
    '아이디를 입력해 주세요',
    '5~20자 영문 소문자, 숫자로 입력해 주세요',
  ],
  loginPw: [
    '비밀번호를 입력해 주세요',
    '비밀번호는 8~16자로 입력해 주세요',
    '잘못된 형식의 비밀번호입니다',
  ],
  usrNm: '잘못된 형식입니다',
  email: '잘못된 형식입니다',
  phone: '잘못된 형식입니다',
  service: '사용 서비스를 선택해 주세요',
};
const validationSchema = Yup.object().shape({
  loginId: Yup.string()
    .required()
    .min(4)
    .max(20)
    .matches(/^[a-z0-9]*$/),
  loginPw: Yup.string()
    .required()
    .min(8)
    .max(16)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_=])[A-Za-z\d@$!%*#?&_=]{8,}$/,
    ),
  usrNm: Yup.string().required().max(100),
  email: Yup.string().email().required().max(256),
  phone: Yup.string().max(20).required(),
  service: Yup.array().required(),
});

const defaultFormValidation = {
  loginId: { err: false, msg: '' },
  loginPw: { err: false, msg: '' },
  usrNm: { err: false, msg: '' },
  phone: { err: false, msg: '' },
  email: { err: false, msg: '' },
  service: { err: false, msg: '' },
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

  const checkValidation = async () => {
    let tmp = {
      loginId: { err: false, msg: '' },
      loginPw: { err: false, msg: '' },
      usrNm: { err: false, msg: '' },
      phone: { err: false, msg: '' },
      email: { err: false, msg: '' },
      service: { err: false, msg: '' },
    };
    // loginId 길이 0
    if (popupData.loginId.length == 0) {
      tmp.loginId.err = true;
      tmp.loginId.msg = errMsg.loginId[0];
    }
    // loginId 형식
    if (!(await validationSchema.fields.loginId.isValid(popupData.loginId))) {
      tmp.loginId.err = true;
      tmp.loginId.msg = errMsg.loginId[1];
    }
    while (true) {
      // 비밀번호 길이 0
      if (popupData.loginPw.length == 0) {
        tmp.loginPw.err = true;
        tmp.loginPw.msg = errMsg.loginPw[0];
        break;
      }
      // 비밀번호 길이 범위 밖
      if (popupData.loginPw.length < 8 || popupData.loginPw.length > 16) {
        tmp.loginPw.err = true;
        tmp.loginPw.msg = errMsg.loginPw[1];
        break;
      }
      // 비밀번호 형식 이상
      if (!(await validationSchema.fields.loginPw.isValid(popupData.loginPw))) {
        tmp.loginPw.err = true;
        tmp.loginPw.msg = errMsg.loginPw[2];
        break;
      }
      tmp.loginPw.err = false;
      tmp.loginPw.msg = '';
      break;
    }
    // 유저 이름 형식 이상
    if (!(await validationSchema.fields.usrNm.isValid(popupData.usrNm))) {
      tmp.usrNm.err = true;
      tmp.usrNm.msg = errMsg.usrNm;
    } else {
      tmp.usrNm.err = false;
      tmp.usrNm.msg = '';
    }
    // 전화번호
    if (!(await validationSchema.fields.phone.isValid(popupData.phone))) {
      tmp.phone.err = true;
      tmp.phone.msg = errMsg.phone;
    } else {
      tmp.phone.err = false;
      tmp.phone.msg = '';
    }
    // email
    if (!(await validationSchema.fields.email.isValid(popupData.email))) {
      tmp.email.err = true;
      tmp.email.msg = errMsg.email;
    } else {
      tmp.email.err = false;
      tmp.email.msg = '';
    }

    setDataValid({ ...tmp });

    return !(
      tmp.email.err ||
      tmp.loginId.err ||
      tmp.loginPw.err ||
      tmp.phone.err ||
      tmp.usrNm.err
    );
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
              <TextField
                fullWidth
                id="loginId"
                className="sub_input_common sub_card_dialog_input"
                placeholder="8~16자, 영문 대소문자, 숫자, 특수문자 입력 가능"
                name="loginId"
                value={loginId}
                error={dataValid.loginId.err}
                helperText={dataValid.loginId.msg}
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
              <TextField
                type="password"
                fullWidth
                id="loginPw"
                className="sub_input_common sub_card_dialog_input"
                placeholder="8~16자, 영문, 숫자, 특수문자 조합"
                name="loginPw"
                value={loginPw}
                error={dataValid.loginPw.err}
                helperText={dataValid.loginPw.msg}
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
              <TextField
                fullWidth
                id="usrNm"
                className="sub_input_common sub_card_dialog_input"
                placeholder="이름"
                name="usrNm"
                value={usrNm}
                error={dataValid.usrNm.err}
                helperText={dataValid.usrNm.msg}
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
              <TextField
                fullWidth
                id="phone"
                className="sub_input_common sub_card_dialog_input"
                placeholder="전화번호"
                name="phone"
                value={phone}
                error={dataValid.phone.err}
                helperText={dataValid.phone.msg}
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
              <TextField
                fullWidth
                id="email"
                className="sub_input_common sub_card_dialog_input"
                placeholder="이메일 주소"
                name="email"
                value={email}
                error={dataValid.email.err}
                helperText={dataValid.email.msg}
                onChange={e => {
                  //e.target.value = e.target.value;
                  setEmail(e.target.value);
                  setPopupData({ ...popupData, email: e.target.value });
                }}
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                사용자 그룹
              </InputLabel>
              <Select
                fullWidth={true}
                id="grpNo"
                className="sub_select_common sub_dialog_list"
                name="grpNo"
                value={grpNo}
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
              onClick={async () => {
                if (await checkValidation()) {
                  handleSubmit();
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
