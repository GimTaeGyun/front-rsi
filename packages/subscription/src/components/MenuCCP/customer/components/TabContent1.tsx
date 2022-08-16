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
                            id="select2"
                            name="select2"
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

            <Card className="sub_card_common sub_card_form" sx={{width:"100%",height:"392px",marginTop:"20px"}}>
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
                            <Grid xs={4} md={4}>
                                <Box component="div" className="sub_card_formcontrol_outer_common">
                                <Box component="span" className="sub_card_formcontrol_label">대표자명</Box>
                                <OutlinedInput
                                    fullWidth={false}
                                    id="text9"
                                    placeholder=""
                                    name="text9"
                                    value="한영석"
                                    className="sub_input_common sub_card_formcontrol_input"
                                />
                                </Box>
                            </Grid>
                            <Grid xs={4} md={4}>
                                <Box component="div" className="sub_card_formcontrol_outer_common">
                                <Box component="span" className="sub_card_formcontrol_label">대표번호</Box>
                                <OutlinedInput
                                    fullWidth={false}
                                    id="text10"
                                    placeholder=""
                                    name="text10"
                                    value="052-202-2114"
                                    className="sub_input_common sub_card_formcontrol_input"
                                />
                                </Box>
                            </Grid>
                            <Grid xs={4} md={4}>
                                <Box component="div" className="sub_card_formcontrol_outer_common">
                                <Box component="span" className="sub_card_formcontrol_label">법인유형</Box>
                                    <Select
                                        fullWidth={false}
                                        id="select3"
                                        name="select3"
                                        value="개인"
                                        className="sub_select_common sub_card_formcontrol_list"
                                    >
                                        <MenuItem value="개인">개인</MenuItem>
                                    </Select>
                                </Box>
                            </Grid>
                            <Grid xs={4} md={4}>
                                <Box component="div" className="sub_card_formcontrol_outer_common">
                                <Box component="span" className="sub_card_formcontrol_label">사업자등록번호</Box>
                                <OutlinedInput
                                    fullWidth={false}
                                    id="text11"
                                    placeholder=""
                                    name="text11"
                                    value="000-00-00000"
                                    className="sub_input_common sub_card_formcontrol_input"
                                />
                                </Box>
                            </Grid>
                            <Grid xs={4} md={4}>
                                <Box component="div" className="sub_card_formcontrol_outer_common">
                                    <Box component="span" className="sub_card_formcontrol_label">사업자등록증</Box>
                                    <Box component="div" className="sub_card_formcontrol_inputbutton_outer">
                                    <Button
                                        variant="outlined"
                                        className="sub_btn_primary_outline_common sub_card_formcontrol_button_reg"
                                        sx={{marginRight:"10px"}}
                                    >
                                        등록
                                    </Button>
                                    <Button variant="text" className="sub_card_formcontrol_btn_reg">현대중공업_사업자등록증.pdf</Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={4} md={4}>
                                <Box component="div" className="sub_card_formcontrol_outer_common">
                                <Box component="span" className="sub_card_formcontrol_label">업종</Box>
                                <OutlinedInput
                                    fullWidth={false}
                                    id="text11"
                                    placeholder=""
                                    name="text11"
                                    value="000-00-00000"
                                    className="sub_input_common sub_card_formcontrol_input"
                                />
                                </Box>
                            </Grid>
                            <Grid xs={4} md={4}>
                                <Box component="div" className="sub_card_formcontrol_outer_common">
                                <Box component="span" className="sub_card_formcontrol_label">기업규모</Box>
                                    <Select
                                        fullWidth={false}
                                        id="select4"
                                        name="select4"
                                        value="대기업"
                                        className="sub_select_common sub_card_formcontrol_list"
                                    >
                                        <MenuItem value="대기업">대기업</MenuItem>
                                    </Select>
                                </Box>
                            </Grid>
                            <Grid xs={4} md={4}>
                                <Box component="div" className="sub_card_formcontrol_outer_common">
                                <Box component="span" className="sub_card_formcontrol_label">직원규모</Box>
                                <OutlinedInput
                                    fullWidth={false}
                                    id="text13"
                                    placeholder=""
                                    name="text12"
                                    value="300명 이상"
                                    className="sub_input_common sub_card_formcontrol_input"
                                />
                                </Box>
                            </Grid>
                            <Grid xs={4} md={4}>
                                <Box component="div" className="sub_card_formcontrol_outer_common">
                                    <Box component="span" className="sub_card_formcontrol_label">우편번호</Box>
                                    <Box component="div" className="sub_card_formcontrol_inputbutton_outer">
                                        <OutlinedInput
                                            type="text"
                                            fullWidth={false}
                                            id="text14"
                                            placeholder=""
                                            name="text14"
                                            value="44032"
                                            className="sub_input_common sub_card_formcontrol_input sub_card_formcontrol_input_search"
                                        />
                                        <Button
                                            variant="outlined"
                                            className="sub_btn_primary_outline_common sub_card_formcontrol_button_search"
                                            sx={{marginLeft:"8px"}}
                                        >
                                            검색
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid xs={8} md={8}>
                                <Box component="div" className="sub_card_formcontrol_outer_common"></Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={0}>
                            <Grid xs={8} md={8}>
                                <Box component="div" className="sub_card_formcontrol_outer_common">
                                <Box component="span" className="sub_card_formcontrol_label">주소</Box>
                                <OutlinedInput
                                    fullWidth={false}
                                    id="text15"
                                    placeholder=""
                                    name="text15"
                                    value="울산광역시 동구 방어진순환도로 1000"
                                    className="sub_input_common sub_card_formcontrol_input sub_card_formcontrol_input_long"
                                />
                                </Box>
                            </Grid>
                            <Grid xs={4} md={4}>
                                <Box component="div" className="sub_card_formcontrol_outer_common"></Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={0}>
                            <Grid xs={8} md={8}>
                                <Box component="div" className="sub_card_formcontrol_outer_common b-0">
                                <Box component="span" className="sub_card_formcontrol_label">상세주소</Box>
                                    <OutlinedInput
                                        fullWidth={false}
                                        id="text16"
                                        placeholder=""
                                        name="text16"
                                        value="현대중공업 조선소 6F"
                                        className="sub_input_common sub_card_formcontrol_input sub_card_formcontrol_input_long"
                                    />
                                </Box>
                            </Grid>
                            <Grid xs={4} md={4}>
                                <Box component="div" className="sub_card_formcontrol_outer_common b-0"></Box>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card> 
        </>
    );
}
export default TabContent1;