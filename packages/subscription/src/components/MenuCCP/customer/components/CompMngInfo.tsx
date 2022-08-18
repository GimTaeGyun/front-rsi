import { Box, Divider } from '@mui/material';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  Grid,
  OutlinedInput,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardTemplate from './CardTemplate';
const CompMngInfo = (props: { userData: any; compMngChange: Function }) => {
  const { userData } = props;
  const [custNm, setCustNm] = useState(userData.custNm);
  const [mobile, setMobile] = useState(userData.mobile);
  const [custDept, setCustDept] = useState(userData.custDept);
  const [tel, setTel] = useState(userData.tel);
  const [fax, setFax] = useState(userData.fax);
  const [email, setEmail] = useState(userData.email);

  useEffect(() => {
    const datas = {
      custNm: custNm === undefined ? userData.custNm : custNm,
      mobile: mobile === undefined ? userData.mobile : mobile,
      email: email === undefined ? userData.email : email,
      custDept: custDept === undefined ? userData.custDept : custDept,
      tel: tel === undefined ? userData.tel : tel,
      fax: fax === undefined ? userData.fax : fax,
    };
    props.compMngChange(datas);
  }, [custNm, mobile, email, custDept, tel, fax]);

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
                  placeholder=""
                  name="text8"
                  value={custNm}
                  className="sub_input_common sub_card_formcontrol_input"
                  onChange={e => {
                    setCustNm(e.target.value);
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
                  휴대전화 <Typography className="sub_label_dot">•</Typography>{' '}
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  placeholder=""
                  name="text9"
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
                  이메일 <Typography className="sub_label_dot">•</Typography>{' '}
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  placeholder=""
                  name="text10"
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
                className="sub_card_formcontrol_outer_common"
              >
                <Box component="span" className="sub_card_formcontrol_label">
                  부서명
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  placeholder=""
                  name="text8"
                  value={custDept}
                  className="sub_input_common sub_card_formcontrol_input"
                  onChange={e => {
                    setCustDept(e.target.value);
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
                  전화번호
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  placeholder=""
                  name="text9"
                  value={tel}
                  className="sub_input_common sub_card_formcontrol_input"
                  onChange={e => {
                    setTel(e.target.value);
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
                  팩스번호
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  placeholder=""
                  name="text10"
                  value={fax}
                  className="sub_input_common sub_card_formcontrol_input"
                  onChange={e => {
                    setFax(e.target.value);
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
                  value="탈퇴"
                  className="sub_select_common sub_card_formcontrol_list"
                  readOnly
                >
                  <MenuItem value="탈퇴">탈퇴 시 까지</MenuItem>
                  <MenuItem value="365">1년</MenuItem>
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
                      control={<Checkbox disabled checked={true} />}
                      label="이메일"
                    />
                    <FormControlLabel
                      control={<Checkbox disabled checked={false} />}
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
