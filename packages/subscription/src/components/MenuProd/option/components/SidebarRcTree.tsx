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
} from '@mui/material';
import Tree, { TreeNode } from 'rc-tree';
import React, { useEffect } from 'react';

import { axios } from '../../../../utils/axios';

const SidebarRcTree = (props: {
  setuppGrp: Function;
  isPost: Boolean;
  realDel: Boolean;
  realRM: Function;
}) => {
  const [selKey, setselKey] = React.useState('');
  const [treeItem, setTreeITem] = React.useState(Object);
  const [isClick, setIsCllick] = React.useState('1000000000');
  const [prdItemGrpId, setPrdItemGrpId] = React.useState('');
  const [prdItemGrpNm, setPrdItemGrpNm] = React.useState('');
  const [uppPrdItemGrpId, setUppPrdItemGrpId] = React.useState('');
  const [isDel, setIsDel] = React.useState(false);
  const [expandKey, setExpendKey] = React.useState('1000000000');

  useEffect(() => {
    const api = async () => {
      const res = await axios.post(
        '/management/manager/product/group/inquiry',
        {
          p_prd_grp_id: 0,
        },
      );
      setTreeITem(res.data.result);
    };
    api();
    setIsCllick('1000000000');
    setExpendKey('1000000000');
  }, [props.isPost, isDel]);

  const onExpand = (expandedKeys: any) => {
    console.log('onExpand', expandedKeys);
  };

  const onSelect = (selectedKeys: any, info: any) => {
    setselKey(selectedKeys[0] ? selectedKeys[0] : '');
    setPrdItemGrpId(selectedKeys[0] ? selectedKeys[0] : '');
    setUppPrdItemGrpId(
      info.selectedNodes[0].pos.slice(-3, -2)
        ? info.selectedNodes[0].pos.slice(-3, -2)
        : '',
    );
    setPrdItemGrpNm(info.selectedNodes[0].title);
  };

  const onCheck = (checkedKeys: any, info: any) => {
    console.log('onCheck', checkedKeys, info);
  };

  const onEdit = () => {
    props.setuppGrp(selKey);
    setIsCllick(selKey);
  };

  const onDel = async () => {
    const del = {
      actor: localStorage.getItem('usrId'),
      dataset: [
        {
          description: '',
          itemTp: '',
          prdItemGrpId: Number(prdItemGrpId),
          prdItemGrpNm: prdItemGrpNm,
          sort: 1,
          status: 1,
          uppPrdItemGrpId: Number(uppPrdItemGrpId),
        },
      ],
      paramType: 'del',
    };
    if (del) {
      await props.realRM();
      if (props.realDel) {
        const res = await axios.post(
          '/management/manager/product/item/group/update',
          del,
        );
        setIsDel(!isDel);
        console.log('end');
      }
    }
  };

  const arrayloop = (data: any, pos: any) => {
    if (data.childrens) {
      return data.childrens.map((item: any) => {
        const postPos = pos + '-' + item.key;
        return (
          <TreeNode title={item.title} key={item.key} pos={postPos}>
            {item.key === Number(isClick) ? (
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
                checkable={false}
                onSelect={onSelect}
                onExpand={onExpand}
              >
                {treeItem ? (
                  <TreeNode
                    className="sub_rc_parentNode"
                    title={treeItem.title}
                    key={treeItem.key}
                    pos="0"
                  >
                    {treeItem.key === Number(isClick) ? (
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
                        key={treeItem.key + '-' + '0'}
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
