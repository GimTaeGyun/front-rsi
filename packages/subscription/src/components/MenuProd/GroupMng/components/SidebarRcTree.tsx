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

const SidebarRcTree = (props: { setuppGrp: Function; isPost: Boolean }) => {
  const [selKey, setselKey] = React.useState('');
  const [treeItem, setTreeITem] = React.useState(Object);
  const [isClick, setIsCllick] = React.useState('1000000000');

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
  }, [props.isPost]);

  const onExpand = (expandedKeys: any) => {
    console.log('onExpand', expandedKeys);
  };

  const onSelect = (selectedKeys: any) => {
    setselKey(selectedKeys[0]);
  };

  const onCheck = (checkedKeys: any, info: any) => {
    console.log('onCheck', checkedKeys, info);
  };

  const onEdit = () => {
    props.setuppGrp(selKey);
    setIsCllick(selKey);
  };

  const onDel = (e: any) => {
    if (!window.confirm('sure to delete?')) {
      return;
    }
    e.stopPropagation();
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
              title="아이템 그룹 관리"
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
