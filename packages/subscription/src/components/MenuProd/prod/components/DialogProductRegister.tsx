import * as React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Card,
  CardHeader,
  Divider,
  FormControlLabel,
  InputLabel,
  IconButton,
  OutlinedInput,
  Typography,
  List,
  ListItem,
  Select,
  MenuItem,
} from '@mui/material';
import DialogFormTemplate from '../../../Common/DialogFormTemplate';
import RcTreeList from '../components/RcTreeList';
import MyDatePicker from '../../../Common/MyDatePicker';

const DialogProductRegister = (props: {
  open: boolean;
  handleClose: Function;
}) => {
  return (
    <>
      <DialogFormTemplate
        scroll="paper"
        open={props.open}
        handleClose={props.handleClose}
        title="상품 등록"
        width="980px"
        height="3055px"
        children={
          <>
            <Box component="div" className="sub_reg_subheading">
              상품 기본정보
            </Box>
            <Divider />
            <Box component="div" className="sub_dialog_input_outer mt-25">
              <InputLabel className="sub_dialog_formLabel">
                상품명 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                fullWidth
                value=""
                placeholder="상품명을 입력해 주세요."
                className="sub_input_common sub_card_dialog_input"
              />
            </Box>
            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                상품 판매 유형{' '}
                <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <Box component="div" className="sub_dialg_checkbox_list">
                <FormControlLabel label="전체" control={<Checkbox />} />
                <FormControlLabel label="개인" control={<Checkbox />} />
                <FormControlLabel label="법인" control={<Checkbox />} />
                <FormControlLabel label="공공기관" control={<Checkbox />} />
              </Box>
            </Box>
            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                상품 그룹 설정{' '}
                <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <Box component="div" className="sub_dialog_rctree_outer">
                <Box component="div" className="sub_dialog_rctree_outer_lft">
                  <RcTreeList checkable={true} />
                </Box>
                <Box component="div" className="sub_dialog_rctree_outer_rgt">
                  <Card className="sub_dialog_rctree_outer_rgt_inner">
                    <CardHeader
                      className="sub_dialog_header"
                      component="div"
                      title={
                        <Box
                          component="div"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Typography className="sub_tbl_header_text_common">
                            전체 (1)
                          </Typography>
                        </Box>
                      }
                    ></CardHeader>
                    <CardHeader
                      className="sub_dialog_header"
                      component="div"
                      title={
                        <Box
                          component="div"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Typography className="sub_tbl_header_text_common">
                            그룹명
                          </Typography>
                        </Box>
                      }
                    ></CardHeader>
                    <Box component="div" className="sub_dialog_chk_row">
                      <FormControlLabel
                        className="sub_dialog_chk_row_frmlabel"
                        label="EyeSurfer / EyeSurfer NS / 개인 / 스크랩 / 조간신문 / 신탁사"
                        control={<Checkbox disabled checked size="small" />}
                      />
                    </Box>
                  </Card>
                </Box>
              </Box>
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">메모</InputLabel>
              <OutlinedInput
                fullWidth
                value=""
                placeholder="상품명 관리를 위한 메모를 입력해 주세요."
                className="sub_input_common sub_card_dialog_input"
              />
            </Box>

            <Box component="div" className="sub_reg_subheading">
              상품 이미지
            </Box>
            <Divider />

            <Box component="div" className="sub_dialog_input_outer mt-25">
              <InputLabel className="sub_dialog_formLabel">
                상품 이미지 등록{' '}
                <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <List className="sub_dialog_upload_list">
                <ListItem className="sub_dialog_upload_area">
                  <Box component="div">
                    <Typography component="p">
                      등록할 파일
                      <br />
                      드래그 또는 선택
                    </Typography>
                    <Button
                      variant="outlined"
                      className="sub_btn_primary_outline_common sub_dialog_btn_upload"
                    >
                      이미지 업로드
                    </Button>
                  </Box>
                </ListItem>
                <ListItem className="sub_dialog_upload_more">
                  <Box component="div">
                    <IconButton color="primary" component="label">
                      <Box component="img" src="/icon-upload-more.png"></Box>
                    </IconButton>
                  </Box>
                </ListItem>
              </List>
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                상품 상세 설명{' '}
                <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <OutlinedInput
                rows={6}
                multiline={true}
                fullWidth
                value=""
                placeholder="상품 상세 설명 / 서비스 제한 사항 / 하드웨어 사양 정보 / 환불 및 해지, 취소 사항
※ 반드시 전자상거래법, 상품정보제공 고시에 따라 상품 설명 내 고시 정보를 명시해야 함
(이미지 업로드 가능, HTML 형태 가능)"
                className="sub_input_common sub_card_dialog_input"
              />
            </Box>

            <Box component="div" className="sub_reg_subheading">
              상품 판매방식
            </Box>
            <Divider />

            <Box component="div" className="sub_dialog_input_outer mt-25">
              <InputLabel className="sub_dialog_formLabel">
                판매방식 설정{' '}
                <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <Box component="div" className="sub_dialg_checkbox_list">
                <FormControlLabel label="전체" control={<Checkbox />} />
                <FormControlLabel label="구독형 상품" control={<Checkbox />} />
                <FormControlLabel label="단건 상품" control={<Checkbox />} />
              </Box>
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                판매 시작기간 설정{' '}
                <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <Box
                component="span"
                className="d_flex align-items-center justify-content-between"
              >
                <MyDatePicker
                  strId="search-date1"
                  strClass="sub_input_common sub_dialog_datepicker"
                  strName="search-date1"
                  strPlaceholder="판매 시작일"
                  value=""
                  objSX={{ width: '454px' }}
                />
                <MyDatePicker
                  strId="search-date2"
                  strClass="sub_input_common sub_dialog_datepicker"
                  strName="search-date2"
                  strPlaceholder="판매 종료일"
                  objSX={{ width: '454px' }}
                  value=""
                />
              </Box>
            </Box>

            <Box component="div" className="sub_reg_subheading">
              상품 등록
            </Box>
            <Divider />

            <Box component="div" className="sub_dialog_input_outer mt-25">
              <InputLabel className="sub_dialog_formLabel">
                상품 아이템 등록{' '}
                <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <Box component="div" className="sub_dialog_rctree_outer">
                <Box component="div" className="sub_dialog_rctree_outer_lft">
                  <RcTreeList checkable={true} />
                </Box>
                <Box component="div" className="sub_dialog_rctree_outer_rgt">
                  <Card className="sub_dialog_rctree_outer_rgt_inner">
                    <CardHeader
                      className="sub_dialog_header"
                      component="div"
                      title={
                        <Box
                          component="div"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Typography className="sub_tbl_header_text_common">
                            전체 (0)
                          </Typography>
                        </Box>
                      }
                    ></CardHeader>
                    <CardHeader
                      className="sub_dialog_header"
                      component="div"
                      title={
                        <Box
                          component="div"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Typography className="sub_tbl_header_text_common">
                            아이템명
                          </Typography>
                        </Box>
                      }
                    ></CardHeader>
                    <Box component="div" className="sub_dialog_chk_noselected">
                      아이템을 등록하려면
                      <br />
                      왼쪽에서 그룹을 선택해 주세요.
                    </Box>
                  </Card>
                </Box>
              </Box>
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <InputLabel className="sub_dialog_formLabel">
                상품 옵션 등록{' '}
                <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <Box component="div" className="sub_dialog_rctree_outer">
                <Box component="div" className="sub_dialog_rctree_outer_lft">
                  <RcTreeList checkable={true} />
                </Box>
                <Box component="div" className="sub_dialog_rctree_outer_rgt">
                  <Card className="sub_dialog_rctree_outer_rgt_inner">
                    <CardHeader
                      sx={{ paddingRight: '5px' }}
                      className="sub_dialog_header"
                      component="div"
                      title={
                        <Box
                          component="div"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Typography className="sub_tbl_header_text_common">
                            전체 (0)
                          </Typography>
                          <OutlinedInput
                            fullWidth={false}
                            value=""
                            placeholder="Search"
                            className="sub_input_common sub_card_dialog_searchinput"
                          />
                        </Box>
                      }
                    ></CardHeader>
                    <CardHeader
                      className="sub_dialog_header"
                      component="div"
                      title={
                        <Box
                          component="div"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Typography className="sub_tbl_header_text_common">
                            아이템명
                          </Typography>
                        </Box>
                      }
                    ></CardHeader>
                    <Box component="div" className="sub_dialog_chk_noselected">
                      아이템을 등록하려면
                      <br />
                      왼쪽에서 그룹을 선택해 주세요.
                    </Box>
                  </Card>
                </Box>
              </Box>
            </Box>

            <Box component="div" className="sub_reg_subheading">
              검색엔진 최적화 (SEO)
            </Box>
            <Divider />

            <Box component="div" className="sub_dialog_input_outer mt-25">
              <InputLabel className="sub_dialog_formLabel">제목</InputLabel>
              <OutlinedInput
                fullWidth
                value=""
                placeholder="미입력 시 노출 상품명 및 사이트명 출력"
                className="sub_input_common sub_card_dialog_input"
              />
            </Box>

            <Box
              component="div"
              className="sub_dialog_input_outer"
              sx={{ marginBottom: '3px' }}
            >
              <InputLabel className="sub_dialog_formLabel">
                메타 설명
              </InputLabel>
              <OutlinedInput
                fullWidth
                value=""
                placeholder="미입력 시 상품 상세 텍스트 출력"
                className="sub_input_common sub_card_dialog_input"
              />
            </Box>

            <Box component="div" className="sub_dialog_input_outer">
              <FormControlLabel
                className="sub_dialog_checkbox_field"
                label="이 상품을 검색엔진에서 제외"
                control={<Checkbox />}
              />
            </Box>

            <Box component="div" className="sub_reg_subheading">
              상품 게시 상태
            </Box>
            <Divider />

            <Box component="div" className="sub_dialog_input_outer mt-25">
              <InputLabel className="sub_dialog_formLabel">
                상품 상태 <Typography className="sub_label_dot">•</Typography>
              </InputLabel>
              <Select
                fullWidth={true}
                value="판매중"
                className="sub_select_common sub_card_formcontrol_list"
              >
                <MenuItem value="판매중">판매중</MenuItem>
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
export default DialogProductRegister;
