import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Popper, Typography, Box, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { GridMoreVertIcon } from '@mui/x-data-grid';
import { isTemplateExpression } from 'typescript';
import { title } from 'process';

const ListItems = (props: {
  opensub: boolean;
  anchorEl: null | HTMLElement;
}) => {
  const { opensub } = props;
  const { anchorEl } = props;

  return (
    <Popper open={opensub} anchorEl={anchorEl} placement="right">
      <List sx={{ transform: 'translate(px, 0)' }}>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              border: '1px solid #0000001F',
              borderBottom: '0.5px',
              height: '40px',
              borderTopRightRadius: '6px',
              borderTopLeftRadius: '6px',
              backgroundColor: 'white',
            }}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{ fontSize: '10pt', fontFamily: 'NotoSansKRMedium' }}
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
              border: '1px solid #0000001F',
              height: '40px',
              borderTop: '0.5px solid #0000001F',
              borderBottom: '0.5px solid #0000001F',
              backgroundColor: 'white',
            }}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{ fontSize: '10pt', fontFamily: 'NotoSansKRMedium' }}
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
              border: '1px solid #0000001F',
              height: '40px',
              borderTop: '0.5px solid #0000001F',
              borderBottomRightRadius: '6px',
              borderBottomLeftRadius: '6px',
              backgroundColor: 'white',
            }}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{ fontSize: '10pt', fontFamily: 'NotoSansKRMedium' }}
                >
                  그룹 삭제
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Popper>
  );
};

export default ListItems;
