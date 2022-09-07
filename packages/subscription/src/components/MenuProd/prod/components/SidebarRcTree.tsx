import { OpenWith, ZoomInMap } from '@mui/icons-material';
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
import { useAtom } from 'jotai';
import Tree, { TreeNode } from 'rc-tree';
import React, { useEffect, useMemo, useState } from 'react';

import { AlertPopupData, DefaultGrpInfo, PrdMng } from '../../../../data/atoms';
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
const DefaultAdding = -1;

const SidebarRcTree = () => {
  const [treeItem, setTreeITem] = React.useState<TreeItem | null>(null); // 트리노드
  const [expandKey, setExpendKey] = React.useState(['0']); // 열린 트리 키 배열로 저장
  const [showAll, setShowAll] = React.useState(false); // 전체열기/닫기
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
  const [sharingData, setSharingData] = useAtom(PrdMng);

  useEffect(() => {
    if (sharingData.adding === -1) refreshTree();
  }, [sharingData.adding]);

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
    if (sharingData.adding !== DefaultAdding) return;
    setExpendKey(expandedKeys);
  };

  // 트리 아이템 클릭 이벤트
  const onSelect = (selectedKeys: any, info: any) => {
    // 그룹을 등록중일 때는 이벤트 무시
    if (sharingData.adding !== DefaultAdding) return;
    console.log('selectedKeys', selectedKeys);
    console.log('info', info);
    setSharingData({
      ...sharingData,
      selNode: info.node,
    });
  };

  // 그룹등록 버튼 이벤트
  const onEdit = () => {
    // 그룹을 등록중일 때는 이벤트 무시
    if (sharingData.adding !== DefaultAdding) return;
    if (JSON.stringify(sharingData.selNode) != '{}') {
      expandKey.push((sharingData.selNode as any).key.toString());
      setExpendKey(expandKey);
      setSharingData({
        ...sharingData,
        adding: Number((sharingData.selNode as any).key),
      }); // 공유데이터를 통해 클릭이벤트 트리거
    }
  };

  // 그룹삭제 버튼이벤트
  const onDel = () => {
    // selNode가 비어있는 경우 무시
    if (JSON.stringify(sharingData.selNode as any) === '{}') return;
    // 루트일 경우
    // 하위 그룹이 있는 경우
    if (
      (sharingData.selNode as any).key === '0' ||
      (sharingData.selNode as any).children.length > 0 ||
      sharingData.row.length > 0
    ) {
      setAlertPopup({
        ...alertPopup,
        visible: true,
        message:
          (sharingData.selNode as any).key === '0'
            ? '최상위 그룹은 삭제할 수 없습니다.'
            : `하위 그룹 및 등록된 아이템이 존재하여 삭제할 수 없습니다.\n다른 그룹으로 이동 후 삭제가 가능합니다.`,
        leftText: '확인',
        rightText: '',
        leftCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
        },
      });
      return;
    }
    const delParam = {
      actor: localStorage.getItem('usrId'),
      dataset: [
        {
          description: '',
          prdGrpId: (sharingData.selNode as any).key,
          prdGrpNm: (sharingData.selNode as any).title,
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
  const arrayloop = (data: any) => {
    if (data.childrens) {
      return data.childrens.map((item: any) => {
        return (
          <TreeNode
            className={
              item.isUsable === 1 && item.status === 1 ? '' : ' unactive'
            }
            title={item.title}
            key={item.key}
            data={{ ...item, parent: data.key }}
          >
            {/*item.key === adding ? (
              <TreeNode
                selectable={false}
                title={
                  <TextField
                    disabled
                    className="sub_sideBarInput"
                    placeholder="그룹명을 입력해 주세요."
                  />
                }
                key={'-1'}
              ></TreeNode>
            ) : (
              ''
            )*/}
            {arrayloop(item)}
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
          for (const child of data.childrens) {
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

  const onTreeDrop = (event: any) => {
    console.log(event);
    setAlertPopup({
      ...alertPopup,
      visible: true,
      leftText: '확인',
      rightText: '취소',
      message: `"${event.node.title}"그룹으로 이동 하시겠습니까?`,
      rightCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
      },
      leftCallback: () => {
        setAlertPopup({ ...alertPopup, visible: false });
        let param = {
          fieldNm: 'product',
          grpId: event.dragNode.data.key,
          sort: 1,
          uppGrpId: Number(event.node.key),
        };
        axios
          .post('/management/manager/group/dragdrop/update', param)
          .then(res => {
            if (res.data.code === '0000') {
              // 옮겨준 트리 부모노드가 만약 선택된 상태라면 부모노드 수정
              if (event.dragNode.key === (sharingData.selNode as any).key) {
                let tmp: any = sharingData;
                tmp.selNode.data.parent = event.node.key;
                setSharingData({ ...tmp });
              }
              refreshTree();
            } else {
              setAlertPopup({
                ...alertPopup,
                visible: true,
                message: res.data.msg,
                leftText: '확인',
                leftCallback: () => {
                  setAlertPopup({ ...alertPopup, visible: false });
                },
              });
            }
          }).catch;
      },
    });
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
                draggable={true}
                onDrop={onTreeDrop}
              >
                {treeItem ? (
                  <TreeNode
                    className={
                      'sub_rc_parentNode' +
                      (treeItem.isUsable === 1 && treeItem.status === 1
                        ? ''
                        : ' unactive')
                    }
                    title={treeItem.title}
                    key={treeItem.key}
                    data={{ ...(treeItem as any), parent: -1 }}
                  >
                    {/*treeItem.key === adding ? (
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
                        key={'-1'}
                      ></TreeNode>
                    ) : (
                      ''
                    )*/}

                    {treeItem ? arrayloop(treeItem) : ''}
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
