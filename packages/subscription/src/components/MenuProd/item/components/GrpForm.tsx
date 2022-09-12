import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import * as Yup from 'yup';

import { AlertPopupData } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';

const defaultFormValidation = {
  prdGrpNm: false,
  itemTp: false,
};

const validationMsg = {
  prdGrpNm: '그룹명을 입력해 주세요',
  itemTp: '유형을 선택해 주세요',
};

const validationSchema = Yup.object().shape({
  prdGrpNm: Yup.string().nullable(false).required(),
  itemTp: Yup.string().nullable(false).required(),
});

const GrpForm = (props: {
  selectGroupKey: any;
  setIsPost: Function;
  isAdd: any;
  uppId: any;
}) => {
  const { selectGroupKey, setIsPost, isAdd } = props;
  const [prdGrpNm, setPrdGrpNm] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [status, setStatus] = React.useState(0);
  const [itemTp, setItemTp] = React.useState('');
  const [dataValid, setDataValid] = React.useState(defaultFormValidation);
  const [errorMargin, setErrorMargin] = React.useState('12px');
  const [errorMargins, setErrorMargins] = React.useState('12px');
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

  useEffect(() => {
    setDataValid(defaultFormValidation);
    const api = async () => {
      if (isAdd) {
        setPrdGrpNm('');
        setStatus(0);
        setDescription('');
      } else {
        const res = await axios.post(
          '/management/manager/product/item/group/detail/inquiry',
          {
            itemNm: '',
            itemStatus: [32767],
            prdItemgrpId: selectGroupKey ? selectGroupKey : 0,
          },
        );
        const data = res.data.result;
        setPrdGrpNm(data.itemGrpNm);
        setItemTp(data.itemTp.value);
        setStatus(data.status.value);
        setDescription(data.itemGrpDesc);
      }
    };
    api();
  }, [selectGroupKey, isAdd]);

  useEffect(() => {
    dataValid.prdGrpNm ? setErrorMargin('26px') : setErrorMargin('12px');
    dataValid.prdGrpNm ? setErrorMargins('3px') : setErrorMargins('12px');
  }, [dataValid.prdGrpNm]);

  const saveGrp = async () => {
    const valid = {
      prdGrpNm: !(await validationSchema.fields.prdGrpNm.isValid(prdGrpNm)),
      itemTp: !(await validationSchema.fields.itemTp.isValid(itemTp)),
    };
    setDataValid(valid);

    const req = isAdd
      ? {
          actor: localStorage.getItem('usrId'),
          dataset: [
            {
              description: description,
              itemTp: itemTp,
              prdItemGrpId: 0,
              prdItemGrpNm: prdGrpNm,
              sort: 1,
              status: status,
              uppPrdItemGrpId: Number(selectGroupKey),
            },
          ],
          status: status,
          paramType: 'add',
        }
      : {
          actor: localStorage.getItem('usrId'),
          dataset: [
            {
              description: description ? description : '',
              itemTp: itemTp,
              prdItemGrpId: Number(selectGroupKey),
              prdItemGrpNm: prdGrpNm,
              sort: 1,
              status: status,
              uppPrdItemGrpId: Number(props.uppId),
            },
          ],
          status: status,
          paramType: 'mod',
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
            setIsPost(false);
          },
          message: '저장되었습니다.',
          leftText: '확인',
        });
      } else {
        setAlertPopup({
          ...defaultAlertPopup,
          leftCallback: () => {
            setAlertPopup({ ...alertPopup, visible: false });
            setIsPost(false);
          },
          message: res.data.msg,
          leftText: '확인',
        });
      }
    }
  };

  return (
    <Card
      className="sub_items_filter_card"
      sx={{ marginBottom: '20px', maxHeight: '323px' }}
    >
      <Box>
        <CardHeader
          component="div"
          title="아이템 그룹 정보"
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
              <Box
                component="div"
                className="sub_items_filter_row"
                sx={{ display: '-webkit-box !important' }}
              >
                <Box component="div" className="sub_items_filter_label">
                  그룹명{' '}
                  <Typography className="sub_cust_label_dot">•</Typography>{' '}
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
                  <span className="sub_items_filter_error">
                    <FormHelperText error id="prdGrpNm-error">
                      {validationMsg.prdGrpNm}
                    </FormHelperText>
                  </span>
                )}
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
                  value={description ? description : ''}
                  sx={{
                    marginTop: '12px !important',
                    marginBottom: errorMargin + ' !important',
                  }}
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
                <Box component="div" className="sub_items_filter_label">
                  그룹 상태{' '}
                  <Typography className="sub_cust_label_dot">•</Typography>{' '}
                </Box>
                <Select
                  fullWidth={false}
                  value={status}
                  sx={{
                    marginTop: '12px !important',
                    marginBottom: errorMargin + ' !important',
                  }}
                  className="sub_select_common sub_items_filter_list"
                  onChange={e => {
                    setStatus(e.target.value as number);
                  }}
                >
                  <MenuItem value={0}>전체</MenuItem>
                  <MenuItem value={1}>사용가능</MenuItem>
                  <MenuItem value={-1}>사용불가</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Box
                component="div"
                className="sub_items_filter_row"
                sx={{ display: '-webkit-box !important' }}
              >
                <Box component="div" className="sub_items_filter_label">
                  그룹 유형{' '}
                  <Typography className="sub_cust_label_dot">•</Typography>{' '}
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
                  <span className="sub_items_filter_error">
                    <FormHelperText error id="itemTp-error">
                      {validationMsg.itemTp}
                    </FormHelperText>
                  </span>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Box component="div" className="sub_items_filter_footer">
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
  );
};

export default React.memo(GrpForm);
