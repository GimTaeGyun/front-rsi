import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  Typography,
} from '@mui/material';
import { axios } from '../../../../utils/axios';
import { useAtom } from 'jotai';
import { PrdMng, DefaultGrpInfo } from '../../../../data/atoms';

interface GrpInfo {
  description: string;
  prdGrpId: number;
  prdGrpNm: string;
  uppPrdGrpId: number;
  introduction: string;
  status: number;
}

interface CodeSet {
  codeSetItems: { label: string; value: string }[];
  codeSetLabel: string;
}

const PrdGrpInfo = () => {
  const [grpStatusSelect, setGrpStatusSelect] = useState<CodeSet | null>(null); // 그룹상태 셀렉트박스
  const [grpInfo, setGrpInfo] = useState<GrpInfo>(DefaultGrpInfo);
  const [sharingData, setSharingData] = useAtom(PrdMng);

  useEffect(() => {
    // 그룹상태 셀렉트박스
    axios
      .post('/management/subscription/admin/codeset', {
        code: 'status',
        code_grp: 'pm.product_group',
      })
      .then(res => {
        if (res.data.code === '0000') {
          setGrpStatusSelect(res.data.result);
        }
      })
      .catch();
  }, []);

  useEffect(() => {
    setGrpInfo(sharingData.mngInput);
  }, [sharingData.mngInput]);

  // 상품 그룹 정보 인풋 수정이벤트
  const onInputChanged = (e: any) => {
    setGrpInfo({ ...grpInfo, [e.target.name]: e.target.value });
  };

  // 저장 버튼이벤트
  const onSave = () => {
    axios.post('');
  };

  return (
    <>
      <Card
        className="sub_items_filter_card"
        sx={{ marginBottom: '20px', maxHeight: '336px' }}
      >
        <Box>
          <CardHeader
            component="div"
            title="상품 그룹 정보"
            className="sub_items_filter_header"
          />
        </Box>
        <Divider />
        <CardContent
          id="scroll"
          className="sub_items_filter_content"
          sx={{ padding: '0 !important' }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xs={6} md={6} lg={6}>
                <Box component="div" className="sub_items_filter_row">
                  <Box component="div" className="sub_items_filter_label">
                    그룹명{' '}
                    <Typography className="sub_cust_label_dot">•</Typography>{' '}
                  </Box>
                  <OutlinedInput
                    fullWidth={false}
                    placeholder="그룹명을 입력해 주세요."
                    value={grpInfo.prdGrpNm}
                    name="prdGrpNm"
                    onChange={onInputChanged}
                    className="sub_input_common sub_items_filter_input"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                <Box component="div" className="sub_items_filter_row">
                  <Box component="div" className="sub_items_filter_label">
                    그룹 설명{' '}
                  </Box>
                  <OutlinedInput
                    fullWidth={false}
                    placeholder="그룹 설명을 입력해 주세요."
                    name="description"
                    value={grpInfo.description}
                    onChange={onInputChanged}
                    className="sub_input_common sub_items_filter_input"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={6} md={6} lg={6}>
                <Box component="div" className="sub_items_filter_row">
                  <Box component="div" className="sub_items_filter_label">
                    그룹 상태{' '}
                    <Typography className="sub_cust_label_dot">•</Typography>{' '}
                  </Box>
                  <Select
                    fullWidth={false}
                    name="status"
                    value={grpInfo.status}
                    className="sub_select_common sub_items_filter_list"
                    onChange={onInputChanged}
                  >
                    {grpStatusSelect ? (
                      grpStatusSelect.codeSetItems.map((item: any) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem value={1}>사용가능</MenuItem>
                    )}
                  </Select>
                </Box>
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                <Box component="div" className="sub_items_filter_row">
                  <Box component="div" className="sub_items_filter_label">
                    GNB 노출{' '}
                  </Box>
                  <Box
                    component="div"
                    className="d_flex align-items-center justify-content-between"
                    sx={{
                      width: {
                        md: '415px',
                        lg: '415px',
                        xl: '80%',
                        xxl: '80%',
                      },
                    }}
                  >
                    <FormGroup>
                      <FormControlLabel
                        className="sub_filter_switch"
                        control={<Switch defaultChecked={false} />}
                        label="미노출"
                      />
                    </FormGroup>
                    <Button
                      variant="outlined"
                      className="sub_btn_primary_outline_common btn_gnb_manage"
                    >
                      GNB 목록 관리
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Box
                  component="div"
                  className="sub_items_filter_row sub_items_filter_textarea d_flex align-items-center justify-content-between"
                >
                  <Box
                    component="div"
                    className="sub_items_filter_label"
                    sx={{ height: '72px' }}
                  >
                    상품 그룹 소개{' '}
                  </Box>
                  <OutlinedInput
                    multiline={true}
                    minRows={4}
                    fullWidth={false}
                    name="introduction"
                    placeholder="HTML TEXT AREA (※ 추후 에디터 삽입)"
                    value={grpInfo.introduction}
                    onChange={onInputChanged}
                    className="sub_input_common sub_items_filter_textarea_input"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Box component="div" className="sub_items_filter_footer">
                  <Button
                    variant="contained"
                    className="sub_btn_primary_fill_common sub_btn_filter2"
                  >
                    저장하기
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default PrdGrpInfo;
