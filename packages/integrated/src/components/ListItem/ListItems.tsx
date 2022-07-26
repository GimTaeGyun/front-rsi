import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

const ListItems = () => {
  return (
    <Box
      sx={{
        width: '150px',
        bgcolor: 'background.paper',
        marginLeft: 10,
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              border: 1,
              borderBottom: 0.5,
              height: '40px',
              borderColor: '#0000001F',
              borderTopRightRadius: 6,
              borderTopLeftRadius: 6,
            }}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{ fontSize: 12, fontFamily: 'NotoSansKRMedium' }}
                >
                  하위 그룹 추가
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="#simple-list"
            sx={{
              border: 1,
              height: '40px',
              borderTop: 0.5,
              borderBottom: 0.5,
              borderColor: '#0000001F',
            }}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{ fontSize: 12, fontFamily: 'NotoSansKRMedium' }}
                >
                  그룹 수정
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="#simple-list"
            sx={{
              border: 1,
              height: '40px',
              borderTop: 0.5,
              borderColor: '#0000001F',
              borderBottomRightRadius: 6,
              borderBottomLeftRadius: 6,
            }}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{ fontSize: 12, fontFamily: 'NotoSansKRMedium' }}
                >
                  그룹 삭제
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default ListItems;
