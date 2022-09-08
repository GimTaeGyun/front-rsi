import { Box, Button, MenuItem, Select } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useEffect, useState, useMemo } from 'react';
import { AlertPopupData, DefaultGrpInfo, PrdMng } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';

export const Footer = () => {
  const [sharingData, setSharingData] = useAtom(PrdMng);
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [allStatusSelect, setAllStatusSelect] = useState(null); // 상태 일괄 변경 셀렉트옵션 배열
  const [allStatus, setAllStatus] = useState('status');

  // 컴포넌트 초기화
  useEffect(() => {
    axios
      .post('/management/subscription/admin/codeset', {
        code_grp: 'pm.product',
        code: 'status',
      })
      .then(res => {
        if (res.data.code === '0000') {
          res.data.result.codeSetItems = res.data.result.codeSetItems.filter(
            (item: any) => item.value !== '32767',
          );
          setAllStatusSelect(res.data.result);
        }
      })
      .catch();
  }, []);

  const onDeleteClick = () => {
    setAlertPopup({
      ...alertPopup,
      visible: true,
      message: '선택한 상품을 삭제하시겠습니까?',
      leftText: '확인',
      rightText: '취소',
      rightCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
      },
      leftCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
      },
    });
  };

  // 상태 일관 변경 변경하기 클릭이벤트
  const onAllClick = () => {
    if (sharingData.row.length > 0)
      setAlertPopup({
        ...alertPopup,
        visible: true,
        message: '해당리스트 상태를 변경하시겠습니까?',
        leftText: '확인',
        rightText: '취소',
        rightCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
        },
        leftCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
        },
      });
  };

  return (
    <Box className="sub_pagination_wrapper" component="div">
      <Box component="div" className="sub_pagination_outer">
        <Select
          fullWidth={false}
          className="sub_select_common sub_select_batch"
          value={allStatus}
          onChange={(e: any) => {
            setAllStatus(e.target.value);
          }}
        >
          <MenuItem value="status" sx={{ display: 'none' }}>
            상태 일괄 변경
          </MenuItem>
          {allStatusSelect != null
            ? (allStatusSelect as any).codeSetItems.map((item: any) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))
            : ''}
        </Select>
        <Button
          variant="contained"
          className={`sub_btn_primary_fill_common sub_btn_footer_save ${
            sharingData.row.length == 0 ? 'disabled' : ''
          }`}
          onClick={onAllClick}
        >
          변경하기
        </Button>
      </Box>
      <Box component="div" className="sub_pagination_outer"></Box>
      <Box
        component="div"
        className="sub_pagination_outer"
        sx={{ justifyContent: 'end' }}
      >
        <Button
          variant="outlined"
          className="sub_btn_primary_outline_common sub_btn_footer_save"
          onClick={onDeleteClick}
        >
          상품 삭제
        </Button>
        <Button
          variant="contained"
          className="sub_btn_primary_fill_common sub_btn_footer_save"
        >
          상품 등록
        </Button>
      </Box>
    </Box>
  );
};
