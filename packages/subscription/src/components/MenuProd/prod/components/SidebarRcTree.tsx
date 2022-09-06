import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { OpenWith, ZoomInMap } from '@mui/icons-material';
import Tree, { TreeNode } from 'rc-tree';
import React, { useEffect, useState, useMemo } from 'react';
import { useAtom } from 'jotai';
import { AlertPopupData, PrdMng, DefaultGrpInfo } from '../../../../data/atoms';
import { axios } from '../../../../utils/axios';

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

interface TreeItem {
  childrens: Array<TreeItem>;
  description: string;
  isUsable: number;
  key: number;
  status: number;
  title: string;
}
const DefaultAdding = 999999999999;

const SidebarRcTree = () => {
  const [selNode, setSelNode] = React.useState<TreeItem | null>(null); // 선택된 트리
  const [adding, setAdding] = useState(DefaultAdding); // 그룹 추가 시 빈 트리노드 유무
  const [treeItem, setTreeITem] = React.useState<TreeItem | null>(null); // 트리노드
  const [expandKey, setExpendKey] = React.useState(['0']); // 열린 트리 키 배열로 저장
  const [showAll, setShowAll] = React.useState(false); // 전체열기/닫기
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [sharingData, setSharingData] = useAtom(PrdMng);

  useEffect(() => {
    refreshTree();
  }, []);

  const refreshTree = () => {
    axios
      .post('/management/manager/product/group/inquiry', {
        p_prd_grp_id: 0,
      })
      .then(res => {
        if (res.data.code === '0000') {
          setTreeITem(res.data.result);
        }
      })
      .catch();
  };

  // 트리 아이템 펼치기 이벤트
  const onExpand = (expandedKeys: any) => {
    // 그룹을 등록중일 때는 이벤트 무시
    if (adding !== DefaultAdding) return;
    setExpendKey(expandedKeys);
  };

  // 트리 아이템 클릭 이벤트
  const onSelect = (selectedKeys: any, info: any) => {
    // 그룹을 등록중일 때는 이벤트 무시
    if (adding !== DefaultAdding) return;
    console.log('selectedKeys', selectedKeys);
    console.log('info', info);
    setSelNode(info.node);
    setSharingData({
      ...sharingData,
      mngInput: {
        description: info.node.data.description
          ? info.node.data.description
          : '',
        prdGrpId: Number(info.node.key),
        prdGrpNm: info.node.title,
        uppPrdGrpId: 0,
        introduction: '',
        status: Number(info.node.data.status),
      },
    });
  };

  // 그룹등록 버튼 이벤트
  const onEdit = () => {
    // 그룹을 등록중일 때는 이벤트 무시
    if (adding !== DefaultAdding) return;
    if (selNode) {
      expandKey.push(selNode.key.toString());
      setExpendKey(expandKey);
      setAdding(Number(selNode.key));
      setSharingData({ ...sharingData, mngInput: DefaultGrpInfo });
    }
  };

  useEffect(() => {
    console.log(adding);
  }, [adding]);

  // 그룹삭제 버튼이벤트
  const onDel = () => {
    if (!selNode || selNode.key === 0) return;
    const delParam = {
      actor: localStorage.getItem('usrId'),
      dataset: [
        {
          description: '',
          prdGrpId: selNode?.key,
          prdGrpNm: selNode?.title,
          sort: 1,
          uppPrdItemGrpId: '',
        },
      ],
      paramType: 'del',
    };

    setAlertPopup({
      ...alertPopup,
      visible: true,
      message: '선택한 상품 그룹을 삭제하시겠습니까?',
      leftText: '확인',
      rightText: '취소',
      rightCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
      },
      leftCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
        axios
          .post('/management/manager/product/group/update', delParam)
          .then(res => {
            if (res.data.code === '0000') {
              refreshTree();
              setAlertPopup({
                ...alertPopup,
                visible: true,
                message: '상품 그룹 삭제가 완료되었습니다.',
                rightText: '',
                leftCallback: () => {
                  setAlertPopup({ ...alertPopup, visible: false });
                },
              });
            }
          })
          .catch();
      },
    });
  };

  // 트리 자식노드 루프생성
  const arrayloop = (data: any, pos: any) => {
    if (data.childrens) {
      return data.childrens.map((item: any) => {
        const postPos = pos + '-' + item.key;
        return (
          <TreeNode title={item.title} key={item.key} pos={postPos} data={item}>
            {item.key === adding ? (
              <TreeNode
                selectable={false}
                title={
                  <TextField
                    disabled
                    className="sub_sideBarInput"
                    placeholder="그룹명을 입력해 주세요."
                  />
                }
                key={item.key + '-' + '0'}
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

  // 전체열기/닫기 버튼 이벤트
  useEffect(() => {
    if (showAll && treeItem) {
      let arr = [treeItem.key.toString()];
      const arrayloop = (data: TreeItem) => {
        let tmp: Array<string> = [];
        if (data.childrens) {
          for (let child of data.childrens) {
            tmp = [...tmp, ...arrayloop(child)];
            tmp.push(child.key.toString());
          }
        }
        return tmp;
      };
      arr = [...arr, ...arrayloop(treeItem)];
      setExpendKey(arr);
    } else {
      setExpendKey(['']);
    }
  }, [showAll]);

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
              title="상품 그룹"
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
                checkable={false}
                defaultExpandAll={showAll}
                onSelect={onSelect}
                onExpand={onExpand}
                expandedKeys={expandKey}
              >
                {treeItem ? (
                  <TreeNode
                    className="sub_rc_parentNode"
                    title={treeItem.title}
                    key={treeItem.key}
                    data={treeItem}
                    pos="0"
                  >
                    {treeItem.key === adding ? (
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
                        key={treeItem.key + '-0'}
                      ></TreeNode>
                    ) : (
                      ''
                    )}

                    {treeItem ? arrayloop(treeItem, treeItem.key) : ''}
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
              onClick={() => setShowAll(!showAll)}
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
            <Button
              variant="outlined"
              className="sub_btn_primary_outline_common sub_btn_footer_save"
              onClick={onDel}
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
        </Card>
      </Box>
    </>
  );
};

export default SidebarRcTree;
