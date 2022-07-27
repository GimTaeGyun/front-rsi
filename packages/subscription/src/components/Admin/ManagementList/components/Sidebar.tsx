import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import React from 'react';

import SidebarListItem from './SidebarListItem';

interface ISidebarMenuItem {
  title: string;
  items: Array<any>;
}
const items: ISidebarMenuItem[] = [
  {
    title: '전체 (4)',
    items: [
      {
        title: '연구소 (32)',
        items: [
          {
            title: 'AI연구개발실 (30)',
          },
          {
            title: '기획팀 (2)',
          },
        ],
      },
      {
        title: '영업본부 (1)',
        items: [
          {
            title: '디지타이징 (0)',
          },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <Box sx={{ width: '350px', height: '682px' }}>
      <Card
        sx={{
          boxShadow: '0px 1px 5px #0000002E',
          borderRadius: '6px',
          color: '#000000DE',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardHeader
          component="div"
          title="그룹 (4)"
          sx={{
            '& .MuiTypography-root': {
              fontSize: '16px',
              fontFamily: 'NotoSansKRMedium',
            },
          }}
        />
        <Divider />
        <CardContent>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {items.map(
              (item, index) =>
                item.items && (
                  <SidebarListItem
                    key={`sidebar-list-item-${index}`}
                    item={item}
                  />
                ),
            )}
          </List>
        </CardContent>
        <Box
          sx={{
            marginTop: 'auto',
            height: '49px',
          }}
        >
          <Divider />
          <Box sx={{ py: '8px', width: '100%', textAlign: 'center' }}>
            <Button
              variant="outlined"
              sx={{ minWidth: '32px', height: '32px', p: '4px', mr: '8px', color: "#000000DE", borderColor: "#0000002E" }}
            >
              <ExpandLess />
            </Button>
            <Button
              variant="outlined"
              sx={{ minWidth: '32px', height: '32px', p: '4px', color: "#000000DE", borderColor: "#0000002E" }}
            >
              <ExpandMore />
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Sidebar;
