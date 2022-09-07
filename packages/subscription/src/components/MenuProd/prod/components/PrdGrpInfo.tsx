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
import { useAtom } from 'jotai';
import React, { useEffect, useState, useRef } from 'react';

import { AlertPopupData, DefaultGrpInfo, PrdMng } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';

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
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const grpNmInputRef = useRef();

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

  // 그룹등록 버튼을 누르면 인풋박스들 초기화
  useEffect(() => {
    if (sharingData.adding !== -1) {
      (grpNmInputRef.current as any).children[0].focus();
      setGrpInfo({
        ...DefaultGrpInfo,
        uppPrdGrpId: (sharingData.selNode as any).data.key,
      });
    }
  }, [sharingData.adding]);

  // 트리 클릭이벤트
  useEffect(() => {
    if (JSON.stringify(sharingData.selNode) === '{}')
      setGrpInfo(DefaultGrpInfo);
    else {
      const node = sharingData.selNode as any;
      setGrpInfo({
        description: node.data.description,
        prdGrpId: node.data.key,
        prdGrpNm: node.data.title,
        uppPrdGrpId: -1,
        introduction: '',
        status: node.data.status,
      });
    }
  }, [sharingData.selNode]);

  // 상품 그룹 정보 인풋 수정이벤트
  const onInputChanged = (e: any) => {
    setGrpInfo({ ...grpInfo, [e.target.name]: e.target.value });
  };

  // 저장 버튼이벤트
  const onSave = () => {
    const param = {
      actor: localStorage.getItem('usrId'),
      dataset: [
        {
          description: grpInfo.description,
          introduction: grpInfo.introduction,
          prdGrpId:
            sharingData.adding !== -1
              ? null
              : (sharingData.selNode as any).data.key,
          prdGrpNm: grpInfo.prdGrpNm,
          sort: 1,
          // add 일 경우 마지막 클릭한 selNode가 부모노드 이므로 클릭한 노드의 key를 가져온다
          // mod 일 경우 selNode의 부모키를 가져온다
          uppPrdGrpId:
            sharingData.adding !== -1
              ? (sharingData.selNode as any).data.key
              : (sharingData.selNode as any).data.parent === -1
              ? null // root일 경우
              : (sharingData.selNode as any).data.parent,
        },
      ],
      paramType: sharingData.adding !== -1 ? 'add' : 'mod',
      status: grpInfo.status,
    };

    // root를 수정할 경우
    if (
      param.paramType === 'mod' &&
      JSON.stringify(sharingData.selNode) !== '{}' &&
      (sharingData.selNode as any).key === '0'
    ) {
      setAlertPopup({
        ...alertPopup,
        visible: true,
        message: '최상위 그룹은 수정할 수 없습니다.',
        leftText: '확인',
        rightText: '',
        leftCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
        },
      });
      return;
    }

    axios
      .post('/management/manager/product/group/update', param)
      .then(res => {
        if (res.data.code === '0000') {
          setSharingData({ ...sharingData, adding: -1 });
          setAlertPopup({
            ...alertPopup,
            visible: true,
            message: '저장되었습니다.',
            leftText: '확인',
            rightText: '',
            leftCallback: () => {
              setAlertPopup({ ...alertPopup, visible: false });
            },
          });
        } else {
          setAlertPopup({
            ...alertPopup,
            visible: true,
            message: res.data.msg,
            leftText: '확인',
            rightText: '',
            leftCallback: () => {
              setAlertPopup({ ...alertPopup, visible: false });
            },
          });
        }
      })
      .catch();
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
                    ref={grpNmInputRef}
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
                    onClick={onSave}
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
