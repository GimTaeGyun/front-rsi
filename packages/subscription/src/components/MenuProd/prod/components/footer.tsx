import { Box, Button, MenuItem, Select } from '@mui/material';
import React from 'react';

export const Footer = () => {
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
