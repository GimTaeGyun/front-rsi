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
import React from 'react';

import { AlertPopupData } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';
import { Footer } from './footer';

const columns: GridColDef[] = [
  {
    align: 'left',
    field: 'itemNm',
    headerName: '아이템명',
    minWidth: 434,
    maxWidth: 685,
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
    align: 'right',
    field: 'price',
    headerName: '단위가격',
    minWidth: 200,
    maxWidth: 316,
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
    headerName: '아이템 상태',
    minWidth: 200,
    maxWidth: 316,
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
      switch (params.value.label) {
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
    minWidth: 200,
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

const DatatableItems = (props: {
  rows: any;
  changeDataGridUE: Function;
  statusValue: any;
}) => {
  const { rows, changeDataGridUE, statusValue } = props;
  const [selectModel, setSelectModel] = React.useState(Array);
  const [status, setStatus] = React.useState('32767');
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [rowNull, setRowNull] = React.useState(Boolean);

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

  const statusChange = (data: any) => {
    setStatus(data);
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
            field: 'item',
            status: Number(status),
          },
        );

        res.data.code === '0000' ? changeDataGridUE() : '';
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

  return (
    <div style={{ height: '426px', width: '100%' }}>
      <DataGridPro
        className="sub_tbl_outer_common"
        headerHeight={57}
        disableSelectionOnClick
        rowHeight={52}
        rows={rows ? rows : []}
        columns={columns}
        pagination={true}
        rowCount={rows.length}
        checkboxSelection
        onSelectionModelChange={select}
        components={{
          Footer: () => {
            return (
              <Footer
                rowNull={rowNull}
                statusValue={statusValue}
                postStatus={statusChangeArray}
                statusChange={statusChange}
                status={status}
              />
            );
          },
        }}
      />
    </div>
  );
};
export default React.memo(DatatableItems);
