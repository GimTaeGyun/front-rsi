import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitButton = () => {
  const navigate = useNavigate();
  return (
    <Box className="sub_listpage_card_btmsection">
      <Button
        variant="outlined"
        className="sub_btn_primary_outline_common sub_btn_card_btm"
        onClick={() => navigate(-1)}
      >
        뒤로
      </Button>
      <Button
        variant="contained"
        className="sub_btn_primary_fill_common sub_btn_card_btm primaryColor2"
        sx={{ marginLeft: '15px' }}
      >
        저장
      </Button>
    </Box>
  );
};

export default SubmitButton;
