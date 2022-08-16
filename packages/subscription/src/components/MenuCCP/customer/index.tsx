import { Box } from '@mui/material';
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
const Admin = () => {
  // alertPopup object
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [searchParam, setSearchParam] = useState(defaultSearchParam);
  const searchTextRef = useRef();
  const [searchCategory, setSearchCategory] = useState('custNm');
  const [tableRows, setTableRows] = useState([]);

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
      navigate('/admin/ccp/customer/detail', { state: e.row });
      console.log(e.row);
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
            className="sub_card_common sub_card_filter"
            sx={{ width: '100%', height: '112px' }}
          >
            <Box className="sub_listpage_filter_topsection">
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
                className="sub_listpage_filter_topsection_sub"
                sx={{ minWidth: '500px' }}
              >
                <Box component="span" className="sub_listpage_filter_label">
                  고객유형
                </Box>
                <Box
                  component="span"
                  className="sub_listpage_filter_inputgroup"
                >
                  <CheckboxSelect
                    names={['전체', '기업', '공공', '개인']}
                    value={['전체']}
                    width={116}
                    margin="0 8px 0 0 !important"
                    onChangeHandler={selectChangedEvent}
                  />
                  {/*<Select
                    fullWidth={false}
                    id="search-category21"
                    name="custTp"
                    value={searchParam.custTp}
                    className="sub_select_common sub_listpage_filter_list2"
                    onChange={selectChangedEvent}
                  >
                    <MenuItem value="99">전체</MenuItem>
                    <MenuItem value="1">기업</MenuItem>
                    <MenuItem value="2">공공</MenuItem>
                    <MenuItem value="3">개인</MenuItem>
                  </Select>
                  */}
                  <CheckboxSelect
                    names={['전체', '구독중', '종료']}
                    value={['전체']}
                    width={116}
                    margin="0 8px 0 0 !important"
                    onChangeHandler={selectChangedEvent}
                  />
                  {/*<Select
                    fullWidth={false}
                    id="search-category22"
                    name="subscriptionStatus"
                    value={searchParam.subscriptionStatus}
                    className="sub_select_common sub_listpage_filter_list2"
                    onChange={selectChangedEvent}
                  >
                    <MenuItem value="99">전체</MenuItem>
                    <MenuItem value="1">구독중</MenuItem>
                    <MenuItem value="2">종료</MenuItem>
                  </Select>
                  */}
                  {/*<Select
                    fullWidth={false}
                    id="search-category23"
                    name="status"
                    value={searchParam.status}
                    className="sub_select_common sub_listpage_filter_list2"
                    onChange={selectChangedEvent}
                  >
                    <MenuItem value="99">전체</MenuItem>
                    <MenuItem value="1">활동</MenuItem>
                    <MenuItem value="2">휴면</MenuItem>
                    <MenuItem value="0">탈퇴</MenuItem>
                  </Select>
                  */}
                  <CheckboxSelect
                    names={['전체', '활동', '휴면', '탈퇴']}
                    value={['전체']}
                    width={116}
                    margin="0 8px 0 0 !important"
                    onChangeHandler={selectChangedEvent}
                  />
                </Box>
              </Box>
            </Box>
            <Box className="sub_listpage_filter_btmsection">
              <Button
                variant="outlined"
                className="sub_btn_primary_outline_common sub_btn_filter1"
                onClick={initSearchParam}
              >
                초기화
              </Button>
              <Button
                variant="contained"
                className="sub_btn_primary_fill_common sub_btn_filter2"
                onClick={searchClickEvent}
              >
                검색하기
              </Button>
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

export default Admin;
