import { Height } from '@mui/icons-material';
import { Box, Button, DialogActions } from '@mui/material';
import React from 'react';

export const SubmitButton = () => {
  return (
    <Box
      sx={{
        height: '118px',
        bb: '48px',
      }}
    >
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button
          className="sub_button_white"
          sx={{
            height: '42px',
            Width: '82px',
            fontSize: '14px',
            fontFamily: 'NotoSansKR',
          }}
        >
          취소
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
      </DialogActions>
    </Box>
  );
};
