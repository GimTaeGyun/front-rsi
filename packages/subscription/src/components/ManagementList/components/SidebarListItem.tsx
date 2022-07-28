import React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import SidebarListItemSub from './SidebarListItemSub';
import ListItems from './ListItems';
import { IconButton } from '@mui/material';
import { GridMoreVertIcon } from '@mui/x-data-grid';

const SidebarListItem = (props: {
  item: { title: string; id: number; items: Array<any> };
}) => {
  const { item } = props;
  const [open, setOpen] = React.useState(true);
  const [opensub, setOpensub] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [realNum, setRealNum] = React.useState(0);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickSub = (event: React.MouseEvent<HTMLElement>) => {
    console.log(realNum);
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setRealNum(item.id);
    console.log(realNum);
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
          onClick={handleClickSub}
          sx={{ overflow: 'hidden' }}
        >
          <GridMoreVertIcon />
        </IconButton>
        <ListItems anchorEl={anchorEl} id={item.id} realNum={realNum} />
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
