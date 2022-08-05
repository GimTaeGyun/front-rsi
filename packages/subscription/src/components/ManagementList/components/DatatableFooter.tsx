import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import * as XLSX from 'xlsx';
import FileSaver from 'file-saver';
import moment from 'moment';
import Axios from '../../../utils/axios';

const buttonStyle = {
  p: '5px 10px',
  height: '30px',
  fontSize: '13px',
  lineHeight: 'normal',
};

const DatatableFooter = (props: {
  rowDataId: any;
  handleSecondBtn?: Function;
}) => {
  const { rowDataId, handleSecondBtn = () => {} } = props;
  const dateNow = moment().format('YYYYMMDDkkmm');
  const [rowData, setRowData] = React.useState([]);
  const excelFileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const excelFileExtension = '.xlsx';
  const excelFileName = dateNow;
  React.useEffect(() => {
    const api = async () => {
      const param = {
        usr_grp_id: rowDataId.data.uppUsrGrpId,
      };
      try {
        const response = await Axios.post(
          '/management/subscription/admin/usergroup/userlist/inquiry',
          param,
        );
        setRowData(response.data.result);
        console.log(response);
      } catch (e) {
        console.log('errror');
      }
    };
    api();
  }, [rowDataId]);

  const excelDownload = () => {
    console.log(rowDataId.data.uppUsrGrpId);

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

    FileSaver.saveAs(excelFile, excelFileName + excelFileExtension);
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
            variant="outlined"
            sx={buttonStyle}
            onClick={e => handleSecondBtn(e)}
          >
            운영자 추가
          </Button>
        </Box>
        <Button
          variant="outlined"
          onClick={excelDownload}
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
    </>
  );
};

export default React.memo(DatatableFooter);
