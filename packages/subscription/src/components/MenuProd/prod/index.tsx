import React, { useEffect, useState, useMemo } from 'react';
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
import { AlertPopupData, PrdMng, DefaultGrpInfo } from '../../../data/atoms';
import SidebarRcTree from './components/SidebarRcTree';
import DatatableProd from './components/DatatableProd';
import PrdGrpInfo from './components/PrdGrpInfo';

interface CodeSet {
  codeSetItems: { label: string; value: string }[];
  codeSetLabel: string;
}
interface GrpInfo {
  description: string;
  prdGrpId: number;
  prdGrpNm: string;
  uppPrdGrpId: number;
  introduction: string;
  status: number;
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
  const [sharingData, setSharingData] = useAtom(PrdMng);

  const showDropdownList = () => {
    setFilterDropdown(!filterDropdown);
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
            <SidebarRcTree />
            <Box sx={{ ml: '30px', width: '100%' }}>
              <PrdGrpInfo />

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
