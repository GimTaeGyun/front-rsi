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

import AppFrame from '../../../container/AppFrame';
import { AlertPopupData } from '../../../data/atoms';
import { axios } from '../../../utils/axios';
import AlertPopup from '../../Common/AlertPopup';
import DatatableOptions from './components/DatatableOptions';
import GrpForm from './components/GrpForm';
import OptionForm from './components/OptionForm';
import SearchDataTable from './components/SearchDataTable';
import SidebarRcTree from './components/SidebarRcTree';

const Option = () => {
  const [selectGroupKey, setSelectGroupKey] = useState(Number);
  const [isPost, setIsPost] = useState(false);
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [itemTable, setItemTable] = useState([]);
  const [statusValue, setStatusValue] = useState([]);
  const [changeDataGrid, setChangeDataGrid] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [uppId, setUppId] = useState('');

  const changeDataGridUE = () => {
    setChangeDataGrid(!changeDataGrid);
  };

  useEffect(() => {
    const api = async () => {
      const res = await axios.post(
        '/management/manager/option/category/search/inquiry',
        {
          searchValue: 'string',
          status: [32767],
          grpId: selectGroupKey ? selectGroupKey : 0,
        },
      );
      const arr = [] as any;
      if (res.data.result.itemList.dataRows) {
        res.data.result.itemList.dataRows.map((item: any) => {
          const row = {
            ...item,
            id: item.optCatId,
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
        searchValue: searchItemNm ? searchItemNm : '',
        status: [postStatus],
        grpId: selectGroupKey ? selectGroupKey : 0,
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

  const isAddset = (data: any) => {
    setIsAdd(data);
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

  const uppIdSet = (data: any) => {
    setUppId(data);
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
              isAdd={isAddset}
              setUppId={uppIdSet}
            />
            <Box sx={{ ml: '30px', width: '100%' }}>
              <GrpForm
                setIsPost={IsPostset}
                selectGroupKey={selectGroupKey}
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
                        전체 (6)
                      </Typography>
                    </Box>
                  }
                ></CardHeader>
                <DatatableOptions
                  rows={itemTable}
                  changeDataGridUE={changeDataGridUE}
                  statusValue={statusValue}
                  uppId={uppId}
                  selectId={selectGroupKey}
                />
              </Card>
            </Box>
          </Box>
        </>
      </AppFrame>
    </>
  );
};

export default Option;
