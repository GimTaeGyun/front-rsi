import {
  getBackendOptions,
  MultiBackend,
  Tree,
} from '@minoru/react-dnd-treeview';
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
  uppUsrGrpId?: number;
  users?: Array<any>;
  subGrp?: Array<IUsrGrp>;
}

export interface ITreeItem {
  id: number;
  text: string;
  parent: number;
  data?: any;
}

const realItem: IUsrGrp = {
  usrGrpId: 1,
  description: '최상위 ROOT 그룹',
  sort: 1,
  usrGrpNm: 'ROOT',
  subGrp: [
    {
      usrGrpId: 2,
      usrGrpNm: '시스템그룹',
      uppUsrGrpId: 1,
      sort: 1,
      description: '시스템관리용 그룹',
      status: 1,
      users: [
        {
          usrId: 'sysadm',
          usrNm: '시스템어드민',
          phone: '070-4463-7542',
          email: 'daekoon.kong@bflysoft.com',
          mod_at: '2022-07-11T14:01:55.29749',
          status: 1,
        },
        {
          usrId: 'sysadm90',
          usrNm: '시스템어드민',
          phone: '010-0000-0000',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-25T01:39:33.989117',
          status: 1,
        },
        {
          usrId: 'gtgyun',
          usrNm: '김태군',
          phone: '010-0000-0000',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-19T17:05:40.732381',
          status: 1,
        },
        {
          usrId: 'test111',
          usrNm: '비플맨',
          phone: '010-4578-5647',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-26T11:09:01.644389',
          status: 1,
        },
        {
          usrId: 'g6soft',
          usrNm: '지구소프트',
          phone: '010-0000-0000',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-20T10:28:54.871324',
          status: 1,
        },
        {
          usrId: 'g5soft',
          usrNm: '지구소프트',
          phone: '010-0000-0000',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-20T10:30:11.807044',
          status: 1,
        },
        {
          usrId: 'cflysoft',
          usrNm: '씨플라이',
          phone: '010-0000-0000',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-20T14:19:34.759278',
          status: 1,
        },
        {
          usrId: 'aflysoft',
          usrNm: '씨플라이',
          phone: '010-0000-0000',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-20T14:19:52.931692',
          status: 1,
        },
        {
          usrId: 'dflysoft2',
          usrNm: '디플라이',
          phone: '010-0000-0000',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-20T14:20:26.810646',
          status: 1,
        },
        {
          usrId: 'hflysoft3',
          usrNm: '에이치플라이',
          phone: '010-0000-0000',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-20T15:04:56.527067',
          status: 1,
        },
      ],
    },
    {
      usrGrpId: 3,
      usrGrpNm: '연구소',
      uppUsrGrpId: 1,
      sort: 2,
      description: '연구소용 그룹',
      status: 1,
      users: [
        {
          usrId: 'sysadm90',
          usrNm: '시스템어드민',
          phone: '010-0000-0000',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-25T01:39:33.989117',
          status: 1,
        },
        {
          usrId: 'test111',
          usrNm: '비플맨',
          phone: '010-4578-5647',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-26T11:09:01.644389',
          status: 1,
        },
        {
          usrId: 'sysadm',
          usrNm: '시스템어드민',
          phone: '070-4463-7542',
          email: 'daekoon.kong@bflysoft.com',
          mod_at: '2022-07-11T14:01:55.29749',
          status: 1,
        },
        {
          usrId: 'dflysoft',
          usrNm: '디플라이',
          phone: '010-0000-0000',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-20T14:20:26.810646',
          status: 1,
        },
      ],
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
        },
        {
          usrGrpId: 7,
          usrGrpNm: '영업사원그룹',
          uppUsrGrpId: 4,
          sort: 2,
          description: '영업본부 내 영업사원 그룹',
          status: 1,
        },
      ],
    },
    {
      usrGrpId: 6,
      usrGrpNm: '경영전략본부',
      uppUsrGrpId: 1,
      sort: 5,
      description: '경영전략본부 그룹',
      status: 1,
      subGrp: [
        {
          usrGrpId: 15,
          usrGrpNm: '회계팀',
          uppUsrGrpId: 6,
          sort: 1,
          description: '회계팀 입니다.',
          status: 1,
        },
      ],
    },
  ],
  users: [
    {
      usrId: 'sysadm90',
      usrNm: '시스템어드민',
      phone: '010-0000-0000',
      email: 'bfly@bflysoft.com',
      mod_at: '2022-07-25T01:39:33.989117',
      status: 1,
    },
    {
      usrId: 'test111',
      usrNm: '비플맨',
      phone: '010-4578-5647',
      email: 'bfly@bflysoft.com',
      mod_at: '2022-07-26T11:09:01.644389',
      status: 1,
    },
    {
      usrId: 'aflysoft1',
      usrNm: '씨플라이',
      phone: '010-0000-0000',
      email: 'bfly@bflysoft.com',
      mod_at: '2022-07-20T14:19:52.931692',
      status: 1,
    },
    {
      usrId: 'dflysoft2',
      usrNm: '디플라이',
      phone: '010-0000-0000',
      email: 'bfly@bflysoft.com',
      mod_at: '2022-07-20T14:20:26.810646',
      status: 1,
    },
    {
      usrId: 'hflysoft3',
      usrNm: '에이치플라이',
      phone: '010-0000-0000',
      email: 'bfly@bflysoft.com',
      mod_at: '2022-07-20T15:04:56.527067',
      status: 1,
    },
  ],
  status: 1,
};

const Sidebar = (props: {
  onSelect: (treeItem: ITreeItem) => void;
  treeMoreIconCallback?: Function[];
}) => {
  const { onSelect, treeMoreIconCallback } = props;
  const [realNum, setRealNum] = React.useState(0);
  const [data, setData] = React.useState<IUsrGrp>(realItem);

  const [treedata, setTreedata] = React.useState<ITreeItem[]>([]);
  const [selectedTreeitem, setSelectedTreeitem] = React.useState<ITreeItem>();

  const getData = async () =>
    await Axios.post('/management/subscription/admin/usergroup/inquiry', {
      usr_grp_id: 1,
    })
      .then(res => {
        console.log(res);
        setData(res.data.result);
      })
      .catch(err => {
        console.log(err);
        // setData([]);
      });

  React.useEffect(() => {
    getData();
  }, []);

  const formatTreedataItems = (subGrp: IUsrGrp): ITreeItem[] => {
    let treeItems: Array<ITreeItem> = [];

    if (subGrp?.subGrp !== undefined) {
      subGrp.subGrp.forEach(subGrp => {
        treeItems = [...treeItems, ...formatTreedataItems(subGrp)];
      });
    }

    return [
      ...treeItems,
      {
        id: subGrp.usrGrpId,
        text: subGrp.usrGrpNm,
        parent: subGrp?.uppUsrGrpId ?? 0,
        data: {
          description: subGrp.description,
          users: subGrp.users ?? [],
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
      let treeItems: Array<ITreeItem> = [];

      // Format tree data
      if (data) {
        treeItems = formatTreedataItems(data);
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

  const onClick = (
    treeItem: any,
    isOpen: boolean,
    hasChild: boolean,
    onToggle: () => void,
  ) => {
    onToggle();
    console.log({ isOpen, hasChild });
    handleSelectedTreeitem(treeItem);
  };

  return (
    <Box sx={{ width: '350px', height: '682px' }}>
      <Card sx={styles.box_card}>
        <CardHeader
          component="div"
          title={`${data.usrGrpNm} (${data.users?.length})`}
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
                      <Box
                        onClick={() =>
                          onClick(node, isOpen, hasChild, onToggle)
                        }
                      >
                        {isOpen && hasChild ? (
                          <ExpandMore />
                        ) : (
                          <ArrowForwardIos sx={{ fontSize: '14px' }} />
                        )}
                        <Typography component="span">{`${node.text} (${node?.data.users.length})`}</Typography>
                      </Box>
                      <Box>
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
                  </Tooltip>
                  <ListItems
                    anchorEl={anchorEl}
                    id={+node.id}
                    realNum={realNum}
                    treeItem={selectedTreeitem}
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

export default Sidebar;
