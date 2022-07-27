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
  item: { title: string; items: Array<any> };
}) => {
  const { item } = props;
  const [open, setOpen] = React.useState(true);
  const [opensub, setOpensub] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const numbers = 1;

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickSub = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const onChange = (e: any) => {
    e.target.defaultValue === 1 ? setOpensub(false) : setOpensub(true);
  };

  return (
    <Box>
      <ListItemButton sx={{ pl: 0, height: '44px' }} onClick={handleClick}>
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
        <Box sx={{ zIndex: 1, alignContent: 'right' }}>
          <IconButton
            onChange={onChange}
            aria-label="more"
            id="long-button"
            aria-haspopup="true"
            onClick={handleClickSub}
            defaultValue={numbers}
          >
            <GridMoreVertIcon />
          </IconButton>
          <ListItems opensub={opensub} anchorEl={anchorEl} />
        </Box>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" sx={{ height: '44px' }} disablePadding>
          {item.items.map(
            subMenu => subMenu.items && <SidebarListItemSub item={subMenu} />,
          )}
        </List>
      </Collapse>
    </Box>
  );
};

export default SidebarListItem;
