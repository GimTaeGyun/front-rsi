import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';

import AppFrame from '../../../container/AppFrame';
import AlertPopup from '../../Common/AlertPopup';
import SidebarRcTree from './components/SidebarRcTree';
import DatatableItems from './components/DatatableItems';

const Items = () => {
  // alertPopup 메시지
  const [alertPopup, setAlertPopup] = React.useState(false);
  const [filterDropdown, setFilterDropdown] = React.useState(false);
  const showDropdownList = () => {
    setFilterDropdown(!filterDropdown);
  };
  return (
    <>
      <AppFrame
        title="아이템 관리"
        breadcrumbs={[
          { name: '상품 관리', link: '/admin/common/admin' },
          { name: '아이템 관리', link: '/admin/common/admin' },
        ]}
      >
        <>
          {alertPopup ? (
            <AlertPopup
              message="아이템 그룹 삭제가 완료되었습니다."
              buttontext="확인"
            />
          ) : undefined}
          <Box
            display="flex"
            sx={{
              fontFamily: 'NotoSansKRMedium',
            }}
          >
            <SidebarRcTree />
            <Box sx={{ ml: '30px', width: '100%' }}>
              <Card
                className="sub_items_filter_card"
                sx={{ marginBottom: '20px' }}
              >
                <Box>
                  <CardHeader
                    component="div"
                    title="아이템 그룹 정보"
                    className="sub_items_filter_header"
                  />
                </Box>
                <Divider />
                <CardContent id="scroll" className="sub_items_filter_content">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={0}>
                      <Grid item xs={6} md={6} lg={6}>
                        <Box component="div" className="sub_items_filter_row">
                          <Box
                            component="div"
                            className="sub_items_filter_label"
                          >
                            그룹명{' '}
                            <Typography className="sub_cust_label_dot">
                              •
                            </Typography>{' '}
                          </Box>
                          <OutlinedInput
                            fullWidth={false}
                            placeholder=""
                            value="ROOT"
                            className="sub_input_common sub_items_filter_input"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <Box component="div" className="sub_items_filter_row">
                          <Box
                            component="div"
                            className="sub_items_filter_label"
                          >
                            그룹 설명{' '}
                          </Box>
                          <OutlinedInput
                            fullWidth={false}
                            placeholder=""
                            value="그룹 설명을 입력해 주세요."
                            className="sub_input_common sub_items_filter_input"
                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                      <Grid item xs={6} md={6} lg={6}>
                        <Box component="div" className="sub_items_filter_row">
                          <Box
                            component="div"
                            className="sub_items_filter_label"
                          >
                            그룹 상태{' '}
                            <Typography className="sub_cust_label_dot">
                              •
                            </Typography>{' '}
                          </Box>
                          <Select
                            fullWidth={false}
                            value="사용가능"
                            className="sub_select_common sub_items_filter_list"
                          >
                            <MenuItem value="사용가능">사용가능</MenuItem>
                          </Select>
                        </Box>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <Box component="div" className="sub_items_filter_row">
                          <Box
                            component="div"
                            className="sub_items_filter_label"
                          >
                            그룹 유형{' '}
                            <Typography className="sub_cust_label_dot">
                              •
                            </Typography>{' '}
                          </Box>
                          <Select
                            fullWidth={false}
                            value="매체"
                            className="sub_select_common sub_items_filter_list"
                          >
                            <MenuItem value="매체">매체</MenuItem>
                          </Select>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <Box
                          component="div"
                          className="sub_items_filter_footer"
                        >
                          <Button
                            variant="contained"
                            className="sub_btn_primary_fill_common sub_btn_filter2"
                          >
                            저장하기
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>

              <Card
                className={
                  filterDropdown
                    ? 'sub_items_filter2_card'
                    : 'sub_items_filter2_card active'
                }
                sx={{ marginBottom: '20px' }}
              >
                <CardContent className="sub_items_filter2_container">
                  <Box component="div" className="sub_items_filter2_content">
                    <Box className="sub_items_filter2_left">
                      <Box component="div" className="sub_items_filter_label">
                        검색어 입력{' '}
                      </Box>
                      <Select
                        fullWidth={false}
                        value="전체"
                        className="sub_select_common sub_items_filter_list1"
                      >
                        <MenuItem value="전체">전체</MenuItem>
                      </Select>
                      <OutlinedInput
                        fullWidth={false}
                        placeholder=""
                        value="검색어 입력"
                        className="sub_input_common sub_items_filter_search"
                      />
                    </Box>
                    <Box className="sub_items_filter2_right">
                      <Button
                        variant="text"
                        className="sub_items_btn_dropdown"
                        onClick={showDropdownList}
                      >
                        상세검색
                        <Box
                          component="img"
                          src="/btn_dropdown.png"
                          sx={{ marginLeft: '5px' }}
                        ></Box>
                      </Button>
                      <Button
                        variant="outlined"
                        className="sub_btn_primary_outline_common sub_items_btn_init"
                      >
                        초기화
                      </Button>
                      <Button
                        variant="contained"
                        className="sub_btn_primary_fill_common sub_items_btn_search"
                      >
                        검색하기
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    component="div"
                    className="sub_listpage_filter_dropdown_section"
                  >
                    <Box
                      component="div"
                      className="sub_listpage_filter_dropdown_row"
                    >
                      <Box className="sub_filter_dropdown_lbl" component="span">
                        아이템 상태
                      </Box>
                      <FormGroup className="sub_filter_dropdown_chk_outer">
                        <FormControlLabel control={<Checkbox />} label="전체" />
                      </FormGroup>
                      <FormGroup className="sub_filter_dropdown_chk_outer">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="사용가능"
                        />
                      </FormGroup>
                      <FormGroup className="sub_filter_dropdown_chk_outer">
                        <FormControlLabel
                          control={<Checkbox />}
                          label="사용불가"
                        />
                      </FormGroup>
                    </Box>
                  </Box>
                </CardContent>
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
                      <Typography className="sub_tbl_header_text_common">
                        전체 (300)
                      </Typography>
                    </Box>
                  }
                ></CardHeader>
                <DatatableItems />
              </Card>
            </Box>
          </Box>
        </>
      </AppFrame>
    </>
  );
};

export default Items;
