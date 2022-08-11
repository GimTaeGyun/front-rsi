import { Box, Divider } from '@mui/material';
import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import MuiFormLabel from '@mui/material/FormLabel';
const Info = () => {
  return (
    <>
      <Card
        sx={{
          width: '1470px',
          height: '168px',
          borderRadius: '6px',
          opacity: '1',
        }}
      >
        <CardHeader
          disableTypography
          title="고객정보"
          className="sub_font_medium sub_fontsize16 sub_form_header"
        />
        <Divider />
        <CardContent className="sub_form_body">
          <Box className="sub_col3">
            <MuiFormLabel className="sub_font_medium sub_fontsize14 label">
              아이디
            </MuiFormLabel>
          </Box>
          <Box className="sub_col3"></Box>
          <Box className="sub_col3"></Box>
        </CardContent>
        <Divider />
        <CardContent></CardContent>
      </Card>
    </>
  );
};

export default Info;
