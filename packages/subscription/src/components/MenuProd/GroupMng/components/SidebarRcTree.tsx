import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  IconButton,
} from '@mui/material';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
import Tree, { TreeNode } from 'rc-tree';

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

const SidebarRcTree = (props: { treeItem?: any }) => {
  const { treeItem } = props;

  const defaultProps = {
    keys: ['0'],
  };
  const [selKey, setselKey] = React.useState('');
  const [defaultExpandedKeys, setdefaultExpandedKeys] = React.useState(
    defaultProps.keys,
  );
  const [defaultSelectedKeys, setdefaultSelectedKeys] = React.useState(
    defaultProps.keys,
  );
  const [defaultCheckedKeys, setdefaultCheckedKeys] = React.useState(
    defaultProps.keys,
  );

  const onExpand = (expandedKeys: any) => {
    console.log('onExpand', expandedKeys);
  };

  const onSelect = (selectedKeys: any, info: any) => {
    console.log('selected', selectedKeys, info);
    setselKey(info.node.props.eventKey);
  };

  const onCheck = (checkedKeys: any, info: any) => {
    console.log('onCheck', checkedKeys, info);
  };

  const onEdit = () => {
    setTimeout(() => {
      console.log('current key: ', selKey);
    }, 0);
  };

  const onDel = (e: any) => {
    if (!window.confirm('sure to delete?')) {
      return;
    }
    e.stopPropagation();
  };

  const arrayloop = (data: any) => {
    if (data.childrens) {
      return data.childrens.map((item: any) => (
        <TreeNode title={item.title} key={item.key}>
          {arrayloop(item)}
        </TreeNode>
      ));
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
                defaultExpandAll
                defaultExpandedKeys={defaultExpandedKeys}
                onExpand={onExpand}
                defaultSelectedKeys={defaultSelectedKeys}
                defaultCheckedKeys={defaultCheckedKeys}
                onActiveChange={key => console.log('Active:', key)}
              >
                {treeItem ? (
                  <TreeNode
                    className="sub_rc_parentNode"
                    title={treeItem.title}
                    key={treeItem.key}
                  >
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
            <Button
              variant="outlined"
              className="sub_btn_primary_outline_common sub_btn_footer_save"
            >
              그룹 삭제
            </Button>
            <Button
              variant="contained"
              className="sub_btn_primary_fill_common sub_btn_footer_save"
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
