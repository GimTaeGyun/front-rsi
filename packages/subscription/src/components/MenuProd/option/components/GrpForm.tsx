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
};

const validationMsg = {
  prdGrpNm: '그룹명을 입력해 주세요',
};

const validationSchema = Yup.object().shape({
  prdGrpNm: Yup.string().nullable(false).required(),
});

const GrpForm = (props: {
  selectGroupKey: any;
  setIsPost: Function;
  isAdd: any;
  uppId: any;
}) => {
  const { selectGroupKey, setIsPost, isAdd, uppId } = props;
  const [prdGrpNm, setPrdGrpNm] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [status, setStatus] = React.useState(1);
  const [dataValid, setDataValid] = React.useState(defaultFormValidation);
  const [errorMargin, setErrorMargin] = React.useState('12px');
  const [errorMargins, setErrorMargins] = React.useState('12px');
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [statusValue, setStatusValue] = React.useState([]);

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
        setStatus(1);
        setDescription('');
      } else {
        const res = await axios.post(
          '/management/manager/option/category/search/inquiry',
          {
            searchValue: 'string',
            status: [32767],
            grpId: selectGroupKey ? selectGroupKey : 0,
          },
        );
        const data = res.data.result;
        setPrdGrpNm(data.optCatNm);
        setStatus(data.status.value);
        setDescription(data.description);
      }
    };
    api();
  }, [selectGroupKey, isAdd]);

  useEffect(() => {
    const statusApi = async () => {
      const res = await axios.post('/management/subscription/admin/codeset', {
        code: 'status',
        code_grp: 'pm.option_category',
      });
      setStatusValue(res.data.result.codeSetItems);
    };
    statusApi();
  }, []);

  useEffect(() => {
    dataValid.prdGrpNm ? setErrorMargin('26px') : setErrorMargin('12px');
    dataValid.prdGrpNm ? setErrorMargins('3px') : setErrorMargins('12px');
  }, [dataValid.prdGrpNm]);

  const saveGrp = async () => {
    const valid = {
      prdGrpNm: !(await validationSchema.fields.prdGrpNm.isValid(prdGrpNm)),
    };
    setDataValid(valid);
    const req = isAdd
      ? {
          actor: localStorage.getItem('usrId'),
          dataset: [
            {
              description: description,
              optCatId: 0,
              optCatNm: prdGrpNm,
              sort: 1,
              uppOptCatId: Number(selectGroupKey),
            },
          ],
          status: status,
          paramType: 'add',
        }
      : {
          actor: localStorage.getItem('usrId'),
          dataset: [
            {
              description: description,
              optCatId: Number(selectGroupKey),
              optCatNm: prdGrpNm,
              sort: 1,
              uppOptCatId: Number(uppId),
            },
          ],
          status: status,
          paramType: 'mod',
        };
    if (!valid.prdGrpNm) {
      const res = await axios.post(
        '/management/manager/option/category/update',
        req,
      );
      if (res.data.code === '0000') {
        setIsPost(true);
        setDescription('');
        setPrdGrpNm('');
        setAlertPopup({
          ...defaultAlertPopup,
          leftCallback: () => {
            setAlertPopup({ ...alertPopup, visible: false });
          },
          message: '저장되었습니다.',
          leftText: '확인',
        });
      } else {
        setAlertPopup({
          ...defaultAlertPopup,
          leftCallback: () => {
            setAlertPopup({ ...alertPopup, visible: false });
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
          title="옵션 그룹 정보"
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
                  sx={{
                    marginTop: '12px !important',
                    marginBottom: errorMargins + ' !important',
                  }}
                />
                {dataValid.prdGrpNm && (
                  <span>
                    <FormHelperText
                      error
                      id="prdGrpNm-error"
                      sx={{ marginTop: '0px', marginBottom: '3px' }}
                    >
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
                    setStatus(Number(e.target.value));
                  }}
                >
                  {statusValue.map((item: any) => (
                    <MenuItem value={item.value}>{item.label}</MenuItem>
                  ))}
                </Select>
              </Box>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Box
                component="div"
                className="sub_items_filter_row"
                sx={{ display: '-webkit-box !important' }}
              >
                {!dataValid.prdGrpNm ? (
                  <Box sx={{ height: '60px' }} />
                ) : (
                  <Box sx={{ height: '75px' }} />
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
