import {
  Box,
  Button,
  Divider,
  Grid,
  Input,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import { axios } from '../../../../utils/axios';
import CardTemplate from './CardTemplate';

declare let daum: any;
const CompInfo = (props: { compChange: Function; userData: any }) => {
  const { userData } = props;
  const [cpyNm, setCpyNm] = useState(userData.cpyNm);
  const [ceo, setCeo] = useState(userData.ceo);
  const [corpTp, setCorpTp] = useState(userData.corpTp);
  const [corpRegNo, setCorpRegNo] = useState(userData.corpRegNo);
  const [bizItem, setBizItem] = useState(userData.bizItem);
  const [corpSize, setCorpSize] = useState(userData.corpSize);
  const [empSize, setEmpSize] = useState(userData.empSize);
  const [postNo, setPostNo] = useState(userData.postNo);
  const [address, setAddress] = useState(userData.address);
  const [addressDesc, setAddressDesc] = useState(userData.addressDesc);
  const [corpRegPath, setCorpRegPath] = useState(userData.corpRegPath);
  const [corpRegFileNm, setCorpRegFileNm] = useState(userData.corpRegFileNm);
  const [fileChanged, setFileChanged] = useState(false);

  useEffect(() => {
    const data = {
      cpyNm: cpyNm,
      ceo: ceo,
      corpRegNo: corpRegNo,
      corpTp: corpTp,
      bizItem: bizItem,
      corpSize: corpSize,
      empSize: empSize,
      postNo: postNo,
      address: address,
      addressDesc: addressDesc,
      corpRegPath: corpRegPath,
      corpRegFileNm: corpRegFileNm,
      fileChanged: fileChanged,
    };
    props.compChange(data);
  }, [
    cpyNm,
    ceo,
    corpTp,
    corpRegNo,
    bizItem,
    corpSize,
    empSize,
    postNo,
    address,
    addressDesc,
    corpRegPath,
    corpRegFileNm,
    fileChanged,
  ]);

  const fileUploadRef = useRef();

  const addressClickEvent = () => {
    new daum.Postcode({
      oncomplete: (data: any) => {
        let address = '';
        if (data.userSelectedType == 'J') address = data.jibunAddress;
        else address = data.roadAddress;
        setAddress(address);
        setPostNo(data.zonecode);
      },
    }).open();
  };

  const licenseChanged = (value: any) => {
    if (value.target.files.length == 0) return;
    const formdata = new FormData();
    formdata.append('multipartFiles', value.target.files[0]);
    formdata.append('custId', userData.custId);
    formdata.append('overwrite', '1');
    setFileChanged(true);
    setCorpRegFileNm(value.target.files[0].name);
    axios
      .post('/management/customer/file/upload/license', formdata, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(res => {
        console.log(res);
      })
      .catch();
    console.log(value.target.files[0].name);
    console.log(value);
  };
  return (
    <>
      <script
        src={require('@administrator/subscription/public/postcode.v2.js')}
      ></script>
      <CardTemplate title="?????? ??????">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid>
              <Box
                component="div"
                className="sub_card_formcontrol_outer_common"
              >
                <Box component="span" className="sub_card_formcontrol_label">
                  ?????????{' '}
                  <Typography className="sub_cust_label_dot">???</Typography>{' '}
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  placeholder=""
                  value={cpyNm}
                  className="sub_input_common sub_card_formcontrol_input"
                  onChange={e => {
                    setCpyNm(e.target.value);
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
                  ????????????{' '}
                  <Typography className="sub_cust_label_dot">???</Typography>{' '}
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  placeholder=""
                  value={ceo}
                  className="sub_input_common sub_card_formcontrol_input"
                  onChange={e => {
                    setCeo(e.target.value);
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
                  ????????????{' '}
                  <Typography className="sub_cust_label_dot">???</Typography>{' '}
                </Box>
                <Select
                  fullWidth={false}
                  value={corpTp}
                  className="sub_select_common sub_card_formcontrol_list"
                  onChange={e => {
                    setCorpTp(e.target.value);
                  }}
                >
                  <MenuItem value="CORP">??????</MenuItem>
                  <MenuItem value="PUBL">??????</MenuItem>
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
                  ?????????????????????{' '}
                  <Typography className="sub_cust_label_dot">???</Typography>{' '}
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  placeholder=""
                  value={corpRegNo}
                  className="sub_input_common sub_card_formcontrol_input"
                  onChange={e => {
                    setCorpRegNo(e.target.value);
                  }}
                  inputProps={{ maxLength: 10 }}
                />
              </Box>
            </Grid>
            <Grid>
              <Box
                component="div"
                className="sub_card_formcontrol_outer_common"
              >
                <Box component="span" className="sub_card_formcontrol_label">
                  ??????????????????
                </Box>
                <Box
                  component="div"
                  className="sub_card_formcontrol_inputbutton_outer"
                >
                  <Button
                    variant="outlined"
                    className="sub_btn_primary_outline_common sub_card_formcontrol_button_reg"
                    sx={{ marginRight: '10px' }}
                    onClick={() => {
                      (fileUploadRef.current as any).children[0].click();
                    }}
                  >
                    ??????
                  </Button>
                  <Input
                    ref={fileUploadRef}
                    type="file"
                    sx={{ display: 'none' }}
                    onChange={licenseChanged}
                  />
                  <Button
                    variant="text"
                    className="sub_card_formcontrol_btn_reg"
                    onClick={() => {
                      if (fileChanged) {
                      } else {
                        axios
                          .post(
                            '/management/customer/file/download/license',
                            {
                              downloadPath: corpRegPath,
                              fileName: corpRegFileNm,
                            },
                            { responseType: 'blob' },
                          )
                          .then(res => {
                            const url = window.URL.createObjectURL(
                              new Blob([res.data]),
                            );
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', corpRegFileNm);
                            link.style.cssText = 'display:none';
                            document.body.appendChild(link);
                            link.click();
                            link.remove();
                          })
                          .catch(e => console.log(e));
                      }
                    }}
                  >
                    {corpRegFileNm}
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
            <Divider sx={{ width: '100%' }} />
            <Grid>
              <Box
                component="div"
                className="sub_card_formcontrol_outer_common"
              >
                <Box component="span" className="sub_card_formcontrol_label">
                  ??????
                </Box>
                <OutlinedInput
                  fullWidth={false}
                  placeholder=""
                  value={bizItem}
                  className="sub_input_common sub_card_formcontrol_input"
                  onChange={e => {
                    setBizItem(e.target.value);
                  }}
                />
              </Box>
            </Grid>
            <Grid>
              <Box
                component="div"
                className="sub_card_formcontrol_outer_common"
              >
                {userData.custTp == 2 ? (
                  <>
                    <Box
                      component="span"
                      className="sub_card_formcontrol_label"
                    >
                      ????????????
                    </Box>
                    <Select
                      fullWidth={false}
                      value={corpSize}
                      className="sub_select_common sub_card_formcontrol_list"
                      onChange={e => {
                        setCorpSize(e.target.value);
                      }}
                    >
                      <MenuItem value={1}>?????????</MenuItem>
                      <MenuItem value={2}>????????????</MenuItem>
                      <MenuItem value={3}>????????????</MenuItem>
                      <MenuItem value={4}>?????????</MenuItem>
                      <MenuItem value={5}>????????????</MenuItem>
                    </Select>
                  </>
                ) : (
                  <>
                    <Box
                      component="span"
                      className="sub_card_formcontrol_label"
                    >
                      ????????????
                    </Box>
                    <Select
                      fullWidth={false}
                      defaultValue={empSize}
                      className="sub_select_common sub_card_formcontrol_list"
                      onChange={e => {
                        setEmpSize(e.target.value);
                      }}
                    >
                      <MenuItem value={1}>3????????????</MenuItem>
                      <MenuItem value={2}>2????????????~3????????????</MenuItem>
                      <MenuItem value={3}>1????????????~2????????????</MenuItem>
                      <MenuItem value={4}>500?????????~1000?????????</MenuItem>
                      <MenuItem value={5}>100?????????~500?????????</MenuItem>
                      <MenuItem value={6}>100?????????</MenuItem>
                    </Select>
                  </>
                )}
              </Box>
            </Grid>
            <Grid>
              <Box
                component="div"
                className="sub_card_formcontrol_outer_common"
              ></Box>
            </Grid>
            <Divider sx={{ width: '100%' }} />
            <Grid>
              <Box
                component="div"
                className="sub_card_formcontrol_outer_common"
              >
                <Box component="span" className="sub_card_formcontrol_label">
                  ????????????
                </Box>
                <Box
                  component="div"
                  className="sub_card_formcontrol_inputbutton_outer"
                >
                  <OutlinedInput
                    type="text"
                    fullWidth={false}
                    placeholder=""
                    value={postNo}
                    className="sub_input_common sub_card_formcontrol_input sub_card_formcontrol_input_search"
                    onChange={e => {
                      setPostNo(e.target.value);
                    }}
                  />
                  <Button
                    variant="outlined"
                    className="sub_btn_primary_outline_common sub_card_formcontrol_button_search"
                    sx={{ marginLeft: '8px' }}
                    onClick={addressClickEvent}
                  >
                    ??????
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
                  ??????
                </Box>
                <OutlinedInput
                  placeholder=""
                  value={address}
                  className="sub_input_common sub_card_formcontrol_input sub_card_formcontrol_input_long"
                  onChange={e => {
                    setAddress(e.target.value);
                  }}
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
                  ????????????
                </Box>
                <OutlinedInput
                  placeholder=""
                  value={addressDesc}
                  className="sub_input_common sub_card_formcontrol_input sub_card_formcontrol_input_long"
                  onChange={e => {
                    setAddressDesc(e.target.value);
                  }}
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
