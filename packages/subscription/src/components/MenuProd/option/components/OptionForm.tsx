import {
  CloseOutlined,
  ExpandLess,
  ExpandMore,
  PartyModeSharp,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import {
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useAtom } from 'jotai';
import React, { useCallback, useEffect, useState } from 'react';
import { AlertPopupData } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';
import * as Yup from 'yup';

const defaultFormValidation = {
  operNm: false,
  tp: false,
  opItem: false,
  ItemNum: false,
};

const validationMsg = {
  operNm: '옵션명을 입력해 주세요.',
  tp: '옵션유형을 선택해 주세요.',
  opItem: '옵션 아이템을 입력해 주세요',
  ItemNum: '값을 입력해 주세요.',
};

const validationSchema = Yup.object().shape({
  operNm: Yup.string().nullable(false).required(),
  tp: Yup.string().nullable(false).required(),
  opItem: Yup.string().nullable(false).required(),
  ItemNum: Yup.string().nullable(false).required(),
});

const OptionForm = (props: {
  open: any;
  onClose: Function;
  selectId: any;
  changeDataGridUE: Function;
  isUpdate: any;
  setIsUpp: Function;
  rowDeT: any;
}) => {
  const { selectId, open, changeDataGridUE, isUpdate, rowDeT } = props;
  const [rows, setRows] = React.useState([
    {
      id: 0,
      itemNm: '',
      operatorUnit: '+',
      itemVal: '',
    },
  ]);
  const [operatorVal, setOperatorVal] = useState([]);
  const [tpVal, setTpVal] = useState([]);
  const [statusVal, setStatusVal] = useState([]);
  const [operUnitVal, setOperUnitVal] = useState([]);
  const [operNm, setOperNm] = useState('');
  const [operator, setOperator] = useState('PRD');
  const [tp, setTp] = useState('DATE');
  const [status, setStatus] = useState('1');
  const [postRows, setPostRows] = useState(Array<Object>);
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [opId, setOpId] = useState(Number);
  const [opItemT, setOpItemT] = useState(false);
  const [itemNumT, setItemNumT] = useState(false);
  const [dataValid, setDataValid] = useState(defaultFormValidation);
  const [delAler, setDelAler] = useState(false);
  const ref = React.useRef(1);

  useEffect(() => {
    setOpItemT(false);
    setItemNumT(false);
    let rowData = rows;
    const post = rowData.map((item: any) => {
      return {
        default: true,
        description: '',
        itemNm: item.itemNm,
        itemVal: Number(item.itemVal),
        operatorUnit: item.operatorUnit,
        sort: 1,
      };
    });
    setPostRows(post);
    rows.map((item: any) => {
      item.itemNm === '' ? setOpItemT(true) : '';
      item.itemVal === '' ? setItemNumT(true) : '';
    });
  }, [rows]);

  useEffect(() => {
    if (delAler === true) {
      setAlertPopup({
        ...defaultAlertPopup,
        leftCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
          setDelAler(false);
        },
        message: '삭제 하였습니다.',
        leftText: '확인',
      });
    }
  }, [delAler]);

  const defaultows = {
    id: ref.current,
    itemNm: '',
    operatorUnit: '+',
    itemVal: '',
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

  const onClickAdd = async () => {
    if (isUpdate) {
      const param = {
        actor: localStorage.getItem('usrId'),
        dataset: [
          {
            description: '',
            optCatId: Number(selectId),
            optId: opId,
            optItems: postRows,
            optNm: operNm,
            optScope: operator,
            optTp: tp,
            sort: 1,
            status: Number(status),
          },
        ],
        paramType: 'mod',
      };
      const res = await axios.post(
        '/management/manager/option/product/update',
        param,
      );
      res.data.code === '0000'
        ? setAlertPopup({
            ...defaultAlertPopup,
            message: '저장되었습니다.',
            leftCallback: () => {
              setAlertPopup({ ...alertPopup, visible: false });
              props.onClose(false);
              props.setIsUpp(false);
              setItemNumT(false);
              setOpItemT(false);
              changeDataGridUE();
            },
          })
        : setAlertPopup({
            ...defaultAlertPopup,
            message: res.data.msg,
            leftCallback: () => {
              setAlertPopup({ ...alertPopup, visible: false });
              setItemNumT(false);
              setOpItemT(false);
            },
          });
    } else {
      const param = {
        actor: localStorage.getItem('usrId'),
        dataset: [
          {
            description: '',
            optCatId: Number(selectId),
            optId: opId,
            optItems: postRows,
            optNm: operNm,
            optScope: operator,
            optTp: tp,
            sort: 1,
            status: Number(status),
          },
        ],
        paramType: 'add',
      };
      const valid = {
        operNm: !(await validationSchema.fields.operNm.isValid(operNm)),
        tp: !(await validationSchema.fields.tp.isValid(tp)),
        opItem: opItemT,
        ItemNum: itemNumT,
      };
      setDataValid(valid);
      if (
        !dataValid.ItemNum &&
        !dataValid.opItem &&
        !dataValid.opItem &&
        !dataValid.ItemNum
      ) {
        const res = await axios.post(
          '/management/manager/option/product/update',
          param,
        );
        res.data.code === '0000'
          ? setAlertPopup({
              ...defaultAlertPopup,
              message: '저장되었습니다.',
              leftCallback: () => {
                setAlertPopup({ ...alertPopup, visible: false });
                props.onClose(false);
                props.setIsUpp(false);
                setItemNumT(false);
                setOpItemT(false);
                changeDataGridUE();
              },
            })
          : setAlertPopup({
              ...defaultAlertPopup,
              message: res.data.msg,
              leftCallback: () => {
                setAlertPopup({ ...alertPopup, visible: false });
                setItemNumT(false);
                setOpItemT(false);
              },
            });
      }
    }
  };

  useEffect(() => {
    setDataValid(defaultFormValidation);
    setOpItemT(false);
    setItemNumT(false);
    if (open === true) {
      if (!operatorVal[0] || !tpVal[0] || !statusVal[0] || !operUnitVal[0]) {
        const Api = async () => {
          const operator = await axios.post(
            '/management/subscription/admin/codeset',
            {
              code: 'opt_scope',
              code_grp: 'pm.option',
            },
          );
          const operatorUnit = await axios.post(
            '/management/subscription/admin/codeset',
            {
              code: 'operator_unit',
              code_grp: 'pm.option_item',
            },
          );
          const tp = await axios.post(
            '/management/subscription/admin/codeset',
            {
              code: 'opt_tp',
              code_grp: 'pm.option',
            },
          );
          const status = await axios.post(
            '/management/subscription/admin/codeset',
            {
              code: 'status',
              code_grp: 'pm.option',
            },
          );
          setOperatorVal(operator.data.result.codeSetItems);
          setTpVal(tp.data.result.codeSetItems);
          setStatusVal(status.data.result.codeSetItems);
          setOperUnitVal(operatorUnit.data.result.codeSetItems);
        };
        Api();
      }
      if (isUpdate) {
        setOperNm(rowDeT.optNm);
        setOperator(rowDeT.optScope.value);
        setTp(rowDeT.optTp.value);
        setStatus(rowDeT.status.value);
        setOpId(rowDeT.optId);
        let rowDeTs = rowDeT.optList.dataRows;

        const rowrow = rowDeTs.map((item: any) => {
          return {
            id: item.optId,
            itemNm: item.itemNm,
            operatorUnit: item.operatorUnit.value,
            itemVal: item.itemVal.toString(),
          };
        });

        setRows(rowrow);
      } else {
        setOperNm('');
        setOperator('PRD');
        setTp('DATE');
        setStatus('1');
        setOpId(0);
        setRows([
          {
            id: 0,
            itemNm: '',
            operatorUnit: '+',
            itemVal: '',
          },
        ]);
      }
    }
  }, [open]);

  const plusOnClick = () => {
    ref.current += 1;
    setRows([...rows, defaultows]);
  };

  const columns: GridColDef[] = [
    {
      align: 'center',
      field: 'id',
      headerName: '순서 관리',
      width: 86,
      headerAlign: 'center',
      sortable: false,
      disableColumnMenu: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <Typography className="sub_tbl_th_common">
          {params.colDef.headerName}
        </Typography>
      ),
      renderCell: () => (
        <Box>
          <IconButton
            sx={{
              width: '23px',
              height: '23px',
              border: '1px solid #00000042',
              borderRadius: '4px !important',
            }}
          >
            <ExpandLess />
          </IconButton>
          <IconButton
            sx={{
              width: '23px',
              height: '23px',
              border: '1px solid #00000042',
              borderRadius: '4px !important',
              marginLeft: '8px',
            }}
          >
            <ExpandMore />
          </IconButton>
        </Box>
      ),
    },
    {
      align: 'center',
      field: 'itemNm',
      headerName: '옵션아이템',
      width: 238,
      headerAlign: 'center',
      sortable: false,
      disableColumnMenu: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <Typography className="sub_tbl_th_common">
          {params.colDef.headerName}
        </Typography>
      ),
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box>
          <TextField
            fullWidth
            id="itemNm"
            placeholder="옵션명을 입력해 주세요"
            className="sub_formText_dataGrid"
            value={params.row.itemNm}
            error={dataValid.opItem}
            onChange={e => {
              let row = rows;
              const setrow = row.map((item: any) => {
                item.id === params.row.id
                  ? (item.itemNm = e.target.value)
                  : item;

                return item;
              });
              setRows(setrow);
            }}
            name="itemNm"
          />
        </Box>
      ),
    },
    {
      align: 'center',
      field: 'operatorUnit',
      headerName: '연산자',
      width: 100,
      headerAlign: 'center',
      sortable: false,
      disableColumnMenu: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <Typography className="sub_tbl_th_common">
          {params.colDef.headerName}
        </Typography>
      ),
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box sx={{ width: '83px', height: '28px' }}>
          <Select
            fullWidth
            id="operator"
            value={params.row.operatorUnit}
            name="operator"
            className="sub_select_forms"
            onChange={e => {
              let row = rows;
              const setrow = row.map((item: any) => {
                item.id === params.row.id
                  ? (item.operatorUnit = e.target.value)
                  : item;

                return item;
              });
              setRows(setrow);
            }}
            sx={{ height: '28px', textAlign: 'center' }}
          >
            {operUnitVal.map((item: any) => (
              <MenuItem value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
        </Box>
      ),
    },
    {
      align: 'center',
      field: 'itemVal',
      headerName: '값',
      width: 100,
      headerAlign: 'center',
      sortable: false,
      disableColumnMenu: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <Typography className="sub_tbl_th_common">
          {params.colDef.headerName}
        </Typography>
      ),
      renderCell: (params: GridRenderCellParams<string>) => (
        <Box>
          <TextField
            fullWidth
            id="itemVal"
            error={dataValid.ItemNum}
            type="number"
            className="sub_formText_dataGrid"
            value={params.row.itemVal}
            name="itemVal"
            onChange={e => {
              let row = rows;
              const setrow = row.map((item: any) => {
                item.id === params.row.id
                  ? (item.itemVal = e.target.value)
                  : item;

                return item;
              });
              setRows(setrow);
            }}
          />
        </Box>
      ),
    },
    {
      align: 'center',
      field: 'del',
      headerName: '삭제',
      width: 100,
      headerAlign: 'center',
      sortable: false,
      disableColumnMenu: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <Typography className="sub_tbl_th_common">
          {params.colDef.headerName}
        </Typography>
      ),
      renderCell: (params: GridRenderCellParams<string>) => (
        <Button
          onClick={() => {
            setAlertPopup({
              ...defaultAlertPopup,
              leftCallback: () => {
                setAlertPopup({ ...alertPopup, visible: false });
                let row = rows;
                const delet = row.filter((item: any) => {
                  if (item.id !== params.row.id) {
                    return true;
                  } else {
                    return false;
                  }
                });
                setRows(delet);
                setDelAler(true);
              },
              rightCallback: () => {
                setAlertPopup({ ...alertPopup, visible: false });
              },
              message: '해당 리스트를 삭제하시겠습니까?',
              leftText: '확인',
              rightText: '취소',
            });
          }}
          sx={{
            color: '#666666',
            backgroundColor: '#fff',
            width: '38px',
            height: '23px',
            border: '1px solid #666666',
          }}
        >
          삭제
        </Button>
      ),
    },
  ];

  return (
    <Box component="div" sx={{ width: '700px' }}>
      <Dialog
        open={open}
        onClose={() => {
          props.onClose(false);
          props.setIsUpp(false);
        }}
        sx={{
          '& .MuiPaper-root': {
            minWidth: '700px',
          },
        }}
      >
        <DialogTitle className="sub_dialog_title_outer">
          <Typography>옵션 등록</Typography>
          <IconButton
            color="primary"
            component="label"
            onClick={() => {
              props.onClose(false);
              props.setIsUpp(false);
            }}
          >
            <CloseOutlined className="sub_dialog_icon_close" />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ padding: '30px' }}>
          <Box>
            <InputLabel className="sub_formLabel">
              옵션명 <Typography className="sub_cust_label_dot">•</Typography>{' '}
            </InputLabel>
            <TextField
              fullWidth
              id="opNm"
              placeholder="옵션명을 입력해 주세요"
              className="sub_formText"
              error={dataValid.operNm}
              name="opNm"
              value={operNm}
              onChange={e => {
                setOperNm(e.target.value);
              }}
            />
            {dataValid.operNm && (
              <span>
                <FormHelperText
                  error
                  id="prdGrpNm-error"
                  sx={{ marginTop: '0px', marginBottom: '3px' }}
                >
                  {validationMsg.operNm}
                </FormHelperText>
              </span>
            )}
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">
              연산자 적용방법
              <Typography className="sub_cust_label_dot">•</Typography>{' '}
            </InputLabel>
            <Select
              fullWidth
              id="operator"
              value={operator}
              name="operator"
              className="sub_select_form"
              onChange={e => {
                setOperator(e.target.value);
              }}
            >
              {operatorVal.map((item: any) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))}
            </Select>
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">
              옵션 유형<Typography className="sub_cust_label_dot">•</Typography>{' '}
            </InputLabel>
            <Select
              fullWidth
              id="category"
              value={tp ? tp : 'SELECT'}
              error={dataValid.tp}
              onChange={e => {
                setTp(e.target.value === 'SELECT' ? '' : e.target.value);
              }}
              name="category"
              className="sub_select_form"
              sx={{ alignContent: 'center !important' }}
            >
              {tpVal.map((item: any) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))}
              <MenuItem value="SELECT">선택</MenuItem>
            </Select>
            {dataValid.tp && (
              <span>
                <FormHelperText
                  error
                  id="prdGrpNm-error"
                  sx={{ marginTop: '0px', marginBottom: '3px' }}
                >
                  {validationMsg.tp}
                </FormHelperText>
              </span>
            )}
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">
              옵션 아이템
              <Typography className="sub_cust_label_dot">•</Typography>{' '}
            </InputLabel>
            <DataGridPro
              className="sub_tbl_outer_common"
              rows={rows}
              columns={columns}
              headerHeight={44}
              rowHeight={44}
              hideFooter
              disableSelectionOnClick
              sx={{
                borderRadius: 0,
                fontSize: '14px',
                fontFamily: 'NotoSansKRRagular',
                marginTop: '9px',
                height: '270px',
              }}
            />
            {dataValid.opItem && (
              <span>
                <FormHelperText
                  error
                  id="prdGrpNm-error"
                  sx={{ marginTop: '0px', marginBottom: '3px' }}
                >
                  {validationMsg.opItem}
                </FormHelperText>
              </span>
            )}
            {dataValid.ItemNum && (
              <span>
                <FormHelperText
                  error
                  id="prdGrpNm-error"
                  sx={{ marginTop: '0px', marginBottom: '3px' }}
                >
                  {validationMsg.ItemNum}
                </FormHelperText>
              </span>
            )}
            <Button
              fullWidth
              className="sub_button_white"
              sx={{
                height: '35px',
                fontSize: '14px',
                marginTop: '10px',
                marginBottom: '10px',
              }}
              onClick={plusOnClick}
            >
              옵션 아이템 추가 +
            </Button>
            <Card
              sx={{
                minWidth: '637.5px !important',
                maxHeight: '60px !important',
                border: '1px solid #c5d6dd',
                padding: '11px 12px 10px 12px !important',
              }}
            >
              <CardContent sx={{ padding: '0 !important' }}>
                <Typography
                  sx={{ fontSize: '13px', fontFamily: 'NotoSansKRReguler' }}
                >
                  ※{' '}
                  <span style={{ fontWeight: '1000' }}>할인 옵션 사용 시</span>{' '}
                  연산자 적용방법은 반드시{' '}
                  <span style={{ color: '#284ad5' }}>"상품에"</span> 만
                  적용해주세요
                </Typography>
                <Typography
                  sx={{ fontSize: '13px', fontFamily: 'NotoSansKRReguler' }}
                >
                  ※ <span style={{ fontWeight: '1000' }}>할인</span>은 반드시
                  값에 <span style={{ color: '#284ad5' }}>"_"</span> 를 붙여야
                  적용됩니다.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <InputLabel className="sub_formLabel">
              옵션 상태<Typography className="sub_cust_label_dot">•</Typography>{' '}
            </InputLabel>
            <Select
              fullWidth
              id="status"
              value={status}
              name="status"
              className="sub_select_form"
              onChange={e => {
                setStatus(e.target.value);
              }}
            >
              {statusVal.map((item: any) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))}
            </Select>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ justifyContent: 'center', padding: '16px 0' }}>
          <Button
            onClick={() => {
              props.onClose(false);
              props.setIsUpp(false);
            }}
            sx={{ fontSize: '14px' }}
            className="sub_button_white_none"
          >
            취소
          </Button>
          <Button
            variant="contained"
            className="sub_button_blue"
            onClick={onClickAdd}
            sx={{ width: '57px', height: '36px', fontSize: '14px' }}
          >
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default React.memo(OptionForm);
