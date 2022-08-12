import { Box, Divider } from '@mui/material';
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import React from 'react';
import MuiFormLabel from '@mui/material/FormLabel';
import { SubmitButton } from './SubmitButton';
import { borderBottom } from '@mui/system';
const Info = (props: { buttonCallback?: Function }) => {
  return (
    <>
      <Divider />
      <Box
        sx={{
          borderTop: '20px solid #F4F5F7',
        }}
      >
        <Box
          sx={{
            borderBottom: '28px solid #F4F5F7',
          }}
        >
          <Card className="sub_ccp_detail_parent">
            <CardHeader disableTypography title="고객정보" className="header" />
            <Divider />
            <CardContent className="content" sx={{ padding: '0px' }}>
              <Box className="column">
                <MuiFormLabel className="label" htmlFor="id">
                  아이디
                </MuiFormLabel>
                <TextField
                  id="id"
                  disabled
                  className="text"
                  value="test개인"
                ></TextField>
              </Box>
              <Box className="column">
                <MuiFormLabel className="label" htmlFor="joinDate">
                  가입일
                </MuiFormLabel>
                <TextField
                  id="joinDate"
                  disabled
                  className="text"
                  value="2022-01-01 12:00"
                ></TextField>
              </Box>
              <Box className="column">
                <MuiFormLabel className="label" htmlFor="recentLoginDate">
                  최근 접속일
                </MuiFormLabel>
                <TextField
                  id="recentLoginDate"
                  disabled
                  className="text"
                  value="2022-01-01 12:00"
                ></TextField>
              </Box>
              <Divider />
              <Box className="column">
                <MuiFormLabel className="label" htmlFor="type">
                  고객유형
                </MuiFormLabel>
                <Select id="type" disabled className="text select" value="개인">
                  <MenuItem value="개인">개인</MenuItem>
                </Select>
              </Box>
              <Box className="column">
                <MuiFormLabel className="label" htmlFor="password">
                  비밀번호
                </MuiFormLabel>
                <TextField
                  id="password"
                  type="password"
                  disabled
                  className="text"
                  value="sadasdas"
                  sx={{
                    width: '266px !important',
                  }}
                ></TextField>
                <Button
                  className="sub_button_white button"
                  onClick={e =>
                    props.buttonCallback ? props.buttonCallback(e) : undefined
                  }
                >
                  재설정
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Info;
