import { Box, Button, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';

import OptionForm from './OptionForm';

export const Footer = (props: {
  postStatus: Function;
  statusChange: Function;
  statusValue: any;
  status: any;
  rowNull: boolean;
  uppId: any;
  selectId: any;
}) => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
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
            옵션 삭제
          </Button>
          <Button
            variant="outlined"
            className="sub_btn_primary_outline_common sub_btn_footer_save"
          >
            옵션 수정
          </Button>
          <Button
            variant="contained"
            className="sub_btn_primary_fill_common sub_btn_footer_save"
            onClick={onClick}
          >
            옵션 등록
          </Button>
        </Box>
      </Box>
      <OptionForm
        open={open}
        onClose={onClose}
        uppId={props.uppId}
        selectId={props.selectId}
      />
    </>
  );
};
