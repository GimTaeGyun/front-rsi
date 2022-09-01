import { Box, Divider } from '@mui/material';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
const Info = (props: { title: string; children: any }) => {
  return (
    <>
      <Card className="sub_card_common sub_card_form"
      sx={{ width: '1470px', marginTop: '20px' }}>
        <CardHeader className="sub_tbl_header_outer_common sub_card_form_header"
          component="div" title={
            <Typography className="sub_tbl_header_text_common">
              {props.title}
            </Typography>
          } />
        <Divider sx={{width:"100%"}}/>
        <CardContent sx={{"&.MuiCardContent-root":{paddingBottom:"0px"}}}>
          {props.children}
        </CardContent>
      </Card>
    </>
  );
};

export default Info;
