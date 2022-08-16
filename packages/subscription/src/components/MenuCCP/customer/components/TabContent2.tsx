import React from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import MyDatePicker from "../../../Common/MyDatePicker";
import CheckboxSelect from "../../../Common/CheckboxSelect";
import DatatableOrders from "./DatatableOrders";

const rows = [
    {
        id: "0000001",
        productNm: "EyeSurfer / 조간신문 / 중앙신문 / 경향신문 외 3종",
        orderDate: "2022-01-01 12:00",
        paymentDate: "2022-10-31 12:00",
        paymentMethod: "무통장입금",
        amount: "2,700,000원",
        status: "입금대기",
        orderBy: "현대중공업(주)"
    },
    {
        id: "0000002",
        productNm: "EyeSurfer Premium Plus / 조간신문 / 중앙신문 / 경향신...",
        orderDate: "2022-01-01 12:00",
        paymentDate: "2022-10-31 12:00",
        paymentMethod: "무통장입금",
        amount: "300,000,000원",
        status: "결제완료",
        orderBy: "현대중공업(주)"
    },
    {
        id: "0000003",
        productNm: "EyeSurfer 온라인 모니터링 서비스",
        orderDate: "2022-01-01 12:00",
        paymentDate: "2022-10-31 12:00",
        paymentMethod: "무통장입금",
        amount: "132,000원",
        status: "입금대기",
        orderBy: "현대중공업(주)"
    },
    {
        id: "0000004",
        productNm: "EyeSurfer / 조간신문 / 중앙신문 / 조선일보 1개월",
        orderDate: "2022-01-01 12:00",
        paymentDate: "2022-10-31 12:00",
        paymentMethod: "무통장입금",
        amount: "110,000원",
        status: "취소완료",
        orderBy: "현대중공업(주)"
    },
    {
        id: "0000005",
        productNm: "EyeSurfer Premium Plus / 조간신문 / 중앙신문 / 경향신...",
        orderDate: "2022-01-01 12:00",
        paymentDate: "2022-10-31 12:00",
        paymentMethod: "무통장입금",
        amount: "400,000,000원",
        status: "취소요청",
        orderBy: "현대중공업(주)"
    },
    {
        id: "0000006",
        productNm: "EyeSurfer V4M / 조간신문 / 중앙신문 / 경향신문 외 3종",
        orderDate: "2022-01-01 12:00",
        paymentDate: "2022-10-31 12:00",
        paymentMethod: "무통장입금",
        amount: "10,200,500원",
        status: "결제완료",
        orderBy: "현대중공업(주)"
    },
    {
        id: "0000007",
        productNm: "EyeSurfer 온라인 모니터링 서비스",
        orderDate: "2022-01-01 12:00",
        paymentDate: "2022-10-31 12:00",
        paymentMethod: "무통장입금",
        amount: "2,888,000원",
        status: "입금완료",
        orderBy: "현대중공업(주)"
    },
    {
        id: "0000008",
        productNm: "EyeEyeSurfer / 조간신문 / 중앙신문 / 경향신문 외 3종",
        orderDate: "2022-01-01 12:00",
        paymentDate: "2022-10-31 12:00",
        paymentMethod: "무통장입금",
        amount: "27,500원",
        status: "결제완료",
        orderBy: "현대중공업(주)"
    },
    {
        id: "0000009",
        productNm: "EyeSurfer / 조간신문 / 중앙신문 / 경향신문 외 3종",
        orderDate: "2022-01-01 12:00",
        paymentDate: "2022-10-31 12:00",
        paymentMethod: "무통장입금",
        amount: "55,000원",
        status: "취소요청",
        orderBy: "현대중공업(주)"
    },
    {
        id: "0000009",
        productNm: "EyeSurfer / 조간신문 / 중앙신문 / 경향신문 외 3종",
        orderDate: "2022-01-01 12:00",
        paymentDate: "2022-10-31 12:00",
        paymentMethod: "무통장입금",
        amount: "440,000원",
        status: "취소완료",
        orderBy: "현대중공업(주)"
    },
];
const TabContent2 = () => {
  return (
    <>
      {/* Filter Section */}
      <Card
        className="sub_card_common sub_card_filter"
        sx={{ width: "100%", height: "112px", mt:"20px" }}
      >
        <Box className="sub_listpage_filter_topsection">
          
        </Box>
        <Box className="sub_listpage_filter_btmsection">
          <Button
            variant="outlined"
            className="sub_btn_primary_outline_common sub_btn_filter1"
          >
            초기화
          </Button>
          <Button
            variant="contained"
            className="sub_btn_primary_fill_common sub_btn_filter2"
          >
            검색하기
          </Button>
        </Box>
      </Card>

      <Card
        className="sub_card_common sub_card_form"
        sx={{ width: "100%", height: "168px", marginTop: "20px" }}
      >
        <CardHeader
          className="sub_tbl_header_outer_common sub_card_form_header"
          component="div"
          title={
            <Typography className="sub_tbl_header_text_common">
              주문 현황 리스트 (300)
            </Typography>
          }
        ></CardHeader>
        <CardContent>
            <DatatableOrders rows={rows} total={rows.length} />
        </CardContent>
      </Card>
    </>
  );
};
export default TabContent2;
