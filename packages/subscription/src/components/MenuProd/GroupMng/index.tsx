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
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import AppFrame from '../../../container/AppFrame';
import AlertPopup from '../../Common/AlertPopup';
import DatatableItems from './components/DatatableItems';
import { axios } from '../../../utils/axios';
import { AlertPopupData } from '../../../data/atoms';
import SidebarRcTree from './components/SidebarRcTree';

const validationSchema = Yup.object().shape({
  prdGrpNm: Yup.string().nullable(false).required(),
  itemTp: Yup.string().nullable(false).required(),
});

const defaultFormValidation = {
  prdGrpNm: false,
  itemTp: false,
};

const validationMsg = {
  prdGrpNm: '그룹명을 입력해 주세요',
  itemTp: '유형을 선택해 주세요',
};

const Items = () => {
  const [filterDropdown, setFilterDropdown] = React.useState(false);
  const [prdGrpNm, setPrdGrpNm] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [status, setStatus] = React.useState(1);
  const [itemTp, setItemTp] = React.useState('');
  const [selectGroupKey, setSelectGroupKey] = React.useState(Number);
  const [dataValid, setDataValid] = React.useState(defaultFormValidation);
  const [isPost, setIsPost] = React.useState(false);
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);

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

  const saveGrp = async () => {
    const valid = {
      prdGrpNm: !(await validationSchema.fields.prdGrpNm.isValid(prdGrpNm)),
      itemTp: !(await validationSchema.fields.itemTp.isValid(itemTp)),
    };
    setDataValid(valid);
    const req = {
      actor: localStorage.getItem('usrId'),
      dataset: [
        {
          description: description,
          itemTp: itemTp,
          prdItemGrpId: '',
          prdItemGrpNm: prdGrpNm,
          sort: 1,
          status: status,
          uppPrdItemGrpId: Number(selectGroupKey),
        },
      ],
      paramType: 'add',
    };
    if (!valid.prdGrpNm && !valid.itemTp) {
      const res = await axios.post(
        '/management/manager/product/item/group/update',
        req,
      );
      if (res.data.code === '0000') {
        setIsPost(true);
        setAlertPopup({
          ...defaultAlertPopup,
          leftCallback: () => {
            setAlertPopup({ ...alertPopup, visible: false });
          },
          message: '새로운 운영자 추가가 완료되었습니다.',
          leftText: '확인',
        });
      }
    }
  };

  useEffect(() => {
    setDataValid(defaultFormValidation);
  }, [selectGroupKey]);

  const setuppGrp = (data: any) => {
    setSelectGroupKey(data);
  };

  const showDropdownList = () => {
    setFilterDropdown(!filterDropdown);
  };
  return (
    <>
      <AppFrame
        title="아이템 관리"
        breadcrumbs={[
          { name: '상품 관리', link: '/admin/common/admin' },
          { name: '아이템 관리', link: '/admin/common/admin' },
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
            <SidebarRcTree setuppGrp={setuppGrp} isPost={isPost} />
            <Box sx={{ ml: '30px', width: '100%' }}>
              <Card
                className="sub_items_filter_card"
                sx={{ marginBottom: '20px' }}
              >
                <Box>
                  <CardHeader
                    component="div"
                    title="아이템 그룹 정보"
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
                            value={prdGrpNm ? prdGrpNm : ''}
                            onChange={e => {
                              setPrdGrpNm(e.target.value);
                            }}
                            error={dataValid.prdGrpNm}
                            className="sub_input_common sub_items_filter_input"
                          />
                          {dataValid.prdGrpNm && (
                            <Box>
                              <FormHelperText error id="prdGrpNm-error">
                                {validationMsg.prdGrpNm}
                              </FormHelperText>
                            </Box>
                          )}
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
                            onChange={e => {
                              setDescription(e.target.value);
                            }}
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
                            onChange={e => {
                              setStatus(e.target.value as number);
                            }}
                          >
                            <MenuItem value={1}>사용가능</MenuItem>
                            <MenuItem value={2}>사용불가</MenuItem>
                          </Select>
                        </Box>
                      </Grid>
                      <Grid item xs={6} md={6} lg={6}>
                        <Box component="div" className="sub_items_filter_row">
                          <Box
                            component="div"
                            className="sub_items_filter_label"
                          >
                            그룹 유형{' '}
                            <Typography className="sub_cust_label_dot">
                              •
                            </Typography>{' '}
                          </Box>
                          <Select
                            fullWidth={false}
                            value={itemTp ? itemTp : 'SELECT'}
                            className="sub_select_common sub_items_filter_list"
                            onChange={e => {
                              e.target.value === 'SELECT'
                                ? setItemTp('')
                                : setItemTp(e.target.value);
                            }}
                            error={dataValid.itemTp}
                          >
                            <MenuItem value="SELECT">선택</MenuItem>
                            <MenuItem value="MEDIA">매체</MenuItem>
                          </Select>
                          {dataValid.itemTp && (
                            <FormHelperText error id="itemTp-error">
                              {validationMsg.itemTp}
                            </FormHelperText>
                          )}
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
                            onClick={saveGrp}
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
                              : '/btn_dropdown.png'
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
                    아이템 상태
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
                        전체 (300)
                      </Typography>
                    </Box>
                  }
                ></CardHeader>
                <DatatableItems />
              </Card>
            </Box>
          </Box>
        </>
      </AppFrame>
    </>
  );
};

export default Items;
