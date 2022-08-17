import { Box, Divider } from '@mui/material';
import { Button, Select, MenuItem, Grid, OutlinedInput } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import CardTemplate from './CardTemplate';
declare var daum: any;
const CompInfo = (props: { buttonCallback?: Function; userData: any }) => {
  const { userData } = props;
  const { buttonCallback = () => {} } = props;

  const zipCodeRef = useRef();
  const addressRef = useRef();
  const [corpTp, setCorpTp] = React.useState('');
  const [corpSize, setCorpSize] = React.useState(0);
  const [empSize, setEmpSize] = React.useState(1);

  useEffect(() => {
    setCorpTp(userData.corpTp);
    setCorpSize(userData.corpSize);
    setEmpSize(userData.empSize);
  }, [userData]);

  const addressClickEvent = () => {
    new daum.Postcode({
      oncomplete: (data: any) => {
        let address = '';
        if (data.userSelectedType == 'J') address = data.jibunAddress;
        else address = data.roadAddress;
        (addressRef.current as any).children[0].value = address;
        (zipCodeRef.current as any).children[0].value = data.zonecode;
      },
    }).open();
  };
  return (
    <>
      <script
        src={require('@administrator/subscription/public/postcode.v2.js')}
      ></script>
      <CardTemplate title="법인 정보">
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
                  placeholder=""
                  name="text8"
                  value={userData.cpyNm}
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
                  placeholder=""
                  name="text9"
                  value={userData.ceo}
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
                  name="select3"
                  value={corpTp}
                  className="sub_select_common sub_card_formcontrol_list"
                >
                  <MenuItem value="CORP">기업</MenuItem>
                  <MenuItem value="PUBL">공공</MenuItem>
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
                  placeholder=""
                  name="text11"
                  value={userData.corpRegNo}
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
                  placeholder=""
                  name="text11"
                  value={userData.bizItem}
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
                  name="select4"
                  value={corpSize}
                  className="sub_select_common sub_card_formcontrol_list"
                >
                  <MenuItem value={1}>대기업</MenuItem>
                  <MenuItem value={2}>중견기업</MenuItem>
                  <MenuItem value={3}>중소기업</MenuItem>
                  <MenuItem value={4}>소기업</MenuItem>
                  <MenuItem value={5}>소상공인</MenuItem>
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
                <Select
                  fullWidth={false}
                  name="select6"
                  defaultValue={empSize}
                  className="sub_select_common sub_card_formcontrol_list"
                >
                  <MenuItem value={1}>3천명이상</MenuItem>
                  <MenuItem value={2}>2천명이상~3천명미만</MenuItem>
                  <MenuItem value={3}>1천명이상~2천명미만</MenuItem>
                  <MenuItem value={4}>500명이상~1000명미만</MenuItem>
                  <MenuItem value={5}>100명이상~500명미만</MenuItem>
                  <MenuItem value={6}>100명미만</MenuItem>
                </Select>
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
                    placeholder=""
                    name="text14"
                    value={userData.postNo}
                    className="sub_input_common sub_card_formcontrol_input sub_card_formcontrol_input_search"
                  />
                  <Button
                    variant="outlined"
                    className="sub_btn_primary_outline_common sub_card_formcontrol_button_search"
                    sx={{ marginLeft: '8px' }}
                    onClick={addressClickEvent}
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
                  placeholder=""
                  ref={addressRef}
                  name="text15"
                  value={userData.address}
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
                  placeholder=""
                  name="text16"
                  value={userData.addressDesc}
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

export default CompInfo;
