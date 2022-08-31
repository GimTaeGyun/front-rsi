import { Box, Button, MenuItem, Select, TablePagination } from '@mui/material';
import { DataGridPro, GridColDef } from '@mui/x-data-grid-pro';
import * as React from 'react';

const DataTable = (props: {
  rows: Array<any>;
  cellClickEvent?: Function;
  rowsPerPage?: number;
  pageChanged?: Function;
  rowsChanged?: Function;
  total?: number;
  page: number;
  sortModelChanged?: Function;
  apiRef?: any;
  coldef: GridColDef[];
  footer?: any;
  checkbox?: boolean;
}) => {
  const {
    rows = [],
    cellClickEvent = () => {},
    rowsPerPage = 10,
    total = 10,
    sortModelChanged = () => {},
    apiRef,
    checkbox = true,
  } = props;

  return (
    <div style={{ height: '626px', width: '100%' }}>
      <DataGridPro
        className="sub_tbl_outer_common"
        headerHeight={57}
        disableSelectionOnClick
        rowHeight={52}
        rows={rows}
        columns={props.coldef}
        pageSize={rowsPerPage}
        rowsPerPageOptions={[10, 25, 50]}
        pagination={true}
        rowCount={total}
        paginationMode="server"
        checkboxSelection={checkbox}
        onSortModelChange={sortModelChanged as any}
        apiRef={apiRef}
        onCellClick={(params, event) => cellClickEvent(params, event)}
        components={{
          Footer: props.footer,
        }}
      />
    </div>
  );
};

export default DataTable;
