import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  InputLabel,
} from '@mui/material';
import { useAtom } from 'jotai';
import * as React from 'react';

import { AlertPopupData } from '../../data/atoms';
import axios from '../../utils/axios';
import AlertPopup from '../Common/AlertPopup';
import { ITreeItem } from '../MenuCommon/components/Sidebar';
import DataTable from './Datatable';

const AddGroup = (props: {
  title: string;
  open: boolean;
  treeItem?: ITreeItem;
  handleClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}) => {
  const { title, open, treeItem, handleClose } = props;
  const [formData, setFormData] = React.useState({
    usrGrpNm: '',
    description: '',
    usrRoleId: [],
  });
  const [errors, setErrors] = React.useState({
    usrGrpNm: false,
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [alertPopupData, setAlertPopupData] = useAtom(AlertPopupData);
  const addGroup = () => {
    setSubmitted(true);

    // If name has error
    if (errors?.usrGrpNm) {
      return;
    }

    const groupData = {
      action: 'add',
      description: formData.description,
      uppUsrGrpId: treeItem?.data?.uppUsrGrpId,
      usrGrpId: treeItem?.id,
      usrGrpNm: formData.usrGrpNm,
      usrRoleId: formData.usrRoleId,
    };

    axios
      .post('/management/subscription/admin/usergroup/update', groupData)
      .then(res => {
        console.log(res);
        if (res.data.code === '0000')
          setAlertPopupData({
            visible: true,
            message:
              groupData.action === 'mod'
                ? '운영자 그룹 수정이 완료되었습니다'
                : '새로운 운영자 그룹이 추가되었습니다',
            leftCallback: () => {
              setAlertPopupData({ ...alertPopupData, visible: false });
            },
            rightCallback: () => {},
            leftText: '확인',
            rightText: '',
          });
      })
      .catch(err => {
        handleClose(err);
      });
  };

  const checkGroupName = () => {
    setSubmitted(false);

    if (formData.usrGrpNm !== '') {
      axios
        .post('/management/subscription/admin/usergroup/check', {
          field: 'grpNmCheck',
          value1: formData.usrGrpNm,
        })
        .then(res => {
          setErrors({ ...errors, usrGrpNm: res.data.code !== '0000' });
          setAlertPopupData({
            visible: true,
            message:
              res.data.code === '0000'
                ? '사용할 수 있는 그룹명입니다'
                : '사용할 수 없는 그룹명입니다',
            leftCallback: () => {
              setAlertPopupData({ ...alertPopupData, visible: false });
            },
            rightCallback: () => {},
            leftText: '확인',
            rightText: '',
          });
        })
        .catch(err => {
          setErrors({ ...errors, usrGrpNm: true });
          console.error(err);
        });
    }
  };

  const onRowsSelect = (values: any) =>
    setFormData({ ...formData, usrRoleId: values });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setSubmitted(false);

    if (name === 'usrGrpNm') {
      setErrors({ ...errors, usrGrpNm: true });
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {submitted && errors.usrGrpNm && (
        <AlertPopup message="그룹 이름 확인." buttontext="확인" />
      )}
      <Modal
        sx={styles.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={styles.popup_outer}>
          <Box sx={styles.popup_header}>
            <Box component="h3" sx={styles.popup_title}>
              {title}
            </Box>
            <Box
              component="img"
              src={require('@administrator/subscription/public/assets/images/popup_close.png')}
              sx={styles.close_btn}
              onClick={handleClose}
            ></Box>
          </Box>
          <Box sx={styles.popup_content}>
            <Box component="div" sx={styles.inputfield_outer}>
              <InputLabel
                className="sub_formLabel"
                sx={{ marginBottom: '10px' }}
              >
                그룹명<Typography className="sub_label_dot">•</Typography>{' '}
              </InputLabel>
              <Box sx={styles.checkfield_outer}>
                <Box component="span" sx={{ width: '348px' }}>
                  <TextField
                    fullWidth
                    id="group-name"
                    placeholder="생성할 그룹명을 입력해 주세요."
                    className="sub_formText"
                    name="usrGrpNm"
                    value={formData.usrGrpNm}
                    onChange={handleChange}
                    sx={{ marginTop: '0 !important' }}
                  />
                </Box>
                <Box component="span" sx={{ display: 'inline-block' }}>
                  <Button
                    color="primary"
                    variant="contained"
                    sx={styles.btn_check}
                    onClick={checkGroupName}
                    className="sub_button_blue"
                  >
                    중복확인
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box component="div" sx={styles.inputfield_outer}>
              <InputLabel className="sub_formLabel">그룹 설명</InputLabel>
              <TextField
                fullWidth
                id="group-desc"
                placeholder="그룹설명을 입력해 주세요."
                className="sub_formText"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Box>
            <Box component="div" sx={styles.inputfield_outer}>
              <InputLabel
                className="sub_formLabel"
                sx={{ marginBottom: '10px' }}
              >
                그룹 역할 설정
                <Typography className="sub_label_dot">•</Typography>{' '}
                <Box component="span" sx={styles.req_field}></Box>
              </InputLabel>
              <Box component="div" sx={{ position: 'relative' }}>
                <DataTable onChange={onRowsSelect} />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.popup_footer}>
            <Button onClick={handleClose} className="sub_button_white_none">
              취소
            </Button>
            <Button
              color="primary"
              variant="contained"
              sx={styles.btn_submit}
              onClick={addGroup}
              className="sub_button_blue"
            >
              저장
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const styles = {
  modal: {
    '& .MuiBox-root:focus-visible': {
      outline: 'unset',
    },
  },
  req_field: {
    ml: '5px',
    display: 'inline-block',
    backgroundImage: 'url(/assets/images/req_field.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    backgroundPosition: 'left top',
    width: '14px',
    height: '12px',
  },
  inputfield_outer: {
    mb: '13px',
  },
  checkfield_outer: {
    display: 'flex',
    width: '100%',
    height: '42px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input_outer: {
    display: 'inline-block',
  },
  btn_check: {
    px: '0',
    width: '82px',
    height: '42px',
    ':hover': {
      borderColor: '#0615B2',
      backgroundColor: '#0615B2',
      boxShadow: 'none',
    },
  },
  input_label: {
    mb: '9px',
    color: '#333',
    fontSize: '14px',
    fontFamily: 'NotoSansKRMedium',
    letterSpacing: '-0.35px',
  },
  btn_submit: {
    color: '#fff',
    minWidth: '57px',
    height: '36px',
    borderColor: '#284AD5',
    backgroundColor: '#284AD5',
    boxShadow: '0px 3px 3px #0000002E',
    fontFamily: 'NotoSansKRMedium',
    ':hover': {
      borderColor: '#0615B2',
      backgroundColor: '#0615B2',
      boxShadow: '0px 3px 3px #0000002E',
    },
  },
  popup_outer: {
    display: 'block',
    m: '0 auto',
    width: '500px',
    height: '660px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#fff',
    border: 'none',
    boxShadow: '0px 1px 5px #0000002E',
    borderRadius: '6px',
  },
  popup_header: {
    p: '0 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '56px',
    borderBottom: '1px solid #eee',
  },
  close_btn: { width: '24px', height: '24px', cursor: 'pointer' },
  popup_title: {
    fontSize: '16px',
    fontColor: '#000000DE',
    fontFamily: 'NotoSansKRMedium',
  },
  popup_content: { width: '100%', height: '534px', px: '30px', pt: '30px' },
  popup_footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    widwidth: '100%',
    height: '70px',
  },
};

export default AddGroup;
