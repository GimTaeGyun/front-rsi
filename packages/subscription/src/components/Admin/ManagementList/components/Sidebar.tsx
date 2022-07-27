import React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import SidebarListItem from "./SidebarListItem";

interface ISidebarMenuItem {
  title: string;
  items: Array<any>;
}
const items: ISidebarMenuItem[] = [
  {
    title: "전체 (4)",
    items: [
      {
        title: "연구소 (32)",
        items: [
          {
            title: "AI연구개발실 (30)"
          },
          {
            title: "기획팀 (2)"
          }
        ]
      },
      {
        title: "영업본부 (1)",
        items: [
          {
            title: "디지타이징 (0)"
          }
        ]
      }
    ]
  }
];

const Sidebar = () => {
  return (
    <Box sx={{ height: "100%", width: "350px" }}>
      <Card
        sx={{
          boxShadow: "0px 1px 5px #0000002E",
          borderRadius: "6px",
          color: "#000000DE"
        }}
      >
        <CardHeader>
          <Typography>그룹 (4)</Typography>
        </CardHeader>
        <CardContent>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {items.map((item) => item.items && <SidebarListItem item={item} />)}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Sidebar;
