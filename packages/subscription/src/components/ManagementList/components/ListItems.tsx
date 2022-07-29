import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Popper, Typography, Box, IconButton, Hidden } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { GridMoreVertIcon } from '@mui/x-data-grid';
import { isTemplateExpression } from 'typescript';
import { title } from 'process';

const ListItems = (props: {
  anchorEl: null | HTMLElement;
  realNum: number;
  id: number;
}) => {
  const [open, setOpen] = React.useState(false);
  const { anchorEl, id, realNum } = props;

  useEffect(() => {
    id === realNum ? setOpen(false) : setOpen(true);
  }, [realNum]);

  return (
    <Popper
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      placement="right"
      sx={{ overflow: 'hidden', display: 'inline' }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              border: '1px solid #0000001F',
              borderBottom: '0.5px',
              height: '40px',
              borderTopRightRadius: '6px',
              borderTopLeftRadius: '6px',
              backgroundColor: 'white',
              overflow: 'hidden',
            }}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{
                    fontSize: '10pt',
                    fontFamily: 'NotoSansKRMedium',
                    overflow: 'hidden',
                  }}
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
              overflow: 'hidden',
            }}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{
                    fontSize: '10pt',
                    fontFamily: 'NotoSansKRMedium',
                    overflow: 'hidden',
                  }}
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
              overflow: 'hidden',
            }}
          >
            <ListItemText
              disableTypography
              primary={
                <Typography
                  sx={{
                    fontSize: '10pt',
                    fontFamily: 'NotoSansKRMedium',
                    overflow: 'hidden',
                  }}
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
