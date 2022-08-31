import React from 'react';
import { Box, Select, MenuItem, Button, TablePagination } from '@mui/material';

const TableFooter = (props: {
  total: number;
  pageNo: number;
  dispatchPageNo: Function;
  pageSize: number;
  dispatchPageSize: Function;
}) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    console.log(event);
    props.dispatchPageNo({ type: 'pageNo', value: newPage + 1 });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    props.dispatchPageSize({
      type: 'pageSize',
      value: parseInt(event.target.value),
    });
  };

  return (
    <Box className="sub_pagination_wrapper" component="div">
      <Box component="div" className="sub_pagination_outer">
        <Select
          fullWidth={false}
          id="btn_batch"
          name="btn_batch"
          defaultValue="일괄 사용 처리"
          className="sub_select_common sub_select_batch"
        >
          <MenuItem value="일괄 사용 처리">일괄 사용 처리</MenuItem>
        </Select>
        <Button
          variant="contained"
          className="sub_btn_primary_fill_common sub_btn_footer_save"
        >
          리스트 저장
        </Button>
      </Box>
      <Box component="div" className="sub_pagination_outer">
        <TablePagination
          className="sub_pagination"
          component="div"
          count={props.total}
          page={props.pageNo - 1}
          onPageChange={handleChangePage}
          rowsPerPage={props.pageSize}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <Box
        component="div"
        className="sub_pagination_outer"
        sx={{ justifyContent: 'end' }}
      >
        <Button
          variant="outlined"
          className="sub_btn_primary_outline_common sub_btn_footer_export"
        >
          <Box
            component="img"
            src="/icon_export.png"
            sx={{ marginRight: '3px' }}
          ></Box>
          엑셀 다운로드
        </Button>
      </Box>
    </Box>
  );
};

export default TableFooter;
