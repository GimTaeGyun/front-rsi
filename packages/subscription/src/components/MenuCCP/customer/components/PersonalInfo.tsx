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
import React from 'react';

const PersonalInfo = (props: {
  userData: any
}) => {
  const { userData } = props;
  const [state, setState] = React.useState({
    email: true,
    SMS: false,
  });

  console.log(userData);
  const { email, SMS } = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

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
                        control={<Checkbox disabled />}
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

export default PersonalInfo;
