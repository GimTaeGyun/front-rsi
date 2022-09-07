import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { AlertPopupData,customerData } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';
import DialogFormTemplate from '../../../Common/DialogFormTemplate';

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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/,
    ),
  usrNm: Yup.string().required().max(100),
  email: Yup.string().email().required().max(256),
  phone: Yup.string()
    .max(20)
    .required()
    .matches(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/),
  service: Yup.array().required(),
});
const errMsg = {
  loginId: [
    '아이디를 입력해 주세요',
    '5~20자 영문 소문자, 숫자로 입력해 주세요',
  ],
  loginPw: [
    '비밀번호를 입력해 주세요',
    '비밀번호는 8~16자로 입력해 주세요',
    '잘못된 형식의 비밀번호입니다.',
  ],
  usrNm: '잘못된 형식입니다.',
  email: '잘못된 형식입니다.',
  phone: '잘못된 형식입니다.',
  service: '사용 서비스를 설정해 주세요',
};
const columns: GridColDef[] = [
  {
    field: 'svc_nm',
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
    field: 'cre_at',
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

interface PropData {
  email: string;
  grpNm: string;
  grpNo: number;
  id: string;
  loginId: string;
  loginPw?: string;
  phone: string;
  recent_date: string;
  usrId: string;
  usrNm: string;
  service?: Array<number>;
}
const FrmUserUpdateInfo = (props: {
  open: boolean;
  handleClose: Function;
  data: PropData | null;
  submitEvent?: Function | null;
}) => {
  const [data, setData] = useState({ ...props.data, loginPw: '' });
  const [error, setError] = useState({
    loginPw: { msg: '', err: false },
    usrNm: { msg: '', err: false },
    phone: { msg: '', err: false },
    email: { msg: '', err: false },
    service: false,
  });
  const [sharedCustomerData, setSharedCustomerData] = useAtom(customerData);
  const [userGrpSelect, setUserGrpSelect] = useState([]); // 사용자그룹 셀렉트박스 목록
  const [serviceList, setServiceList] = useState([]); // 사용서비스 테이블 목록
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData); // 글로벌 팝업

  useEffect(() => {
    // 사용자그룹 셀렉트박스
    axios
      .post('/management/manager/customer/usergroup/inquiry', {
        custId: sharedCustomerData.custId,
      })
      .then((res: any) => {
        if (res.data.code === '0000') {
          setUserGrpSelect(res.data.result.dataRows);
        }
      })
      .catch();

    // 사용서비스 테이블
    axios
      .post('/management/common/service/inquiry')
      .then((res: any) => {
        if (res.data.code === '0000') {
          setServiceList(
            res.data.result.map((item: any) => {
              return { ...item, id: item.sid };
            }),
          );
        }
      })
      .catch();
  }, []);

  const submitEvent = async () => {
    const err = error;
    // const defaultError를 사용하였음에도 값이 자꾸 바뀌어서 else를 매번 붙여서 다시 리셋해줌
    while (true) {
      // 비밀번호 길이 0
      if (data?.loginPw.length == 0) {
        err.loginPw.err = true;
        err.loginPw.msg = errMsg.loginPw[0];
        break;
      }
      // 비밀번호 길이 범위 밖
      if (data?.loginPw.length < 8 || data?.loginPw.length > 16) {
        err.loginPw.err = true;
        err.loginPw.msg = errMsg.loginPw[1];
        break;
      }
      // 비밀번호 형식 이상
      if (!(await validationSchema.fields.loginPw.isValid(data?.loginPw))) {
        err.loginPw.err = true;
        err.loginPw.msg = errMsg.loginPw[2];
        break;
      }
      err.loginPw.err = false;
      err.loginPw.msg = '';
      break;
    }
    // 유저 이름 형식 이상
    if (!(await validationSchema.fields.usrNm.isValid(data?.usrNm))) {
      err.usrNm.err = true;
      err.usrNm.msg = errMsg.usrNm;
    } else {
      err.usrNm.err = false;
      err.usrNm.msg = '';
    }
    // 전화번호
    if (!(await validationSchema.fields.phone.isValid(data?.phone))) {
      err.phone.err = true;
      err.phone.msg = errMsg.phone;
    } else {
      err.phone.err = false;
    }
    // email
    if (!(await validationSchema.fields.email.isValid(data?.email))) {
      err.email.err = true;
      err.email.msg = errMsg.email;
    } else {
      err.email.err = false;
    }
    // 사용 서비스 선택유무
    if (!(await validationSchema.fields.service.isValid(data?.service))) {
      err.service = true;
      setAlertPopup({
        ...alertPopup,
        visible: true,
        message: errMsg.service,
        leftText: '확인',
        rightText: '',
        leftCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
        },
      });
    } else err.service = false;

    setError({ ...err });
    if (
      !(
        err.email.err ||
        err.loginPw.err ||
        err.phone.err ||
        err.usrNm.err ||
        err.service
      )
    ) {
      props.submitEvent ? props.submitEvent(data) : '';
    }
  };

  const inputChanged = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <DialogFormTemplate
        open={props.open}
        handleClose={props.handleClose}
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
                value={data?.loginId}
                placeholder="8~16자, 영문 대소문자, 숫자, 특수문자 입력 가능"
                className="sub_input_common sub_card_dialog_input"
                readOnly
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                비밀번호 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <TextField
                fullWidth
                name="loginPw"
                placeholder="8~16자, 영문, 숫자, 특수문자 조합"
                type="password"
                value={data?.loginPw}
                error={error.loginPw.err}
                helperText={error.loginPw.msg}
                className="sub_input_common sub_card_dialog_input"
                onChange={inputChanged}
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                이름 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <TextField
                fullWidth
                placeholder="이름"
                name="usrNm"
                value={data?.usrNm}
                error={error.usrNm.err}
                helperText={error.usrNm.msg}
                className="sub_input_common sub_card_dialog_input"
                onChange={inputChanged}
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                전화번호 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <TextField
                fullWidth
                name="phone"
                placeholder="전화번호"
                value={data?.phone}
                error={error.phone.err}
                helperText={error.phone.msg}
                className="sub_input_common sub_card_dialog_input"
                onChange={inputChanged}
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                이메일 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <TextField
                fullWidth
                name="email"
                placeholder="이메일"
                value={data?.email}
                error={error.email.err}
                helperText={error.email.msg}
                className="sub_input_common sub_card_dialog_input"
                onChange={inputChanged}
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                사용자 그룹
              </InputLabel>
              <Select
                fullWidth={true}
                value={data?.grpNo}
                className="sub_select_common sub_dialog_list"
                onChange={inputChanged}
              >
                {userGrpSelect.map((item: any) => {
                  return (
                    <MenuItem value={item.custGrpNo}>{item.custGrp}</MenuItem>
                  );
                })}
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
                  rows={serviceList}
                  columns={columns}
                  checkboxSelection
                  onSelectionModelChange={(e: any) => {
                    setData({
                      ...data,
                      service: e.map((item: any) => item),
                    });
                  }}
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
              onClick={submitEvent}
            >
              저장
            </Button>
          </>
        }
      />
    </>
  );
};
export default FrmUserUpdateInfo;
