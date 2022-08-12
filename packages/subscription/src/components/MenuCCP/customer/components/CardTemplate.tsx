import { Box, Divider } from '@mui/material';
import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
const Info = (props: { title: String; children: any }) => {
  return (
    <>
      <Card className="sub_ccp_detail_parent">
        <CardHeader disableTypography title={props.title} className="header" />
        <Divider />
        <CardContent className="content" sx={{ padding: '0px' }}>
          {props.children}
        </CardContent>
      </Card>
    </>
  );
};

export default Info;
