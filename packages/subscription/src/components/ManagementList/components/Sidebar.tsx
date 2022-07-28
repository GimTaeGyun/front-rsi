import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Collapse,
  IconButton,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { GridMoreVertIcon } from '@mui/x-data-grid';
import { title } from 'process';
import React, { useState, Ref } from 'react';
import ListItems from './ListItems';
import { ArrowForwardIos } from '@mui/icons-material';

interface ISidebarMenuItem {
  title: string;
  id: number;
  items: Array<any>;
}
const items: ISidebarMenuItem[] = [
  {
    title: '전체 (4)',
    id: 1,
    items: [
      {
        title: '연구소 (32)',
        id: 2,
        items: [
          {
            title: 'AI연구개발실 (30)',
            id: 3,
          },
          {
            title: '기획팀 (2)',
            id: 4,
          },
        ],
      },
      {
        title: '영업본부 (1)',
        id: 5,
        items: [
          {
            title: '디지타이징 (0)',
            id: 6,
          },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  const [opensub, setOpensub] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [realNum, setRealNum] = React.useState(0);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickSub = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
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
          width: '300px',
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
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
              height: '44px',
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {items.map(item => {
              return (
                <Box sx={{ height: '41px' }}>
                  <ListItemButton
                    sx={{
                      pl: 0,
                      height: '40px',
                      float: 'left',
                      width: '220px',
                      display: 'outline',
                    }}
                    onClick={handleClick}
                  >
                    {open ? <ExpandLess /> : <ExpandMore />}
                    <ListItemText
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: '15px',
                          color: '#000000DE',
                        },
                      }}
                    >
                      {item.title}
                    </ListItemText>
                  </ListItemButton>
                  <Box sx={{ float: 'right' }}>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      onClick={handleClickSub}
                      sx={{ overflow: 'hidden' }}
                    >
                      <GridMoreVertIcon />
                    </IconButton>
                    <ListItems
                      anchorEl={anchorEl}
                      id={item.id}
                      realNum={realNum}
                    />
                  </Box>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List
                      component="div"
                      sx={{ height: '44px' }}
                      disablePadding
                    >
                      {item.items.map(
                        (subMenu, index) =>
                          subMenu.items && (
                            <Box>
                              <ListItemButton
                                sx={{
                                  pl: '30px',
                                  float: 'left',
                                  width: '220px',
                                }}
                                onClick={handleClick}
                              >
                                {open ? <ExpandLess /> : <ExpandMore />}
                                <ListItemText
                                  sx={{
                                    '& .MuiListItemText-primary': {
                                      fontSize: '15px',
                                      color: '#000000DE',
                                    },
                                  }}
                                >
                                  {item.title}
                                </ListItemText>
                              </ListItemButton>
                              <Box sx={{ zIndex: 1, float: 'right' }}>
                                <IconButton
                                  aria-label="more"
                                  id="long-button"
                                  aria-haspopup="true"
                                  onClick={handleClickSub}
                                >
                                  <GridMoreVertIcon />
                                </IconButton>
                                <ListItems
                                  realNum={realNum}
                                  anchorEl={anchorEl}
                                  id={item.id}
                                />
                              </Box>
                              <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                  {item.items.map((subMenu, index) => (
                                    <Box key={`list-sub-menu-${index}`}>
                                      <ListItemButton
                                        sx={{
                                          pl: '50px',
                                          height: '44px',
                                          float: 'left',
                                        }}
                                      >
                                        <ArrowForwardIos
                                          sx={{ fontSize: '16px' }}
                                        />
                                        <ListItemText
                                          sx={{
                                            '& .MuiListItemText-primary': {
                                              fontSize: '15px',
                                              color: '#000000DE',
                                            },
                                          }}
                                        >
                                          {subMenu.title}
                                        </ListItemText>
                                      </ListItemButton>
                                      <Box sx={{ float: 'right' }}>
                                        <IconButton
                                          aria-label="more"
                                          id="long-button"
                                          aria-haspopup="true"
                                          onClick={handleClickSub}
                                        >
                                          <GridMoreVertIcon />
                                        </IconButton>
                                        <ListItems
                                          realNum={realNum}
                                          anchorEl={anchorEl}
                                          id={index}
                                        />
                                      </Box>
                                    </Box>
                                  ))}
                                </List>
                              </Collapse>
                            </Box>
                          ),
                      )}
                    </List>
                  </Collapse>
                </Box>
              );
            })}
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
              sx={{
                minWidth: '32px',
                height: '32px',
                p: '4px',
                mr: '8px',
                color: '#000000DE',
                borderColor: '#0000002E',
              }}
            >
              <ExpandLess />
            </Button>
            <Button
              variant="outlined"
              sx={{
                minWidth: '32px',
                height: '32px',
                p: '4px',
                color: '#000000DE',
                borderColor: '#0000002E',
              }}
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
