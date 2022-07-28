import { Box } from "@mui/material";
import React from 'react';
import AppFrame from "../../container/AppFrame";

import DataTable from "./components/Datatable";
import Sidebar from "./components/Sidebar";

const ManagementList = () => (
  <AppFrame title="운영자 관리">
    <Box display="flex">
      <Sidebar />
      <Box sx={{ ml: "30px", width: "100%" }}>
        <DataTable />
      </Box>
    </Box>
  </AppFrame>
);

export default ManagementList;
