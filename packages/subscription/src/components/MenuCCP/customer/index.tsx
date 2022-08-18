import { Box, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppFrame from '../../../container/AppFrame';
import { AlertPopupData, DefaultAlertPopupData } from '../../../data/atoms';
import axios from '../../../utils/axios';
import AlertPopup from '../../Common/AlertPopup';
import {
  Card,
  CardHeader,
  OutlinedInput,
  Select,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';
import DataTable from './components/Datatable';

const defaultSearchParam = {
  custNm: 'ALL',
  custTp: 99,
  dateFrom: '1990-01-01',
  dateTo: '2099-12-31',
  email: 'ALL',
  managerNm: 'ALL',
  mobile: 'ALL',
  page: 10,
  page_no: 1,
  status: 99,
  subscriptionStatus: 99,
};

const defaultSearchCategory = {
  custNm: 'ALL',
  email: 'ALL',
  managerNm: 'ALL',
  mobile: 'ALL',
};
import MyDatePicker from '../../Common/MyDatePicker';
import CheckboxSelect from '../../Common/CheckboxSelect';
const Index = () => {
  // alertPopup object
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [searchParam, setSearchParam] = useState(defaultSearchParam);
  const searchTextRef = useRef();
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [searchCategory, setSearchCategory] = useState('custNm');
  const [tableRows, setTableRows] = useState([]);

  const showDropdownList = () => {
    setFilterDropdown(!filterDropdown);
  };

  const navigate = useNavigate();

  // 페이지 초기화
  useEffect(() => {
    axios
      .post('/management/manager/customer/search', defaultSearchParam)
      .then(res => {
        if (res.data.code === '0000') {
          let result = res.data.result;
          result = result.map((item: any) => {
            return { ...item, id: item.no };
          });
          setTableRows(result);
        }
      })
      .catch(e => console.log(e));
  }, []);

  // 페이지값이 변하면 다시 로딩
  useEffect(() => {
    searchClickEvent();
  }, [, searchParam.page, searchParam.page_no]);

  const selectChangedEvent = (e: any) => {
    let temp = defaultSearchParam;
    switch (e.target.name) {
      case 'search-category':
        temp = {
          ...searchParam,
          ...defaultSearchCategory,
          [e.target.value]:
            (searchTextRef.current as any).children[0].value == ''
              ? 'ALL'
              : (searchTextRef.current as any).children[0].value,
        };
        setSearchCategory(e.target.value);
        break;
      case 'custTp':
      case 'status':
      case 'subscriptionStatus':
        temp = {
          ...searchParam,
          [e.target.name]: e.target.value,
        };
        break;
    }
    setSearchParam(temp);
  };

  const dateChanged = (e: Date, type: string) => {
    let date = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + e.getDate();

    switch (type) {
      case 'from':
        setSearchParam({ ...searchParam, dateFrom: date });
        break;
      case 'to':
        setSearchParam({ ...searchParam, dateTo: date });
        break;
    }
  };

  const searchClickEvent = () => {
    let reqParam = { ...searchParam };
    if ((searchTextRef.current as any).children[0].value == '')
      (reqParam as any)[searchCategory] = 'ALL';
    else
      (reqParam as any)[searchCategory] = (
        searchTextRef.current as any
      ).children[0].value;

    axios
      .post('/management/manager/customer/search', reqParam)
      .then(res => {
        if (res.data.code === '0000') {
          let result = res.data.result;
          result = result.map((item: any) => {
            return { ...item, id: item.no };
          });
          setTableRows(result);
        }
      })
      .catch(e => console.log(e));
  };
  const initSearchParam = () => {
    setSearchParam(defaultSearchParam);
    setSearchCategory('custNm');
  };

  const cellClickEvent = (e: any) => {
    if (e.field == 'details') {
      navigate('/admin/ccp/customer/tab', { state: e.row });
    }
  };

  return (
    <>
      <AppFrame
        title="고객 관리"
        breadcrumbs={[
          { name: '고객/계약/결제 관리', link: '/admin/ccp/customer' },
          { name: '고객 관리', link: '/admin/ccp/customer' },
        ]}
      >
        <>
          {alertPopup.visible ? (
            <AlertPopup
              message={alertPopup.message}
              buttontext={alertPopup.leftText}
              rightButtonText={alertPopup.rightText}
              rightCallback={alertPopup.rightCallback}
              closeCallback={alertPopup.leftCallback}
            />
          ) : undefined}

          {/* Filter Section */}
          <Card
            className={
              filterDropdown == true
                ? 'sub_card_common sub_card_filter sub_card_filter_dropdown'
                : 'sub_card_common sub_card_filter sub_card_filter_dropdown active'
            }
            sx={{ width: '100%' }}
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
                    id="search-category"
                    name="search-category"
                    value={searchCategory}
                    className="sub_select_common sub_listpage_filter_list"
                    onChange={selectChangedEvent}
                  >
                    <MenuItem value="custNm">고객명</MenuItem>
                    <MenuItem value="managerNm">담당자명</MenuItem>
                    <MenuItem value="email">이메일</MenuItem>
                    <MenuItem value="mobile">연락처</MenuItem>
                  </Select>
                  <OutlinedInput
                    fullWidth={false}
                    id="search-term"
                    placeholder="검색어 입력"
                    name="search-term"
                    className="sub_input_common sub_listpage_filter_search"
                    ref={searchTextRef}
                    onChange={selectChangedEvent}
                  />
                </Box>
              </Box>
              <Box className="sub_listpage_filter_topsection_sub">
                <Box component="span" className="sub_listpage_filter_label">
                  가입일
                </Box>
                <Box
                  component="span"
                  className="sub_listpage_filter_inputgroup"
                >
                  <MyDatePicker
                    strId="search-date1"
                    strClass="sub_input_common sub_listpage_filter_date"
                    strName="search-date1"
                    strPlaceholder="시작일"
                    objSX={{ marginRight: '8px' }}
                    value={new Date(searchParam.dateFrom)}
                    onChange={(e: Date) => dateChanged(e, 'from')}
                  />
                  <MyDatePicker
                    strId="search-date2"
                    strClass="sub_input_common sub_listpage_filter_date"
                    strName="search-date2"
                    strPlaceholder="종료일"
                    objSX={null}
                    value={new Date(searchParam.dateTo)}
                    onChange={(e: Date) => dateChanged(e, 'to')}
                  />
                </Box>
              </Box>
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
                >
                  초기화
                </Button>
                <Button
                  variant="contained"
                  className="sub_btn_primary_fill_common sub_btn_filter2"
                >
                  검색하기
                </Button>
              </Box>
            </Box>

            <Box
              component="div"
              className="sub_listpage_filter_dropdown_section"
            >
              <Box component="div" className="sub_listpage_filter_dropdown_row">
                <Box className="sub_filter_dropdown_lbl" component="span">
                  고객유형
                </Box>
                <FormGroup className="sub_filter_dropdown_chk_outer">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="기업"
                  />
                </FormGroup>
                <FormGroup className="sub_filter_dropdown_chk_outer">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="공공"
                  />
                </FormGroup>
                <FormGroup className="sub_filter_dropdown_chk_outer">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="개인"
                  />
                </FormGroup>
              </Box>
              <Box component="div" className="sub_listpage_filter_dropdown_row">
                <Box className="sub_filter_dropdown_lbl" component="span">
                  고객상태
                </Box>
                <FormGroup className="sub_filter_dropdown_chk_outer">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="사용"
                  />
                </FormGroup>
                <FormGroup className="sub_filter_dropdown_chk_outer">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="휴면"
                  />
                </FormGroup>
                <FormGroup className="sub_filter_dropdown_chk_outer">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="탈퇴"
                  />
                </FormGroup>
              </Box>
              <Box component="div" className="sub_listpage_filter_dropdown_row">
                <Box className="sub_filter_dropdown_lbl" component="span">
                  구독현황
                </Box>
                <FormGroup className="sub_filter_dropdown_chk_outer">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="구독중"
                  />
                </FormGroup>
                <FormGroup className="sub_filter_dropdown_chk_outer">
                  <FormControlLabel control={<Checkbox />} label="종료" />
                </FormGroup>
              </Box>
            </Box>
          </Card>

          <Card className="sub_tbl_section_common">
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
                    전체 고객 (300)
                  </Typography>
                </Box>
              }
            ></CardHeader>
            <DataTable
              rows={tableRows}
              cellClickEvent={cellClickEvent}
              rowsPerPage={searchParam.page}
              total={28}
              pageChanged={(e: number) => {
                setSearchParam({ ...searchParam, page_no: e + 1 });
              }}
              rowsChanged={(e: number) => {
                setSearchParam({ ...searchParam, page: e, page_no: 1 });
              }}
            />
          </Card>
        </>
      </AppFrame>
    </>
  );
};

export default Index;
