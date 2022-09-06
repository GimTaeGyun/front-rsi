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

const columns: GridColDef[] = [
  {
    align: 'left',
    field: 'name',
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
    field: 'operator',
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
  },
  {
    align: 'center',
    field: 'num_items',
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
      switch (params.value) {
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
          {params.value}
        </Box>
      );
    },
  },
  {
    headerClassName: 'sub_hideLastSeparator',
    align: 'center',
    field: 'date',
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
}) => {
  const { rows, changeDataGridUE, statusValue } = props;

  const [selectModel, setSelectModel] = React.useState(Array);
  const [status, setStatus] = React.useState('32767');
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
            field: 'option',
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
        checkboxSelection
        rowCount={rows.length}
        onSelectionModelChange={select}
        components={{
          Footer: () => {
            return (
              <Footer
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
export default DatatableOptions;
