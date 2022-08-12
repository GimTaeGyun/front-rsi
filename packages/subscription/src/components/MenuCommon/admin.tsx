import { ItemTypes } from '@minoru/react-dnd-treeview';
import { Box } from '@mui/material';
import { atom, useAtom } from 'jotai';
import React from 'react';

import AppFrame from '../../container/AppFrame';
import { AlertPopupData, GetSidebarData } from '../../data/atoms';
import axios from '../../utils/axios';
import AddGroup from '../AddGroup';
import AlertPopup from '../Common/AlertPopup';
import AddOperatorPopup from './components/AddOperatorPopup'; // 운영자수정 팝업
import DataTable from './components/Datatable';
import ModifySettingsPopup from './components/ModifySettingsPopup';
import Sidebar, { ITreeItem } from './components/Sidebar';
import UpdateOperatorPopup from './components/UpdateOperatorPopup';
const defaultOperPopupData = {
  action: 'add',
  email: '',
  phone: '',
  status: 1,
  usrId: '',
  usrNm: '',
  usrPw: '',
  usrTp: 'DEFAULT',
  description: '',
};
const Admin = () => {
  const [addGroupTitle, setAddGroupTitle] = React.useState('');
  const [selectedTreeitem, setSelectedTreeitem] = React.useState<ITreeItem>();
  const [open, setOpen] = React.useState(false);
  const [updateOperOpen, setUpdateOperOpen] = React.useState(false);
  const [refreshSidbar] = useAtom(GetSidebarData);

  const [checkboxSelectedIds, setCheckboxSelectedIds] = React.useState([]);

  // alertPopup 메시지
  const [alertPopup, setAlertPopup] = useAtom(AlertPopupData);
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

  const [addGroupOpen, setAddGroupOpen] = React.useState(false);
  const [rows, setRows] = React.useState([]);

  /* 팝업 시작 */
  const [openAddOperPopup, setAddOpenOperPopup] = React.useState(false); // 운영자 추가 팝업 on/off
  // 운영자 추가 팝업 ID 중복확인
  const [isCheckedId, setIsCheckedId] = React.useState(false);
  // 운영자 추가/수정 API REQUESTBODY 및 form data
  const [operPopupData, setOperPopupData] =
    React.useState(defaultOperPopupData);

  // 운영자 추가 팝업 저장 버튼 클릭이벤트
  const operPopupSaveBtn = () => {
    if (!isCheckedId) {
      setAlertPopup({
        ...defaultAlertPopup,
        leftCallback: () => {
          setAlertPopup({ ...alertPopup, visible: false });
        },
        message: '사용할 수 없는 아이디입니다',
      });
    } else {
      axios
        .post('/management/subscription/admin/user/update', operPopupData)
        .then(res => {
          if (res.data.code == '0000') {
            //setRows());
            setAlertPopup({
              ...defaultAlertPopup,
              leftCallback: () => {
                setAlertPopup({ ...alertPopup, visible: false });
                setAddOpenOperPopup(false);
                setIsCheckedId(false);
                setOperPopupData(defaultOperPopupData);
              },
              message: '새로운 운영자 추가가 완료되었습니다',
            });
          }
        })
        .catch(() => {});
    }
  };

  // 운영자 추가 수정 form 값 변경이벤트
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    const { name, value } = e.target;
    setOperPopupData({ ...operPopupData, [name]: value, action: type });
    if (name == 'usrId') setIsCheckedId(false);
  };

  // 운영자 추가 ID 중복확인 버튼 클릭이벤트
  const handleExistBtn = () => {
    axios
      .post('/management/subscription/admin/userid/check', {
        usrId: operPopupData.usrId,
      })
      .then(res => {
        if (res.data.code == '0000') {
          setAlertPopup({
            ...defaultAlertPopup,
            leftCallback: () => {
              setAlertPopup({ ...alertPopup, visible: false });
            },
            message: '사용할 수 있는 아이디입니다',
          });
          setIsCheckedId(true);
        } else {
          setAlertPopup({
            ...defaultAlertPopup,
            leftCallback: () => {
              setAlertPopup({ ...alertPopup, visible: false });
            },
            message: '사용할 수 없는 아이디입니다',
          });
          setIsCheckedId(false);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  // 운영자 수정 비밀번호 변경 버튼 클릭이벤트
  const chnagePw = (pw: string) => {
    axios
      .post('/management/subscription/admin/userpw/update', {
        usrId: operPopupData.usrId,
        usrPw: pw,
      })
      .then(res => {
        if (res.data.code == '0000') {
          setAlertPopup({
            ...defaultAlertPopup,
            message: '비밀번호가 변경되었습니다',
          });
          return;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 운영자 수정 저장 버튼 클릭이벤트
  const operUpdateSaveBtn = (data: any) => {
    axios
      .post('/management/subscription/admin/user/update', {
        ...data,
        usrPw: '',
      })
      .then(res => {
        if (res.data.code == '0000') {
          let tmpRows: any = rows;
          tmpRows = tmpRows.map((item: any) => {
            if (item.usrId == data.usrId) {
              return {
                ...item,
                name: data.usrNm,
                phone: data.phone,
                email: data.email,
                status: data.status,
                usrTp: data.usrTp,
                description: data.description,
              };
            } else return item;
          });
          setRows(tmpRows);
          setAlertPopup({
            ...defaultAlertPopup,
            message: '모든 변동사항이 저장되었습니다',
          });
          setUpdateOperOpen(false);
        }
      })
      .catch(() => {});
  };
  /* 팝업 끝 */

  const treeItemClickEvent = (params: any) => {
    if (typeof params.id == 'undefined' || typeof params.id == null) {
      return false;
    }
    axios
      .post('/management/subscription/admin/usergroup/userlist/inquiry', {
        usr_grp_id: params.id,
      })
      .then(res => {
        if (res.data.code === '0000') {
          if (res.data.result.length == 0) {
            setCheckboxSelectedIds([]);
          } else {
            setCheckboxSelectedIds(
              res.data.result.map((item: any) => {
                return item.usrId;
              }),
            );
          }
        } else {
          setCheckboxSelectedIds([]);
        }
      })
      .catch(() => {});
    return;
  };

  // 테이블 클릭이벤트
  const cellClickEvent = (params: any) => {
    if (params.field === 'management') {
      axios
        .post('/management/subscription/admin/userinfo/inquiry', {
          usrId: params.id,
        })
        .then(res => {
          setOperPopupData({
            ...res.data.result,
            description: params.row.description,
          });
          setUpdateOperOpen(true);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (params.field === '__check__') {
      // 여기에 리스트 체크박스 API 구현
      console.log(selectedTreeitem?.id);
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
                  message: '운영자 그룹 삭제가 완료되었습니다',
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
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <AppFrame
        title="운영자 관리"
        breadcrumbs={[
          { name: '공통관리', link: '/admin/common/admin' },
          { name: '운영자 관리', link: '/admin/common/admin' },
        ]}
      >
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
          <Box
            display="flex"
            sx={{
              fontFamily: 'NotoSansKRMedium',
            }}
          >
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
                footerSecondCallback={() => {
                  setAddOpenOperPopup(true);
                }}
                setCheckboxSelectedIds={setCheckboxSelectedIds}
              />
            </Box>
          </Box>
          <ModifySettingsPopup open={open} handleClose={() => setOpen(false)} />
          {/* 운영자 수정 팝업 */}
          <UpdateOperatorPopup
            open={updateOperOpen}
            handleClose={() => setUpdateOperOpen(false)}
            handleMiddle={chnagePw}
            handleOk={operUpdateSaveBtn}
            value={operPopupData}
          />
          {/* 운영자 추가 팝업 */}
          <AddOperatorPopup
            open={openAddOperPopup}
            handleMiddle={handleExistBtn}
            handleClose={() => {
              setAddOpenOperPopup(false);
              setIsCheckedId(false);
              setOperPopupData(defaultOperPopupData);
            }}
            handleOk={operPopupSaveBtn}
            handleChange={(e: any) => {
              handleChange(e, 'add');
            }}
          />
          {/* 그룹 추가 팝업 */}
          <AddGroup
            title={addGroupTitle}
            open={addGroupOpen}
            treeItem={selectedTreeitem}
            handleClose={() => setAddGroupOpen(false)}
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
    </>
  );
};

export default Admin;
