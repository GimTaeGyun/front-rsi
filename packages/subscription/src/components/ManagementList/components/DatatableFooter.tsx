import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import AddOperatorPopup from './AddOperatorPopup';
import * as XLSX from 'xlsx';
import FileSaver from 'file-saver';
import { createInputFiles } from 'typescript';
import useFileDialog from 'use-file-dialog';

const buttonStyle = {
  p: '5px 10px',
  height: '30px',
  fontSize: '13px',
  lineHeight: 'normal',
};

const DatatableFooter = (props: { rowData: any }) => {
  const { rowData } = props;
  const [openOperatorPopup, setOpenOperatorPopup] = React.useState(false);
  const excelFileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const excelFileExtension = '.xlsx';
  const excelFileName = '작성자';
  const { files, openFileDialog } = useFileDialog();

  const excelDownload = () => {
    const ws = XLSX.utils.aoa_to_sheet([
      ['ID', '이름', '전화번호', '이메일', '상태', '추가 내용', '최종 수정일'],
    ]);
    rowData.map((data: any) => {
      XLSX.utils.sheet_add_aoa(
        ws,
        [
          [
            data.usrId,
            data.usrNm,
            data.phone,
            data.email,
            data.status,
            data.description,
            data.modifiedDate,
          ],
        ],
        { origin: -1 },
      );
      ws['!cols'] = [{ wpx: 200 }, { wpx: 200 }];
      return false;
    });
    const wb: any = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelButter = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const excelFile = new Blob([excelButter], { type: excelFileType });
    files(excelFile);
    FileSaver.saveAs(excelFile, excelFileName + excelFileExtension);
  };

  const onDownload = () => {
    const link = document.createElement('a');
    link.download = `download.txt`;
    link.href = './download.txt';
    link.click();
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="10px"
        borderTop="1px solid rgba(224, 224, 224, 1)"
      >
        <Box>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              mr: '8px',
            }}
          >
            리스트 저장
          </Button>
          <Button
            variant="outlined"
            sx={buttonStyle}
            onClick={() => setOpenOperatorPopup(true)}
          >
            운영자 추가
          </Button>
        </Box>
        <Button
          variant="outlined"
          onClick={openFileDialog}
          startIcon={
            <Box
              component="img"
              src={
                require('@administrator/subscription/public/assets/images/microsoftexcel.svg')
                  .default
              }
            />
          }
          sx={buttonStyle}
        >
          엑셀 다운로드
        </Button>
      </Box>
      <AddOperatorPopup
        open={openOperatorPopup}
        handleClose={() => setOpenOperatorPopup(false)}
      />
    </>
  );
};

export default DatatableFooter;
