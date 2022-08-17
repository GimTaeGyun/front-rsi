import {
  Select,
  MenuItem,
  Divider,
  Box,
  OutlinedInput,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import CardTemplate from './CardTemplate';
import React, { useEffect, useState } from 'react';

<<<<<<< HEAD
const Info = (props: {
  userData: any;
  emailCheck: boolean;
  smsCheck: boolean;
=======
const PersonalInfo = (props: {
  userData: any
>>>>>>> 53ff54ad78c43dce1d8b3a31836f9185c35756a7
}) => {
  const { userData } = props;



  return (
    <>
      <CardTemplate
        title="개인 정보"
      >
        
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
                    value={userData.mobile}
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
                    이메일
                  </Box>
                  <OutlinedInput
                    fullWidth={false}
                    placeholder=""
                    name="text7"
                    value={userData.email}
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
                        control={<Checkbox disabled checked={props.emailCheck} />}
                        label="이메일"
                      />
                      <FormControlLabel
                        control={<Checkbox disabled checked={props.smsCheck} />}
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
