import { Box, Divider } from '@mui/material';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  Grid,
  OutlinedInput,
  Typography
} from '@mui/material';
import React from 'react';
import CardTemplate from './CardTemplate';
const CompMngInfo = () => {
  return (
    <>
      <CardTemplate title="법인 담당자 정보">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid>
              <Box
                component="div"
                className="sub_card_formcontrol_outer_common"
              >
                <Box component="span" className="sub_card_formcontrol_label">
                  담당자명
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  id="text8"
                  placeholder=""
                  name="text8"
                  value="김철수"
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
                  휴대전화 <Typography className="sub_label_dot">•</Typography>{' '}
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  id="text9"
                  placeholder=""
                  name="text9"
                  value="010-1234-1234"
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
                  이메일 <Typography className="sub_label_dot">•</Typography>{' '}
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  id="text10"
                  placeholder=""
                  name="text10"
                  value="test@gmail.com"
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
                  부서명
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  id="text8"
                  placeholder=""
                  name="text8"
                  value="홍보팀"
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
                  전화번호
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  id="text9"
                  placeholder=""
                  name="text9"
                  value="010-1234-1234"
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
                  팩스번호
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  id="text10"
                  placeholder=""
                  name="text10"
                  value="02-1234-1234"
                  className="sub_input_common sub_card_formcontrol_input"
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
                  정보 유효기간
                </Box>
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
            <Grid>
              <Box
                component="div"
                className="sub_card_formcontrol_outer_common b-0"
              >
                <Box component="span" className="sub_card_formcontrol_label">
                  마케팅 동의
                </Box>
                <Box
                  component="div"
                  className="sub_card_formcontrol_inputbutton_outer"
                >
                  <FormGroup
                    className="sub_card_formcontrol_checkboxes"
                    sx={{ flexDirection: 'row' }}
                  >
                    <FormControlLabel
                      control={<Checkbox disabled defaultChecked />}
                      label="이메일"
                    />
                    <FormControlLabel
                      control={<Checkbox disabled />}
                      label="SMS"
                    />
                  </FormGroup>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardTemplate>
    </>
  );
};

export default CompMngInfo;
