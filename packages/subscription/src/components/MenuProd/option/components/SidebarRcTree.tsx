import { OpenWith, ZoomInMap } from '@mui/icons-material';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  TextField,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import Tree, { TreeNode } from 'rc-tree';
import React, { useEffect } from 'react';
import { AlertPopupData } from '../../../../data/atoms';

import { axios } from '../../../../utils/axios';

const SidebarRcTree = (props: { setuppGrp: Function; isPost: Boolean }) => {
  const [selKey, setSelKey] = React.useState('');
  const [treeItem, setTreeITem] = React.useState(Object);
  const [isClick, setIsCllick] = React.useState('1000000000');
  const [prdItemGrpId, setPrdItemGrpId] = React.useState('');
  const [prdItemGrpNm, setPrdItemGrpNm] = React.useState('');
  const [uppPrdItemGrpId, setUppPrdItemGrpId] = React.useState('');
  const [isDel, setIsDel] = React.useState(false);
  const [updateGrp, setUpdateGrp] = React.useState(Object);
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [expandKey, setExpendKey] = React.useState(['']);
  const [showAll, setShowAll] = React.useState(false);

  useEffect(() => {
    if (showAll) {
      const arrayloop = (data: any) => {
        let arr = [treeItem.optCatId.toString()];
        if (data.childrens) {
          data.childrens.map((item: any) => {
            arrayloop(item);
            arr.push(item.optCatId.toString());
          });
        } else {
          return '';
        }
        return setExpendKey(arr);
      };
      arrayloop(treeItem);
    } else {
      setExpendKey(['']);
    }
  }, [showAll]);

  useEffect(() => {
    const api = async () => {
      const res = await axios.post(
        '/management/manager/option/category/inquiry',
        {
          p_opt_cat_id: 0,
        },
      );
      setTreeITem(res.data.result);
    };
    api();
    setIsCllick('1000000000');
  }, [props.isPost, isDel]);

  const onExpand = (expandedKeys: any) => {
    setExpendKey(expandedKeys);
  };

  const defaultAlertPopup = {
    visible: true,
    leftText: '확인',
    leftCallback: () => {
      setAlertPopup({ ...alertPopup, visible: false });
    },
    rightCallback: () => {},
    rightText: '',
    message: '',
  };

  const onSelect = (selectedKeys: any, info: any) => {
    setSelKey(selectedKeys[0] ? selectedKeys[0] : '');
    setPrdItemGrpId(selectedKeys[0] ? selectedKeys[0] : '');
    props.setuppGrp(selectedKeys[0] ? selectedKeys[0] : '');
    setUppPrdItemGrpId(
      info.selectedNodes[0].pos.slice(-3, -2)
        ? info.selectedNodes[0].pos.slice(-3, -2)
        : '',
    );
    setPrdItemGrpNm(info.selectedNodes[0].title);
  };

  const onEdit = () => {
    setIsCllick(selKey);
    setExpendKey([...expandKey, selKey]);
  };

  const del = {
    actor: localStorage.getItem('usrId'),
    dataset: [
      {
        description: '',
        optCatId: Number(prdItemGrpId),
        optCatNm: prdItemGrpNm,
        sort: 1,
        uppOptCatId: Number(uppPrdItemGrpId),
      },
    ],
    paramType: 'del',
  };

  const deleteGrp = () => {
    setAlertPopup({
      ...defaultAlertPopup,
      leftCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
        setIsDel(true);
        axios
          .post('/management/manager/product/item/group/update', del)
          .then(res => {
            if (res.data.code === '0000')
              setAlertPopup({
                ...defaultAlertPopup,
                leftCallback: () => {
                  setAlertPopup({ ...alertPopup, visible: false });
                  setIsDel(false);
                },
                message: '삭제 하였습니다.',
                leftText: '확인',
              });
          });
      },
      rightCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
        setIsDel(false);
      },
      message: '지정된 그룹을 삭제 하시겠습니까?',
      leftText: '확인',
      rightText: '취소',
    });
  };

  const onDragEnd = (event: any) => {
    api(Number(event.dragNode.key));
    const upd = {
      actor: localStorage.getItem('usrId'),
      dataset: [
        {
          description: updateGrp.decription,
          optCatId: Number(event.dragNode.key),
          optCatNm: event.dragNode.title,
          sort: 1,
          uppOptCatId: Number(event.node.key),
        },
      ],
      paramType: 'mod',
    };
    setAlertPopup({
      ...defaultAlertPopup,
      leftCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
        setIsDel(true);
        axios
          .post('/management/manager/option/category/update', upd)
          .then(res => {
            if (res.data.code === '0000')
              setAlertPopup({
                ...defaultAlertPopup,
                leftCallback: () => {
                  setAlertPopup({ ...alertPopup, visible: false });
                  setIsDel(false);
                },
                message: '이동 하였습니다.',
                leftText: '확인',
              });
          });
      },
      rightCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
        setIsDel(false);
      },
      message: event.node.title + '그룹으로 이동 하시겠습니까?',
      leftText: '확인',
      rightText: '취소',
    });
  };

  const api = async (key: any) => {
    const res = await axios.post(
      '/management/manager/option/category/search/inquiry',
      {
        searchValue: 'string',
        status: 32767,
        grpId: key,
      },
    );
    setUpdateGrp(res.data.result);
  };

  const onClickShowAll = () => {
    setShowAll(!showAll);
  };

  const arrayloop = (data: any, pos: any) => {
    if (data.childrens) {
      return data.childrens.map((item: any) => {
        const postPos = pos + '-' + item.optCatId;
        return (
          <TreeNode title={item.optCatNm} key={item.optCatId} pos={postPos}>
            {item.optCatId === Number(isClick) ? (
              <TreeNode
                selectable={false}
                title={
                  <TextField
                    disabled
                    className="sub_sideBarInput"
                    placeholder="그룹명을 입력해 주세요."
                  />
                }
                key={item.optCatId + '-' + '0'}
              ></TreeNode>
            ) : (
              ''
            )}
            {arrayloop(item, postPos)}
          </TreeNode>
        );
      });
    } else {
      return '';
    }
  };

  return (
    <>
      <Box
        sx={{
          width: '350px',
          maxHeight: '803px',
        }}
      >
        <Card className="sub_sidebar_box_card">
          <Box>
            <CardHeader
              component="div"
              title="옵션 그룹 관리"
              sx={{
                ...styles.box_cardHeader,
                display: 'inline-block',
              }}
            />
          </Box>
          <Divider />
          <CardContent
            id="scroll"
            className="sub_sidebar_cardContent_list"
            sx={{
              height: '692px',
              overflow: 'scroll',
              borderTop: '16px solid #fff',
              borderBottom: '72px solid #fff',
              borderLeft: '16px solid #fff',
              borderRight: '16px solid #fff',
              padding: '0 !important',
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <div style={{ margin: '0 20px' }}>
              <Tree
                className="myCls"
                showLine
                draggable={true}
                checkable={false}
                onSelect={onSelect}
                onExpand={onExpand}
                expandedKeys={expandKey}
                defaultExpandAll={showAll}
                onDrop={onDragEnd}
                dropIndicatorRender={() => {
                  return <></>;
                }}
              >
                {treeItem ? (
                  <TreeNode
                    className="sub_rc_parentNode"
                    title={treeItem.optCatNm}
                    key={treeItem.optCatId}
                    pos="0"
                  >
                    {treeItem.optCatId === Number(isClick) ? (
                      <TreeNode
                        selectable={false}
                        selected={true}
                        title={
                          <TextField
                            disabled
                            className="sub_sideBarInput"
                            placeholder="그룹명을 입력해 주세요."
                          />
                        }
                        key={treeItem.optCatId + '-' + '0'}
                      ></TreeNode>
                    ) : (
                      ''
                    )}

                    {treeItem ? arrayloop(treeItem, treeItem.optCatId) : ''}
                  </TreeNode>
                ) : (
                  ''
                )}
              </Tree>
            </div>
          </CardContent>
          <Divider />
          <Box component="div" className="sub_sidebar_footer">
            <IconButton
              className="sub_button_white"
              sx={{
                width: '84px',
                height: '30px',
              }}
              onClick={onClickShowAll}
            >
              {showAll ? (
                <>
                  <ZoomInMap sx={{ width: '10px', height: '10px' }} />
                  <Typography
                    sx={{
                      fontSize: '13px ',
                    }}
                  >
                    전체닫기
                  </Typography>
                </>
              ) : (
                <>
                  <OpenWith sx={{ width: '10px', height: '10px' }} />
                  <Typography
                    sx={{
                      fontSize: '13px ',
                    }}
                  >
                    전체열기
                  </Typography>
                </>
              )}
            </IconButton>
            <Box>
              <Button
                variant="outlined"
                className="sub_btn_primary_outline_common sub_btn_footer_save"
                sx={{ marginLeft: '80px !important' }}
                onClick={deleteGrp}
              >
                그룹 삭제
              </Button>
              <Button
                variant="contained"
                className="sub_btn_primary_fill_common sub_btn_footer_save"
                onClick={onEdit}
              >
                그룹 등록
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
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
    width: '288px',
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

export default SidebarRcTree;
