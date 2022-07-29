import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';

const buttonStyle = {
  p: '5px 10px',
  height: '30px',
  fontSize: '13px',
  lineHeight: 'normal',
};

const DatatableFooter = () => {
  const [openOperatorPopup, setOpenOperatorPopup] = React.useState(false);

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

export default DatatableFooter;
