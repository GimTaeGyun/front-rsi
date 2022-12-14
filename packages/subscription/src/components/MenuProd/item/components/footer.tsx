import { Box, Button, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const Footer = (props: {
  postStatus: Function;
  statusChange: Function;
  statusValue: any;
  status: any;
  rowNull: boolean;
  openAdd: Function;
  openUpd: Function;
}) => {
  return (
    <Box className="sub_pagination_wrapper" component="div">
      <Box component="div" className="sub_pagination_outer">
        <Select
          fullWidth={false}
          id="btn_batch"
          name="btn_batch"
          value={props.status}
          onChange={e => {
            props.statusChange(e.target.value);
          }}
          className="sub_select_common sub_select_batch"
        >
          <MenuItem value="32767" sx={{ display: 'none' }}>
            상태 일괄 변경
          </MenuItem>
          {props.statusValue.length > 0
            ? props.statusValue.map((item: any) => {
                if (item.value != 32767)
                  return (
                    <MenuItem value={item.value} key={item.value}>
                      {item.label}
                    </MenuItem>
                  );
                else return;
              })
            : ''}
        </Select>
        <Button
          variant="contained"
          className={`sub_btn_primary_fill_common sub_btn_footer_save ${
            props.rowNull ? 'disabled' : ''
          }`}
          onClick={() => {
            props.postStatus();
          }}
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
          아이템 삭제
        </Button>
        <Button
          variant="outlined"
          className="sub_btn_primary_outline_common sub_btn_footer_save"
          onClick={() => {
            props.openUpd(true);
          }}
        >
          아이템 수정
        </Button>
        <Button
          variant="contained"
          className="sub_btn_primary_fill_common sub_btn_footer_save"
          onClick={() => {
            props.openAdd(true);
          }}
        >
          아이템 등록
        </Button>
      </Box>
    </Box>
  );
};
