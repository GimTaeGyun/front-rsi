import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

const LeftMenuItem = (props: {
  defaultOpen: boolean;
  menuItem: { icon: JSX.Element; title: string; items: Array<any> };
}) => {
  const { defaultOpen = false, menuItem } = props;
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <>
      <ListItem
        onClick={() => setOpen(!open)}
        sx={{
          ...(open && {
            bgcolor: '#3e5cd9',
          }),
          color: '#fff',
          fontFamily: 'NotoSansKRMedium',

          borderTop: '1px solid #ffffff1f',
          borderBottom: '1px solid #ffffff1f',
          pl: '8px',
          '&:hover': {
            bgcolor: '#3e5cd9',
          },
        }}
        button
      >
        <ListItemIcon
          sx={{
            color: '#FFFFFF99',
            fontSize: '16px',
            minWidth: '24px',
            mr: '8px',
          }}
        >
          {menuItem.icon}
        </ListItemIcon>
        <ListItemText primary={menuItem.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ marginTop: '10px', maginBottom: '30px' }}
        >
          {menuItem.items.map((child, key) => (
            <ListItem
              key={key}
              sx={{
                height: '30px',
                pl: '40px',
                '&:hover': {
                  bgcolor: 'transparent',
                },
                '&:click': {
                  bgcolor: 'transparent',
                },
              }}
              button
            >
              <ListItemText
                primary={child.title}
                sx={{
                  height: '23px',
                  lineHeight: 'normal',
                  '& .MuiListItemText-primary': {
                    color: '#FFFFFF99',
                    fontFamily: 'NotoSansKRMedium',
                    fontSize: '15px',
                    height: '15px',
                    '&:hover': {
                      color: '#fff',
                    },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default LeftMenuItem;
