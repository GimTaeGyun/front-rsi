import React from 'react';
import { Box, Button, Card, CardHeader, CardContent, Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, OutlinedInput, Select, Tab, Tabs, Typography } from '@mui/material';

const TabContent1 = ()=>{

    return (
        <>
        <Card className="sub_card_common sub_card_form" sx={{width:"100%",height:"168px",marginTop:"20px"}}>
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
                          readOnly
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
                          readOnly
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
                          readOnly
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
                            readOnly
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
                            readOnly
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
                            readOnly
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
                            readOnly
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
                              <FormControlLabel control={<Checkbox disabled defaultChecked />} label="이메일" />
                              <FormControlLabel control={<Checkbox disabled />} label="SMS" />
                            </FormGroup>
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
                    <Typography className="sub_tbl_header_text_common">법인 정보</Typography>
                    }
                ></CardHeader>
                <CardContent>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={0}>
                            <Grid xs={4} md={4}>
                                <Box component="div" className="sub_card_formcontrol_outer_common">
                                <Box component="span" className="sub_card_formcontrol_label">법인명</Box>
                                <OutlinedInput
                                    fullWidth={false}
                                    id="text8"
                                    placeholder=""
                                    name="text8"
                                    value="현대중공업(주)"
                                    className="sub_input_common sub_card_formcontrol_input"
                                />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card> 
        </>
    );
}
export default TabContent1;