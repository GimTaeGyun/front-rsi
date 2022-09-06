import React, { useEffect, useState } from 'react';
import OptionForm from './components/OptionForm';
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
import AppFrame from '../../../container/AppFrame';
import AlertPopup from '../../Common/AlertPopup';
import { axios } from '../../../utils/axios';
import { AlertPopupData } from '../../../data/atoms';
import SidebarRcTree from './components/SidebarRcTree';
import DatatableOptions from './components/DatatableOptions';
import GrpForm from './components/GrpForm';
import SearchDataTable from './components/SearchDataTable';

const Option = () => {
  const [selectGroupKey, setSelectGroupKey] = useState(Number);
  const [isPost, setIsPost] = useState(false);
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [itemTable, setItemTable] = useState([]);
  const [statusValue, setStatusValue] = useState([]);
  const [changeDataGrid, setChangeDataGrid] = useState(false);

  const changeDataGridUE = () => {
    setChangeDataGrid(!changeDataGrid);
  };

  useEffect(() => {
    const api = async () => {
      const res = await axios.post(
        '/management/manager/option/category/search/inquiry',
        {
          searchValue: 'string',
          status: 32767,
          grpId: selectGroupKey ? selectGroupKey : 0,
        },
      );
      let arr = [] as any;
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
        status: postStatus,
        grpId: selectGroupKey ? selectGroupKey : 0,
      },
    );
    let arr = [] as any;
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
            <SidebarRcTree setuppGrp={setuppGrp} isPost={isPost} />
            <Box sx={{ ml: '30px', width: '100%' }}>
              <GrpForm setIsPost={IsPostset} selectGroupKey={selectGroupKey} />
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
