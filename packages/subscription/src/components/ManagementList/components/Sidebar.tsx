import { ArrowForwardIos } from '@mui/icons-material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
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
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';

import ListItems from './ListItems';
import Axios from '../../../utils/axios';

const realItem = {
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
          usrId: 'dflysoft',
          usrNm: '디플라이',
          phone: '010-0000-0000',
          email: 'bfly@bflysoft.com',
          mod_at: '2022-07-20T14:20:26.810646',
          status: 1,
        },
        {
          usrId: 'hflysoft',
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
      usrId: 'aflysoft',
      usrNm: '씨플라이',
      phone: '010-0000-0000',
      email: 'bfly@bflysoft.com',
      mod_at: '2022-07-20T14:19:52.931692',
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
    {
      usrId: 'hflysoft',
      usrNm: '에이치플라이',
      phone: '010-0000-0000',
      email: 'bfly@bflysoft.com',
      mod_at: '2022-07-20T15:04:56.527067',
      status: 1,
    },
  ],
  status: 1,
};

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

const Sidebar = () => {
  const [realNum, setRealNum] = React.useState(0);
  const [data, setData] = React.useState();

  const [treedata, setTreedata] = React.useState(items);

  const getData = async () =>
    await Axios.post('/management/subscription/admin/usergroup/inquiry', {
      usr_grp_id: 1,
    })
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
        // setData([]);
      });

  React.useEffect(() => {
    getData();
  }, []);
  React.useEffect(() => {
    if (data) {
      // Format tree data
      // setTreedata(items)
    }
  }, [data]);

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
              tree={treedata}
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

export default Sidebar;
