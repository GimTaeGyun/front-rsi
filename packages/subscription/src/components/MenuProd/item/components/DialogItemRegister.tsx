import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  List,
  ListItem,
  ListItemText,
  Tooltip,
} from '@mui/material';
import DialogFormTemplate from '../../../Common/DialogFormTemplate';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0 solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <Box component="span" className="sub_multitable_expandicon"></Box>
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#F9F9F9' : '#F9F9F9',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    // transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(0),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '0 solid rgba(0, 0, 0, .125)',
}));

const DialogItemRegister = (props: {
  open: boolean;
  handleClose: Function;
}) => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const [searchResult, setSearchResult] = React.useState(false);

  /*
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      event;
      setExpanded(newExpanded ? panel : false);
    };
    */

  return (
    <>
      <DialogFormTemplate
        open={props.open}
        handleClose={props.handleClose}
        title="아이템 등록"
        width="810px"
        height="923px"
        children={
          <>
            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                아이템명 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                fullWidth
                value="아이템명을 입력해 주세요."
                placeholder=""
                className="sub_input_common sub_card_dialog_input"
                readOnly
              />
            </Box>
            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                단위 가격 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                fullWidth
                value="200,000"
                placeholder=""
                className="sub_input_common sub_card_dialog_input"
              />
            </Box>
            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                아이템 선택 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <Grid container spacing={0} className="sub_multitable_container">
                <Grid item md={4} lg={4} xl={4}>
                  <Box component="div" className="sub_multitable_title">
                    <Box component="span" className="sub_multitable_header">
                      카테고리별 매체
                    </Box>
                  </Box>
                  <Box component="div" className="sub_multitable_title">
                    <FormControlLabel
                      className="sub_multitable_chk_label sub_multitable_selectall"
                      label="전체"
                      control={<Checkbox checked={false} />}
                    />
                  </Box>
                  <Box
                    component="div"
                    className="sub_multitable_body"
                    sx={{ maxHeight: '405px' }}
                  >
                    <Accordion className="sub_multitable_accordion_wrapper level0">
                      <AccordionSummary
                        className="sub_multitable_summary level0"
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <FormControlLabel
                          className="sub_multitable_chk_label"
                          label="Accordion 1"
                          control={<Checkbox checked={false} />}
                        />
                      </AccordionSummary>
                      <AccordionDetails>
                        <Accordion className="sub_multitable_accordion_wrapper level1">
                          <AccordionSummary
                            className="sub_multitable_summary level1"
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <FormControlLabel
                              className="sub_multitable_chk_label"
                              label="Accordion 1"
                              control={<Checkbox checked={false} />}
                            />
                          </AccordionSummary>
                          <AccordionDetails>
                            <List
                              className="sub_multitable_checkboxlist level1"
                              sx={{
                                width: '100%',
                                bgcolor: 'background.paper',
                              }}
                            >
                              <ListItem disablePadding>
                                <FormControlLabel
                                  label="Child 1"
                                  control={<Checkbox checked={false} />}
                                />
                              </ListItem>
                              <ListItem disablePadding>
                                <FormControlLabel
                                  label="Child 2"
                                  control={<Checkbox checked={false} />}
                                />
                              </ListItem>
                              <ListItem disablePadding>
                                <FormControlLabel
                                  label="Child 3"
                                  control={<Checkbox checked={false} />}
                                />
                              </ListItem>
                              <ListItem disablePadding>
                                <FormControlLabel
                                  label="Child 4"
                                  control={<Checkbox checked={false} />}
                                />
                              </ListItem>
                              <ListItem disablePadding>
                                <FormControlLabel
                                  label="Child 5"
                                  control={<Checkbox checked={false} />}
                                />
                              </ListItem>
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                  <Box component="div" className="sub_multitable_title">
                    <Box component="span" className="sub_multitable_header">
                      매체{' '}
                      <Box
                        component="span"
                        className="sub_multitable_headerinfo"
                      >
                        (ㄱ~ㅎ, A~Z, 0~9 순)
                      </Box>
                    </Box>
                  </Box>
                  <Box component="div" className="sub_multitable_title">
                    <Box component="img" src="/icon-searchlist.png"></Box>
                    <OutlinedInput
                      fullWidth
                      value=""
                      placeholder="Search"
                      className="sub_input_common sub_multitable_search"
                      onFocus={() => setSearchResult(true)}
                    />
                  </Box>
                  {searchResult && (
                    <Box className="sub_multitable_search_list">
                      <List>
                        <ListItem disablePadding>
                          <Tooltip
                            title="보스니아 체르체고비나 공화국 조선 공화국 조선"
                            arrow
                            placement="bottom"
                          >
                            <FormControlLabel
                              label="보스니아 체르체고비나 공화국 조선 공화국 조선"
                              control={<Checkbox checked={false} />}
                            />
                          </Tooltip>
                        </ListItem>
                      </List>
                      <List>
                        <ListItem disablePadding>
                          <Tooltip
                            title="Searchresult 2"
                            arrow
                            placement="bottom"
                          >
                            <FormControlLabel
                              label="Searchresult 2"
                              control={<Checkbox checked={false} />}
                            />
                          </Tooltip>
                        </ListItem>
                      </List>
                      <List>
                        <ListItem disablePadding>
                          <Tooltip
                            title="Searchresult 2"
                            arrow
                            placement="bottom"
                          >
                            <FormControlLabel
                              label="Searchresult 3"
                              control={<Checkbox checked={false} />}
                            />
                          </Tooltip>
                        </ListItem>
                      </List>
                    </Box>
                  )}
                  <Box
                    component="div"
                    className="sub_multitable_body"
                    sx={{
                      border: '0 solid red',
                      height: '380px',
                      maxHeight: '380px',
                    }}
                  >
                    <Accordion className="sub_multitable_accordion_wrapper level0">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                      >
                        <FormControlLabel
                          label="Accordion 1"
                          control={<Checkbox checked={false} />}
                        />
                      </AccordionSummary>
                      <AccordionDetails>
                        <List
                          className="sub_multitable_checkboxlist level0"
                          sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                          }}
                        >
                          <ListItem disablePadding>
                            <FormControlLabel
                              label="Child 1"
                              control={<Checkbox checked={false} />}
                            />
                          </ListItem>
                          <ListItem disablePadding>
                            <FormControlLabel
                              label="Child 2"
                              control={<Checkbox checked={false} />}
                            />
                          </ListItem>
                          <ListItem disablePadding>
                            <FormControlLabel
                              label="Child 3"
                              control={<Checkbox checked={false} />}
                            />
                          </ListItem>
                          <ListItem disablePadding>
                            <FormControlLabel
                              label="Child 4"
                              control={<Checkbox checked={false} />}
                            />
                          </ListItem>
                          <ListItem disablePadding>
                            <FormControlLabel
                              label="Child 5"
                              control={<Checkbox checked={false} />}
                            />
                          </ListItem>
                        </List>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion className="sub_multitable_accordion_wrapper level0">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                      >
                        <FormControlLabel
                          label="Accordion 1"
                          control={<Checkbox checked={false} />}
                        />
                      </AccordionSummary>
                      <AccordionDetails>
                        <List
                          className="sub_multitable_checkboxlist level0"
                          sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                          }}
                        >
                          <ListItem disablePadding>
                            <FormControlLabel
                              label="Child 1"
                              control={<Checkbox checked={false} />}
                            />
                          </ListItem>
                          <ListItem disablePadding>
                            <FormControlLabel
                              label="Child 2"
                              control={<Checkbox checked={false} />}
                            />
                          </ListItem>
                          <ListItem disablePadding>
                            <FormControlLabel
                              label="Child 3"
                              control={<Checkbox checked={false} />}
                            />
                          </ListItem>
                          <ListItem disablePadding>
                            <FormControlLabel
                              label="Child 4"
                              control={<Checkbox checked={false} />}
                            />
                          </ListItem>
                          <ListItem disablePadding>
                            <FormControlLabel
                              label="Child 5"
                              control={<Checkbox checked={false} />}
                            />
                          </ListItem>
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </Grid>
                <Grid item md={4} lg={4} xl={4}>
                  <Box component="div" className="sub_multitable_lastouter">
                    <Box component="div" className="sub_multitable_lastinner">
                      <Box component="div" className="sub_multitable_title">
                        <Box component="span" className="sub_multitable_header">
                          선택된 매체{' '}
                          <Box
                            component="span"
                            className="sub_multitable_headerinfo"
                          >
                            (14)
                          </Box>
                        </Box>
                      </Box>
                      {true && (
                        <List className="sub_multitable_list">
                          <ListItem>
                            <ListItemText primary="경향신문 (조간/중앙)" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="경향신문 (조간/중앙)" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="경향신문 (조간/중앙)" />
                          </ListItem>
                        </List>
                      )}
                      {false && (
                        <Box
                          component="div"
                          className="sub_multitable_selectmedium"
                        >
                          매체를 선택해 주세요.
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                아이템 상태 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <Select
                fullWidth={true}
                value="사용가능"
                className="sub_select_common sub_card_formcontrol_list"
              >
                <MenuItem value="사용가능">사용가능</MenuItem>
              </Select>
            </Box>
          </>
        }
        footer={
          <>
            <Button
              className="sub_button_white_none"
              onClick={() => {
                props.handleClose();
              }}
            >
              취소
            </Button>
            <Button
              color="primary"
              variant="contained"
              className="sub_btn_primary_fill_common sub_dialog_button_blue"
            >
              저장
            </Button>
          </>
        }
      />
    </>
  );
};
export default DialogItemRegister;
