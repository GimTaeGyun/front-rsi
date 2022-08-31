import React from 'react';
import { Box, Select, MenuItem, Button, TablePagination } from '@mui/material';

const Footer = (props: {
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
      <Box component="div" className="sub_pagination_outer"></Box>
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
      ></Box>
    </Box>
  );
};

export default Footer;
