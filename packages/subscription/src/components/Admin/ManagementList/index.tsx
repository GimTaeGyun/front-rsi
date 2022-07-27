import React from 'react';
import { Box } from "@mui/material";
import AdminContainer from "../Container";
import DataTable from "./components/Datatable";
import Sidebar from "./components/Sidebar";

const ManagementList = () => (
  <AdminContainer title="운영자 관리">
    <Box display="flex">
      <Sidebar />
      <Box sx={{ ml: "30px" }}>
        <DataTable />
      </Box>
    </Box>
  </AdminContainer>
);

export default ManagementList;
