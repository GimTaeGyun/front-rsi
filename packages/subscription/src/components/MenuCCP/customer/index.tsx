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
  custTp: [],
  joinedDtFrom: '1990-01-01',
  joinedDtTo: '2099-12-31',
  keyword: '',
  order: 'asc',
  pageNo: 1,
  pageSize: 10,
  searchField: 'ALL',
  sortField: '',
  status: [],
};

import MyDatePicker from '../../Common/MyDatePicker';
const Index = () => {
  // alertPopup object
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [searchParam, setSearchParam] = useState(defaultSearchParam);
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);
  const [loaded4, setLoaded4] = useState(false);

  // 검색어 입력 셀렉트박스
  const [searchCategory, setSearchCategory] = useState({
    codeSetItems: [{ value: 'ALL', label: '' }],
    codeSetLabel: '',
  });
  const [userCategory, setUserCategory] = useState({
    codeSetItems: [{ value: 'ALL', label: '' }],
    codeSetLabel: '',
  });
  const [statusCategory, setStatusCategory] = useState({
    codeSetItems: [{ value: 'ALL', label: '' }],
    codeSetLabel: '',
  });
  const [tableRows, setTableRows] = useState([]);

  const showDropdownList = () => {
    setFilterDropdown(!filterDropdown);
  };

  const navigate = useNavigate();

  // 셀렉트 박스 불러오기
  const initSelectBox = (
    code: string,
    failMsg: string,
    setter: any,
    loadedSetter: any,
  ) => {
    axios
      .post('/management/subscription/admin/codeset', {
        code: code,
        code_grp: 'cu.customer',
      })
      .then(res => {
        if (res.data.code == '0000') {
          setter(res.data.result);
          loadedSetter(true);
        } else {
          setAlertPopup({
            ...DefaultAlertPopupData,
            visible: true,
            message: failMsg,
            leftCallback: () => {
              setAlertPopup({ ...alertPopup, visible: false });
            },
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  // 페이지 초기화
  useEffect(() => {
    // 검색어 조건 셀렉트박스
    initSelectBox(
      'searchField',
      '검색어조건 가져오기가 실패하였습니다',
      setSearchCategory,
      setLoaded1,
    );
    // 고객유형 체크박스
    initSelectBox(
      'cust_tp',
      '고객유형 가져오기가 실패하였습니다',
      setUserCategory,
      setLoaded2,
    );
    // 고객상태 체크박스
    initSelectBox(
      'status',
      '고객상태 가져오기가 실패하였습니다',
      setStatusCategory,
      setLoaded3,
    );
  }, []);

  // 모든 셀렉트박스 및 체크박스가 로드가 끝나면 테이블의 로우를 가져오기
  useEffect(() => {
    if (loaded1 && loaded2 && loaded3 && !loaded4) {
      let status = statusCategory.codeSetItems.map((item: any) => item.value);
      let custTp = userCategory.codeSetItems.map((item: any) => item.value);
      let searchField = searchCategory.codeSetItems[0].value;
      let paramTmp = {
        ...searchParam,
        status: status,
        custTp: custTp,
        searchField: searchField,
        sortField: searchCategory.codeSetItems[1].value,
      };
      setSearchParam(paramTmp as any);
      setLoaded4(true);
      searchClickEvent(paramTmp);
    }
  }, [loaded1, loaded2, loaded3]);

  // 페이지값이 변하면 다시 로딩
  useEffect(() => {
    searchClickEvent(null);
  }, [searchParam.pageSize, searchParam.pageNo]);

  const optionChangedEvent = (e: any) => {
    let temp = searchParam;

    if (Array.isArray((searchParam as any)[e.target.name])) {
      e.target.checked
        ? (temp as any)[e.target.name].push(e.target.value)
        : ((temp as any)[e.target.name] = (temp as any)[e.target.name].map(
            (item: any) => {
              if (item != e.target.value) return item;
            },
          ));
    } else {
      (temp as any)[e.target.name] = e.target.value;
    }
    console.log(temp);
    setSearchParam(temp);
  };

  const dateChanged = (e: Date, type: string) => {
    let date = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + e.getDate();

    switch (type) {
      case 'from':
        setSearchParam({ ...searchParam, joinedDtFrom: date });
        break;
      case 'to':
        setSearchParam({ ...searchParam, joinedDtTo: date });
        break;
    }
  };

  const searchClickEvent = (param: any) => {
    if (param == null) param = searchParam;
    axios
      .post('/management/manager/customer/search', param)
      .then(res => {
        if (res.data.code === '0000') {
          let result = res.data.result;
          if (result.total != 0) {
            result = result.dataRows.map((item: any) => {
              return { ...item, id: item.rnum };
            });
          } else result = [];
          setTableRows(result);
        }
      })
      .catch(e => console.log(e));
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
              filterDropdown
                ? 'sub_card_common sub_card_filter sub_card_filter_dropdown'
                : 'sub_card_common sub_card_filter sub_card_filter_dropdown active'
            }
            sx={{ width: '100%' }}
          >
            <Box className="sub_listpage_filter_topsection b-0">
              <Box className="sub_listpage_filter_topsection_sub">
                <Box component="span" className="sub_listpage_filter_label">
                  {(searchCategory as any).codeSetLabel}
                </Box>
                <Box
                  component="span"
                  className="sub_listpage_filter_inputgroup"
                >
                  <Select
                    fullWidth={false}
                    name="searchField"
                    defaultValue="ALL"
                    className="sub_select_common sub_listpage_filter_list"
                    onChange={optionChangedEvent}
                  >
                    {(searchCategory as any).codeSetItems.map((item: any) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <OutlinedInput
                    fullWidth={false}
                    placeholder={(searchCategory as any).codeSetLabel}
                    name="keyword"
                    className="sub_input_common sub_listpage_filter_search"
                    onChange={optionChangedEvent}
                    onKeyDown={e => {
                      if (e.key == 'Enter') searchClickEvent(null);
                    }}
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
                    value={new Date(searchParam.joinedDtFrom)}
                    onChange={(e: Date) => dateChanged(e, 'from')}
                  />
                  <MyDatePicker
                    strId="search-date2"
                    strClass="sub_input_common sub_listpage_filter_date"
                    strName="search-date2"
                    strPlaceholder="종료일"
                    objSX={null}
                    value={new Date(searchParam.joinedDtTo)}
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
                  onClick={() => searchClickEvent(null)}
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
                  {userCategory.codeSetLabel}
                </Box>
                {userCategory.codeSetItems.map((item: any) => (
                  <FormGroup
                    key={item.value}
                    className="sub_filter_dropdown_chk_outer"
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="custTp"
                          defaultChecked
                          value={item.value}
                          onChange={optionChangedEvent}
                        />
                      }
                      label={item.label}
                    />
                  </FormGroup>
                ))}
              </Box>
              <Box component="div" className="sub_listpage_filter_dropdown_row">
                <Box className="sub_filter_dropdown_lbl" component="span">
                  {statusCategory.codeSetLabel}
                </Box>
                {statusCategory.codeSetItems.map((item: any) => (
                  <FormGroup
                    key={item.value}
                    className="sub_filter_dropdown_chk_outer"
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="status"
                          defaultChecked
                          value={item.value}
                          onChange={optionChangedEvent}
                        />
                      }
                      label={item.label}
                    />
                  </FormGroup>
                ))}
              </Box>
              <Box component="div" className="sub_listpage_filter_dropdown_row">
                <Box className="sub_filter_dropdown_lbl" component="span">
                  구독현황
                </Box>
                <FormGroup className="sub_filter_dropdown_chk_outer">
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked onChange={optionChangedEvent} />
                    }
                    label="구독중"
                  />
                </FormGroup>
                <FormGroup className="sub_filter_dropdown_chk_outer">
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked onChange={optionChangedEvent} />
                    }
                    label="종료"
                  />
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
              rowsPerPage={searchParam.pageSize}
              total={28}
              pageChanged={(e: number) => {
                setSearchParam({ ...searchParam, pageNo: e + 1 });
              }}
              rowsChanged={(e: number) => {
                setSearchParam({ ...searchParam, pageSize: e, pageNo: 1 });
              }}
            />
          </Card>
        </>
      </AppFrame>
    </>
  );
};

export default Index;
