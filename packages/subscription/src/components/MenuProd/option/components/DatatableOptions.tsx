import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import {
  DataGridPro,
  GridColDef,
  GridColumnHeaderParams,
  GridSortItem,
} from '@mui/x-data-grid-pro';
import { useAtom } from 'jotai';
import * as React from 'react';

import { AlertPopupData } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';
import { Footer } from './footer';
import OptionForm from './OptionForm';

const columns: GridColDef[] = [
  {
    align: 'left',
    field: 'optNm',
    headerName: '옵션명',
    minWidth: 314,
    maxWidth: 495,
    flex: 1,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    align: 'center',
    field: 'optScope',
    headerName: '연산자 적용',
    minWidth: 180,
    maxWidth: 283,
    flex: 1,
    headerAlign: 'center',
    sortable: true,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: params => {
      return <Typography>{params.value.label}</Typography>;
    },
  },
  {
    align: 'center',
    field: 'itemCnt',
    headerName: '옵션 아이템 수',
    minWidth: 180,
    maxWidth: 283,
    flex: 1,
    headerAlign: 'center',
    sortable: true,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
  {
    align: 'center',
    field: 'status',
    headerName: '옵션 상태',
    minWidth: 180,
    maxWidth: 283,
    flex: 1,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
    renderCell: params => {
      let str_class = 'sub_td_status sub_td_status_color1';
      switch (params.value.value) {
        case '사용가능':
          str_class = 'sub_td_status sub_td_status_color1';
          break;
        case '사용불가':
          str_class = 'sub_td_status sub_td_status_color2';
          break;
        default:
          str_class = 'sub_td_status sub_td_status_color1';
          break;
      }
      return (
        <Box component="span" className={str_class}>
          {params.value.label}
        </Box>
      );
    },
  },
  {
    headerClassName: 'sub_hideLastSeparator',
    align: 'center',
    field: 'modAt',
    headerName: '최종 수정일시',
    minWidth: 180,
    maxWidth: 283,
    flex: 1,
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
    renderHeader: (params: GridColumnHeaderParams) => (
      <Typography className="sub_tbl_th_common">
        {params.colDef.headerName}
      </Typography>
    ),
  },
];

const DatatableOptions = (props: {
  rows: any;
  changeDataGridUE: Function;
  statusValue: any;
  selectId: any;
}) => {
  const { rows, changeDataGridUE, statusValue, selectId } = props;
  const [selectModel, setSelectModel] = React.useState(Array);
  const [status, setStatus] = React.useState('32767');
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [rowNull, setRowNull] = React.useState(Boolean);
  const [rowDeT, setRowDeT] = React.useState(Object);
  const [open, setOpen] = React.useState(false);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [delMod, setDelMod] = React.useState(Array);

  React.useEffect(() => {
    rows[0] ? setRowNull(false) : setRowNull(true);
  }, [rows]);

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

  const select = (data: any) => {
    setSelectModel(data);
  };

  const changeIsUp = () => {
    setIsUpdate(false);
  };

  const statusChange = (data: any) => {
    setStatus(data);
  };

  React.useEffect(() => {
    const delet = () => {
      setDelMod([]);
      let row = [] as any;
      selectModel.map(async (item: any) => {
        const res = await axios.post(
          '/management/manager/option/item/inquiry',
          {
            optId: item,
          },
        );
        row.push({
          optCatId: selectId,
          optId: res.data.result.optId,
          optNm: res.data.result.optNm,
          optScope: res.data.result.optScope.value,
          optTp: res.data.result.optTp.value,
          sort: 1,
          status: res.data.result.status.value,
        });
      });
      setDelMod(row);
    };
    delet();
  }, [selectModel]);

  const onClickCell = async (data: any) => {
    if (data.field !== '__check__') {
      const res = await axios.post('/management/manager/option/item/inquiry', {
        optId: data.row.optId,
      });
      setRowDeT(res.data.result);
      setIsUpdate(true);
      setOpen(true);
    }
  };

  const deletAll = async () => {
    const param = {
      actor: 'user_adm1',
      dataset: delMod,
      paramType: 'del',
    };
    const res = await axios.post(
      '/management/manager/option/product/update',
      param,
    );
    if (res.data.code === '0000') {
      setAlertPopup({
        ...defaultAlertPopup,
        leftCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
          changeDataGridUE();
        },
        message: '삭제되었습니다.',
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
  };

  const statusChangeArray = async () => {
    if (selectModel[0]) {
      if (status === '32767') {
        setAlertPopup({
          ...defaultAlertPopup,
          leftCallback: () => {
            setAlertPopup({ ...alertPopup, visible: false });
          },
          message: '상태를 변경해 주세요',
          leftText: '확인',
        });
      } else {
        const res = await axios.post(
          '/management/manager/product/multi/status/update',
          {
            actor: localStorage.getItem('usrId'),
            dataset: selectModel,
            field: 'option',
            status: Number(status),
          },
        );

        res.data.code === '0000'
          ? setAlertPopup({
              ...defaultAlertPopup,
              leftCallback: () => {
                setAlertPopup({ ...alertPopup, visible: false });
                changeDataGridUE();
              },
              message: '상태를 변경했습니다.',
              leftText: '확인',
            })
          : '';
      }
    } else {
      setAlertPopup({
        ...defaultAlertPopup,
        leftCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
        },
        message: '리스트를 체크해 주세요',
        leftText: '확인',
      });
    }
  };

  const onClickOpen = (data: boolean) => {
    setOpen(data);
  };

  return (
    <>
      <div style={{ height: '426px', width: '100%' }}>
        <DataGridPro
          className="sub_tbl_outer_common"
          headerHeight={57}
          disableSelectionOnClick
          rowHeight={52}
          rows={rows ? rows : []}
          sx={{ height: '426px' }}
          columns={columns}
          pagination={true}
          checkboxSelection
          rowCount={rows.length}
          onSelectionModelChange={select}
          onCellClick={onClickCell}
          components={{
            Footer: () => {
              return (
                <Footer
                  rowNull={rowNull}
                  statusValue={statusValue}
                  postStatus={statusChangeArray}
                  statusChange={statusChange}
                  status={status}
                  selectId={selectId}
                  changeDataGridUE={changeDataGridUE}
                  isUpdate={isUpdate}
                  open={open}
                  onClickOpen={onClickOpen}
                  setIsUpp={changeIsUp}
                  rowDeT={rowDeT}
                  deletAll={deletAll}
                />
              );
            },
          }}
        />
        <OptionForm
          open={open}
          onClose={onClickOpen}
          selectId={selectId}
          changeDataGridUE={changeDataGridUE}
          isUpdate={isUpdate}
          setIsUpp={changeIsUp}
          rowDeT={rowDeT}
        />
      </div>
    </>
  );
};
export default DatatableOptions;
