import { SettingsOverscanOutlined } from '@mui/icons-material';
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
  FormHelperText,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import AppFrame from '../../../container/AppFrame';
import { AlertPopupData } from '../../../data/atoms';
import { axios } from '../../../utils/axios';
import AlertPopup from '../../Common/AlertPopup';
import DatatableItems from './components/DatatableItems';
import GrpForm from './components/GrpForm';
import SearchDataTable from './components/SearchDataTable';
import SidebarRcTree from './components/SidebarRcTree';
import DialogItemRegister from './components/DialogItemRegister';

const Items = () => {
  const [selectGroupKey, setSelectGroupKey] = React.useState(Number);
  const [isPost, setIsPost] = React.useState(false);
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [itemTable, setItemTable] = useState([]);
  const [statusValue, setStatusValue] = useState([]);
  const [changeDataGrid, setChangeDataGrid] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [uppId, setUppId] = useState('');
  const [total, setTotal] = useState(0);

  const changeDataGridUE = () => {
    setChangeDataGrid(!changeDataGrid);
  };

  useEffect(() => {
    const api = async () => {
      const res = await axios.post(
        '/management/manager/product/item/group/detail/inquiry',
        {
          itemNm: '',
          itemStatus: [32767, 1, -1],
          prdItemgrpId: selectGroupKey ? selectGroupKey : 0,
        },
      );
      const arr = [] as any;
      if (res.data.result.itemList.dataRows) {
        res.data.result.itemList.dataRows.map((item: any) => {
          const row = {
            ...item,
            id: item.itemId,
          };
          arr.push(row);
        });
        setItemTable(arr);
      } else {
        setItemTable([]);
      }
    };
    api();
  }, [selectGroupKey, changeDataGrid]);

  const onClickSearchItem = async (searchItemNm: any, postStatus: any) => {
    const res = await axios.post(
      '/management/manager/product/item/group/detail/inquiry',
      {
        itemNm: searchItemNm ? searchItemNm : '',
        itemStatus: [postStatus],
        prdItemgrpId: selectGroupKey ? selectGroupKey : 0,
      },
    );
    const arr = [] as any;
    if (res.data.result.itemList.dataRows) {
      res.data.result.itemList.dataRows.map((item: any) => {
        const row = {
          ...item,
          id: item.itemId,
        };
        arr.push(row);
      });
      setItemTable(arr);
      setTotal(res.data.result.itemList.total);
    } else {
      setItemTable([]);
      setTotal(0);
    }
  };

  const defaultAlertPopup = {
    visible: true,
    leftText: '??????',
    leftCallback: () => {
      setAlertPopup({ ...alertPopup, visible: false });
    },
    rightCallback: () => {},
    rightText: '',
    message: '',
  };

  useEffect(() => {
    const api = async () => {
      const res = await axios.post('/management/subscription/admin/codeset', {
        code: 'status',
        code_grp: 'pm.option',
      });
      setStatusValue(res.data.result.codeSetItems);
    };
    api();
  }, []);

  const setuppGrp = (data: any) => {
    setSelectGroupKey(data);
  };

  const IsPostset = (data: any) => {
    setIsPost(data);
  };

  const IsAddSet = (data: any) => {
    setIsAdd(data);
  };

  const uppIdSet = (data: any) => {
    setUppId(data);
  };

  return (
    <>
      <AppFrame
        title="????????? ??????"
        breadcrumbs={[
          { name: '?????? ??????', link: '/admin/common/admin' },
          { name: '????????? ??????', link: '/admin/common/admin' },
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
              setIsAdd={IsAddSet}
              setUppId={uppIdSet}
            />
            <Box sx={{ ml: '30px', width: '100%' }}>
              <GrpForm
                selectGroupKey={selectGroupKey}
                setIsPost={IsPostset}
                isAdd={isAdd}
                uppId={uppId}
              />
              <SearchDataTable onClickSearchItem={onClickSearchItem} />
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
                        ?????? ({total})
                      </Typography>
                    </Box>
                  }
                ></CardHeader>
                <DatatableItems
                  rows={itemTable}
                  changeDataGridUE={changeDataGridUE}
                  statusValue={statusValue}
                />
              </Card>
            </Box>
          </Box>
        </>
      </AppFrame>
    </>
  );
};

export default React.memo(Items);
