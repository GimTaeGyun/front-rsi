import { Box } from "@mui/material";
import React from 'react';

import AdminContainer from "../Container";
import DataTable from "./components/Datatable";
import Sidebar from "./components/Sidebar";

const ManagementList = () => (
  <AdminContainer title="운영자 관리">
    <Box display="flex">
      <Sidebar />
      <Box sx={{ ml: "30px", width: "100%" }}>
        <DataTable />
      </Box>
    </Box>
  </AdminContainer>
);

export default ManagementList;
