import { Alert } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  GridCsvExportOptions,
  GridCsvGetRowsToExportParams,
  GridToolbarContainer,
  useGridApiContext,
} from '@mui/x-data-grid';
import React from 'react';
import AlertPopup from '../../Common/AlertPopup';
import AddOperatorPopup from './AddOperatorPopup';
import { useDemoData } from '@mui/x-data-grid-generator';
import { text } from 'stream/consumers';
import { gridSortedRowIdsSelector } from '@mui/x-data-grid';
import { BADFAMILY } from 'dns';

const buttonStyle = {
  p: '5px 10px',
  height: '30px',
  fontSize: '13px',
  lineHeight: 'normal',
};

export const ExportCustomToolbar = () => {
  const { data, loading } = useDemoData({
    dataSet: 'Employee',
    rowLength: 100,
    maxColumns: 10,
  });
};

const getUnfilteredRows = ({ apiRef }: GridCsvGetRowsToExportParams) =>
  gridSortedRowIdsSelector(apiRef);

const DatatableFooter = (props: { handleSecondBtn?: Function }) => {
  const { handleSecondBtn = () => {} } = props;
  const apiRef = useGridApiContext();

  const handleExport = (options: GridCsvExportOptions) =>
    apiRef.current.exportDataAsCsv(options);

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
            onClick={e => handleSecondBtn(e)}
          >
            운영자 추가
          </Button>
        </Box>
        <GridToolbarContainer>
          <Button
            onClick={() =>
              handleExport({
                getRowsToExport: getUnfilteredRows,
                utf8WithBom: true,
              })
            }
            variant="outlined"
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
        </GridToolbarContainer>
      </Box>
    </>
  );
};

export default React.memo(DatatableFooter);
