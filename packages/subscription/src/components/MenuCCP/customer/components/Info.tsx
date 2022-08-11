import { Box, Divider } from '@mui/material';
import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import MuiFormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
const Info = () => {
  return (
    <>
      <Card
        sx={{
          width: '1470px',
          height: '168px',
          borderRadius: '6px',
          opacity: '1',
          boxShadow: '0px 1px 5px #0000002E',
        }}
      >
        <CardHeader
          disableTypography
          title="고객정보"
          sx={{
            color: '#000000DE',
            letterSpacing: '-0.4px',
            lineHeight: '20px',
            fontSize: '16px',
            fontFamily: 'NotoSansKRMedium',
          }}
        />
        <Divider />
        <CardContent
          sx={{
            width: '1470px',
            height: '120px',
            padding: '0px',
            fontFamily: 'NotoSansKRMedium',
          }}
        >
          <Box
            sx={{
              display: 'inline-block',
              width: '490px',
              height: '60px',
              color: '#333333',
              fontFamily: 'NotoSansKRMedium',
            }}
          >
            <MuiFormLabel
              sx={{
                width: '100px',
                margin: '15px',
                marginLeft: '20px',
                marginRight: '0px',
                paddingTop: '5px',
                paddingBottom: '5px',
                fontFamily: 'NotoSansKRMedium',
                display: 'inline-block',
              }}
            >
              아이디
            </MuiFormLabel>
            <TextField></TextField>
          </Box>
          <Box
            sx={{
              display: 'inline-block',
              width: '490px',
              color: '#333333',
              fontFamily: 'NotoSansKRMedium',
            }}
          ></Box>
          <Box
            sx={{
              display: 'inline-block',
              width: '490px',
              color: '#333333',
              fontFamily: 'NotoSansKRMedium',
            }}
          ></Box>
        </CardContent>
        <Divider />
        <CardContent></CardContent>
      </Card>
    </>
  );
};

export default Info;
