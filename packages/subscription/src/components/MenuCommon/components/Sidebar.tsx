import {
  getBackendOptions,
  MultiBackend,
  Tree,
} from '@minoru/react-dnd-treeview';
import { ArrowForwardIos } from '@mui/icons-material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import { ClickAwayListener } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useAtom } from 'jotai';
import React from 'react';
import { DndProvider } from 'react-dnd';

import { GetSidebarData } from '../../../data/atoms';
import { axios } from '../../../utils/axios';
import ListItems from './ListItems';

interface IUsrGrp {
  usrGrpId: number;
  description: string;
  sort: number;
  usrGrpNm: string;
  status: number;
  uppUsrGrpId: number;
  cnt: number;
  subGrp?: Array<IUsrGrp>;
}

export interface ITreeItem {
  id: number;
  text: string;
  parent: number;
  data?: any;
}

const Sidebar = (props: {
  onSelect: (treeItem: ITreeItem) => void;
  treeMoreIconCallback?: Function[];
  treeItemClickEvent: Function;
}) => {
  const { onSelect, treeMoreIconCallback, treeItemClickEvent } = props;

  const [realNum, setRealNum] = React.useState(0);
  const [data, setData] = React.useState<IUsrGrp[]>();
  const [, setRefreshSidbar] = useAtom(GetSidebarData);
  const [treedata, setTreedata] = React.useState<ITreeItem[]>([]);
  const [selectedTreeitem, setSelectedTreeitem] = React.useState<ITreeItem>();
  const [clickedTreeItem, setClickedTreeItem] = React.useState<any>();

  const getData = async () => {
    await axios
      .post('/management/subscription/admin/usergroup/inquiry', {
        usr_grp_id: 1,
      })
      .then(res => {
        setData(res.data.result);
      })
      .catch(err => {
        console.log(err);
        // setData([]);
      });
  };

  const scrollDown = () => {
    const down = document.getElementById('scroll') as HTMLElement;
    down.scrollBy(0, -350);
  };

  const scrollUp = () => {
    const up = document.getElementById('scroll') as HTMLElement;
    up.scrollBy(0, 350);
  };

  React.useEffect(() => {
    getData();
    setRefreshSidbar({ refresh: getData });
  }, []);

  const formatTreedataItems = (subGrp: IUsrGrp): ITreeItem[] => {
    let treeItems: Array<ITreeItem> = [];

    if (subGrp?.subGrp !== undefined) {
      subGrp?.subGrp.forEach(subGrp => {
        treeItems = [...treeItems, ...formatTreedataItems(subGrp)];
      });
    }

    return [
      ...treeItems,
      {
        id: subGrp.usrGrpId,
        text: subGrp.usrGrpNm,
        parent: subGrp?.uppUsrGrpId == 1 ? 0 : subGrp?.uppUsrGrpId,
        data: {
          description: subGrp.description,
          //users: subGrp.users ?? [],
          uppUsrGrpId: subGrp.uppUsrGrpId ?? null,
          cnt: subGrp.cnt,
        },
      },
    ];
  };

  const handleSelectedTreeitem = (treeItem: ITreeItem) => {
    setSelectedTreeitem(treeItem);
    onSelect(treeItem);
    treeItemClickEvent(treeItem);
  };

  React.useEffect(() => {
    if (data) {
      // Format tree data
      let treeItems: Array<ITreeItem> = [];
      if (data !== undefined) {
        data.forEach(subGrp => {
          treeItems = [...treeItems, ...formatTreedataItems(subGrp)];
        });
      }

      if (selectedTreeitem == null) {
        const cnt = getCnt();
        handleSelectedTreeitem({
          id: 0,
          text: '전체',
          parent: 0,
          data: { cnt: cnt },
        });
      }
      setTreedata(treeItems);
    }
  }, [data]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClickSub = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onDrop = () => {
    console.log('onDrop');
  };

  const onClick = (treeItem: any, onToggle: () => void) => {
    onToggle();
    handleSelectedTreeitem(treeItem);
  };

  const getCnt = () => {
    let sum = 0;
    data?.forEach(item => (sum += item.cnt));
    return sum;
  };

  const closeListItem = (data: any) => {
    setAnchorEl(data);
  };

  return (
    <Box
      sx={{
        width: '350px',
        maxHeight: '682px',
      }}
    >
      <Card className="sub_sidebar_box_card">
        <CardHeader
          className="box_cardHeader"
          component="div"
          title={'전체 (' + getCnt() + ')'}
          sx={styles.box_cardHeader}
        />
        <Divider />
        <CardContent
          id="scroll"
          className="sub_sidebar_cardContent_list"
          sx={{
            zIndex: 'auto',
            overflow: 'scroll',
            borderTop: '12px solid #fff',
            borderBottom: '12px solid #fff',
            borderLeft: '16px solid #fff',
            borderRight: '16px solid #fff',
            padding: '0 !important',
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <DndProvider backend={MultiBackend} options={getBackendOptions()}>
            <Tree
              tree={treedata}
              rootId={0}
              canDrag={() => false}
              canDrop={() => false}
              onDrop={onDrop}
              render={(node, { depth, isOpen, hasChild, onToggle }) => (
                <>
                  <Tooltip title={node.data.description} sx={{ p: 0 }} arrow>
                    <Box
                      sx={{
                        ...styles.treeview_item,
                        paddingLeft: `${depth * 20 + 10}px`,
                        fontSize: '15px',
                        fontFamily: 'NotoSansKRRegular',
                        zIndex: 'auto',
                      }}
                      className={
                        selectedTreeitem && selectedTreeitem.id == node.id
                          ? 'sub_tree_hover'
                          : ''
                      }
                    >
                      <Box
                        onClick={() => onClick(node, onToggle)}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        {isOpen && hasChild ? (
                          <ExpandMore
                            sx={{ color: isOpen ? '#000000DE' : '#c7c7c7' }}
                          />
                        ) : hasChild ? (
                          <ArrowForwardIos
                            sx={{
                              color: '#000000DE',
                              fontSize: '14px',
                            }}
                          />
                        ) : (
                          <ArrowForwardIos
                            className={
                              selectedTreeitem && selectedTreeitem.id == node.id
                                ? 'sub_arrow'
                                : ''
                            }
                            sx={{
                              fontSize: '14px',
                              color: '#c7c7c7',
                            }}
                          />
                        )}
                        <Typography
                          component="span"
                          className={
                            selectedTreeitem && selectedTreeitem.id == node.id
                              ? 'active_tree'
                              : ''
                          }
                          sx={{
                            fontSize: '15px',
                            fontFamily: 'NotoSansKRRegular',
                            ':focus': {
                              color: '#c7c7c7 !important',
                            },
                          }}
                        >{`${node.text}`}</Typography>
                        <Typography
                          className={
                            selectedTreeitem && selectedTreeitem.id == node.id
                              ? 'active_count'
                              : ''
                          }
                          component="span"
                          sx={{
                            fontSize: '15px',
                            fontFamily: 'NotoSansKRRegular',
                            color: '#000000DE',
                            paddingLeft: '3px',
                          }}
                        >
                          {`(${node?.data.cnt})`}
                        </Typography>
                      </Box>
                      <Box>
                        <IconButton
                          aria-label="more"
                          id="long-button"
                          onClick={e => {
                            handleClickSub(e);
                            setClickedTreeItem(node);
                          }}
                          sx={{
                            overflow: 'hidden',

                            fontSize: '15px',
                            fontFamily: 'NotoSansKRRegular',
                            '&:hover': { bgcolor: 'transparent' },
                          }}
                        >
                          <MoreVertOutlined />
                        </IconButton>
                      </Box>
                    </Box>
                  </Tooltip>

                  <ListItems
                    anchorEl={anchorEl}
                    id={+node.id}
                    realNum={realNum}
                    treeItem={clickedTreeItem}
                    clickCallback={treeMoreIconCallback}
                    close={closeListItem}
                  />
                </>
              )}
              initialOpen={true}
            />
          </DndProvider>
        </CardContent>
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
    fontSize: '15px',
    fontFamily: 'NotoSansKRRegular',

    '&:hover': {
      backgroundColor: '#F4F5F7',
      borderRadius: '4px',
    },
    '&:focus': {
      backgroundColor: '#F4F5F7',
      borderRadius: '4px',
    },
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

export default React.memo(Sidebar);
