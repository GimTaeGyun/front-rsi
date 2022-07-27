import {Box} from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import * as React from "react";

const columns: GridColDef[] = [
  { field: 'roleName', headerName: '설명', width: 157 },
  { field: 'roleDesc', headerName: '역할명', width: 220 },
];

const rows = [
  { id: 1, roleName: '슈퍼바이저', roleDesc: '슈퍼바이저 굿' },
  { id: 2, roleName: '슈퍼바이저', roleDesc: '슈퍼바이저 굿' },
  { id: 3, roleName: '슈퍼바이저', roleDesc: '슈퍼바이저 굿' },
  { id: 4, roleName: '슈퍼바이저', roleDesc: '슈퍼바이저 굿' },
  { id: 5, roleName: '슈퍼바이저', roleDesc: '슈퍼바이저 굿' }
];

const DataTable = () => {
  return (
    <div style={{ height: '285px', width: '100%' }}>
      <DataGrid
        rowHeight={45}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{
          Footer: ()=>{return (<Box></Box>);},
        }}
        sx={styles.dg_styles}
      />
    </div>
  );
}

const styles = {
  dg_styles:{
    /*
    "& .MuiDataGrid-columnHeaders":{
        height:"45px !important",maxHeight:"45px !important",minHeight:"45px !important",
    },
    "& .MuiDataGrid-columnHeadersInner":{
      height:"45px !important",maxHeight:"45px !important",minHeight:"45px !important",
    }*/
  }
}

export default DataTable;
