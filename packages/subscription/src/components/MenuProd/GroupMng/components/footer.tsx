import { Box, Button, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const Footer = (props: {
  postStatus: Function;
  statusChange: Function;
  statusValue: any;
  status: any;
  rowNull: Boolean;
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
          {props.statusValue.map((item: any) => {
            switch (item.value) {
              case '1':
                return (
                  <MenuItem value={item.value} key="1">
                    {item.label}
                  </MenuItem>
                );

              case '-1':
                return (
                  <MenuItem value={item.value} key="2">
                    {item.label}
                  </MenuItem>
                );

              case '32767':
                return (
                  <MenuItem value={item.value} key="3">
                    상태 일괄 변경
                  </MenuItem>
                );
              default:
                return '';
            }
          })}
        </Select>
        {!props.rowNull ? (
          <Button
            variant="contained"
            className="sub_btn_primary_fill_common sub_btn_footer_save"
            onClick={() => {
              props.postStatus();
            }}
          >
            변경하기
          </Button>
        ) : (
          <Button
            disabled
            className="sub_btn_footer_save"
            sx={{
              color: '#00000042 !important',
              backgroundColor: '#0000001F !important',
              fontFamily: 'NotoSansKRMedium !important',
              fontSize: '14px !important',
              border: '0 !important',
              letterSpacing: '0.01px !important',
              boxShadow: '0px 3px 3px #0000002E !important',
            }}
            onClick={() => {
              props.postStatus();
            }}
          >
            변경하기
          </Button>
        )}
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
        >
          아이템 수정
        </Button>
        <Button
          variant="contained"
          className="sub_btn_primary_fill_common sub_btn_footer_save"
        >
          아이템 등록
        </Button>
      </Box>
    </Box>
  );
};
