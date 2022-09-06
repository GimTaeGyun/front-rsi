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
import { useAtom } from 'jotai';
import * as Yup from 'yup';
import AppFrame from '../../../container/AppFrame';
import AlertPopup from '../../Common/AlertPopup';
import { axios } from '../../../utils/axios';
import { AlertPopupData } from '../../../data/atoms';
import SidebarRcTree from './components/SidebarRcTree';
import DatatableProd from './components/DatatableProd';
interface CodeSet {
  codeSetItems: { label: string; value: string }[];
  codeSetLabel: string;
}
const Prod = () => {
  const [filterDropdown, setFilterDropdown] = React.useState(false);
  const [status, setStatus] = React.useState(1);
  const [selectGroupKey, setSelectGroupKey] = React.useState(Number);
  const [isPost, setIsPost] = React.useState(false);
  const [realDel, setRealDel] = React.useState(false);
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [itemTpChb, setItemTpChb] = useState<CodeSet | null>(null); // 상품유형 체크박스
  const [itemStatusChb, setItemStatusChb] = useState<CodeSet | null>(null); // 상품상태 체크박스
  const [grpStatusSelect, setGrpStatusSelect] = useState<CodeSet | null>(null); // 그룹상태 셀렉트박스

  const showDropdownList = () => {
    setFilterDropdown(!filterDropdown);
  };
  const setuppGrp = (data: any) => {
    setSelectGroupKey(data);
  };

  const defaultAlertPopup = {
    visible: true,
    leftText: '확인',
    leftCallback: () => {
      setAlertPopup({ ...alertPopup, visible: false });
    },
    rightCallback: () => {},
    rightText: '',
    message: '',
  };

  const realRM = () => {
    setAlertPopup({
      ...defaultAlertPopup,
      leftCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
        setRealDel(true);
      },
      rightCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
        setRealDel(false);
      },
      message: '지정된 그룹을 삭제 하시겠습니까?',
      leftText: '확인',
      rightText: '취소',
    });
  };

  useEffect(() => {
    // 상품유형 체크박스
    axios
      .post('/management/subscription/admin/codeset', {
        code: 'prd_tp',
        code_grp: 'pm.product',
      })
      .then(res => {
        if (res.data.code === '0000') {
          res.data.result.codeSetItems = res.data.result.codeSetItems.map(
            (item: any) => {
              return { ...item, checked: true };
            },
          );
          setItemTpChb(res.data.result);
        }
      })
      .catch();

    // 상품상태 체크박스
    axios
      .post('/management/subscription/admin/codeset', {
        code: 'status',
        code_grp: 'pm.product',
      })
      .then(res => {
        if (res.data.code === '0000') {
          res.data.result.codeSetItems = res.data.result.codeSetItems.map(
            (item: any) => {
              return { ...item, checked: true };
            },
          );
          setItemStatusChb(res.data.result);
        }
      })
      .catch();

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

  return (
    <>
      <AppFrame
        title="상품 관리"
        breadcrumbs={[
          { name: '상품 관리', link: '/admin/prod/itemgrp' },
          { name: '상품 관리', link: '/admin/prod/prod' },
        ]}
      >
        <>
          {alertPopup.visible ? (
            <AlertPopup
              message={alertPopup.message}
              buttontext={alertPopup.leftText}
              rightButtonText={alertPopup.rightText}
              rightCallback={alertPopup.rightCallback}
              leftCallback={alertPopup.leftCallback}
            />
          ) : undefined}
          <Box
            display="flex"
            sx={{
              fontFamily: 'NotoSansKRMedium',
            }}
          >
            <SidebarRcTree
              setuppGrp={setuppGrp}
              isPost={isPost}
              realDel={realDel}
              realRM={realRM}
            />
            <Box sx={{ ml: '30px', width: '100%' }}>
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
                          <Box
                            component="div"
                            className="sub_items_filter_label"
                          >
                            그룹명{' '}
                            <Typography className="sub_cust_label_dot">
                              •
                            </Typography>{' '}
                          </Box>
                          <OutlinedInput
                            fullWidth={false}
                            placeholder="신탁사"
                            className="sub_input_common sub_items_filter_input"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <Box component="div" className="sub_items_filter_row">
                          <Box
                            component="div"
                            className="sub_items_filter_label"
                          >
                            그룹 설명{' '}
                          </Box>
                          <OutlinedInput
                            fullWidth={false}
                            placeholder=""
                            value="EyeSurfer NS 개인용 그룹"
                            className="sub_input_common sub_items_filter_input"
                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                      <Grid item xs={6} md={6} lg={6}>
                        <Box component="div" className="sub_items_filter_row">
                          <Box
                            component="div"
                            className="sub_items_filter_label"
                          >
                            그룹 상태{' '}
                            <Typography className="sub_cust_label_dot">
                              •
                            </Typography>{' '}
                          </Box>
                          <Select
                            fullWidth={false}
                            value={status}
                            className="sub_select_common sub_items_filter_list"
                          >
                            {grpStatusSelect ? (
                              grpStatusSelect.codeSetItems.map((item: any) => (
                                <MenuItem key={item.value} value={item.value}>
                                  {item.label}
                                </MenuItem>
                              ))
                            ) : (
                              <MenuItem value={2}>임시</MenuItem>
                            )}
                          </Select>
                        </Box>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <Box component="div" className="sub_items_filter_row">
                          <Box
                            component="div"
                            className="sub_items_filter_label"
                          >
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
                            placeholder="HTML TEXT AREA (※ 추후 에디터 삽입)"
                            value=""
                            className="sub_input_common sub_items_filter_textarea_input"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <Box
                          component="div"
                          className="sub_items_filter_footer"
                        >
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

              <Card
                className={
                  filterDropdown
                    ? 'sub_items_filter2_card'
                    : 'sub_items_filter2_card active'
                }
              >
                <CardContent className="sub_items_filter2_container">
                  <Box component="div" className="sub_items_filter2_content">
                    <Box className="sub_items_filter2_left">
                      <Box component="div" className="sub_items_filter_label">
                        검색어 입력{' '}
                      </Box>
                      <Select
                        fullWidth={false}
                        value="전체"
                        className="sub_select_common sub_items_filter_list1"
                      >
                        <MenuItem value="전체">전체</MenuItem>
                      </Select>
                      <OutlinedInput
                        fullWidth={false}
                        placeholder=""
                        value="검색어 입력"
                        className="sub_input_common sub_items_filter_search"
                      />
                    </Box>
                    <Box className="sub_items_filter2_right">
                      <Button
                        variant="text"
                        className="sub_items_btn_dropdown"
                        onClick={showDropdownList}
                      >
                        상세검색
                        <Box
                          component="img"
                          src={
                            filterDropdown
                              ? '/btn_dropdown.png'
                              : '/btn_dropdown_down.png'
                          }
                          sx={{ marginLeft: '5px' }}
                        ></Box>
                      </Button>
                      <Button
                        variant="outlined"
                        className="sub_btn_primary_outline_common sub_items_btn_init"
                      >
                        초기화
                      </Button>
                      <Button
                        variant="contained"
                        className="sub_btn_primary_fill_common sub_items_btn_search"
                      >
                        검색하기
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              <Card
                className={
                  filterDropdown
                    ? 'sub_listpage_filter_dropdown_section'
                    : 'sub_listpage_filter_dropdown_section active'
                }
              >
                <Box
                  component="div"
                  className="sub_listpage_filter_dropdown_row"
                >
                  <Box className="sub_filter_dropdown_lbl" component="span">
                    {itemTpChb ? itemTpChb.codeSetLabel : ''}
                  </Box>
                  {itemTpChb
                    ? itemTpChb.codeSetItems.map((item: any) => (
                        <FormGroup
                          key={item.value}
                          className="sub_filter_dropdown_chk_outer"
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={item.value}
                                checked={item.checked}
                              />
                            }
                            label={item.label}
                          />
                        </FormGroup>
                      ))
                    : ''}
                </Box>
                <Divider />
                <Box
                  component="div"
                  className="sub_listpage_filter_dropdown_row"
                >
                  <Box className="sub_filter_dropdown_lbl" component="span">
                    {itemStatusChb ? itemStatusChb.codeSetLabel : ''}
                  </Box>
                  {itemStatusChb
                    ? itemStatusChb.codeSetItems.map((item: any) => (
                        <FormGroup
                          key={item.value}
                          className="sub_filter_dropdown_chk_outer"
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={item.value}
                                checked={item.checked}
                              />
                            }
                            label={item.label}
                          />
                        </FormGroup>
                      ))
                    : ''}
                </Box>
              </Card>

              <Card
                className="sub_tbl_section_common"
                sx={{ marginTop: '20px' }}
              >
                <CardHeader
                  className="sub_tbl_header_outer_common"
                  component="div"
                  title={
                    <Box
                      component="div"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography className="sub_tbl_header_text_common">
                        전체 (5)
                      </Typography>
                    </Box>
                  }
                ></CardHeader>
                <DatatableProd />
              </Card>
            </Box>
          </Box>
        </>
      </AppFrame>
    </>
  );
};

export default Prod;
