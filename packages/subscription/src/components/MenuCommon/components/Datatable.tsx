import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

import { columns } from './DatatableColumns';
import DatatableFooter from './DatatableFooter';
import { ITreeItem } from './Sidebar';

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

  React.useEffect(() => {
    if (treeItem) {
      /*const users: any = treeItem.data?.users ?? [];

      const tableRows = users.map((user: any) => ({
        id: user.usrId,
        name: user.usrNm,
        phone: user.phone,
        email: user.email,
        modifiedDate: user.mod_at,
        status: user.status,
        description: '',
      }));
      
      setRows(tableRows);*/
    }
  }, [treeItem]);

  return (
    <Box sx={{ width: '100%' }}>
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
                      sx={{ color: '#000000DE' }}
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
        <DataGrid
          rows={rowData}
          columns={columns}
          pageSize={rowData.length}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          checkboxSelection
          sx={{
            borderRadius: 0,
            fontSize: '14px',
            fontFamily: 'NotoSansKRRagular',

            '.MuiDataGrid-columnSeparator--sideRight': {},
          }}
          components={{
            Footer: DatatableFooter,
          }}
          componentsProps={{
            footer: { handleSecondBtn: footerSecondCallback, rowData: rowData },
          }}
          sortModel={[{ field: '__check__', sort: 'desc' }]}
          onCellClick={(params, event) => {
            cellClickEvent(params, event);
          }}
          selectionModel={checkboxSelectedIds}
          onSelectionModelChange={newSelectionModel => {
            setCheckboxSelectedIds(newSelectionModel);
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
    border: 'none',
    width: '194px',
    height: '37px',
    bgcolor: '#0000000A',
    borderRadius: '4px',
    pl: 0,
    '&.MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#0000000A',
        borderWidth: '1px',
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
