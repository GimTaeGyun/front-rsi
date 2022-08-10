import { Box } from "@mui/material";
import React from 'react';

import AppFrame from "../../container/AppFrame";
import DataTable from "./Datatable";
import Sidebar from "./Sidebar";

const PaymentList = ()=>{
    const breadcrumb_links = [
        {text:"공통 관리",href:"/"},
        {text:"운영자 관리",href:null},
    ];
    
    return (
        <AppFrame title="결제 관리" links={breadcrumb_links}>
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