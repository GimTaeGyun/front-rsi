import React, { useEffect } from 'react';
import OptionForm from './OptionForm';
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
  Typography,
  FormHelperText,
} from '@mui/material';
import { useAtom } from 'jotai';
import * as Yup from 'yup';
import AppFrame from '../../../container/AppFrame';
import AlertPopup from '../../Common/AlertPopup';
import { axios } from '../../../utils/axios';
import { AlertPopupData } from '../../../data/atoms';
import SidebarRcTree from './components/SidebarRcTree';
import DatatableOptions from './components/DatatableOptions';

const Option = () => {
  const [filterDropdown, setFilterDropdown] = React.useState(false);
  const [prdGrpNm, setPrdGrpNm] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [status, setStatus] = React.useState(1);
  const [itemTp, setItemTp] = React.useState('');
  const [selectGroupKey, setSelectGroupKey] = React.useState(Number);
  const [isPost, setIsPost] = React.useState(false);
  const [realDel, setRealDel] = React.useState(false);
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
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

  return (
    <>
      <AppFrame
        title="옵션 관리"
        breadcrumbs={[
          { name: '상품 관리', link: '/admin/common/admin' },
          { name: '옵션 관리', link: '/admin/common/admin' },
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
                sx={{ marginBottom: '20px', maxHeight: '323px' }}
              >
                <Box>
                  <CardHeader
                    component="div"
                    title="옵션 그룹 정보"
                    className="sub_items_filter_header"
                  />
                </Box>
                <Divider />
                <CardContent id="scroll" className="sub_items_filter_content">
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
                            placeholder="그룹명을 입력해 주세요."
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
                            placeholder="그룹 설명을 입력해 주세요."
                            value={description ? description : ''}
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
                            <MenuItem value={1}>사용가능</MenuItem>
                            <MenuItem value={-1}>사용불가</MenuItem>
                          </Select>
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
                    옵션 상태
                  </Box>
                  <FormGroup className="sub_filter_dropdown_chk_outer">
                    <FormControlLabel control={<Checkbox />} label="전체" />
                  </FormGroup>
                  <FormGroup className="sub_filter_dropdown_chk_outer">
                    <FormControlLabel control={<Checkbox />} label="사용가능" />
                  </FormGroup>
                  <FormGroup className="sub_filter_dropdown_chk_outer">
                    <FormControlLabel control={<Checkbox />} label="사용불가" />
                  </FormGroup>
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
                        전체 (6)
                      </Typography>
                    </Box>
                  }
                ></CardHeader>
                <DatatableOptions />
              </Card>
            </Box>
          </Box>
        </>
      </AppFrame>
    </>
  );
};

export default Option;
