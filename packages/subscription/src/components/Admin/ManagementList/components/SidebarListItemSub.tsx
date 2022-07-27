import { MoreVertOutlined } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Popper } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

import ListItems from './ListItems';

const SidebarListItemSub = (props: {
  item: { title: string; items: Array<any> };
}) => {
  const { item } = props;

  const [open, setOpen] = React.useState(true);
  const [opensub, setOpensub] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickSub = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <ListItemButton sx={{ pl: '30px', height: "44px" }} onClick={handleClick}>
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
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.items.map((subMenu, index) => (
            <ListItemButton key={`list-sub-menu-${index}`} sx={{ pl: '50px', pr: "10px", height: "44px" }} onClick={handleClickSub}>
              
              <ListItemText
                sx={{
                  '& .MuiListItemText-primary': {
                    fontSize: '15px',
                    color: '#000000DE',
                  },
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: "14px" }} />
                {subMenu.title}
              </ListItemText>
              <MoreVertOutlined sx={{ fontSize: "16px" }} />
            </ListItemButton>
          ))}
          <Popper open={opensub} anchorEl={anchorEl} placement="right">
            <ListItems />
          </Popper>
        </List>
      </Collapse>
    </Box>
  );
};

export default SidebarListItemSub;
