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
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useAtom } from 'jotai';
import React, { useEffect, useState, useMemo } from 'react';

import { AlertPopupData, DefaultGrpInfo, PrdMng } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';
import Column from './ColDef';
import { Footer } from './footer';

const rows = [
  {
    id: '1',
    category: '개인',
    name: 'EyeSurfer NS_개인_스크랩_신탁',
    start_date: '2022-01-01',
    end_date: '2022-12-31',
    status: '판매중',
    date: '2022-10-31 12:00',
  },
  {
    id: '2',
    category: '기업',
    name: 'EyeSurfer NS_개인_스크랩_신탁',
    start_date: '2022-01-01',
    end_date: '2022-12-31',
    status: '미게시',
    date: '2022-10-31 12:00',
  },
  {
    id: '3',
    category: '공공',
    name: 'EyeSurfer NS_개인_스크랩_신탁',
    start_date: '2022-01-01',
    end_date: '2022-12-31',
    status: '판매중',
    date: '2022-10-31 12:00',
  },
  {
    id: '4',
    category: '개인',
    name: 'EyeSurfer NS_개인_스크랩_신탁',
    start_date: '2022-01-01',
    end_date: '2022-12-31',
    status: '판매중',
    date: '2022-10-31 12:00',
  },
];

interface CodeSet {
  codeSetItems: { label: string; value: string; checked: boolean }[];
  codeSetLabel: string;
}

const DefaultCodeSet = {
  codeSetItems: [{ label: '', value: '', checked: false }],
  codeSetLabel: '',
};

const DataTableProd = () => {
  const [filterDropdown, setFilterDropdown] = React.useState(false);
  const [itemTpChb, setItemTpChb] = useState<CodeSet>(DefaultCodeSet); // 상품유형 체크박스
  const [itemStatusChb, setItemStatusChb] = useState<CodeSet>(DefaultCodeSet); // 상품상태 체크박스
  const [searchSelect, setSearchSelect] = useState('ALL');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sharingData, setSharingData] = useAtom(PrdMng);

  // 컴포넌트 초기화
  useEffect(() => {
    // 상품유형 체크박스
    axios
      .post('/management/subscription/admin/codeset', {
        code: 'prd_tp',
        code_grp: 'pm.product',
      })
      .then(res => {
        if (res.data.code === '0000') {
          res.data.result.codeSetItems = res.data.result.codeSetItems.map(
            (item: any) => {
              return { ...item, checked: true };
            },
          );
          setItemTpChb(res.data.result);
        }
      })
      .catch();

    // 상품상태 체크박스
    axios
      .post('/management/subscription/admin/codeset', {
        code: 'status',
        code_grp: 'pm.product',
      })
      .then(res => {
        if (res.data.code === '0000') {
          res.data.result.codeSetItems = res.data.result.codeSetItems.map(
            (item: any) => {
              return { ...item, checked: true };
            },
          );
          setItemStatusChb(res.data.result);
        }
      })
      .catch();
  }, []);

  // 트리 클릭이벤트
  useEffect(() => {
    searchTable();
  }, [sharingData.selNode]);

  const searchTable = () => {
    axios
      .post('/management/manager/product/search/inquiry', {
        prdGrpId:
          JSON.stringify(sharingData.selNode) === '{}'
            ? 0
            : (sharingData.selNode as any).key,
        prdTp: getCheckedTpArr,
        searchField: searchSelect,
        searchValue: searchKeyword,
        status: getCheckedStatusArr,
      })
      .then(res => {
        console.log(res);
      })
      .catch();
  };

  const getCheckedTpArr = useMemo(() => {
    let result: any = [];

    for (let item of itemTpChb.codeSetItems) {
      if (item.checked) result.push(item.value);
    }
    return result;
  }, [itemTpChb]);
  const getCheckedStatusArr = useMemo(() => {
    let result: any = [];

    for (let item of itemStatusChb.codeSetItems) {
      if (item.checked) result.push(item.value);
    }
    return result;
  }, [itemStatusChb]);

  const onCheckedChanged = (e: any) => {
    let tmp: any;
    switch (e.target.name) {
      case 'tp':
        tmp = itemTpChb?.codeSetItems.map((item: any) => {
          if (item.value === e.target.value)
            return { ...item, checked: e.target.checked };
          else return item;
        });
        setItemTpChb(
          checkedAllOrNot(
            { ...itemTpChb, codeSetItems: tmp },
            e.target.value,
            e.target.checked,
          ),
        );
        break;
      case 'status':
        tmp = itemStatusChb?.codeSetItems.map((item: any) => {
          if (item.value === e.target.value)
            return { ...item, checked: e.target.checked };
          else return item;
        });
        setItemStatusChb(
          checkedAllOrNot(
            { ...itemStatusChb, codeSetItems: tmp },
            e.target.value,
            e.target.checked,
          ),
        );
        break;
    }
  };

  // 체크박스 체크 시 전체 체크박스 체크할지 검사
  const checkedAllOrNot = (obj: any, value: any, checked: boolean) => {
    const tmp = obj;
    // 전체를 체크한 경우 전체에 맞춰서 checked
    if (value === 'ALL' || Number(value) === 32767) {
      tmp.codeSetItems = tmp.codeSetItems.map((item: any) => {
        return { ...item, checked: checked };
      });
      return tmp;
    }

    // 전체를 제외한 체크를 검사해서 전부체크면 전체에도 체크
    let allChecked = true;
    for (const item of tmp.codeSetItems) {
      if (
        !(item.value === 'ALL' || Number(item.value) === 32767) &&
        !item.checked
      ) {
        allChecked = false;
        break;
      }
    }

    tmp.codeSetItems = tmp.codeSetItems.map((item: any) => {
      if (item.value === 'ALL' || Number(item.value) === 32767)
        item.checked = allChecked;
      return item;
    });
    return tmp;
  };

  // 초기화 버튼이벤트
  const onInitClick = () => {
    setSearchKeyword('');
    setSearchSelect('ALL');
    setItemStatusChb({
      ...itemStatusChb,
      codeSetItems: itemStatusChb?.codeSetItems.map((item: any) => {
        return { ...item, checked: true };
      }),
    });
    setItemTpChb({
      ...itemTpChb,
      codeSetItems: itemTpChb?.codeSetItems.map((item: any) => {
        return { ...item, checked: true };
      }),
    });
  };

  return (
    <>
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
                value={searchSelect}
                onChange={(e: any) => setSearchSelect(e.target.value)}
                className="sub_select_common sub_items_filter_list1"
              >
                <MenuItem value="ALL">전체</MenuItem>
              </Select>
              <OutlinedInput
                fullWidth={false}
                placeholder="검색어 입력"
                value={searchKeyword}
                onChange={(e: any) => setSearchKeyword(e.target.value)}
                className="sub_input_common sub_items_filter_search"
              />
            </Box>
            <Box className="sub_items_filter2_right">
              <Button
                variant="text"
                className="sub_items_btn_dropdown"
                onClick={() => setFilterDropdown(!filterDropdown)}
              >
                상세검색
                <Box
                  component="img"
                  src={
                    filterDropdown
                      ? '/btn_dropdown.png'
                      : '/btn_dropdown_down.png'
                  }
                  sx={{ marginLeft: '5px' }}
                ></Box>
              </Button>
              <Button
                variant="outlined"
                className="sub_btn_primary_outline_common sub_items_btn_init"
                onClick={onInitClick}
              >
                초기화
              </Button>
              <Button
                variant="contained"
                className="sub_btn_primary_fill_common sub_items_btn_search"
                onClick={searchTable}
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
        <Box component="div" className="sub_listpage_filter_dropdown_row">
          <Box className="sub_filter_dropdown_lbl" component="span">
            {itemTpChb ? itemTpChb.codeSetLabel : ''}
          </Box>
          {itemTpChb
            ? itemTpChb.codeSetItems.map((item: any) => (
                <FormGroup
                  key={item.value}
                  className="sub_filter_dropdown_chk_outer"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={item.value}
                        checked={item.checked}
                        name="tp"
                        onChange={onCheckedChanged}
                      />
                    }
                    label={item.label}
                  />
                </FormGroup>
              ))
            : ''}
        </Box>
        <Divider />
        <Box component="div" className="sub_listpage_filter_dropdown_row">
          <Box className="sub_filter_dropdown_lbl" component="span">
            {itemStatusChb ? itemStatusChb.codeSetLabel : ''}
          </Box>
          {itemStatusChb
            ? itemStatusChb.codeSetItems.map((item: any) => (
                <FormGroup
                  key={item.value}
                  className="sub_filter_dropdown_chk_outer"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={item.value}
                        checked={item.checked}
                        name="status"
                        onChange={onCheckedChanged}
                      />
                    }
                    label={item.label}
                  />
                </FormGroup>
              ))
            : ''}
        </Box>
      </Card>

      <Card className="sub_tbl_section_common" sx={{ marginTop: '20px' }}>
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
                전체 (5)
              </Typography>
            </Box>
          }
        ></CardHeader>
        <div style={{ height: '316px', width: '100%' }}>
          <DataGridPro
            className="sub_tbl_outer_common"
            headerHeight={57}
            disableSelectionOnClick
            rowHeight={52}
            rows={rows}
            columns={Column}
            pagination={true}
            rowCount={rows.length}
            checkboxSelection={true}
            components={{
              Footer: () => {
                return <Footer />;
              },
            }}
          />
        </div>
      </Card>
    </>
  );
};

export default DataTableProd;
