import { Menu, MenuList, Typography } from '@mui/material';
import React from 'react';

const ListMenuButton = (props: {
  opensub: boolean;
  anchorEl: null | HTMLElement;
  id: number;
}) => {
  const { opensub } = props;
  const { anchorEl } = props;
  const { id } = props;
  return (
    <Menu
      open={opensub}
      anchorEl={anchorEl}
      key={id}
      sx={{ overflow: 'hidden', ariaHidden: 'true' }}
    >
      <MenuList
        sx={{
          border: '1px solid #0000001F',
          borderBottom: '0.5px',
          height: '40px',
          borderTopRightRadius: '6px',
          borderTopLeftRadius: '6px',
          backgroundColor: 'white',
        }}
      >
        <Typography sx={{ fontSize: '10pt', fontFamily: 'NotoSansKRMedium' }}>
          그룹 삭제
        </Typography>
      </MenuList>
      <MenuList
        sx={{
          border: '1px solid #0000001F',
          height: '40px',
          borderTop: '0.5px solid #0000001F',
          borderBottom: '0.5px solid #0000001F',
          backgroundColor: 'white',
        }}
      >
        <Typography sx={{ fontSize: '10pt', fontFamily: 'NotoSansKRMedium' }}>
          그룹 삭제
        </Typography>
      </MenuList>
      <MenuList
        sx={{
          border: '1px solid #0000001F',
          height: '40px',
          borderTop: '0.5px solid #0000001F',
          borderBottomRightRadius: '6px',
          borderBottomLeftRadius: '6px',
          backgroundColor: 'white',
        }}
      >
        <Typography sx={{ fontSize: '10pt', fontFamily: 'NotoSansKRMedium' }}>
          그룹 삭제
        </Typography>
      </MenuList>
    </Menu>
  );
};

export default ListMenuButton;
