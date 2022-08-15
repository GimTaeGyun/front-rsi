import { Box, Button, Card, CardHeader, CardContent, Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, OutlinedInput, Select, Tab, Tabs, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';

import AppFrame from '../../../container/AppFrame';
import { AlertPopupData, DefaultAlertPopupData } from '../../../data/atoms';
import axios from '../../../utils/axios';
import AlertPopup from '../../Common/AlertPopup';
import ModalResetPassword from './components/ModalResetPassword';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: "20px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const Admin = () => {
  // alertPopup object
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);

  const [tabValue, setTabValue] = React.useState(0);

  const [modalResetPassword, setModalResetPassword] = React.useState(true);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    event;
    setTabValue(newValue);
  };

  const handleModalResetPassword = ()=>{
    setModalResetPassword(!modalResetPassword);
  }
  return (
    <>
      <AppFrame
        title="고객 관리"
        breadcrumbs={[
          { name: '고객/계약/결제 관리', link: '/admin/ccp/customer' },
          { name: '고객 관리', link: '/admin/ccp/customer' },
          { name: '문의관리', link: '/admin/ccp/customer/contact' },
        ]}
      >
        <>
          {modalResetPassword ? (
            <ModalResetPassword
              title="비밀번호 재설정"
              open={modalResetPassword}
              handleClose={handleModalResetPassword}
            />
          ) : undefined}

          {alertPopup.visible ? (
            <AlertPopup
              message={alertPopup.message}
              buttontext={alertPopup.leftText}
              rightButtonText={alertPopup.rightText}
              rightCallback={alertPopup.rightCallback}
              closeCallback={alertPopup.leftCallback}
            />
          ) : undefined}

          <Box sx={{ mt:'-20px', borderBottom: 1, borderColor: 'divider' }}>
            <Tabs className="sub_tabs_container" value={tabValue} onChange={handleChangeTab} aria-label="basic tabs example">
              <Tab label="상세정보" {...a11yProps(0)} />
              <Tab label="주문정보" {...a11yProps(1)} />
              <Tab label="사용자관리" {...a11yProps(2)} />
              <Tab label="문의관리" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            <Card className="sub_card_common sub_card_form" sx={{width:"100%",height:"168px"}}>
              <CardHeader
              className="sub_tbl_header_outer_common sub_card_form_header"
              component="div"
              title={
                <Typography className="sub_tbl_header_text_common">고객 정보</Typography>
              }
            ></CardHeader>
              <CardContent>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid xs={4} md={4}>
                      <Box component="div" className="sub_card_formcontrol_outer_common">
                        <Box component="span" className="sub_card_formcontrol_label">아이디</Box>
                        <OutlinedInput
                          fullWidth={false}
                          id="text1"
                          placeholder=""
                          name="text1"
                          value="yujinyong"
                          className="sub_input_common sub_card_formcontrol_input"
                        />
                      </Box>
                    </Grid>
                    <Grid xs={4} md={4}>
                      <Box component="div" className="sub_card_formcontrol_outer_common">
                        <Box component="span" className="sub_card_formcontrol_label">가입일</Box>
                        <OutlinedInput
                          fullWidth={false}
                          id="text2"
                          placeholder=""
                          name="text2"
                          value="2022-01-01 12:00"
                          className="sub_input_common sub_card_formcontrol_input"
                        />
                      </Box>
                    </Grid>
                    <Grid xs={4} md={4}>
                      <Box component="div" className="sub_card_formcontrol_outer_common">
                        <Box component="span" className="sub_card_formcontrol_label">최근 접속일</Box>
                        <OutlinedInput
                          fullWidth={false}
                          id="text3"
                          placeholder=""
                          name="text3"
                          value="2022-01-01 12:00"
                          className="sub_input_common sub_card_formcontrol_input"
                        />
                      </Box>
                    </Grid>
                    <Grid xs={4} md={4}>
                        <Box component="div" className="sub_card_formcontrol_outer_common b-0">
                          <Box component="span" className="sub_card_formcontrol_label">고객유형</Box>
                          <Select
                            fullWidth={false}
                            id="select1"
                            name="select1"
                            value="개인"
                            className="sub_select_common sub_card_formcontrol_list"
                          >
                            <MenuItem value="개인">개인</MenuItem>
                          </Select>
                        </Box>
                    </Grid>
                    <Grid xs={4} md={4}>
                      <Box component="div" className="sub_card_formcontrol_outer_common b-0">
                        <Box component="span" className="sub_card_formcontrol_label">비밀번호</Box>
                        <Box component="div" className="sub_card_formcontrol_inputbutton_outer">
                          <OutlinedInput
                            type="password"
                            fullWidth={false}
                            id="text4"
                            placeholder=""
                            name="text4"
                            value="abc123"
                            className="sub_input_common sub_card_formcontrol_input"
                          />
                          <Button
                            variant="outlined"
                            className="sub_btn_primary_outline_common sub_card_formcontrol_button"
                            sx={{marginLeft:"10px"}}
                          >
                            재설정
                          </Button>
                        </Box>
                        
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>

            <Card className="sub_card_common sub_card_form" sx={{width:"100%",height:"168px",marginTop:"20px"}}>
              <CardHeader
              className="sub_tbl_header_outer_common sub_card_form_header"
              component="div"
              title={
                <Typography className="sub_tbl_header_text_common">개인 정보</Typography>
              }
            ></CardHeader>
              <CardContent>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={0}>
                      <Grid xs={4} md={4}>
                        <Box component="div" className="sub_card_formcontrol_outer_common">
                          <Box component="span" className="sub_card_formcontrol_label">이름</Box>
                          <OutlinedInput
                            fullWidth={false}
                            id="text5"
                            placeholder=""
                            name="text5"
                            value="유진용"
                            className="sub_input_common sub_card_formcontrol_input"
                          />
                        </Box>
                      </Grid>
                      <Grid xs={4} md={4}>
                        <Box component="div" className="sub_card_formcontrol_outer_common">
                          <Box component="span" className="sub_card_formcontrol_label">휴대전화</Box>
                          <OutlinedInput
                            fullWidth={false}
                            id="text6"
                            placeholder=""
                            name="text6"
                            value="010-0000-0000"
                            className="sub_input_common sub_card_formcontrol_input"
                          />
                        </Box>
                      </Grid>
                      <Grid xs={4} md={4}>
                        <Box component="div" className="sub_card_formcontrol_outer_common">
                          <Box component="span" className="sub_card_formcontrol_label">이메일</Box>
                          <OutlinedInput
                            fullWidth={false}
                            id="text7"
                            placeholder=""
                            name="text7"
                            value="yujinyong@naver.com"
                            className="sub_input_common sub_card_formcontrol_input"
                          />
                        </Box>
                      </Grid>
                      <Grid xs={4} md={4}>
                        <Box component="div" className="sub_card_formcontrol_outer_common b-0">
                          <Box component="span" className="sub_card_formcontrol_label">정보 유효기간</Box>
                          <Select
                            fullWidth={false}
                            id="select1"
                            name="select1"
                            value="탈퇴 시 까지"
                            className="sub_select_common sub_card_formcontrol_list"
                          >
                            <MenuItem value="탈퇴 시 까지">탈퇴 시 까지</MenuItem>
                          </Select>
                        </Box>
                      </Grid>
                      <Grid xs={4} md={4}>
                        <Box component="div" className="sub_card_formcontrol_outer_common b-0">
                          <Box component="span" className="sub_card_formcontrol_label">마케팅 동의</Box>
                          <Box component="div" className="sub_card_formcontrol_inputbutton_outer">
                            <FormGroup className="sub_card_formcontrol_checkboxes" sx={{flexDirection:"row"}}>
                              <FormControlLabel control={<Checkbox defaultChecked />} label="이메일" />
                              <FormControlLabel control={<Checkbox />} label="SMS" />
                            </FormGroup>                            
                          </Box>
                        </Box>
                      </Grid>
                      
                    </Grid>
                </Box>
              </CardContent>
            </Card>
            <Box className="sub_listpage_card_btmsection">
              <Button
                variant="outlined"
                className="sub_btn_primary_outline_common sub_btn_card_btm"
              >
                뒤로
              </Button>
              <Button
                variant="contained"
                className="sub_btn_primary_fill_common sub_btn_card_btm primaryColor2" sx={{marginLeft:"15px"}}
              >
                저장
              </Button>
            </Box>

          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Card className="sub_card_common sub_card_form" sx={{width:"100%",height:"168px"}}>
              <CardHeader
              className="sub_tbl_header_outer_common sub_card_form_header"
              component="div"
              title={
                <Typography className="sub_tbl_header_text_common">Tab 2</Typography>
              }
            ></CardHeader>
            <CardContent>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                  <Grid xs={4} md={4}>
                    
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Card className="sub_card_common sub_card_form" sx={{width:"100%",height:"168px"}}>
                <CardHeader
                className="sub_tbl_header_outer_common sub_card_form_header"
                component="div"
                title={
                  <Typography className="sub_tbl_header_text_common">Tab 3</Typography>
                }
              ></CardHeader>
              <CardContent>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid xs={4} md={4}>
                      
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
              </Card>
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            <Card className="sub_card_common sub_card_form" sx={{width:"100%",height:"168px"}}>
                <CardHeader
                className="sub_tbl_header_outer_common sub_card_form_header"
                component="div"
                title={
                  <Typography className="sub_tbl_header_text_common">Tab 4</Typography>
                }
              ></CardHeader>
              <CardContent>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0}>
                    <Grid xs={4} md={4}>
                      
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
              </Card>
          </TabPanel>
        </>
      </AppFrame>
    </>
  );
};

export default Admin;
