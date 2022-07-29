import React from 'react';
import {
  Tree,
  getBackendOptions,
  MultiBackend,
} from '@minoru/react-dnd-treeview';
import { DndProvider } from 'react-dnd';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';

import ListItems from './ListItems';

const items = [
  {
    id: 1,
    text: '전체 (4)',
    parent: 0,
  },
  {
    text: '연구소 (32)',
    id: 2,
    parent: 1,
  },
  {
    text: 'AI연구개발실 (30)',
    id: 3,
    parent: 2,
  },
  {
    text: '기획팀 (2)',
    id: 4,
    parent: 2,
  },
  {
    text: '영업본부 (1)',
    id: 5,
    parent: 1,
  },
  {
    text: '디지타이징 (0)',
    id: 6,
    parent: 5,
  },
];

const TreeView = () => {
  const [realNum, setRealNum] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickSub = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <Box sx={{ width: '350px', height: '682px' }}>
      <Card sx={styles.box_card}>
        <CardHeader
          component="div"
          title="그룹 (4)"
          sx={styles.box_cardHeader}
        />
        <Divider />
        <CardContent sx={styles.cardContent_list}>
          <DndProvider backend={MultiBackend} options={getBackendOptions()}>
            <Tree
              tree={items}
              rootId={0}
              canDrag={() => false}
              canDrop={() => false}
              onDrop={() => {}}
              render={(node, { depth, isOpen, hasChild, onToggle }) => (
                <>
                  <Box
                    sx={{
                      ...styles.treeview_item,
                      paddingLeft: `${depth * 20 + 10}px`,
                    }}
                  >
                    <Box>
                      {isOpen && hasChild ? (
                        <ExpandMore />
                      ) : (
                        <ArrowForwardIos
                          sx={{ fontSize: '14px' }}
                          onClick={onToggle}
                        />
                      )}

                      <Typography component="span">{node.text}</Typography>
                    </Box>
                    <Box component="div" onMouseLeave={() => setAnchorEl(null)}>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        onClick={handleClickSub}
                        sx={{
                          overflow: 'hidden',
                          '&:hover': { bgcolor: 'transparent' },
                        }}
                      >
                        <MoreVertOutlined />
                      </IconButton>
                    </Box>
                  </Box>
                  <ListItems
                    anchorEl={anchorEl}
                    id={+node.id}
                    realNum={realNum}
                  />
                </>
              )}
              initialOpen={[1, 2, 5]}
            />
          </DndProvider>
        </CardContent>
        <Box sx={styles.realBox}>
          <Divider />
          <Box sx={{ py: '8px', width: '100%', textAlign: 'center' }}>
            <Button variant="outlined" sx={styles.box2_button}>
              <ExpandLess />
            </Button>
            <Button variant="outlined" sx={styles.box2_button2}>
              <ExpandMore />
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

const styles = {
  box_card: {
    boxShadow: '0px 1px 5px #0000002E',
    borderRadius: '6px',
    color: '#000000DE',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  box_cardHeader: {
    '& .MuiTypography-root': {
      fontSize: '16px',
      fontFamily: 'NotoSansKRMedium',
    },
  },
  cardContent_list: {
    '& ul': {
      padding: 0,
      listStyleType: 'none',
    },
  },
  treeview_item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '44px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F4F5F7',
      borderRadius: '4px',
    },
    '&:focus': {
      backgroundColor: '#F4F5F7',
      borderRadius: '4px',
    },
  },
  realBox: {
    marginTop: 'auto',
    height: '49px',
  },
  box2_button: {
    minWidth: '32px',
    height: '32px',
    p: '4px',
    mr: '8px',
    color: '#000000DE',
    borderColor: '#0000002E',
  },
  box2_button2: {
    minWidth: '32px',
    height: '32px',
    p: '4px',
    color: '#000000DE',
    borderColor: '#0000002E',
  },
};

export default TreeView;
