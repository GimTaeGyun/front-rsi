import { Box, Button } from '@mui/material';
import React from 'react';

const SubmitButton = (props: { onClickUserChange: Function }) => {
  return (
    <Box className="sub_listpage_card_btmsection">
      <Button
        variant="outlined"
        className="sub_btn_primary_outline_common sub_btn_card_btm"
      >
        뒤로
      </Button>
      <Button
        onClick={e => {
          props.onClickUserChange();
        }}
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
