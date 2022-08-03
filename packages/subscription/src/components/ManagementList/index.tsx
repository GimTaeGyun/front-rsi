import { Box } from '@mui/material';
import { atom, useAtom } from 'jotai';
import React from 'react';

import AppFrame from '../../container/AppFrame';
import DataTable from './components/Datatable';
import ModifySettingsPopup from './components/ModifySettingsPopup';
import Sidebar, { ITreeItem } from './components/Sidebar';
import UpdateOperatorPopup from './components/UpdateOperatorPopup';
import axios from '../../utils/axios';
import AlertPopup from '../../components/Common/AlertPopup';
import AddGroup from '../AddGroup';
import { GetSidebarData, AlertPopupData } from '../../data/atoms';
import { ItemTypes } from '@minoru/react-dnd-treeview';

const ManagementList = () => {
  const [addGroupTitle, setAddGroupTitle] = React.useState('');
  const [selectedTreeitem, setSelectedTreeitem] = React.useState<ITreeItem>();
  const [open, setOpen] = React.useState(false);
  const [updateOperOpen, setUpdateOperOpen] = React.useState(false);
  const [refreshSidbar] = useAtom(GetSidebarData);
  const [updateOperValue, setUpdateOperValue] = React.useState({
    action: 'mod',
    email: '',
    phone: '',
    status: 1,
    usrGrpId: ['1', '2', '3'],
    usrId: '',
    usrNm: '',
    usrPw: '',
    usrTp: 'DEFAULT',
    description: '',
  });
  const [checkboxSelectedIds, setCheckboxSelectedIds] = React.useState([]);

  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);

  const [addGroupOpen, setAddGroupOpen] = React.useState(false);
  const [rows, setRows] = React.useState([]);

  const treeItemClickEvent = (params: any) => {
    console.log(params);
    if(typeof(params.id)=="undefined" || typeof(params.id)==null){
      return false;
    }
    axios
    .post('/management/subscription/admin/usergroup/userlist/inquiry', {
      usr_grp_id: params.id,
    })
    .then(res => {
      if (res.data.code === '0000') {
        if(res.data.result.length==0){
          setCheckboxSelectedIds([]);
        }else{
          setCheckboxSelectedIds(
            res.data.result.map((item: any) => {
              return item.usrId;
            }),
          );
        }
      }else{
        setCheckboxSelectedIds([]);
      }
    })
    .catch(() => {});
    return;
  }

  // 테이블 클릭이벤트
  const cellClickEvent = (params: any) => {
    if (params.field === 'management') {
      axios
        .post('/management/subscription/admin/userinfo/inquiry', {
          usrId: 'sysadm', //params.id,
        })
        .then(res => {
          setUpdateOperValue({
            ...res.data.result,
            description: params.row.description,
          });
          setUpdateOperOpen(true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  // 테이블 데이터 가져오기
  React.useEffect(() => {
    axios
      .post('/management/subscription/admin/user/inquiry', {
        status: null,
        usrId: null,
        usrNm: null,
      })
      .then(res => {
        if (res.data.code === '0000') {
          setRows(
            res.data.result.map((item: any) => {
              return {
                ...item,
                id: item.usrId,
                name: item.usrNm,
                modifiedDate: item.modAt,
              };
            }),
          );
        }
      })
      .catch(() => {});
  }, []);

  // 사이드바 트리 아이콘의 ...icon 클릭 이벨트
  const treeMoreIconCallback = [
    () => {
      setAddGroupTitle('하위 그룹 추가');
      setAddGroupOpen(true);
    },
    () => {
      setAddGroupTitle('그룹 수정');
      setAddGroupOpen(true);
    },
    (selectedMoreIcon: any) => {
      console.log(selectedMoreIcon);
      selectedMoreIcon = selectedMoreIcon.treeItem;
      setAlertPopup({
        ...alertPopup,
        visible: true,
        message: '운영자그룹을 삭제하시겠습니까?',
        leftText: '취소',
        rightText: '삭제',
        leftCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
        },
        rightCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
          console.log(selectedMoreIcon);
          if (selectedMoreIcon) {
            axios
              .post('/management/subscription/admin/usergroup/update', {
                action: 'del',
                uppUsrGrpId:
                  selectedMoreIcon.parent == 1 ? null : selectedMoreIcon.parent,
                usrGrpId: selectedMoreIcon.id,
                usrGrpNm: selectedMoreIcon.text,
              })
              .then(() => {
                setAlertPopup({
                  ...alertPopup,
                  visible: true,
                  message: '운영자 그룹 삭제가 완료되었습니다',
                  rightText: '',
                  leftText: '확인',
                  leftCallback: refreshSidbar.refresh,
                });
              })
              .catch(() => {});
          }
        },
      });
    },
  ];

  // 검색 이벤트
  const search = (value: any) => {
    axios
      .post('/management/subscription/admin/user/inquiry', {
        status: null,
        usrId: value,
      })
      .then(res => {
        setRows(
          res.data.result.map((item: any) => {
            return {
              ...item,
              id: item.usrId,
              name: item.usrNm,
              modifiedDate: item.modAt,
            };
          }),
        );
        console.log(rows);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <AppFrame title="운영자 관리">
        <>
          {alertPopup.visible ? (
            <AlertPopup
              message={alertPopup.message}
              buttontext={alertPopup.leftText}
              rightButtonText={alertPopup.rightText}
              rightCallback={alertPopup.rightCallback}
              closeCallback={alertPopup.leftCallback}
            />
          ) : undefined}
          <Box display="flex">
            <Sidebar
              onSelect={item => setSelectedTreeitem(item)}
              treeMoreIconCallback={treeMoreIconCallback}
              treeItemClickEvent={treeItemClickEvent}
            />
            <Box sx={{ ml: '30px', width: '100%' }}>
              <DataTable
                rowData={rows}
                cellClickEvent={cellClickEvent}
                treeItem={selectedTreeitem}
                searchCallback={search}
                checkboxSelectedIds={checkboxSelectedIds}
                setCheckboxSelectedIds={setCheckboxSelectedIds}
              />
            </Box>
          </Box>
          <ModifySettingsPopup open={open} handleClose={() => setOpen(false)} />
          <UpdateOperatorPopup
            open={updateOperOpen}
            handleClose={() => setUpdateOperOpen(false)}
            value={updateOperValue}
          />
        </>
      </AppFrame>

      <Box
        sx={{
          width: '100%',
          height: '400px',
          zIndex: 300,
          backgroundColor: 'white',
          position: 'absolute',
        }}
      ></Box>
      <AddGroup
        title={addGroupTitle}
        open={addGroupOpen}
        treeItem={selectedTreeitem}
        handleClose={() => setAddGroupOpen(false)}
      />
    </>
  );
};

export default ManagementList;
