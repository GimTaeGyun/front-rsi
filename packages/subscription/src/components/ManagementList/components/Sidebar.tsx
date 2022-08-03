import {
  getBackendOptions,
  MultiBackend,
  Tree,
} from '@minoru/react-dnd-treeview';
import { GetSidebarData } from '../../../data/atoms';
import { useAtom } from 'jotai';
import { ArrowForwardIos } from '@mui/icons-material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React from 'react';
import { DndProvider } from 'react-dnd';

import Axios from '../../../utils/axios';
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

const mockResult = {
  code: '0000',
  msg: '성공',
  result: [
    {
      usrGrpId: 2,
      usrGrpNm: '시스템그룹',
      uppUsrGrpId: 1,
      sort: 1,
      description: '시스템관리용 그룹',
      status: 1,
      cnt: 12,
    },
    {
      usrGrpId: 3,
      usrGrpNm: '연구소',
      uppUsrGrpId: 1,
      sort: 2,
      description: '연구소용 그룹',
      status: 1,
      cnt: 7,
    },
    {
      usrGrpId: 4,
      usrGrpNm: '영업본부',
      uppUsrGrpId: 1,
      sort: 3,
      description: '영업본부 그룹',
      status: 1,
      subGrp: [
        {
          usrGrpId: 5,
          usrGrpNm: '어드민그룹',
          uppUsrGrpId: 4,
          sort: 1,
          description: '영업본부 아이서퍼 운영어드민 그룹',
          status: 1,
          subGrp: [
            {
              usrGrpId: 33,
              usrGrpNm: '영업공통어드민그룹',
              uppUsrGrpId: 5,
              sort: 1,
              description: '어드민 그룹 공통 그룹',
              status: 1,
              cnt: 0,
            },
            ,
          ],
          cnt: 1,
        },
        ,
        {
          usrGrpId: 7,
          usrGrpNm: '영업사원그룹',
          uppUsrGrpId: 4,
          sort: 2,
          description: '영업본부 내 영업사원 그룹',
          status: 1,
          cnt: 0,
        },
        ,
      ],
      cnt: 0,
    },
    {
      usrGrpId: 6,
      usrGrpNm: 'test1',
      uppUsrGrpId: 1,
      sort: 5,
      description: 'test1',
      status: 1,
      subGrp: [
        {
          usrGrpId: 15,
          usrGrpNm: '회계팀',
          uppUsrGrpId: 6,
          sort: 1,
          description: '회계팀 입니다.',
          status: 1,
          cnt: 0,
        },
        ,
      ],
      cnt: 0,
    },
    {
      usrGrpId: 27,
      usrGrpNm: 'Test groupp',
      uppUsrGrpId: 1,
      sort: 1,
      description: 'Test',
      status: 1,
      cnt: 0,
    },
    {
      usrGrpId: 29,
      usrGrpNm: 'test2',
      uppUsrGrpId: 1,
      sort: 1,
      description: 'test2',
      status: 1,
      cnt: 0,
    },
    {
      usrGrpId: 31,
      usrGrpNm: 'test23',
      uppUsrGrpId: 1,
      sort: 1,
      description: 'test2',
      status: 1,
      cnt: 0,
    },
    {
      usrGrpId: 32,
      usrGrpNm: 'ROOT',
      uppUsrGrpId: 1,
      sort: 1,
      description: 'ROOT',
      status: 1,
      cnt: 0,
    },
  ] as IUsrGrp[],
};

const Sidebar = (props: {
  onSelect: (treeItem: ITreeItem) => void;
  treeMoreIconCallback?: Function[];
}) => {
  const { onSelect, treeMoreIconCallback } = props;

  const [realNum, setRealNum] = React.useState(0);
  const [data, setData] = React.useState<IUsrGrp[]>();
  const [, setRefreshSidbar] = useAtom(GetSidebarData);
  const [treedata, setTreedata] = React.useState<ITreeItem[]>([]);
  const [selectedTreeitem, setSelectedTreeitem] = React.useState<ITreeItem>();
  const [clickedTreeItem, setClickedTreeItem] = React.useState<any>();

  const getData = async () => {
    await Axios.post('/management/subscription/admin/usergroup/inquiry', {
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

      handleSelectedTreeitem(treeItems[0]);
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

  return (
    <Box sx={{ width: '350px', height: '682px' }}>
      <Card sx={styles.box_card}>
        <CardHeader
          component="div"
          title={'전체 (' + getCnt() + ')'}
          sx={styles.box_cardHeader}
        />
        <Divider />
        <CardContent sx={styles.cardContent_list}>
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
                      }}
                    >
                      <Box onClick={() => onClick(node, onToggle)}>
                        {isOpen && hasChild ? (
                          <ExpandMore />
                        ) : hasChild ? (
                          <ArrowForwardIos sx={{ fontSize: '14px' }} />
                        ) : (
                          <ArrowForwardIos
                            sx={{ fontSize: '14px', color: '#00000042' }}
                          />
                        )}
                        <Typography component="span">{`${node.text} (${node?.data.cnt})`}</Typography>
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
                  />
                </>
              )}
              initialOpen={true}
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

export default React.memo(Sidebar);
