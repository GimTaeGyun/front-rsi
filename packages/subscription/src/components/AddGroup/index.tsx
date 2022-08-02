import { Box, Button, Modal, OutlinedInput } from '@mui/material';
import * as React from 'react';
import axios from '../../utils/axios';
import { ITreeItem } from '../ManagementList/components/Sidebar';

import DataTable from './Datatable';

const AddGroup = (props: {
  title: string;
  open: boolean;
  treeItem?: ITreeItem;
  handleClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}) => {
  const { title, open, treeItem, handleClose } = props;
  const [formData, setFormData] = React.useState({
    usrGrpNm: "",
    description: "",
    usrRoleId: []
  });

  const addGroup = () => {
    const updateData = {
      action: 'mod', // (update : “mod” , add : null)
      description: formData.description,
      uppUsrGrpId: treeItem?.data?.uppUsrGrpId, // (parent grpId if root then null)
      usrGrpId: treeItem?.id, // (selected item grpId)
      usrGrpNm: formData.usrGrpNm,
      usrRoleId: formData.usrRoleId,
    };

    axios
      .post('/management/subscription/admin/usergroup/update', updateData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const onRowsSelect = (values: any) => setFormData({ ...formData, usrRoleId: values })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => 
    setFormData({ ...formData, [event.target.name]: event.target.value })

  return (
    <>
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
              <Box sx={styles.input_label}>
                그룹명<Box component="span" sx={styles.req_field}></Box>
              </Box>
              <Box sx={styles.checkfield_outer}>
                <Box component="span" sx={{ width: '348px' }}>
                  <OutlinedInput
                    fullWidth
                    id="group-name"
                    placeholder="생성할 그룹명을 입력해 주세요."
                    sx={styles.inputfield}
                    name="usrGrpNm"
                    value={formData.usrGrpNm}
                    onChange={handleChange}
                  />
                </Box>
                <Box component="span" sx={{ display: 'inline-block' }}>
                  <Button
                    color="primary"
                    variant="contained"
                    sx={styles.btn_check}
                  >
                    중복확인
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box component="div" sx={styles.inputfield_outer}>
              <Box sx={styles.input_label}>그룹 설명</Box>
              <Box sx={styles.checkfield_outer}>
                <Box component="span" sx={{ width: '100%' }}>
                  <OutlinedInput
                    fullWidth
                    id="group-desc"
                    placeholder="그룹설명을 입력해 주세요."
                    sx={styles.inputfield}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
            </Box>
            <Box component="div" sx={styles.inputfield_outer}>
              <Box sx={styles.input_label}>
                그룹 역할 설정<Box component="span" sx={styles.req_field}></Box>
              </Box>
              <Box component="div" sx={{ position: 'relative' }}>
                <DataTable onChange={onRowsSelect} />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.popup_footer}>
            <Button sx={styles.btn_close} onClick={handleClose}>
              취소
            </Button>
            <Button
              color="primary"
              variant="contained"
              sx={styles.btn_submit}
              onClick={addGroup}
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
  inputfield: {
    fontFamily: 'NotoSansKRRegular',
    fontSize: '14px',
    width: '100%',
    height: '42px',
    '& input::placeholder': {
      color: '#00000099',
      opacity: '1',
    },
    '&.MuiOutlinedInput-root.Mui-focused fieldset': {
      borderColor: '#284AD5',
      borderWidth: '1px',
    },
  },
  input_outer: {
    display: 'inline-block',
  },
  btn_check: {
    px: '0',
    color: '#fff',
    width: '82px',
    height: '42px',
    borderColor: '#284AD5',
    backgroundColor: '#284AD5',
    boxShadow: 'none',
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
    width: '57px',
    height: '36px',
    borderColor: '#284AD5',
    backgroundColor: '#284AD5',
    boxShadow: '0px 3px 3px #0000002E',
    ':hover': {
      borderColor: '#0615B2',
      backgroundColor: '#0615B2',
      boxShadow: '0px 3px 3px #0000002E',
    },
  },
  btn_close: {
    color: '#284AD5',
    ':hover': {
      color: '#0615B2',
      backgroundColor: 'unset',
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
    borderTop: '1px solid #eee',
  },
};

export default AddGroup;
