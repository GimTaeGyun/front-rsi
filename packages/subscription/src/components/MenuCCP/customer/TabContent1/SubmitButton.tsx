import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitButton = (props: { onClickUserChange: Function }) => {
  const navigate = useNavigate();
  return (
    <Box className="sub_listpage_card_btmsection">
      <Button
        variant="outlined"
        className="sub_btn_primary_outline_common sub_btn_card_btm"
        sx={{
          fontFamily: 'NotoSansKRMedium',
          fontSize: '15px',
        }}
        onClick={() => navigate(-1)}
      >
        뒤로
      </Button>
      <Button
        onClick={() => {
          props.onClickUserChange();
        }}
        variant="contained"
        className="sub_btn_primary_fill_common sub_btn_card_btm primaryColor2"
        sx={{
          marginLeft: '15px',
          fontFamily: 'NotoSansKR !important',
          fontSize: '15px',
        }}
      >
        저장
      </Button>
    </Box>
  );
};

export default SubmitButton;
