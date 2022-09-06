import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import React, { useEffect } from 'react';
import { axios } from '../../../../utils/axios';

const SearchDataTable = (props: { onClickSearchItem: Function }) => {
  const [filterDropdown, setFilterDropdown] = React.useState(true);
  const [statusValue, setStatusValue] = React.useState([]);
  const [searchItemNm, setSearchItemNm] = React.useState('');
  const [postStatus, setPostStatus] = React.useState(Number);
  const [check1, setCheck1] = React.useState('32767');

  useEffect(() => {
    switch (check1) {
      case '1':
        setPostStatus(1);
        break;
      case '-1':
        setPostStatus(-1);
        break;
      default:
        setPostStatus(32767);
        break;
    }
  }, [check1]);

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

  const showDropdownList = () => {
    setFilterDropdown(!filterDropdown);
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
                value="전체"
                className="sub_select_common sub_items_filter_list1"
              >
                <MenuItem value="전체">전체</MenuItem>
              </Select>
              <OutlinedInput
                fullWidth={false}
                placeholder="검색어 입력"
                value={searchItemNm}
                onChange={e => {
                  setSearchItemNm(e.target.value);
                }}
                className="sub_input_common sub_items_filter_search"
              />
            </Box>
            <Box className="sub_items_filter2_right">
              <Button
                variant="text"
                className="sub_items_btn_dropdown"
                onClick={showDropdownList}
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
                onClick={() => {
                  setCheck1('32767');
                  setSearchItemNm('');
                }}
              >
                초기화
              </Button>
              <Button
                variant="contained"
                className="sub_btn_primary_fill_common sub_items_btn_search"
                onClick={() => {
                  props.onClickSearchItem(searchItemNm, postStatus);
                }}
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
            옵션 상태
          </Box>

          {statusValue.map((item: any) => {
            let check = false;
            if (item.value === check1) {
              check = true;
            } else {
              check = false;
            }
            return (
              <FormGroup className="sub_filter_dropdown_chk_outer">
                <FormControlLabel
                  className="sub_filter_dropdown_chk_outer"
                  control={
                    <Checkbox
                      value={item.value}
                      checked={check}
                      onChange={e => {
                        setCheck1(e.target.value);
                      }}
                    />
                  }
                  label={item.label}
                />
              </FormGroup>
            );
          })}
        </Box>
      </Card>
    </>
  );
};

export default React.memo(SearchDataTable);
