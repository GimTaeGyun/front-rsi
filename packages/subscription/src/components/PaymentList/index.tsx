import { Box } from "@mui/material";
import React from 'react';

import AppFrame from "../../container/AppFrame";
import DataTable from "./Datatable";
import Sidebar from "./Sidebar";

const PaymentList = ()=>{
    return (
        <AppFrame title="결제 관리">
            <Box display="flex">
            <Sidebar />
            <Box sx={{ ml: "30px", width: "100%" }}>
                <DataTable />
            </Box>
            </Box>
        </AppFrame>
    );
}
export default PaymentList;