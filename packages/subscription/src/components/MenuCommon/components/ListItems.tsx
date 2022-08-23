import { ClickAwayListener, Popper, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect } from 'react';
import { ITreeItem } from './Sidebar';

const ListItems = (props: {
  anchorEl: null | HTMLElement;
  realNum: number;
  id: number;
  clickCallback?: Function[];
  treeItem?: ITreeItem;
  close: Function;
}) => {
  const [open, setOpen] = React.useState(false);

  const { anchorEl, id, realNum } = props;

  useEffect(() => {
    id === realNum ? setOpen(false) : setOpen(true);
  }, [realNum]);

  const clickCallback = (index: any) => {
    props.clickCallback ? props.clickCallback[index](props) : '';
  };

  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          props.close(null);
        }}
      >
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement="left"
          sx={{
            overflow: 'hidden',
            display: 'inline',
            minWidth: '150px',
            boxShadow: '0px 1px 2px #0000000E',
            borderRadius: '6px',
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => clickCallback(0)}
                sx={{
                  border: '1px solid #0000001F',
                  borderBottom: '0.5px',
                  height: '40px',
                  borderTopRightRadius: '6px',
                  borderTopLeftRadius: '6px',
                  backgroundColor: 'white',
                  overflow: 'hidden',
                  boxShadow: 'rgb(149 157 165 / 20%) 0px 5px 5px',
                  '&:hover': { bgcolor: '#fff' },
                }}
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      sx={{
                        fontSize: '13px',
                        fontFamily: 'NotoSansKRRegular',
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
                onClick={() => clickCallback(1)}
                component="a"
                href="#simple-list"
                sx={{
                  border: '1px solid #0000001F',
                  height: '40px',
                  borderTop: '0.5px solid #0000001F',
                  borderBottom: 'none',
                  backgroundColor: 'white',
                  boxShadow: 'rgb(149 157 165 / 20%) 0px 5px 5px',
                  overflow: 'hidden',
                  '&:hover': { bgcolor: '#fff' },
                }}
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      sx={{
                        fontSize: '13px',
                        fontFamily: 'NotoSansKRRegular',
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
                onClick={() => clickCallback(2)}
                component="a"
                href="#simple-list"
                sx={{
                  border: '1px solid #0000001F',
                  height: '40px',
                  borderTop: '0.5px solid #0000001F',
                  borderBottomRightRadius: '6px',
                  borderBottomLeftRadius: '6px',
                  boxShadow: 'rgb(149 157 165 / 20%) 2px 2px 2px',
                  backgroundColor: 'white',
                  overflow: 'hidden',
                  '&:hover': { bgcolor: '#fff' },
                }}
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      sx={{
                        fontSize: '13px',
                        fontFamily: 'NotoSansKRRegular',
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
      </ClickAwayListener>
    </>
  );
};

export default ListItems;
