import { Box, Divider } from '@mui/material';
import { Button, Select, MenuItem, Grid, OutlinedInput } from '@mui/material';
import React,{useRef} from 'react';
import CardTemplate from './CardTemplate';
declare var daum:any;
const CompInfo = (props: { buttonCallback?: Function, userData: any}) => {
  const { userData } = props;
  const {buttonCallback = ()=> {}} = props;
  
  const zipCodeRef = useRef();
  const addressRef = useRef(); 

  const addressClickEvent = ()=>{
    new daum.Postcode({oncomplete: (data:any)=>{
      let address = '';
      if( data.userSelectedType == 'J' )
        address = data.jibunAddress;
      else
        address = data.roadAddress;
      (addressRef.current as any).children[0].value = address;
      (zipCodeRef.current as any).children[0].value = data.zonecode;
    }}).open();

  }
  return (
    <>
      <script src={require('@administrator/subscription/public/postcode.v2.js')}></script>
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
                    value="개인"
                    className="sub_select_common sub_card_formcontrol_list"
                  >
                    <MenuItem value="개인">개인</MenuItem>
                    <MenuItem value="기업">기업</MenuItem>
                    <MenuItem value="공공">공공</MenuItem>
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
                    name="select4"
                    value="대기업"
                    className="sub_select_common sub_card_formcontrol_list"
                  >
                    <MenuItem value="대기업">대기업</MenuItem>
                    <MenuItem value="중견기업">중견기업</MenuItem>
                    <MenuItem value="중소기업">중소기업</MenuItem>
                    <MenuItem value="소기업">소기업</MenuItem>
                    <MenuItem value="소상공인">소상공인</MenuItem>
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
                      placeholder=""
                      name="text14"
                      value="44032"
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

export default CompInfo;
