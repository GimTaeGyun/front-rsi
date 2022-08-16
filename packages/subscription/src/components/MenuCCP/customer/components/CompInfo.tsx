import { Box, Divider } from '@mui/material';
import { Button, Select, MenuItem, Grid, OutlinedInput } from '@mui/material';
import React from 'react';
import CardTemplate from './CardTemplate';
const Info = (props: { buttonCallback?: Function}) => {
  const {buttonCallback = ()=> {}} = props;
  return (
    <>
      <CardTemplate
        title="법인 정보"
      >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    법인명
                  </Box>
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
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    대표자명
                  </Box>
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
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    대표번호
                  </Box>
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
              <Divider sx={{ width: '100%' }} />
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    법인유형
                  </Box>
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
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    사업자등록번호
                  </Box>
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
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    사업자등록증
                  </Box>
                  <Box
                    component="div"
                    className="sub_card_formcontrol_inputbutton_outer"
                  >
                    <Button
                      variant="outlined"
                      className="sub_btn_primary_outline_common sub_card_formcontrol_button_reg"
                      sx={{ marginRight: '10px' }}
                    >
                      등록
                    </Button>
                    <Button
                      variant="text"
                      className="sub_card_formcontrol_btn_reg"
                    >
                      현대중공업_사업자등록증.pdf
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Divider sx={{ width: '100%' }} />
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    업종
                  </Box>
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
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    기업규모
                  </Box>
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
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    직원규모
                  </Box>
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
              <Divider sx={{ width: '100%' }} />
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    우편번호
                  </Box>
                  <Box
                    component="div"
                    className="sub_card_formcontrol_inputbutton_outer"
                  >
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
                      sx={{ marginLeft: '8px' }}
                    >
                      검색
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                ></Box>
              </Grid>
            </Grid>
            <Divider sx={{ width: '100%' }} />
            <Grid container spacing={0}>
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    주소
                  </Box>
                  <OutlinedInput
                    id="text15"
                    placeholder=""
                    name="text15"
                    value="울산광역시 동구 방어진순환도로 1000"
                    className="sub_input_common sub_card_formcontrol_input sub_card_formcontrol_input_long"
                  />
                </Box>
              </Grid>
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                ></Box>
              </Grid>
            </Grid>
            <Divider sx={{ width: '100%' }} />
            <Grid container spacing={0}>
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common b-0"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    상세주소
                  </Box>
                  <OutlinedInput
                    id="text16"
                    placeholder=""
                    name="text16"
                    value="현대중공업 조선소 6F"
                    className="sub_input_common sub_card_formcontrol_input sub_card_formcontrol_input_long"
                  />
                </Box>
              </Grid>
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common b-0"
                ></Box>
              </Grid>
            </Grid>
          </Box>
      </CardTemplate>
    </>
  );
};

export default Info;
