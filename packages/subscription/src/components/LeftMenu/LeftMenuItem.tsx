import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { Link } from 'react-router-dom';

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

          borderTop: '1px solid #ffffff1f',
          borderBottom: '1px solid #ffffff1f',
          pl: '8px',
          height: '55px',
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
          sx={{
            bgcolor: '#2544C4',
          }}
        >
          {menuItem.items.map((child, key) => (
            <Link key={key} to={child.link ? child.link : '#'}>
              <ListItem
                sx={{
                  height: '30px',
                  pl: '40px',
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                  '&:click': {
                    bgcolor: 'white',
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
                      color: window.location.pathname.includes(child.link)
                        ? '#fff'
                        : '#FFFFFF99',
                      fontSize: '15px',
                      height: '15px',
                      '&:hover': {
                        color: '#fff',
                      },
                      ':click': {
                        bgcolor: 'transparent',
                      },
                    },
                  }}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default LeftMenuItem;
