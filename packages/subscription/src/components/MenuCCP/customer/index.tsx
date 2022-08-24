import { Box, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppFrame from '../../../container/AppFrame';
import { AlertPopupData, DefaultAlertPopupData } from '../../../data/atoms';
import { axios } from '../../../utils/axios';
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

import MyDatePicker from '../../Common/MyDatePicker';
import { useGridApiRef } from '@mui/x-data-grid-pro';
let defaultSearchParam = {};

const Index = () => {
  // alertPopup object
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [searchField, setSearchField] = useState('ALL');
  const [keyword, setKeyword] = useState('');
  const [dateFrom, setDateFrom] = useState('1990-01-01');
  const [dateTo, setDateTo] = useState('2099-12-31');
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  const [sortField, setSortField] = useState('custId');
  const [order, setOrder] = useState('asc');
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [total, setTotal] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const dataGridApiRef = useGridApiRef();

  // 검색어 입력 셀렉트박스
  const [searchCategory, setSearchCategory] = useState({
    codeSetItems: [{ value: 'ALL', label: '' }],
    codeSetLabel: '',
  });
  const [userCategory, setUserCategory] = useState({
    codeSetItems: [{ value: 'ALL', label: '', checked: true }],
    codeSetLabel: '',
  });
  const [statusCategory, setStatusCategory] = useState({
    codeSetItems: [{ value: 'ALL', label: '', checked: true }],
    codeSetLabel: '',
  });
  const [tableRows, setTableRows] = useState([]);

  const showDropdownList = () => {
    setFilterDropdown(!filterDropdown);
  };

  const navigate = useNavigate();

  // 셀렉트 박스 불러오기
  const initOption = (code: string, failMsg: string, setter: any) => {
    axios
      .post('/management/subscription/admin/codeset', {
        code: code,
        code_grp: 'cu.customer',
      })
      .then(res => {
        if (res.data.code == '0000') {
          if (code == 'cust_tp' || code == 'status') {
            res.data.result.codeSetItems = res.data.result.codeSetItems.map(
              (item: any) => {
                return { ...item, checked: true };
              },
            );
            setter(res.data.result);
          } else {
            setter(res.data.result);
          }
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
    initOption(
      'searchField',
      '검색어조건 가져오기가 실패하였습니다.',
      setSearchCategory,
    );
    // 고객유형 체크박스
    initOption(
      'cust_tp',
      '고객유형 가져오기가 실패하였습니다.',
      setUserCategory,
    );
    // 고객상태 체크박스
    initOption(
      'status',
      '고객상태 가져오기가 실패하였습니다.',
      setStatusCategory,
    );
  }, []);

  // 모든 셀렉트박스 및 체크박스가 로드가 끝나면 테이블의 로우를 가져오기
  useEffect(() => {
    if (
      searchCategory.codeSetLabel != '' &&
      userCategory.codeSetLabel != '' &&
      statusCategory.codeSetLabel != '' &&
      !loaded
    ) {
      setLoaded(true);
      searchClickEvent(null);
    }
  }, [searchCategory, userCategory, statusCategory]);

  // 페이지값이 변하면 다시 로딩
  // 정렬 값 변하면 다시 로딩
  useEffect(() => {
    if (loaded) searchClickEvent(true);
  }, [pageSize, pageNo, order, sortField]);

  const checkedChangedEvent = (e: any) => {
    let res: any;
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
    }
  };

  const dateChanged = (e: Date, type: string) => {
    let date = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + e.getDate();
    switch (type) {
      case 'from':
        setDateFrom(date);
        break;
      case 'to':
        setDateTo(date);
        break;
    }
  };
  const searchClickEvent = (page: boolean | undefined | null) => {
    let param = {
      custTp: [],
      joinedDtFrom: dateFrom,
      joinedDtTo: dateTo,
      keyword: keyword,
      order: order,
      pageNo: pageNo,
      pageSize: pageSize,
      searchField: searchField,
      sortField: sortField,
      status: [],
    };
    if (!page) {
      param.pageNo = 1;
      setPageNo(1);
    }
    param.custTp = userCategory.codeSetItems.map((item: any) => {
      if (item.checked) return parseInt(item.value);
      return;
    }) as any;
    param.status = statusCategory.codeSetItems.map((item: any) => {
      if (item.checked) return parseInt(item.value);
      return;
    }) as any;

    axios
      .post('/management/manager/customer/search', param)
      .then(res => {
        if (res.data.code === '0000') {
          let result = res.data.result;
          setTotal(result.total);
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

  useEffect(() => {
    dataGridApiRef.current.applySorting();
  }, [tableRows]);

  const initClickEvent = () => {
    setSearchField('ALL');
    setKeyword('');
    setDateFrom('1990-01-01');
    setDateTo('2099-12-31');
    setUserCategory({
      ...userCategory,
      codeSetItems: userCategory.codeSetItems.map((item: any) => {
        return { ...item, checked: true };
      }),
    });
    setStatusCategory({
      ...statusCategory,
      codeSetItems: statusCategory.codeSetItems.map((item: any) => {
        return { ...item, checked: true };
      }),
    });
  };

  const cellClickEvent = (e: any) => {
    if (e.field == 'details') {
      navigate('/admin/ccp/customer/tab', { state: e.row });
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
              leftCallback={alertPopup.leftCallback}
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
                    value={searchField}
                    className="sub_select_common sub_listpage_filter_list"
                    onChange={e => setSearchField(e.target.value)}
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
                    onChange={e => setKeyword(e.target.value)}
                    value={keyword}
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
                    value={dateFrom}
                    onChange={(e: Date) => dateChanged(e, 'from')}
                  />
                  <MyDatePicker
                    strId="search-date2"
                    strClass="sub_input_common sub_listpage_filter_date"
                    strName="search-date2"
                    strPlaceholder="종료일"
                    objSX={null}
                    value={dateTo}
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
                  onClick={initClickEvent}
                >
                  초기화
                </Button>
                <Button
                  variant="contained"
                  className="sub_btn_primary_fill_common sub_btn_filter2"
                  sx={{ marginRight: '10px' }}
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
                          checked={item.checked}
                          value={item.value}
                          onChange={checkedChangedEvent}
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
                          checked={item.checked}
                          value={item.value}
                          onChange={checkedChangedEvent}
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
                      <Checkbox defaultChecked onChange={checkedChangedEvent} />
                    }
                    label="구독중"
                  />
                </FormGroup>
                <FormGroup className="sub_filter_dropdown_chk_outer">
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked onChange={checkedChangedEvent} />
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
                    전체 고객 ({total})
                  </Typography>
                </Box>
              }
            ></CardHeader>
            <DataTable
              rows={tableRows}
              cellClickEvent={cellClickEvent}
              rowsPerPage={pageSize}
              total={total}
              page={pageNo}
              apiRef={dataGridApiRef}
              pageChanged={(e: number) => setPageNo(e + 1)}
              rowsChanged={(e: number) => setPageSize(e)}
              sortModelChanged={sortModelChanged}
            />
          </Card>
        </>
      </AppFrame>
    </>
  );
};

export default Index;
