import styled from '@emotion/styled';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import { InputLabel } from '@mui/material';
import { Box, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import MuiMenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { AlertPopupData } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';
import AlertPopup from '../../../Common/AlertPopup';

const MenuItem = styled(MuiMenuItem)({
  '&:hover': {
    backgroundColor: '#ebebeb',
  },
});

const PrdUpdatePopup = () => {
  return (
    <Box component="div" sx={{ width: '500px' }}>
      <Dialog
        open={true}
        sx={{
          '& .MuiPaper-root': {
            minWidth: '500px',
          },
        }}
      >
        <DialogTitle className="sub_dialog_title_outer">
          <Typography>아이템 수정</Typography>
          <IconButton color="primary" component="label">
            <CloseOutlined className="sub_dialog_icon_close" />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ padding: '10px 30px 30px 30px' }}>
          <Box>
            <InputLabel className="sub_formLabel" sx={{ marginTop: '0' }}>
              아이템명 <Typography className="sub_cust_label_dot">•</Typography>{' '}
            </InputLabel>
            <TextField
              placeholder="아이템명을 입력해 주세요."
              className="sub_formText"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#F9F9F9',
                  '& fieldset': { border: '1px dotted #0000001F !important' },
                },
              }}
              disabled
            />
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">
              단위 가격{' '}
              <Typography className="sub_cust_label_dot">•</Typography>{' '}
            </InputLabel>
            <TextField
              fullWidth
              placeholder="단위가격을 입력해 주세요."
              className="sub_formText"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: '1px solid #0000001F !important' },
                },
              }}
            />
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">상품 상태</InputLabel>
            <Select
              fullWidth
              className="sub_select_form"
              value={1}
              sx={{
                backgroundColor: '#F9F9F9',
                '& fieldset': { border: '1px dotted #0000001F !important' },
              }}
              disabled
            >
              <MenuItem value={1}>사용</MenuItem>
              <MenuItem value={-1}>종료</MenuItem>
            </Select>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ justifyContent: 'center', padding: '16px 0' }}>
          <Button sx={{ fontSize: '14px' }} className="sub_button_white_none">
            취소
          </Button>
          <Button
            variant="contained"
            className="sub_button_blue"
            sx={{ width: '57px', height: '36px', fontSize: '14px' }}
          >
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PrdUpdatePopup;
