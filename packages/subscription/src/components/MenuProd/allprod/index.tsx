import {
  Box,
  Button,
  Card,
  CardHeader,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  OutlinedInput,
  Select,
  Divider,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import React, { useEffect, useReducer, useState } from 'react';

import AppFrame from '../../../container/AppFrame';
import { AlertPopupData, DefaultAlertPopupData } from '../../../data/atoms';
import { axios } from '../../../utils/axios';
import AlertPopup from '../../Common/AlertPopup';
import DataTable from '../../Common/Datatable';
import Coldef from './components/ColDef';
import Footer from './components/Footer';

const pageReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'pageNo':
      return action.value;
    case 'pageSize':
      return action.value;
  }

  return state;
};
const rows = [
  {
    id: '1',
    category: '개인',
    service: 'EyeSurfer',
    productGroup:
      'EyeSurfer / EyeSurfer NS / 개인 / 스크랩 / 조간신문 / 신탁사',
    productName: 'EyeSurfer 구독 서비스_개인_스크랩_신탁',
    salesStart: '2022-01-01',
    salesEnd: '2022-12-31',
    status: '판매중',
    date: '2022-01-01 12:00',
  },
  {
    id: '2',
    category: '개인',
    service: 'EyeSurfer',
    productGroup:
      'EyeSurfer / EyeSurfer NS / 개인 / 스크랩 / 조간신문 / 신탁사',
    productName: 'EyeSurfer 구독 서비스_개인_스크랩_신탁',
    salesStart: '2022-01-01',
    salesEnd: '2022-12-31',
    status: '판매중',
    date: '2022-01-01 12:00',
  },
  {
    id: '3',
    category: '기업',
    service: 'WIGO MON',
    productGroup: 'WIGO MON / 대기업 / 모니터링',
    productName: 'WIGO MON_구독 서비스',
    salesStart: '2022-01-01',
    salesEnd: '2022-12-31',
    status: '미게시',
    date: '2022-01-01 12:00',
  },
  {
    id: '4',
    category: '개인',
    service: 'EyeSurfer',
    productGroup:
      'EyeSurfer / EyeSurfer NS / 개인 / 스크랩 / 조간신문 / 신탁사',
    productName: 'EyeSurfer 구독 서비스_개인_스크랩_신탁',
    salesStart: '2022-01-01',
    salesEnd: '2022-12-31',
    status: '판매중',
    date: '2022-01-01 12:00',
  },
  {
    id: '5',
    category: '공공',
    service: 'EyeSurfer',
    productGroup:
      'EyeSurfer / EyeSurfer NS / 개인 / 스크랩 / 조간신문 / 신탁사',
    productName: 'EyeSurfer 구독 서비스_개인_스크랩_신탁',
    salesStart: '2022-01-01',
    salesEnd: '2022-12-31',
    status: '판매중',
    date: '2022-01-01 12:00',
  },
  {
    id: '6',
    category: '공공',
    service: 'EyeSurfer',
    productGroup:
      'EyeSurfer / EyeSurfer NS / 개인 / 스크랩 / 조간신문 / 신탁사',
    productName: 'EyeSurfer 구독 서비스_개인_스크랩_신탁',
    salesStart: '2022-01-01',
    salesEnd: '2022-12-31',
    status: '판매중',
    date: '2022-01-01 12:00',
  },
  {
    id: '7',
    category: '기업',
    service: 'WIGO MON',
    productGroup: 'WIGO MON / 대기업 / 모니터링',
    productName: 'WIGO MON_구독 서비스',
    salesStart: '2022-01-01',
    salesEnd: '2022-12-31',
    status: '미게시',
    date: '2022-01-01 12:00',
  },
  {
    id: '8',
    category: '개인',
    service: 'EyeSurfer',
    productGroup:
      'EyeSurfer / EyeSurfer NS / 개인 / 스크랩 / 조간신문 / 신탁사',
    productName: 'EyeSurfer 구독 서비스_개인_스크랩_신탁',
    salesStart: '2022-01-01',
    salesEnd: '2022-12-31',
    status: '판매중',
    date: '2022-01-01 12:00',
  },
  {
    id: '9',
    category: '기업',
    service: 'WIGO MON',
    productGroup: 'WIGO MON / 대기업 / 모니터링',
    productName: 'WIGO MON_구독 서비스',
    salesStart: '2022-01-01',
    salesEnd: '2022-12-31',
    status: '미게시',
    date: '2022-01-01 12:00',
  },
  {
    id: '10',
    category: '개인',
    service: 'EyeSurfer',
    productGroup:
      'EyeSurfer / EyeSurfer NS / 개인 / 스크랩 / 조간신문 / 신탁사',
    productName: 'EyeSurfer 구독 서비스_개인_스크랩_신탁',
    salesStart: '2022-01-01',
    salesEnd: '2022-12-31',
    status: '판매중',
    date: '2022-01-01 12:00',
  },
];
const AllProd = () => {
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData); // 알림창
  const [filterDropdown, setFilterDropdown] = useState(false); // 상세검색
  const [pageSize, dispatchPageSize] = useReducer(pageReducer, 10); // 페이지 로우 수
  const [pageNo, dispatchPageNo] = useReducer(pageReducer, 1); // 페이지
  const [total, setTotal] = useState(rows.length); // 전체 로우 수
  const [prdTp, setPrdTp] = useState(null as any);
  const [status, setStatus] = useState(null as any);
  const [sortField, setSortField] = useState('custId');
  const [order, setOrder] = useState('asc');
  const [tableRows, setTableRows] = useState([]);

  // 상세검색 버튼 이벤트
  const showDropdownList = () => {
    setFilterDropdown(!filterDropdown);
  };

  const cellClickEvent = (e: any) => {
    if (e.field == 'details') {
    }
  };

  const sortModelChanged = (e: any) => {
    if (e.length > 1) {
      setOrder(e[0].sort);
      setSortField(e[0].field);
    } else {
      setOrder('asc');
      setSortField('custId');
    }
  };

  const checkedChangedEvent = (e: any) => {
    console.log(e);
    /*let res: any;
    switch (e.target.name) {
      case 'status':
        res = statusCategory.codeSetItems;
        res = res.map((item: any) => {
          if (e.target.value == item.value) {
            item.checked = e.target.checked;
          }
          return item;
        });
        setStatusCategory({ ...statusCategory, codeSetItems: res });
        break;
      case 'custTp':
        res = userCategory.codeSetItems;
        res = res.map((item: any) => {
          if (e.target.value == item.value) {
            item.checked = e.target.checked;
          }
          return item;
        });
        setUserCategory({ ...userCategory, codeSetItems: res });
        break;
    }*/
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
          setPrdTp(res.data.result);
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
          setStatus(res.data.result);
        }
      })
      .catch();

    refreshTableData();
  }, []);

  const refreshTableData = () => {
    // 전체 상품목록
    axios
      .post('/management/manager/product/all/inquiry', {
        prdItemgrpId: 'ALL',
        prdTp: 'ALL',
        searchValue: null,
        service: 0,
        status: 3,
      })
      .then(res => {
        console.log(res);
      })
      .catch();
  };

  return (
    <>
      <AppFrame
        title="전체 상품 목록"
        breadcrumbs={[
          { name: '상품 관리', link: '/admin/prod/itemgrp' },
          { name: '전체 상품 목록', link: '/admin/prod/allprod' },
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

          {/* Filter Section */}
          <Card
            className="sub_items_filter_card"
            sx={{ width: '1476px', maxHeight: '56px' }}
          >
            <Box className="sub_listpage_filter_topsection b-0">
              <Box className="sub_listpage_filter_topsection_sub">
                <Box component="span" className="sub_listpage_filter_label">
                  검색어 입력
                </Box>
                <Box
                  component="span"
                  className="sub_listpage_filter_inputgroup"
                >
                  <Select
                    fullWidth={false}
                    name="searchField"
                    value="전체" //{searchField}
                    className="sub_select_common sub_listpage_filter_list"
                    //onChange={e => setSearchField(e.target.value)}
                    MenuProps={{
                      PaperProps: {
                        className: 'sub_select_paper_little',
                      },
                    }}
                  >
                    <MenuItem
                      key="전체"
                      value="전체"
                      className="sub_menuitem_little"
                    >
                      전체
                    </MenuItem>
                    {/*(searchCategory as any).codeSetItems.map((item: any) => (
                      <MenuItem
                        key={item.value}
                        value={item.value}
                        className="sub_menuitem_little"
                      >
                        {item.label}
                      </MenuItem>
                    ))*/}
                  </Select>
                  <OutlinedInput
                    fullWidth={false}
                    placeholder="검색어 입력"
                    name="keyword"
                    className="sub_input_common sub_listpage_filter_search"
                    //onChange={e => setKeyword(e.target.value)}
                    //value={keyword}
                    onKeyDown={e => {
                      console.log(e);
                      //if (e.key == 'Enter') searchClickEvent(null);
                    }}
                  />
                </Box>
              </Box>
              <Box className="sub_listpage_filter_topsection_sub"></Box>
              <Box
                className="sub_listpage_filter_topsection_sub last"
                sx={{ minWidth: '500px' }}
              >
                <Button
                  variant="text"
                  className="sub_filter_btn_iconlink"
                  onClick={showDropdownList}
                >
                  상세검색
                  <Box
                    className="btn_add_icon"
                    component="img"
                    src={filterDropdown ? '/icon_add.png' : '/icon_sub.png'}
                  ></Box>
                </Button>
                <Button
                  variant="outlined"
                  className="sub_btn_primary_outline_common sub_btn_filter1"
                  //onClick={initClickEvent}
                >
                  초기화
                </Button>
                <Button
                  variant="contained"
                  className="sub_btn_primary_fill_common sub_btn_filter2"
                  sx={{ marginRight: '10px' }}
                  //onClick={() => searchClickEvent(null)}
                >
                  검색하기
                </Button>
              </Box>
            </Box>
          </Card>

          <Card
            className={
              filterDropdown
                ? 'sub_listpage_filter_dropdown_section'
                : 'sub_listpage_filter_dropdown_section active'
            }
            sx={{ width: '1476px', height: '112px' }}
          >
            <Box component="div" className="sub_listpage_filter_dropdown_row">
              <Box className="sub_filter_dropdown_lbl" component="span">
                {prdTp ? prdTp.codeSetLabel : ''}
              </Box>
              {prdTp
                ? prdTp.codeSetItems.map((item: any) => (
                    <FormGroup className="sub_filter_dropdown_chk_outer">
                      <FormControlLabel
                        control={<Checkbox />}
                        label={item.label}
                        value={item.value}
                      />
                    </FormGroup>
                  ))
                : ''}
            </Box>
            <Divider />
            <Box component="div" className="sub_listpage_filter_dropdown_row">
              <Box className="sub_filter_dropdown_lbl" component="span">
                {status ? status.codeSetLabel : ''}
              </Box>
              {status
                ? status.codeSetItems.map((item: any) => (
                    <FormGroup className="sub_filter_dropdown_chk_outer">
                      <FormControlLabel
                        control={<Checkbox />}
                        label={item.label}
                        value={item.value}
                      />
                    </FormGroup>
                  ))
                : ''}
            </Box>
          </Card>

          <Card className="sub_tbl_section_common" sx={{ marginTop: '20px' }}>
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
                    전체 상품 ({total})
                  </Typography>
                </Box>
              }
            ></CardHeader>
            <DataTable
              checkbox={false}
              rows={rows}
              cellClickEvent={cellClickEvent}
              rowsPerPage={pageSize}
              total={total}
              page={pageNo}
              sortModelChanged={sortModelChanged}
              coldef={Coldef}
              footer={() => (
                <Footer
                  pageNo={pageNo}
                  dispatchPageNo={dispatchPageNo}
                  pageSize={pageSize}
                  dispatchPageSize={dispatchPageSize}
                  total={total}
                />
              )}
            />
          </Card>
        </>
      </AppFrame>
    </>
  );
};

export default AllProd;
