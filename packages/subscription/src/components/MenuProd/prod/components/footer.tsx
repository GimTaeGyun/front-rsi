import { Box, Button, MenuItem, Select } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useEffect, useState, useMemo } from 'react';
import { AlertPopupData, DefaultGrpInfo, PrdMng } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';

export const Footer = () => {
  const [sharingData, setSharingData] = useAtom(PrdMng);
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);

  const onDeleteClick = () => {
    setAlertPopup({
      ...alertPopup,
      visible: true,
      message: '선택한 상품을 삭제하시겠습니까?',
      leftText: '확인',
      rightText: '취소',
      rightCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
      },
      leftCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
      },
    });
  };

  return (
    <Box className="sub_pagination_wrapper" component="div">
      <Box component="div" className="sub_pagination_outer">
        <Select
          fullWidth={false}
          id="btn_batch"
          name="btn_batch"
          defaultValue="상태 일괄 변경"
          className="sub_select_common sub_select_batch"
        >
          <MenuItem value="상태 일괄 변경">상태 일괄 변경</MenuItem>
        </Select>
        <Button
          variant="contained"
          className="sub_btn_primary_fill_common sub_btn_footer_save"
        >
          변경하기
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
          className="sub_btn_primary_outline_common sub_btn_footer_save"
          onClick={onDeleteClick}
        >
          상품 삭제
        </Button>
        <Button
          variant="outlined"
          className="sub_btn_primary_outline_common sub_btn_footer_save"
        >
          상품 수정
        </Button>
        <Button
          variant="contained"
          className="sub_btn_primary_fill_common sub_btn_footer_save"
        >
          상품 등록
        </Button>
      </Box>
    </Box>
  );
};
