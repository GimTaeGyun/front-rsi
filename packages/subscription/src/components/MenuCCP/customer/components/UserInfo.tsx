import { Box, Divider } from '@mui/material';
import { Button, Select, MenuItem, Grid, OutlinedInput } from '@mui/material';
import React from 'react';
import MuiFormLabel from '@mui/material/FormLabel';
import CardTemplate from './CardTemplate';
const Info = (props: { buttonCallback?: Function}) => {
  const {buttonCallback = ()=> {}} = props;
  return (
    <>
      <CardTemplate
        title="고객 정보"
      >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    아이디
                  </Box>
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
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    가입일
                  </Box>
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
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    최근 접속일
                  </Box>
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
              <Divider sx={{ width: '100%' }} />
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common b-0"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    고객유형
                  </Box>
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
              <Grid>
                <Box
                  component="div"
                  className="sub_card_formcontrol_outer_common b-0"
                >
                  <Box component="span" className="sub_card_formcontrol_label">
                    비밀번호
                  </Box>
                  <Box
                    component="div"
                    className="sub_card_formcontrol_inputbutton_outer"
                  >
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
                      sx={{ marginLeft: '10px' }}
                      onClick={(e:any)=>buttonCallback(e)}
                    >
                      재설정
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
      </CardTemplate>
    </>
  );
};

export default Info;
