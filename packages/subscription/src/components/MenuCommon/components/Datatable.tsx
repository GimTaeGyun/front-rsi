import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import { GridCellParams } from '@mui/x-data-grid';
import {
  DataGridPro,
  GridSortModel,
  useGridApiRef,
} from '@mui/x-data-grid-pro';
import React, { useEffect, useMemo } from 'react';
import { isConstructorDeclaration } from 'typescript';

import { columns } from './DatatableColumns';
import DatatableFooter from './DatatableFooter';

const DataTable = (props: any) => {
  const {
    treeItem,
    cellClickEvent,
    searchCallback,
    rowData,
    checkboxSelectedIds,
    footerSecondCallback,
    setCheckboxSelectedIds,
  } = props;
  //const [rows, setRows] = React.useState(rowData);
  const [searchTxt, setSearchTxt] = React.useState('');
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    { field: '__check__', sort: 'desc' },
  ]);
  const [after, setAfter] = React.useState(true);

  const rowNum = 8;
  const dataGridApiRef = useGridApiRef();
  const sortModelChanged = (e: any) => {
    if (sortModel.length > 1) sortModel.pop();
    if (e.length != 0) sortModel.push(e[0]);
    setSortModel([...sortModel]);
  };

  const isRow = (node: any) => {
    return node.row.status === 1 || node.row.status === '사용' ? true : false;
  };

  useEffect(() => {
    isRow;
  }, [rowData]);

  useEffect(() => {
    dataGridApiRef.current.applySorting();
  }, [after, checkboxSelectedIds]);

  return (
    <Box sx={{ width: '1090px' }}>
      <Card sx={styles.card}>
        <CardHeader
          component="div"
          title={
            <Box
              component="div"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography sx={styles.card_title}>
                {treeItem?.text === '전체'
                  ? '전체 (' + rowData.length + ')'
                  : `${treeItem?.text} (${treeItem?.data.cnt})`}
              </Typography>
              <OutlinedInput
                sx={styles.search_input}
                placeholder="Search"
                onChange={e => {
                  setSearchTxt(e.target.value);
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter') searchCallback(searchTxt);
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      sx={{ color: '#000000DE', paddingRight: '0px' }}
                      onClick={() => {
                        searchCallback(searchTxt);
                      }}
                    >
                      <SearchOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
          }
          sx={{
            height: '56px',
            '& .MuiTypography-root': {
              fontSize: '16px',
            },
          }}
        />
        <DataGridPro
          className="sub_tbl_outer_common"
          rows={rowData}
          columns={columns}
          pageSize={rowData.length}
          rowCount={rowNum}
          disableSelectionOnClick
          checkboxSelection
          isRowSelectable={isRow}
          onSortModelChange={sortModelChanged}
          apiRef={dataGridApiRef}
          sx={{
            borderRadius: 0,
            fontSize: '14px',
            fontFamily: 'NotoSansKRRagular',
          }}
          components={{
            Footer: DatatableFooter,
          }}
          componentsProps={{
            footer: { handleSecondBtn: footerSecondCallback, rowData: rowData },
          }}
          sortModel={sortModel}
          onCellClick={(params, event) => {
            cellClickEvent(params, event);
          }}
          selectionModel={checkboxSelectedIds}
          onSelectionModelChange={newSelectionModel => {
            setCheckboxSelectedIds(newSelectionModel);
            setAfter(!after);
          }}
        />
      </Card>
    </Box>
  );
};

const styles = {
  card: {
    boxShadow: '0px 1px 5px #0000002E',
    borderRadius: '6px',
    color: '#000000DE',
    height: 682,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  card_title: {
    '& .MuiTypography-root': {
      fontSize: '16px',
    },
  },
  search_input: {
    border: '0px important',
    width: '194px',
    height: '37px',
    bgcolor: '#0000000A',
    borderRadius: '4px',
    pl: 0,
    '& input::placeholder': {
      fontFamily: 'NotoSansKRRegular',
    },
    '&.MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#0000000A',
        borderWidth: '0px',
      },
      '&:hover fieldset': {
        borderColor: '#0000000A',
        borderWidth: '1px',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0000000A',
        borderWidth: '1px',
      },
    },
  },
};

export default React.memo(DataTable);
