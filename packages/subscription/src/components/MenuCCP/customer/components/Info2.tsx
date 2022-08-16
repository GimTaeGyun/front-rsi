import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
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
import { CheckBox } from '@mui/icons-material';
const Info = () => {
  const [state, setState] = React.useState({
    email: true,
    SMS: false,
  });

  const { email, SMS } = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Card className="sub_ccp_detail_parent">
        <CardHeader disableTypography title="개인 정보" className="header" />
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
              type="text"
              className="text"
              defaultValue="010-0000-0000"
              sx={{
                '& input': {
                  backgroundColor: '#ffffff !important',
                },
                '& fieldset': {
                  border: 'solid 1px #0000001F !important',
                },
              }}
            ></TextField>
          </Box>
          <Box className="column">
            <MuiFormLabel className="label" htmlFor="email">
              이메일
            </MuiFormLabel>
            <TextField
              id="email"
              className="text"
              type="text"
              defaultValue="oooo@gmail.com"
              sx={{
                '& input': {
                  backgroundColor: '#ffffff !important',
                },
                '& fieldset': {
                  border: 'solid 1px #0000001F !important',
                },
              }}
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
          <FormControl component="fieldset" className="column">
            <FormGroup row>
              <MuiFormLabel className="label" htmlFor="mark">
                마케팅 동의
              </MuiFormLabel>
              <FormControlLabel
                id="mark"
                control={
                  <Checkbox
                    checked={email}
                    onChange={handleChange}
                    name="eamil"
                    sx={{
                      maxHeight: '18px',
                      maxWidth: '18px',
                      borderLeft: '12px solid white',
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontFamily: 'Noto Sans KR',
                      borderLeft: '10px solid white',
                    }}
                  >
                    이메일
                  </Typography>
                }
              />
              <FormControlLabel
                id="mark"
                sx={{
                  borderLeft: '30px solid white ',
                }}
                control={
                  <Checkbox
                    checked={SMS}
                    onChange={handleChange}
                    name="SMS"
                    sx={{ maxHeight: '18px', maxWidth: '18px' }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontFamily: 'Noto Sans KR',
                      borderLeft: '10px solid white',
                    }}
                  >
                    SMS
                  </Typography>
                }
              />
            </FormGroup>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
};

export default Info;
