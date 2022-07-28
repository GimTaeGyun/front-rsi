import React from 'react';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { ArrowForwardIos } from '@mui/icons-material';
import { IconButton, Popper } from '@mui/material';
import ListItems from './ListItems';
import { GridMoreVertIcon } from '@mui/x-data-grid';

const SidebarListItemSub = (props: {
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
    <Box>
      <ListItemButton
        sx={{ pl: '30px', float: 'left', width: '220px' }}
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
        <ListItems opensub={opensub} anchorEl={anchorEl} id={item.id} />
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.items.map((subMenu, index) => (
            <Box key={`list-sub-menu-${index}`}>
              <ListItemButton
                sx={{ pl: '50px', height: '44px', float: 'left' }}
              >
                <ArrowForwardIos sx={{ fontSize: "16px" }} />
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
                <ListItems opensub={opensub} anchorEl={anchorEl} id={index} />
              </Box>
            </Box>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

export default SidebarListItemSub;
