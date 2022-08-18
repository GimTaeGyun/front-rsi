import {
  Select,
  MenuItem,
  Divider,
  Box,
  OutlinedInput,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import CardTemplate from './CardTemplate';
import React, { useEffect } from 'react';

const PersonalInfo = (props: { userData: any; personal: Function }) => {
  const { userData } = props;
  const [mobile, setMobile] = React.useState(userData.mobile);
  const [email, setEmail] = React.useState(userData.email);

  useEffect(() => {
    const data = {
      mobile: mobile,
      email: email,
      custTp: userData.custTp,
    };
    props.personal(data);
  }, [mobile, email]);

  return (
    <>
      <CardTemplate title="개인 정보">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid>
              <Box
                component="div"
                className="sub_card_formcontrol_outer_common"
              >
                <Box component="span" className="sub_card_formcontrol_label">
                  이름
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  placeholder=""
                  name="text5"
                  value={userData.custNm}
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
                  휴대전화
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  placeholder=""
                  name="text6"
                  value={mobile}
                  className="sub_input_common sub_card_formcontrol_input"
                  onChange={e => {
                    setMobile(e.target.value);
                  }}
                />
              </Box>
            </Grid>
            <Grid>
              <Box
                component="div"
                className="sub_card_formcontrol_outer_common"
              >
                <Box component="span" className="sub_card_formcontrol_label">
                  이메일
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  placeholder=""
                  name="text7"
                  value={email}
                  className="sub_input_common sub_card_formcontrol_input"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
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
                  name="select2"
                  value={userData.piStoreDays}
                  className="sub_select_common sub_card_formcontrol_list"
                  readOnly
                >
                  <MenuItem value="365">1년</MenuItem>
                  <MenuItem value="32767">탈퇴 시 까지</MenuItem>
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
                      control={
                        <Checkbox
                          disabled
                          checked={
                            userData.hasOwnProperty('tosInfo')
                              ? userData.tosInfo[0].tosInfo.promotion.email
                              : false
                          }
                        />
                      }
                      label="이메일"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          disabled
                          checked={
                            userData.hasOwnProperty('tosInfo')
                              ? userData.tosInfo[0].tosInfo.promotion.mobile
                              : false
                          }
                        />
                      }
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

export default PersonalInfo;
