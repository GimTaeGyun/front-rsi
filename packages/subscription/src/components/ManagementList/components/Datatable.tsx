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

const rows = [
  {
    id: 'bflysoft1',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft2',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft3',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft4',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft5',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft6',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft7',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft8',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft9',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
  {
    id: 'bflysoft10',
    name: '김철수',
    phone: '010-0000-0000',
    email: 'bflysoft1@bflysoft.com',
    situation: '사용',
    additionalInfo: '',
    modifiedDate: '2022-10-31 12:00',
  },
];

const DataTable = () => {
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
              <Typography sx={styles.card_title}>AI연구개발실 (30)</Typography>
              <OutlinedInput
                sx={styles.search_input}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton sx={{ color: '#000000DE' }}>
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
              fontFamily: 'NotoSansKRMedium',
            },
          }}
        />
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{
            borderRadius: 0,
            fontSize: '14px',
          }}
          components={{
            Footer: DatatableFooter,
          }}
          initialState={{
            sorting: {
              sortModel: [
                { field: 'name', sort: 'asc' },
                // { field: 'phone', sort: 'desc' },
              ]
            }
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
      fontFamily: 'NotoSansKRMedium',
    },
  },
  search_input: {
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

export default DataTable;
