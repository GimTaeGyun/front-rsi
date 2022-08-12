import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';

import AppFrame from '../../../container/AppFrame';
import { AlertPopupData, DefaultAlertPopupData } from '../../../data/atoms';
import axios from '../../../utils/axios';
import AlertPopup from '../../Common/AlertPopup';
import { Card, CardHeader, OutlinedInput, Select, MenuItem, Button, Typography } from '@mui/material';
import DataTable from './components/Datatable';


const Admin = () => {
  // alertPopup object
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);

  return (
    <>
      <AppFrame
        title="고객 관리"
        breadcrumbs={[
          { name: '고객/계약/결제 관리', link: '/admin/ccp/customer' },
          { name: '고객 관리', link: '/admin/ccp/customer' },
        ]}
      >
        <>
          {alertPopup.visible ? (
            <AlertPopup
              message={alertPopup.message}
              buttontext={alertPopup.leftText}
              rightButtonText={alertPopup.rightText}
              rightCallback={alertPopup.rightCallback}
              closeCallback={alertPopup.leftCallback}
            />
          ) : undefined}

          {/* Filter Section */}
          <Card className="sub_card_common sub_card_filter" sx={{width:"100%",maxWidth:"1470px",height:"112px"}}>
            <Box className="sub_listpage_filter_topsection">
              <Box className="sub_listpage_filter_topsection_sub">
                <Box component="span" className="sub_listpage_filter_label">검색어 입력</Box>
                <Box component="span" className="sub_listpage_filter_inputgroup">
                  <Select
                    fullWidth={false}
                    id="search-category"
                    name="search-category"
                    defaultValue="전체"
                    className="sub_select_common sub_listpage_filter_list"
                  >
                    <MenuItem value="전체">전체</MenuItem>
                  </Select>
                  <OutlinedInput
                    fullWidth={false}
                    id="search-term"
                    placeholder="검색어 입력"
                    name="search-term"
                    className="sub_input_common sub_listpage_filter_search"
                  />
                </Box>
              </Box>
              <Box className="sub_listpage_filter_topsection_sub">
                <Box component="span" className="sub_listpage_filter_label">가입일</Box>
                <Box component="span" className="sub_listpage_filter_inputgroup">
                  <OutlinedInput
                    fullWidth={false}
                    id="search-date1"
                    placeholder="시작일"
                    name="search-date1"
                    className="sub_input_common sub_listpage_filter_date"
                    sx={{marginRight:"8px"}}
                  />
                  <OutlinedInput
                    fullWidth={false}
                    id="search-date2"
                    placeholder="종료일"
                    name="search-date2"
                    className="sub_input_common sub_listpage_filter_date"
                  />
                </Box>
              </Box>
              <Box className="sub_listpage_filter_topsection_sub">
                <Box component="span" className="sub_listpage_filter_label">고객유형</Box>
                <Box component="span" className="sub_listpage_filter_inputgroup">
                    <Select
                      fullWidth={false}
                      id="search-category21"
                      name="search-category21"
                      defaultValue="전체"
                      className="sub_select_common sub_listpage_filter_list2"
                    >
                      <MenuItem value="전체">전체</MenuItem>
                    </Select>
                    <Select
                      fullWidth={false}
                      id="search-category22"
                      name="search-category22"
                      defaultValue="전체"
                      className="sub_select_common sub_listpage_filter_list2"
                    >
                      <MenuItem value="전체">전체</MenuItem>
                    </Select>
                    <Select
                      fullWidth={false}
                      id="search-category23"
                      name="search-category23"
                      defaultValue="전체"
                      className="sub_select_common sub_listpage_filter_list2"
                    >
                      <MenuItem value="전체">전체</MenuItem>
                    </Select>
                </Box>
              </Box>
            </Box>
            <Box className="sub_listpage_filter_btmsection">
              <Button variant="outlined" className="sub_btn_primary_outline_common sub_btn_filter1">검색하기</Button>
              <Button variant="contained" className="sub_btn_primary_fill_common sub_btn_filter2">검색하기</Button>
            </Box>
          </Card>

          <Card className="sub_tbl_section_common">
            <CardHeader
              className="sub_tbl_header_outer_common"
              component="div"
              title={
                <Box
                  component="div"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                <Typography className="sub_tbl_header_text_common">전체 고객 (300)</Typography>
                </Box>
                }
            ></CardHeader>
            <DataTable />
          </Card>
        </>
      </AppFrame>
    </>
  );
};

export default Admin;
