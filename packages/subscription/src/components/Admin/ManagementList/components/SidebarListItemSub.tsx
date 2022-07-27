import React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { ArrowRight } from '@mui/icons-material';
import { Popper } from '@mui/material';
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
      <ListItemButton sx={{ pl: '30px' }} onClick={handleClick}>
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
          {item.items.map(subMenu => (
            <ListItemButton sx={{ pl: '50px' }} onClick={handleClickSub}>
              <ArrowRight />
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
