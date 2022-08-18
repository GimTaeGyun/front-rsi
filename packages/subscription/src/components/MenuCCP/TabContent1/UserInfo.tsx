import { Box, Divider, MenuItem } from '@mui/material';
import { Button, Select, Grid, OutlinedInput } from '@mui/material';
import React, { useEffect } from 'react';
import MuiFormLabel from '@mui/material/FormLabel';
import CardTemplate from './CardTemplate';
import moment from 'moment';

const Info = (props: { buttonCallback?: Function; userData: any }) => {
  const { buttonCallback = () => {}, userData } = props;
  const date1 = new Date(userData.creAt);
  const fomated = moment(date1).format('YYYY-MM-DD HHMM');
  const [fomat, setFomat] = React.useState('');
  const [custTp, setCustTp] = React.useState(0);

  const translateCustTp = (custTp: any) => {
    switch (custTp) {
      case '기업':
        return 1;
      case '공공':
        return 2;
      case '개인':
        return 3;
      default:
        return custTp;
    }
  };

  useEffect(() => {
    setCustTp(userData.custTp);
    if (userData.creAt) {
      const date1 = new Date(userData.creAt);
      const fomated = moment(date1).format('YYYY-MM-DD HH:MM');
      setFomat(fomated);
    } else {
      const date1 = new Date(userData.cre_at);
      const fomated = moment(date1).format('YYYY-MM-DD HH:MM');
      setFomat(fomated);
    }
  }, [userData]);

  return (
    <>
      <CardTemplate title="고객 정보">
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
                  placeholder=""
                  value={userData.loginId}
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
                  placeholder=""
                  value={fomat}
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
                  placeholder=""
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
                  value={translateCustTp(userData.custTp)}
                  className="sub_select_common sub_card_formcontrol_list"
                  readOnly
                >
                  <MenuItem value={1}>기업</MenuItem>
                  <MenuItem value={2}>공공</MenuItem>
                  <MenuItem value={3}>개인</MenuItem>
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
                    placeholder=""
                    value="abc123"
                    className="sub_input_common sub_card_formcontrol_input"
                    readOnly
                  />
                  <Button
                    variant="outlined"
                    className="sub_btn_primary_outline_common sub_card_formcontrol_button"
                    sx={{ marginLeft: '10px' }}
                    onClick={(e: any) => buttonCallback(e)}
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
