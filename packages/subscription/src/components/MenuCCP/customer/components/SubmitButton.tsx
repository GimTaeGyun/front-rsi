import { Box, Button } from '@mui/material';
import React from 'react';

const SubmitButton = () => {
  return (
    <Box sx={{ textAlign: 'center', width: '100%' }}>
      <Button
        className="sub_button_white"
        sx={{
          height: '42px',
          Width: '82px',
          fontSize: '14px',
          fontFamily: 'NotoSansKR',
          marginRight: '15px',
        }}
      >
        뒤로
      </Button>
      <Button
        variant="contained"
        type="submit"
        className="sub_button_blue"
        sx={{
          height: '42px',
          Width: '82px',
          fontSize: '14px',
          fontFamily: 'NotoSansKR',
          ':hover': {
            bgcolor: '#284AD5',
          },
        }}
      >
        저장
      </Button>
    </Box>
  );
};

export default SubmitButton;
