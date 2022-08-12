import { Box, Divider } from '@mui/material';
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import React from 'react';
import MuiFormLabel from '@mui/material/FormLabel';
const Info = () => {
  return (
    <>
      <Card className="sub_ccp_detail_parent">
        <CardHeader
          disableTypography
          title="법인 담당자 정보"
          className="header"
        />
        <Divider />
        <CardContent className="content" sx={{ padding: '0px' }}>
          <Box className="column">
            <MuiFormLabel className="label" htmlFor="id">
              담당자명
            </MuiFormLabel>
            <TextField id="id" className="text" value="김철수"></TextField>
          </Box>
          <Box className="column">
            <MuiFormLabel className="label" htmlFor="phone">
              휴대전화
            </MuiFormLabel>
            <TextField
              id="phone"
              className="text"
              value="010-0000-0000"
            ></TextField>
          </Box>
          <Box className="column">
            <MuiFormLabel className="label" htmlFor="email">
              이메일
            </MuiFormLabel>
            <TextField
              id="email"
              className="text"
              value="oooo@gmail.com"
            ></TextField>
          </Box>
          <Divider />
          <Box className="column">
            <MuiFormLabel className="label" htmlFor="nname">
              부서명
            </MuiFormLabel>
            <TextField id="nname" className="text" value="홍보팀"></TextField>
          </Box>
          <Box className="column">
            <MuiFormLabel className="label" htmlFor="number">
              전화번호
            </MuiFormLabel>
            <TextField
              id="number"
              className="text"
              value="02-1234-5678"
            ></TextField>
          </Box>
          <Box className="column">
            <MuiFormLabel className="label" htmlFor="fax">
              팩스번호
            </MuiFormLabel>
            <TextField
              id="fax"
              type="text"
              className="text"
              value="02-1234-9999"
            ></TextField>
          </Box>
          <Divider />

          <Box className="column">
            <MuiFormLabel className="label" htmlFor="type">
              정보유효기간
            </MuiFormLabel>
            <Select id="type" disabled className="text select" value="0">
              <MenuItem value="0">탈퇴 시 까지</MenuItem>
            </Select>
          </Box>
          <Box className="column">
            <MuiFormLabel className="label">마케팅 동의</MuiFormLabel>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Info;
