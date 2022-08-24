import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { GridMoreVertIcon } from '@mui/x-data-grid';
import React from 'react';

import ListItems from './ListItems';
import SidebarListItemSub from './SidebarListItemSub';

const SidebarListItem = (props: {
  item: { title: string; id: number; items: Array<any> };
}) => {
  const { item } = props;
  const [open, setOpen] = React.useState(true);
  const [opensub, setOpensub] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickSub = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

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
          sx={{ position: 'absolute' }}
          onClick={handleClickSub}
        >
          <GridMoreVertIcon />
        </IconButton>
        <ListItems opensub={opensub} anchorEl={anchorEl} id={item.id} />
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{ height: '44px' }} disablePadding>
          {item.items.map(
            (subMenu, index) =>
              subMenu.items && (
                <SidebarListItemSub
                  key={`parent-submenu-list-${index}`}
                  item={subMenu}
                />
              ),
          )}
        </List>
      </Collapse>
    </Box>
  );
};

export default SidebarListItem;
